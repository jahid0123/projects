package com.jmjbrothers.second_spring_project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jmjbrothers.second_spring_project.model.Employee;
import com.jmjbrothers.second_spring_project.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;

	public Employee savEmployee(Employee employee) {

		Employee saveEmployee = repository.save(employee);

		return saveEmployee;
	}

	public List<Employee> getAllEmployees() {

		return repository.findAll();

	}

	public void deleteById(int id) {

		repository.deleteById(id);
	}

	public Optional<Employee> findEmployeeById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

}
