package com.cts.training.mavenweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String home() {
		return  "main-menu";
	}
	
	/*@RequestMapping("/index")
	public String index() {
		return  "main-menu";
	}*/
}
