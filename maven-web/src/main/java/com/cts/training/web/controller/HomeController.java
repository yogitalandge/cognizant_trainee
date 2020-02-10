package com.cts.training.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {
	// Action Methods : containing the logic to process the request
		/*
		 * 1. Access modifier : public 
		 * 2. Return type : String
		 * 3. Name : anything
		 * 4. Parameter : depends on req
		 * 5. Url MApping
		 */
		// if user request /index (url), current method shall handle that
		// current method will be called ~ service()
		@RequestMapping("/")
		public String home() {
			// add business logic
			
			// must always return view name
			return "home-page";
			
		}
		
		//@RequestMapping("/index")
		// mapping multiple url
		@RequestMapping(value = {"/index","/home","/base"})
		public String index() {
			return "index-page";
		}
		
		
	
}
