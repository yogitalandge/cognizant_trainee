<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="spring-form" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<spring-form:form action="${pageContext.request.contextPath}/student/save"   method="POST" modelAttribute="student">
	<br/>
	<br/>
	<spring-form:label path="name">Enter Name : </spring-form:label>
	<spring-form:input path="name"/>
	<br/>
	<br/>
	<spring-form:label path="category">Enter category : </spring-form:label>
	<spring-form:input path="category"/>
	<br/>
	<br/>
	<spring-form:label path="cost">Enter cost : </spring-form:label>
	<spring-form:input path="cost"/>
	<br/>
	<br/>
	<input  type="submit" value="Save">
	
</spring-form:form>
</body>
</html>