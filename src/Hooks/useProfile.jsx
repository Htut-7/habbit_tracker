import { useState } from "react"
import { EmailAuthProvider, updateProfile as updateAuthProfile, reauthenticateWithCredential, updatePassword, updateEmail } from "firebase/auth";
import { auth,db } from "../Firebase/firebase";
import { updateDoc, doc } from "firebase/firestore";


export default function useProfile() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const getProfile=()=>{
        const user=auth.currentUser;

        if(!user){
            return null
        };

        return {
            name: user.displayName || "",
            email: user.email || "",
        };
    };

    const updateProfile=async(name,email)=>{
        const user=auth.currentUser;
        
        if(!user){
            throw new Error('User must be Logged in');
        }

        try{
            setLoading(true);
            setError(null);

            if(name.trim()===""){
                setError('Name is required')
                return false;
            };

            if(email.trim()===""){
                setError('Email is required')
                return false;
            };

            if(user.name !== name){
                await updateAuthProfile(user,{
                    displayName: name
                })
            };

            if(user.email !== email){
                await updateEmail(user,email)
            };

            await updateDoc(doc(db,"users",user.uid),{
                name,
                email,
            });
            return true;

        }catch(error){
            setError(error.message);
            setLoading(false);
            return false;
        }finally{
            setLoading(false);
        }
    };

    const changePassword=async(curr,newPass)=>{
        const user=auth.currentUser;

        if(!user){
            throw new Error('User must be logged in')
        };

        try{
            setLoading(true);
            setError(null);

            if(curr.trim()===""){
                setError('Current Password is required');
                return false;
            }

            if(newPass.trim()===""){
                setError('New Password is required');
                return false;
            }

            const credential=EmailAuthProvider.credential(
                user.email,
                curr
            );

            await reauthenticateWithCredential(user,credential);

            await updatePassword(user,newPass);
            return true

        }catch(error){
            setError(error.message);
            setLoading(false);
            return false;
        }finally{
            setLoading(false);
        }
    }

  return {loading, error, getProfile, updateProfile, changePassword }
}
