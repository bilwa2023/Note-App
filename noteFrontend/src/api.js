import axios from "axios";

const API = import.meta.env.VITE_API_URL || "note-app-production-5d2b.up.railway.app";

export const getNotes = () => axios.get(`${API}/notes`);
export const createNote = (note) => axios.post(`${API}/notes`, note);
export const updateNote = (id, note) => axios.put(`${API}/notes/${id}`, note);
export const deleteNote = (id) => axios.delete(`${API}/notes/${id}`);
