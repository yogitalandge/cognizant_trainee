package com.cts.traning.javapractice;

import java.util.Scanner;

public class Oddeven {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the number");
		int num=sc.nextInt();
		
		if(num % 2 == 0)
			System.out.println("given num is even");
		else
		System.out.println("given num is odd");
	}

}
