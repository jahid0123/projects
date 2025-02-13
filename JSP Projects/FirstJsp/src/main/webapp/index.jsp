<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student Management System</title>
<!-- Add Bootstrap CSS for better styling -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
    .container {
        margin-top: 50px;
    }
    .btn {
        margin: 5px;
    }
</style>
</head>
<body>
    <div class="container text-center">
        <h1>Welcome to the Student Management System</h1>

        <!-- Links for Student Operations -->
        <div class="mt-4">
            <a href="student/addStudent.jsp" class="btn btn-primary">Add Student</a>
            <a href="student/listAllStudent.jsp" class="btn btn-success">List All Students</a>
            <!-- <a href="student/updateStudent.jsp" class="btn btn-warning">Update Student</a> -->
        </div>
    </div>

    <!-- Add Bootstrap JS (optional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>