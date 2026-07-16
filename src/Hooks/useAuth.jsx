import { useState } from "react";
import { db, auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function useAuth() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const signUp=async(name,email,password)=>{
        try{
            setLoading(true);
            setError(null);
            const res=await createUserWithEmailAndPassword(auth,email,password);

            await setDoc(doc(db,"users",res.user.uid),{
                uid:res.user.uid,
                name,
                email,
                createdAt: serverTimestamp(),
            });
            return res.user;
        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

  return {loading,error,signUp}
}
