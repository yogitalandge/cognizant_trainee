package com.cts.training.mavenweb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.cts.training.mavenweb.dao.IStudentDao;
import com.cts.training.mavenweb.entity.Student;

public class StudentServiceImpl implements IStudentDao {

	@Autowired
	private IStudentDao studentdao;
	
	@Override
	public List<Student> findAll() {
		// TODO Auto-generated method stub
		return this.studentdao.findAll();
	}

	@Override
	public Student findById(Integer id) {
		// TODO Auto-generated method stub
		return this.studentdao.findStudentById(studentdao);
	}

	@Override
	public boolean addStudent(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

}
