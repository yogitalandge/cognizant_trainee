package com.cts.traning.javapractice;

import java.util.Scanner;

public class Swap {
	int a,temp,b;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
  int a,b,temp;
  
  Scanner sc=new Scanner(System.in);
	System.out.println("enter two nos");
	a =sc.nextInt();
	 b=sc.nextInt();
	
  

		 temp=a;
			a=b;
			b=temp;
			
			System.out.println(a);
			System.out.println(b);		
	}
	
       
}
