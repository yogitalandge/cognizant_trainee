package com.cts.traning.javapractice;

import java.util.Scanner;

public class Vowel {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc=new Scanner(System.in);
		System.out.println("enter alphabet");
	int i=0;
	char ch=sc.next().charAt(0);
		
		if(ch =='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
			System.out.println("given alpha is vowel :" +ch);
		else
			System.out.println("given alpha is consonent" +ch);
		
	}

}
