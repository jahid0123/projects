package org.isdb.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	static final String URL = "jdbc:oracle:thin:@//localhost:1521/ORCLPDB"; // Service Name
	// static final String URL = "jdbc:oracle:thin:@localhost:1521:ORCLPDB"; // SID
	static final String USERNAME = "orclpdbuser";
	static final String PASSWORD = "isdb62";

	static {
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			// Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			throw new RuntimeException("Oracle JDBC Driver not found.", e);
		}
	}

	public static Connection getConnection() throws SQLException {
		return DriverManager.getConnection(URL, USERNAME, PASSWORD);
	}
}