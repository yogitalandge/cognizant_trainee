package com.training.spring.web.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.training.spring.web.model.Student;



@Controller
@RequestMapping("/student")
public class StudentController {

	@RequestMapping("/dashboard")
	public String home() {
		return "student-home";
	}
	
	@RequestMapping("/profile")
	public String profile() {
		return "student-profile";
	}
	
	// mapping action method with parent url
	
	
	@RequestMapping("/save") // fallback method for bad url
	public String saveData(Student student) {
		System.out.println("\nName : " + student.getUname());
		System.out.println("Email : " + student.getEmail());
		return "student-confirm";
	}
	
	
	
	
	// mapping action method with parent url
	
	@RequestMapping() // default method for parent url
	public String defaultMethod() {
		return "student-home";
	}
	
	// Fallback url mapping (for bad urls)
	@RequestMapping("*") // fallback method for bad url
	public String fallbackMethod() {
		return "student-error";
	}
}
