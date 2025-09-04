package com.note.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.note.entity.Note;

public interface NotesRepository extends JpaRepository<Note, Integer> {

}
