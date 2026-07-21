import "../Css/Habbits.css";
import { Link } from "react-router-dom";
import useHabbit from "../Hooks/useHabbit";
import { FaPencilAlt, FaPlus, FaTrash, FaRegSmileBeam } from "react-icons/fa";
import { useContext, useEffect } from "react";
import useComplete from "../Hooks/useComplete";
import { AuthContext } from "../Contexts/AuthContext";

export default function Habbits() {
  const { loading, error, getHabbits, habbit, deleteHabbit } = useHabbit();
  const { addComplete } = useComplete();

  const { user }=useContext(AuthContext);

  useEffect(() => {
    if(user){
      getHabbits();
    }
  }, [user]);

  const deleteItem = async (e, id) => {
    e.preventDefault();
    await deleteHabbit(id);
  };

  const addItem = async (habbitId, name) => {
    await addComplete(habbitId, name);
  };

  return (
    <div className="habbits">
      <div className="habbits-container">
        <div className="habbits-header">
          <div>
            <h2>Daily Habits</h2>
            <p>My Daily Habits</p>
          </div>

          <Link to="/habbits/addHabbits" className="add-habbit-btn">
            <FaPlus />
            Add Habit
          </Link>
        </div>

        {error && <p className="habbits-error">{error}</p>}

        {loading && <span className="habbits-spinner"></span>}

        <div className="added-habbits">
          <div className="added-habbits-container">
            {habbit.length === 0 ? (
              <div className="empty-habbit">
                <FaRegSmileBeam className="empty-icon" />
                <h3>No Habbits Yet</h3>
                <p>
                  You haven't created any habbits yet. Start building positive
                  routines by adding your first habbit.
                </p>
              </div>
            ) : (
              habbit.map((h) => (
                <div className="single-habbit" key={h.id}>
                  <div className="habbit-info">
                    <h3>{h.name}</h3>
                    <p>{h.description}</p>
                    <span>{h.category}</span>

                    <div className="habbit-status">
                      <span>{h.frequency}</span>
                      <span>{h.goal}</span>
                      <p>Added: {h.addedAt?.toDate().toLocaleDateString()}</p>
                    </div>

                    <div className="habbit-action">
                      <div className="action-icons">
                        <button
                          type="button"
                          onClick={(e) => deleteItem(e, h.id)}
                        >
                          <FaTrash />
                        </button>

                        <Link to={`/editHabbits/${h.id}`}>
                          <FaPencilAlt />
                        </Link>
                      </div>

                      <button
                        type="button"
                        className="complete-btn"
                        onClick={() => addItem(h.id, h.name)}
                      >
                        Complete Today
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
