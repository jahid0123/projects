<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="org.isdb.student.StudentDAO, org.isdb.student.Student" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update Student</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Update Student</h1>

        <%
            int id = Integer.parseInt(request.getParameter("id"));
            StudentDAO studentDAO = new StudentDAO();
            Student student = studentDAO.getStudentById(id);
        %>

        <form action="StudentServlet" method="post" class="card p-4 shadow">
            <input type="hidden" name="id" value="<%= student.getId() %>">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" name="name" id="name" class="form-control" value="<%= student.getName() %>" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" name="email" id="email" class="form-control" value="<%= student.getEmail() %>" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone:</label>
                <input type="text" name="phone" id="phone" class="form-control" value="<%= student.getPhone() %>">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address:</label>
                <textarea name="address" id="address" class="form-control" rows="3"><%= student.getAddress() %></textarea>
            </div>
            <input type="hidden" name="action" value="update">
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Update Student</button>
                <a href="listAllStudent.jsp" class="btn btn-secondary">Cancel</a>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>