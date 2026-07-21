import { useEffect } from "react";
import "../Css/Progress.css";
import useComplete from "../Hooks/useComplete";
import useHabbit from "../Hooks/useHabbit";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Progress() {

    const {loading,error,getComplete,completions, deleteComplete}=useComplete();
    const {getHabbits, habbit}=useHabbit();
    const today=new Date();

    const { user }=useContext(AuthContext);

    const filterComplete=completions.filter((c)=>{
        const completedDate=c.completedAt?.toDate();

        return (
            completedDate && 
            completedDate.getFullYear()===today.getFullYear() &&
            completedDate.getMonth()===today.getMonth()&&
            completedDate.getDate()===today.getDate()
        )
    })

    useEffect(()=>{
        if(user){
            getComplete();
            getHabbits();
        }
    },[user]);

    const deleteItem=async(e,id)=>{
        e.preventDefault();
        await deleteComplete(id);
    }

  return (
    <div className="progress-page">
      <div className="progress-page-container">
        <h2>Progress Overview</h2>
        <p>
          Track your habbit completion, monitor your streaks, and measure your
          consistency over time.
        </p>

        {error && <p className="progress-page-error">{error}</p>}

        {loading && <span className="progress-page-spinner"></span>}

        <div className="progress-page-stats">
            <div className="habbit-stat">
                <h3>Total Habbits</h3>
                <span>{habbit.length}</span> 
            </div>
            
            <div className="complete-stat">
                <h3>Total Completion</h3>
                <span>{completions.length}</span>
            </div>

            <div className="today-stat">
                <h3>Completed Today</h3>
                <span>{filterComplete.length}</span>
            </div>
        </div>

        <div className="completed-items">
            {filterComplete.map((fc)=>(
                <div className="single-complete" key={fc.id}>
                    <h3>{fc.name}</h3>
                    <p>{fc.completedAt.toDate().toLocaleTimeString()}</p>

                    <div className="single-complete-btn">
                       <button type="button" onClick={(e)=>deleteItem(e,fc.id)}>
                            Mark Incomplete
                       </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
