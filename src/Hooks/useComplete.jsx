import { addDoc, collection, deleteDoc, doc, onSnapshot, query, serverTimestamp, where } from "firebase/firestore";
import { useState } from "react"
import { db,auth } from "../Firebase/firebase";


export default function useComplete() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [completions,setCompletions]=useState([]);
    
    const addComplete=async(habbitId,name)=>{

        const user=auth.currentUser;

        try{
            setLoading(true);
            setError(null);

            await addDoc(collection(db,"completion"),{
                userId:user.uid,
                habbitId,
                name,
                completedAt: serverTimestamp(),
            });

        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    };

    const getComplete=async()=>{

        const user=auth.currentUser;

        try{
            setLoading(true);
            setError(null);

            const q=query(collection(db,"completion"),
            where("userId","==",user.uid)
        );

        return onSnapshot(q,((snapShot)=>{
            const data=snapShot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setCompletions(data);
        }))

        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    };

    const deleteComplete=async(id)=>{
        try{
            setLoading(true);
            setError(null);

            await deleteDoc(doc(db,"completion",id))

        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

  return {loading,error,addComplete, getComplete, completions, deleteComplete}
}
