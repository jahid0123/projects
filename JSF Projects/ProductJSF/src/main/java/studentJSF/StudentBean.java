package studentJSF;

import java.io.Serializable;
import java.util.List;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

@Named
@SessionScoped // Change to SessionScoped to maintain student state across requests
public class StudentBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private Student student = new Student();
	private StudentDAO studentDAO = new StudentDAO();
	private List<Student> studentList;
	private boolean editMode = false;

	public String saveStudent() {
		try {
			if (editMode) {
				// Update existing student record in database
				studentDAO.updateStudent(student);
			} else {
				// Create new student record
				studentDAO.createStudent(student);
			}

			refreshList(); // Refresh student list after saving
			clearForm(); // Clear form after saving
			return "student?faces-redirect=true"; // Redirect to student page

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public void editStudent(Student student) {
		this.student = student; // Assign the selected student to the form
		editMode = true; // Set edit mode to true
	}

	public void deleteStudent(int id) {
		try {
			studentDAO.deleteStudent(id);
			refreshList(); // Refresh student list after deletion
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void clearForm() {
		student = new Student(); // Clear form fields
		editMode = false; // Reset edit mode
	}

	private void refreshList() {
		try {
			studentList = studentDAO.allStudent(); // Refresh student list from the database
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Getters and Setters
	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public List<Student> getStudentList() {
		if (studentList == null) {
			refreshList();
		}
		return studentList;
	}
}
