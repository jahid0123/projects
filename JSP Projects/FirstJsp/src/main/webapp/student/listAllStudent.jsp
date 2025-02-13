<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page
	import="org.isdb.student.StudentDAO, org.isdb.student.Student, java.util.List"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List All Students</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<div class="container mt-5">
		<h1 class="text-center mb-4">List of All Students</h1>

		<table class="table table-bordered table-striped">
			<thead class="table-dark">
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Address</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<%
				StudentDAO studentDAO = new StudentDAO();
				List<Student> students = studentDAO.getAllStudents();

				for (Student student : students) {
				%>
				<tr>
					<td><%=student.getId()%></td>
					<td><%=student.getName()%></td>
					<td><%=student.getEmail()%></td>
					<td><%=student.getPhone()%></td>
					<td><%=student.getAddress()%></td>
					<td><a href="updateStudent.jsp?id=<%=student.getId()%>"
						class="btn btn-warning btn-sm">Update</a>
						<form action="StudentServlet" method="post"
							style="display: inline;">
							<input type="hidden" name="id" value="<%=student.getId()%>">
							<input type="hidden" name="action" value="delete">
							<button type="submit" class="btn btn-danger btn-sm"
								onclick="return confirm('Are you sure you want to delete this student?');">Delete</button>
						</form></td>
				</tr>
				<%
				}
				%>
			</tbody>
		</table>

		<div class="text-center">
			<a href="/FirstJsp" class="btn btn-secondary">Back to Home</a>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>