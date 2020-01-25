package com.cts.traning.javapractice;

import java.util.Scanner;

public class Leap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the year");
		int a =sc.nextInt();
		
		if(a % 4==0)
			System.out.println("leap year");
		else
			System.out.println("not a leap year");	
	}

}
