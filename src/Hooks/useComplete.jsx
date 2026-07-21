import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, serverTimestamp, Timestamp, where } from "firebase/firestore";
import { useState } from "react"
import { db,auth } from "../Firebase/firebase";


export default function useComplete() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [completions,setCompletions]=useState([]);
    
    const addComplete=async(habbitId,name)=>{

        const user=auth.currentUser;

        if(!user){
            setError('User must be logged in');
            return;
        }

        try{
            setLoading(true);
            setError(null);

            const start= new Date();
            start.setHours(0,0,0,0);

            const end= new Date();
            end.setHours(23,59,59,999);

            const q=query(collection(db,"completion"),
            where("userId","==",user.uid),
            where("habbitId", "==",habbitId),
            where("completedAt",">=",Timestamp.fromDate(start)),
            where("completedAt","<=",Timestamp.fromDate(end)),
        );

        const snapShot=await getDocs(q);



        if(!snapShot.empty){
            alert('Habbit already completed Today');
            return;
        }

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
