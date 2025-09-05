package com.note.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.note.entity.Note;
import com.note.repository.NotesRepository;
import com.note.exception.NoteNotFoundException;

@Service
public class NotesServiceImpl implements NotesService{
	
	@Autowired	
	private NotesRepository repo;
	
	@Override
	public Note createNote(Note note) {
		if (note!=null) {
			repo.save(note);
			return note;
					
		}
		else
			return note;
	}

	@Override
	public List<Note> getNotes() {
		List<Note> notes=repo.findAll();
		return notes;
	}

	@Override
	public Note updateNote(Integer id,Note note) {
			Note dbnote=repo.findById(id).orElseThrow(()->new RuntimeException("Note not found"));
			
			dbnote.setTitle(note.getTitle());
			dbnote.setDescription(note.getDescription());			
			repo.save(dbnote);
			return dbnote;
	
	}
	
	@Override
	public Note deleteNote(Integer id) {
		Note note=repo.findById(id).orElseThrow(()->new NoteNotFoundException ("Note not found"));
		repo.delete(note);
		return note;
	}

	@Override
	public Note getNoteById(Integer id) {
	    return repo.findById(id)
	               .orElseThrow(() -> new NoteNotFoundException("Note not found"));
	}

	
}
