import React, { useState } from "react";
import { createNote } from "../api";

function AddNote({ onNoteAdded }) { 
  const [note, setNote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote(note);          // create note in backend
    setNote({ title: "", description: "" }); // reset form
    if (onNoteAdded) onNoteAdded();  // notify parent to refresh notes
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ width: "50%" }}>
        <h3 className="text-center mb-4">Add Note</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter note title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={note.description}
              onChange={handleChange}
              className="form-control"
              rows="4"
              placeholder="Enter note description"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn px-4"
              style={{
                backgroundColor: "#DDF472",
                color: "#141414",
                border: "none",
                fontWeight: "600",
              }}
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
