package com.cts.traning.javapractice;

import java.util.Scanner;

public class Positivenegative {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc=new Scanner(System.in);
System.out.println("enter the number");
int num=sc.nextInt();
 if(num>0.0)
	 System.out.println("given number is positive");
 else if(num<0.0)
	 System.out.println("given number is  negative");
 else
	 System.out.println("This is zero..!!");
	}

}
