package main;

import java.util.Scanner;
import java.util.Stack;

public class Main {
	final static String sysuser="ALAN";
	final static String syspassword="123456";
	static Stack<String> tokenStack=new Stack<String>();
	
	public static void main(String[] args) {
		String readToken;
		String user; // al leer convertir en uppercase
		String password; 
		final int tries=3;
		Scanner scanner=new Scanner(System.in);
		
		System.out.println("Bienvenido a Online Banking, por favor ingrese las credenciales solicitadas:");

		for(int i=1;i<=tries;i++) {
			//generacion de token
			tokenGenerator(tokenStack);
			System.out.println("Clave Token Generada Automaticamente: "+tokenStack.lastElement()+"\n");
			
			//lectura de inputs
			System.out.print("Usuario: ");
			user=scanner.next().toUpperCase();
			System.out.print("Contraseña: ");
			password=scanner.next();
			System.out.print("Token: ");
			readToken=scanner.next();
			
			//condicional login
			if (!validateCredentials(user,password,readToken)) {
				if(i==3) {
					blockAccount();
					break;
				}
					System.out.println(readToken);
					System.out.println(tokenStack.lastElement());
					System.out.println("Error de credenciales.. Desea intentarlo nuevamente? (S/N): ");
					if (scanner.next().toUpperCase().equals("N")) break;
				}else {
					accessGranted();
					break;
				}
		}
		scanner.close();
		finalText();
	}
	
	private static boolean validateCredentials(String user,String password,String readToken) {
		if (user.equals(sysuser) && password.equals(syspassword) && readToken.equals(tokenStack.lastElement())) return true;
		else return false;
	}
	private static void accessGranted() {
		System.out.println("Credenciales Correctas, Bienvenido a su Online Banking");
	}
	
	private static void blockAccount() {
		System.out.println("Error de Credenciales... Usuario Bloqueado, por favor dirijase a la sucursal mas cercana");
	}
	
	private static void tokenGenerator(Stack<String> tokenStack) { //recibe la stack de tokens y pushea un nuevo token que no haya sido repetido antes
		boolean single=false;
		String temp = null;
		while (!single) {
			single=true;
		temp=String.valueOf((int)Math.floor(Math.random()*1000000));
			for(String s:tokenStack) {
				if (temp.equals(s)) single=false;
			}
		}
		tokenStack.push(temp);
	}
	
	private static void finalText() {
		System.out.println("Gracias por utilizar Online Banking.");
	}
}


 