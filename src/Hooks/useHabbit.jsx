import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, auth } from "../Firebase/firebase";
import { useState } from "react";

export default function useHabbit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [habbit, setHabbit] = useState([]);

  const addHabbit = async (name, goal, category, frequency, description) => {
    try {
      const user = auth.currentUser;

      setLoading(true);
      setError(null);

      await addDoc(collection(db, "habbits"), {
        userId: user.uid,
        name,
        goal,
        category,
        frequency,
        description,
        addedAt: serverTimestamp(),
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getHabbits = async () => {
    try {
      setLoading(true);
      setError(null);

      const user = auth.currentUser;

      const q = query(
        collection(db, "habbits"),
        where("userId", "==", user.uid),
      );

      return onSnapshot(q, (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHabbit(data);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteHabbit = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const res=await deleteDoc(doc(db, "habbits", id));
      return res;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const singleHabbit=async(id)=>{
    try{
        setLoading(true);
        setError(null);

        const snapShot=await getDoc(doc(db,"habbits",id));

        if(snapShot.exists()){
           return{
             id:snapShot.id,
            ...snapShot.data(),
           }
        }
        return null;

    }catch(error){
        setError(error.message);
        setLoading(false);
    }
  }

  const editHabbit=async(id,name,goal,category,frequency,description)=>{
    try{
        setLoading(true);
        setError(null);

        await updateDoc(doc(db,"habbits",id),{
            name,
            goal,
            category,
            frequency,
            description,
            updatedAt:serverTimestamp(),
        });

    }catch(error){
        setError(error.meessage);
        setLoading(false);
    }finally{
        setLoading(false);
    }
  }

  return { loading, error, addHabbit, getHabbits, habbit, deleteHabbit, editHabbit, singleHabbit };
}
