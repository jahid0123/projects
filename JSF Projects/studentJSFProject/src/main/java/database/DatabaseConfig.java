package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConfig {
	
	static final String URL = "jdbc:oracle:thin:@//localhost:1521/ORCLPDB";
	static final String USER = "orclpdbuser";
	static final String PASSWORD = "isdb62";
	
	public static Connection geConnection() throws ClassNotFoundException, SQLException  {
		
		Class.forName("oracle.jdbc.OracleDriver");
				
		return DriverManager.getConnection(URL, USER, PASSWORD);
	}

}
