package studentJSF;

import java.io.Serializable;
import java.util.List;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;

@Named
@RequestScoped
public class StudentBean implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Student student = new Student();
	private StudentDAO studentDAO =  new StudentDAO();
	private List<Student> studentList;
	private boolean editMode =  false;
	
	
	public String saveStudent() {
		try {
			if (editMode) {
				
				studentDAO.updateStudent(student);				
			}else {
				studentDAO.createStudent(student);
			}
			
			refreshList();
			clearForm();
			return "student?faces-redirect=true";
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public void editStudent(Student student) {
		this.student = student;
		editMode = true;
	}
	
	
	public void deleteStudent(int id) {
		try {
			studentDAO.deleteStudent(id);
			refreshList();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void clearForm() {
		student = new Student();
		editMode = false;
	}
	
	private void refreshList() {
		try {
			studentList = studentDAO.allStudent();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
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
