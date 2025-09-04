package com.note.service;

import java.util.List;

import com.note.entity.Note;

public interface NotesService {
	public Note createNote(Note note);
	
	public List<Note> getNotes();
	
	public Note updateNote(Integer id,Note note);
	
	public Note deleteNote(Integer id);

	public Note getNoteById(Integer id);
}
