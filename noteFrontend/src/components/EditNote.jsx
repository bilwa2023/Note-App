import React, { useState, useEffect } from "react"; 
import { updateNote } from "../api";

function EditNote({ note, onClose, onNoteUpdated }) {
  const [updatedNote, setUpdatedNote] = useState({ title: "", description: "" });

  useEffect(() => {
    if (note) {
      setUpdatedNote({
        title: note.title || "",
        description: note.description || "",
      });
    }
  }, [note]);

  const handleChange = (e) => {
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote(note.id, updatedNote);
    onNoteUpdated();
    onClose();
  };

  if (!note) return null;

  return (
    <>
      <div className="blur-overlay" onClick={onClose}></div>
      <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1051 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={updatedNote.title}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={updatedNote.description}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#DDF472", color: "#141414" }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditNote;
