import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db,auth } from "../Firebase/firebase";
import { useState } from "react";

export default function useHabbit() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const addHabbit=async(name,goal,category,frequency,description)=>{
        try{

            const user=auth.currentUser;

            setLoading(true);
            setError(null);

            await addDoc(collection(db,"habbits"),{
                userId:user.uid,
                name,
                goal,
                category,
                frequency,
                description,
                addedAt: serverTimestamp(),
            });

        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

  return {loading,error,addHabbit}
}
