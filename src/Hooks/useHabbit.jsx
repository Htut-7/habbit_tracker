import { db,auth } from "../Firebase/firebase";
import { useState } from "react";

export default function useHabbit() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const addHabbit=async()=>{
        try{
            setLoading(true);
            setError(null);
        }catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,addHabbit}
}
