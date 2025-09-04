package com.note.entity;

//import java.sql.Date;
import java.time.LocalDateTime;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Note {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;
	@Column(nullable = false)

	private String title ;
	@Column(length = 1000)
	private String description;
	
	@CreationTimestamp()
	private LocalDateTime createdDate ;
	
	@UpdateTimestamp
	private LocalDateTime updatedDate;
	
	

//	private User user;
	
}
