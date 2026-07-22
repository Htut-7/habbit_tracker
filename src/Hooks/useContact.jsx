import { useState } from "react";
import { db } from "../Firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function useContact() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const addMessage=async(name,email,message)=>{
        try{
            setLoading(true);
            setError(null);

            await addDoc(collection(db,"message"),{
                name,
                email,
                message,
                sendAt: serverTimestamp(),
            });
            alert('Message send successfully');

        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

  return {loading, error, addMessage}
}
