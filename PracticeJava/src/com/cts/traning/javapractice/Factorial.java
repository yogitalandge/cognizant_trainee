package com.cts.traning.javapractice;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// TODO Auto-generated method stub
Scanner sc=new Scanner(System.in);
System.out.println("enter the number");
int num=sc.nextInt();
int factorial=1;
int i;
for(i=1;i<=num;i++) {
	factorial=factorial*i;
}
	System.out.println("factorial of no :" +num+ " is "  +factorial);	
	}

}
