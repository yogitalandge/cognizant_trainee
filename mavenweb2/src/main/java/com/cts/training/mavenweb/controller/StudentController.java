package com.cts.training.mavenweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cts.training.mavenweb.dao.IStudentDao;
import com.cts.training.mavenweb.entity.Student;
import com.cts.training.mavenweb.services.IStudentService;

@Controller
@RequestMapping("/student")
public class StudentController {

	private static final String SQL_UPDATE = null;
	// dependency
	@Autowired
	private IStudentService studentDao;
	private  IStudentService jdbcTemplate;
	private IStudentService studentService;
	
	@RequestMapping("/all")
	public String showAll(Model model) {
		// get data from DAO layer
		List<Student> students = this.studentDao.findAllStudents();
		
		// add to model object
		model.addAttribute("students", students);
		
		// return the view page
		return "student-list";
	}
	@RequestMapping("/entry")
	 public String entry(Model model)	{
		 
		 
	//	List<Student> students = this.studentDao.update(Student student);
		Student student =new Student(); 
		//model.addAllAttributes("student",student);
		model.addAttribute("student", student);
		return "student-entry";
		 
	 }
	@RequestMapping("/save")
	 public String save(@ModelAttribute Student student)	{
		this.studentService.addStudent(student);
		
		return "redirect:/student/all";
		
	}
	
	
	
	}
