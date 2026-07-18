import { useEffect, useState } from "react";
import "../Css/EditHabbit.css";
import { useNavigate, useParams } from "react-router-dom";
import useHabbit from "../Hooks/useHabbit";

export default function EditHabbit() {

    const [name,setName]=useState('');
    const [goal,setGoal]=useState('');
    const [category,setCategory]=useState('');
    const [frequency,setFrequency]=useState('');
    const [description,setDescription]=useState('');
    const { id }=useParams();
    const navigate=useNavigate();

    const {error,editHabbit,singleHabbit}=useHabbit();

    useEffect(()=>{
        const updateItem=async()=>{
            const habbit=await singleHabbit(id);

            if(habbit){
                setName(habbit.name);
                setGoal(habbit.goal);
                setCategory(habbit.category);
                setFrequency(habbit.frequency);
                setDescription(habbit.description);
            };
        };
        updateItem();
    },[id]);

    const editItem=async(e)=>{
        e.preventDefault();
        await editHabbit(
            id,
            name,
            goal,
            category,
            frequency,
            description,
        );
        alert ('Update Successfully');
        navigate('/habbits')
    }

  return (
    <div className="edit-habbit">
      <div className="edit-habbit-container">
        <h3>Edit Habbit</h3>
        <p>
          Update your habit details to keep your goals aligned and your progress
          on track.
        </p>

        <div className="edit-habbit-form-container">
            <form onSubmit={editItem}>
                <label>Habbit Name</label>
                <input type="text" placeholder="Enter Habbit"
                onChange={(e)=>setName(e.target.value)} value={name}
                />

                <label>Daily Goal</label>
                <input type="text" placeholder="e.g. 1Hour or 2 Problems"
                onChange={(e)=>setGoal(e.target.value)} value={goal}
                />

                <label>Category</label>
                <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option value="">Select Category</option>
                    <option>Coding</option>
                    <option>Study</option>
                    <option>Fitness</option>
                    <option>Health</option>
                    <option>Reading</option>
                    <option>Productivity</option>
                    <option>Other</option>
                </select>

                <label>Frequency</label>
                <select onChange={(e)=>setFrequency(e.target.value)} value={frequency}>
                    <option value="">Select Frequency</option>
                    <option>Daily</option>
                    <option>Weekdays</option>
                    <option>Weekend</option>
                    <option>Custom</option>
                </select>

                <label>Description</label>
                <textarea placeholder="Write Description"
                onChange={(e)=>setDescription(e.target.value)} value={description}
                />

                {error && <p className="edit-habbit-error">{error}</p>}

                <div className="edit-habbit-form-btn">
                    <button type="submit">
                       Edit Habbit
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
