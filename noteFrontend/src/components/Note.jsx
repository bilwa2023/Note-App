function Note({ note, onDelete, onEdit }) {
  // Format dates (extract YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  return (
    <div className="card shadow-sm h-100 note-card">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text flex-grow-1">{note.description}</p>


        <div
          className="d-flex justify-content-between text-muted mb-3"
          style={{ fontSize: "0.75rem" }}
        >
          <span>Created: {formatDate(note.createdDate)}</span>
          <span>Updated: {formatDate(note.updatedDate)}</span>
        </div>

        
        <div className="d-flex justify-content-center gap-2 mt-auto">
          <button
            className="btn btn-sm w-50"
            style={{
              backgroundColor: "#141414",
              color: "white",
              border: "none",
            }}
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-sm w-50"
            style={{
              backgroundColor: "#7296F4",
              color: "white",
              border: "none",
            }}
            onClick={() => onEdit(note)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
