package com.cts.training.commentmicroservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.cts.training.commentmicroservice.Repository.CommentRepository;

public class CommentController {
	
	
	@Autowired
	private Environment env;
	// dependency
	@Autowired
	private CommentRepository commentRepository;
	

}
