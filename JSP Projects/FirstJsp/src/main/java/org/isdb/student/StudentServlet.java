package org.isdb.student;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/student/StudentServlet")
public class StudentServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private StudentDAO studentDAO;

	@Override
	public void init() {
		studentDAO = new StudentDAO();
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String action = request.getParameter("action");

		if ("add".equals(action)) {
			String name = request.getParameter("name");
			String email = request.getParameter("email");
			String phone = request.getParameter("phone");
			String address = request.getParameter("address");

			Student student = new Student(name, email, phone, address);

			try {
				studentDAO.addStudent(student);
				response.sendRedirect("listAllStudent.jsp");
			} catch (SQLException e) {
				e.printStackTrace();
				request.setAttribute("errorMessage", "Error adding student: " + e.getMessage());
				request.getRequestDispatcher("addStudent.jsp").forward(request, response);
			}
		} else if ("update".equals(action)) {
			int id = Integer.parseInt(request.getParameter("id"));
			String name = request.getParameter("name");
			String email = request.getParameter("email");
			String phone = request.getParameter("phone");
			String address = request.getParameter("address");

			Student student = new Student(id, name, email, phone, address);

			try {
				studentDAO.updateStudent(student);
				response.sendRedirect("listAllStudent.jsp");
			} catch (Exception e) {
				e.printStackTrace();
				request.setAttribute("errorMessage", "Error updating student: " + e.getMessage());
				request.getRequestDispatcher("updateStudent.jsp?id=" + id).forward(request, response);
			}
		} else if ("delete".equals(action)) {
			int id = Integer.parseInt(request.getParameter("id"));

			try {
				studentDAO.deleteStudent(id);
				response.sendRedirect("listAllStudent.jsp");
			} catch (Exception e) {
				e.printStackTrace();
				request.setAttribute("errorMessage", "Error deleting student: " + e.getMessage());
				request.getRequestDispatcher("listAllStudent.jsp").forward(request, response);
			}
		}
	}

}