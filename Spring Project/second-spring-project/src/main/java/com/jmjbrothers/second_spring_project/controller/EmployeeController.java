package com.jmjbrothers.second_spring_project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmjbrothers.second_spring_project.model.Employee;
import com.jmjbrothers.second_spring_project.service.EmployeeService;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	@PostMapping
	public Employee saveEmployee(@RequestBody Employee employee) {
		// TODO: process POST request

		Employee save = service.savEmployee(employee);

		return save;
	}

	@GetMapping
	public List<Employee> allEmployees() {

		return service.getAllEmployees();
	}

	@DeleteMapping("/{id}")
	public String deleteByID(@PathVariable int id) {

		service.deleteById(id);

		return "Delete Item Successfully";

	}

	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable int id, @RequestBody Employee employee) {

		Optional<Employee> updateEmployee = service.findEmployeeById(id);

		Employee em = null;
		if (updateEmployee.isPresent()) {
			em = updateEmployee.get();

			if (em.getName() != employee.getName())
				em.setName(employee.getName());

			if (em.getPosition() != employee.getPosition())
				em.setPosition(employee.getPosition());

			if (em.getDepartment() != employee.getDepartment())
				em.setDepartment(employee.getDepartment());

			if (em.getSalary() != employee.getSalary())
				em.setSalary(employee.getSalary());
		}

		return service.savEmployee(em);
	}

}
