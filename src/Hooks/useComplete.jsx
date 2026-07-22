import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../Firebase/firebase";

export default function useComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [completions, setCompletions] = useState([]);

  const addComplete = async (habbitId, name) => {
    const user = auth.currentUser;

    if (!user) {
      setError("User must be logged in");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const start = new Date();
      start.setHours(0, 0, 0, 0);

      const end = new Date();
      end.setHours(23, 59, 59, 999);

      const q = query(
        collection(db, "completion"),
        where("userId", "==", user.uid),
        where("habbitId", "==", habbitId),
        where("completedAt", ">=", Timestamp.fromDate(start)),
        where("completedAt", "<=", Timestamp.fromDate(end)),
      );

      const snapShot = await getDocs(q);

      if (!snapShot.empty) {
        alert("Habbit already completed Today");
        return;
      }

      await addDoc(collection(db, "completion"), {
        userId: user.uid,
        habbitId,
        name,
        completedAt: serverTimestamp(),
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getComplete = async () => {
    const user = auth.currentUser;

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, "completion"),
        where("userId", "==", user.uid),
      );

      return onSnapshot(q, (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompletions(data);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteComplete = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await deleteDoc(doc(db, "completion", id));
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentStreak = (habbitId) => {
    const habbitCompletion = completions
      .filter((c) => c.habbitId === habbitId)
      .sort((a, b) => b.completedAt.toDate() - a.completedAt.toDate());

    const dates = habbitCompletion
      .filter((c) => c.completedAt)
      .map((c) => {
        const date = c.completedAt.toDate();
        date.setHours(0, 0, 0, 0);
        return date;
      });

    if (dates.length === 0) {
      return 0;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dates[0].getTime() !== today.getTime()) {
      return 0;
    }

    let streak = 1;
    for (let i = 1; i < dates.length; i++) {
      const previousDate = new Date(dates[i - 1]);
      previousDate.setDate(previousDate.getDate() - 1);
      if (dates[i].getTime() === previousDate.getTime()) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const isCompletedToday = (habbitId) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return completions.some((c) => {
      if (!c.completedAt || c.habbitId !== habbitId) {
        return false;
      }
      const date = c.completedAt.toDate();
      date.setHours(0, 0, 0, 0);

      return date.getTime() === today.getTime;
    });
  };

  return {
    loading,
    error,
    addComplete,
    getComplete,
    completions,
    deleteComplete,
    getCurrentStreak,
    isCompletedToday,
  };
}
