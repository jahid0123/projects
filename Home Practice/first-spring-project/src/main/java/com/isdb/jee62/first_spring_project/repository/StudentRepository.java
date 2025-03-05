package com.isdb.jee62.first_spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isdb.jee62.first_spring_project.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	

}
