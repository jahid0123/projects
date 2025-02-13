package org.isdb.student;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.isdb.db.DatabaseConnection;

public class StudentDAO {
	private static final String INSERT_STUDENT_SQL = "INSERT INTO students_jsp (name, email, phone, address) VALUES (?, ?, ?, ?)";
	private static final String SELECT_ALL_STUDENTS_SQL = "SELECT * FROM students_jsp";
	private static final String SELECT_STUDENT_BY_ID_SQL = "SELECT * FROM students_jsp WHERE id = ?";
	private static final String UPDATE_STUDENT_SQL = "UPDATE students_jsp SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?";
	private static final String DELETE_STUDENT_SQL = "DELETE FROM students_jsp WHERE id = ?";

	public void addStudent(Student student) throws SQLException {
		try (Connection connection = DatabaseConnection.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(INSERT_STUDENT_SQL)) {
			preparedStatement.setString(1, student.getName());
			preparedStatement.setString(2, student.getEmail());
			preparedStatement.setString(3, student.getPhone());
			preparedStatement.setString(4, student.getAddress());
			preparedStatement.executeUpdate();
		}
	}

	public List<Student> getAllStudents() throws SQLException {
		List<Student> students = new ArrayList<>();

		try (Connection connection = DatabaseConnection.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_STUDENTS_SQL);
				ResultSet resultSet = preparedStatement.executeQuery()) {

			while (resultSet.next()) {
				int id = resultSet.getInt("id");
				String name = resultSet.getString("name");
				String email = resultSet.getString("email");
				String phone = resultSet.getString("phone");
				String address = resultSet.getString("address");

				Student student = new Student(id, name, email, phone, address);
				students.add(student);
			}
		}
		return students;
	}

	public Student getStudentById(int id) throws SQLException {
		Student student = null;

		try (Connection connection = DatabaseConnection.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(SELECT_STUDENT_BY_ID_SQL)) {
			preparedStatement.setInt(1, id);
			ResultSet resultSet = preparedStatement.executeQuery();

			if (resultSet.next()) {
				String name = resultSet.getString("name");
				String email = resultSet.getString("email");
				String phone = resultSet.getString("phone");
				String address = resultSet.getString("address");
				student = new Student(id, name, email, phone, address);
			}
		}
		return student;
	}

	public void updateStudent(Student student) throws SQLException {
		try (Connection connection = DatabaseConnection.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_STUDENT_SQL)) {
			preparedStatement.setString(1, student.getName());
			preparedStatement.setString(2, student.getEmail());
			preparedStatement.setString(3, student.getPhone());
			preparedStatement.setString(4, student.getAddress());
			preparedStatement.setInt(5, student.getId());
			preparedStatement.executeUpdate();
		}
	}

	public void deleteStudent(int id) throws SQLException {
		try (Connection connection = DatabaseConnection.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(DELETE_STUDENT_SQL)) {
			preparedStatement.setInt(1, id);
			preparedStatement.executeUpdate();
		}
	}
}