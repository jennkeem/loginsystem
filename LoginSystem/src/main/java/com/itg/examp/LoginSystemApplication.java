package com.itg.examp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoginSystemApplication {

	public static void main(String[] args) {
		System.out.println("서버가 잘 실행되었습니다.");
		SpringApplication.run(LoginSystemApplication.class, args);
	}

}
