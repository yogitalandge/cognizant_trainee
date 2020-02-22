package com.cts.training.blockedusermicroservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.cts.training.blockedusermicroservice.Repository.BlockeduserRepository;


public class BlockeduserController {
	
	
	@Autowired
	private Environment env;
	// dependency
	@Autowired
	private BlockeduserRepository blockeduserRepository;

}
