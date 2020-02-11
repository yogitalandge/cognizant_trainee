<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
         <!--   <a href ="/update?id<c:out value='${student.id}' />">update</a>
				<a href ="/delete?id<c:out value='${student.id}' />">delete</a> -->
<a href="${pageContext.request.contextPath}/student/entry">Add new Records</a>
<table border="1" width="100%">
	<thead>
	<th>ID</th>
		<th>NAME</th>
		<th>EMAIL</th>
		<th>ACTION</th>
	</thead>
	<tbody>
		<core:forEach var="student" items="${students}">
			<tr>
				<td>${student.id}</td>
				<td>${student.name}</td>
			    <td>${student.email}</td>
			    <td>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
			     <a href ="/update?id<c:out value='${student.id}' />">update</a> 
			     
				
				
				</td>
			</tr> 
		</core:forEach>
	</tbody>
</table>
</body>
</html>