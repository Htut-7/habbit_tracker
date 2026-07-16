import { useState } from "react";
import { db, auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

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
    };

    const signIn=async(email,password)=>{
        try{
            setLoading(true);
            setError(null);
            const res=await signInWithEmailAndPassword(auth,email,password);
            
            await updateDoc(doc(db,"users",res.user.uid),{
                lastLogin: serverTimestamp(),
            });
            return res.user
        }catch(error){
            setError(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    };

    const logOut=async()=>{
        try{
            setLoading(true);
            setError(null);

            await signOut(auth);
            setLoading(false);

        }catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,signUp,signIn,logOut}
}
