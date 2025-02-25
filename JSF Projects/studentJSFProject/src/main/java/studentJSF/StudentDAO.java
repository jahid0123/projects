package studentJSF;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import database.DatabaseConfig;

public class StudentDAO {

	public void createStudent(Student student) throws ClassNotFoundException {
		String sql = "insert into studentjsf(name, phone, email, address)values(?, ?, ?, ?)";
		try (Connection connection = DatabaseConfig.geConnection();
				PreparedStatement stm = connection.prepareStatement(sql)) {

			stm.setString(1, student.getName());
			stm.setString(2, student.getPhone());
			stm.setString(3, student.getEmail());
			stm.setString(4, student.getAddress());

			stm.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public List<Student> allStudent() throws ClassNotFoundException{
		String sql = "select * from studentjsf";
		List<Student> students = new ArrayList<>();
		
		try(Connection connection = DatabaseConfig.geConnection();
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql)){
			
			while (resultSet.next()) {

				int id = resultSet.getInt("id");
				String name =  resultSet.getString("name");
				String phone =  resultSet.getString("phone");
				String email =  resultSet.getString("email");
				String address =  resultSet.getString("address");
				
				Student student = new Student(id, name, phone, email, address);
				students.add(student);
				
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return students;
	}
	
	public void updateStudent(Student student) throws ClassNotFoundException {
		
		String sql = "update studentjsf set name=?, phone=?, email=?, address=? where id=?";
		try(Connection connection = DatabaseConfig.geConnection();
			PreparedStatement statement = connection.prepareStatement(sql)){
			
			statement.setString(1, student.getName());
			statement.setString(2, student.getPhone());
			statement.setString(3, student.getEmail());
			statement.setString(4, student.getAddress());
			statement.setInt(5, student.getId());
			
			statement.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();// TODO: handle exception
		}
	}
	
	public void deleteStudent(int id) throws ClassNotFoundException {
		String sql =  "delete from studentjsf where id=?";
		
		try(Connection connection = DatabaseConfig.geConnection();
			PreparedStatement statement = connection.prepareStatement(sql)){
			
			statement.setInt(1, id);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
