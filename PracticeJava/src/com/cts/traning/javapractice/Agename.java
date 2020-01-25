package com.cts.traning.javapractice;

import java.util.Scanner;
import java.util.*;

public class Agename {
  

	
	private char name;
	private char age;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the name and age");
		char name= (char) sc.nextInt();
		int age=sc.nextInt();
		
	
		
		
		System.out.println("Your name is :"+name);
		
	System.out.println("Your age is :" +age);

	boolean b1,b2;
	b1=Character.isDigit(name);
	b2=Character.isDigit(age);
	
		char str1=name;
		int str2=age;
		
		
		Agename agn=new Agename();
		


}

 
}