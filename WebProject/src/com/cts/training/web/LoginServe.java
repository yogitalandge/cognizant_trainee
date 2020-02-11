package com.cts.training.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LoginServe
 */
@WebServlet("/LoginServe")
public class LoginServe extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServe() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String uname=request.getParameter("uname");
		String pass=request.getParameter("pass");
		
		//req scope
		//req obj
		request.setAttribute("username", uname.toUpperCase());
		request.setAttribute("password", pass.concat("check"));
		
		//session scope
		//session obj
		HttpSession session=request.getSession();
		session.setAttribute("username", uname.toUpperCase());
		session.setAttribute("password", pass.concat("check"));
		
		//global scope
		//global obj:application context
		ServletContext context=this.getServletContext();
		context.setAttribute("username", uname.toUpperCase());
		context.setAttribute("password", pass.concat("check"));
		
		//PrintWriter writer=response.getWriter();
		
		
	/*	                                   
		if(uname.equals("Yogita")&& pass.equals("524"))
		{
			this.getServletContext().getRequestDispatcher("/welcome.html").forward(request, response);
		}
		else {
			this.getServletContext().getRequestDispatcher("error.html").forward(request, response);
		}
		*/
	}

}
