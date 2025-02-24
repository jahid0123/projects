package studentJSF;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import database.DatabaseConfig;

public class StudentDAO {
	
	
	public void createStudent(Student student) throws ClassNotFoundException {
		String sql = "insert into studentjsf(name, phone, email, address)values(?, ?, ?, ?)";
		try(Connection connection = DatabaseConfig.geConnection();
			PreparedStatement  stm = connection.prepareStatement(sql)){
			
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
