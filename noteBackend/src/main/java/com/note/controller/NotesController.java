package com.note.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.note.entity.Note;
import com.note.service.NotesService;

@RestController
@CrossOrigin(origins = "https://note-5sw91d69h-bilwamangal-biswals-projects.vercel.app/") 
//@RequestMapping("api/notes/")
public class NotesController {
	
	@Autowired
	private NotesService service;
	
	//Create Note
	@PostMapping("/notes")
	public ResponseEntity<Note> createNote(@RequestBody Note note) {
		Note created=service.createNote(note);
		return ResponseEntity.status(HttpStatus.CREATED).body(created);
	}
	
	//Get All Notes
	@GetMapping("/notes")
	public ResponseEntity<List<Note>>  getNotes(){
		List<Note> notes=service.getNotes();
		return ResponseEntity.ok(notes);
	}
	
	//Update Note
	@PutMapping("/notes/{id}")
	public ResponseEntity<Note> updateNote(@PathVariable Integer id, @RequestBody Note note) {
	    Note updated = service.updateNote(id, note);
	    return ResponseEntity.ok(updated);
	}
	
	//Delete Note
	@DeleteMapping("/notes/{noteid}")
	public ResponseEntity<Void> deleteNote(@PathVariable Integer noteid) {
		service.deleteNote(noteid);
		return ResponseEntity.noContent().build();
	}
	
	public ResponseEntity<Note> getNoteById(Integer id){
		Note note=service.getNoteById(id);
		return ResponseEntity.ok(note);
	}
}
