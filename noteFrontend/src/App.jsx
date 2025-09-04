import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "./api";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import EditNote from "./components/EditNote"; 
import "./App.css";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const closeEdit = () => {
    setEditingNote(null);
  };

  return (
    <div className="container my-4">
    
      <div className="text-center my-3">
        <img src="/notescart.png" alt="Notescart" />
      </div>

      {/* Add Note */}
      <AddNote onNoteAdded={fetchNotes} />

      {/* Notes Grid */}
      <div className="row mt-4 justify-content-center">
        {notes.map((note) => (
          <div key={note.id} className="col-md-4 col-sm-6 mb-4">
            <Note note={note} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        ))}
      </div>

      {/* Edit Note Modal */}
      {editingNote && (
        <EditNote
          note={editingNote}
          onClose={closeEdit}
          onNoteUpdated={fetchNotes}
        />
      )}
    </div>
  );
}

export default App;
