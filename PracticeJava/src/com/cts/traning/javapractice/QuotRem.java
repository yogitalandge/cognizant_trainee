package com.cts.traning.javapractice;

import java.util.Scanner;

public class QuotRem {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		/*int a=10;
		int b=3;
		
		int c=a/b;
		int d=a%b;
		System.out.println("quotient is:" +c);
		
		System.out.println("remender is:" +d);*/
		 
		int a,b,c,d;
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter two nos");
		a=sc.nextInt();
		b=sc.nextInt();
		
		c=a/b;
		d=a%b;
		System.out.println("quotient is" +c);
		System.out.println("remender is" +d);
	}

}
