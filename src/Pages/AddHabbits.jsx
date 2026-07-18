import { useState } from "react";
import "../Css/AddHabbit.css";
import useHabbit from "../Hooks/useHabbit";
import { useNavigate } from "react-router-dom";

export default function AddHabbits() {

    const [name,setName]=useState('');
    const [goal,setGoal]=useState('');
    const [category,setCategory]=useState('');
    const [frequency,setFrequency]=useState('');
    const [description,setDescription]=useState('');
    const navigate=useNavigate();

    const {loading,error,addHabbit}=useHabbit();

    const addForm=async(e)=>{
        e.preventDefault();
        await addHabbit(
            name,
            goal,
            category,
            frequency,
            description
        ),
        setName('');
        setGoal('');
        setCategory('');
        setFrequency('');
        setDescription('');
        navigate('/habbits');
    }

  return (
    <div className="add-habbits">
      <div className="add-habbits-container">
        <h2>Add new Habbit</h2>
        <p>
          Create a new habbit to stay consistent, build positive routines, and
          archieve your goals one day at a time.
        </p>

        <div className="add-habbits-form-container">
          <form onSubmit={addForm}>
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

            {error && <p className="add-habbit-error">{error}</p>}

            <div className="add-habbit-form-btn">
              <button type="submit" disabled={loading}>
                {loading ? <span className="add-habbit-spinner"></span> : "Save Habbit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
