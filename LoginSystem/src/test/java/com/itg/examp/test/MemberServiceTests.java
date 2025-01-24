package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest

public class MemberServiceTests {
	// 경계값분석 : Boundary Analyze
	String[] rightId;
	String[] wrongId;
	String[] rightPw;
	String[] wrongPw;

	@Autowired
	MemberService ms;

	@BeforeEach
	public void setVariable() {
		rightId = new String[] { "aaaa", "abcde", "abcd", "a@E3ool", "bb#cc" };
		wrongId = new String[] { "aaa", "abc", "aa", "a#c", "123" };
		rightPw = new String[] { "123456", "214#aa", "aa#11aa", "a@eegd", "44AA@EE" };
		wrongPw = new String[] { "11236", "214#a", "#11aa", "a@gd", "AA@EE" };
	}

	@Test
	public void testPassword() { // JUnit 테스트 메서드
		boolean res = false; // res 변수 선언 후 기본값 false 설정 
		for (int i=0; i<rightId.length; i++) {
			res = ms.checkId(rightId[i]); // 유효성 검사
			assertEquals(true, res, ": 올바른 아이디입니다. :");
		}
		for(int i=0; i<wrongId.length; i++) { // 잘못된 아이디들이 저장된 배열
			res = ms.checkId(wrongId[i]); // 아이디 유효성 검사
			assertEquals(false, res, ": 잘못된 아이디입니다. :");
		}
	}
	@Test
	public void testId() {
		boolean res = false;
		for (String pw : rightPw) {
			res = ms.checkId(pw); // 비밀번호 하나씩 꺼내서 메서드 호출 후 아이디 검사.
			assertEquals(true, res, ": 올바른 비밀번호입니다. :"); // 올바르면 메세지 출력
		}
		for (String pw : wrongId) {
			res = ms.checkPassword(pw); // 비밀번호 유효성 검사
			assertEquals(false, res, ": 잘못된 비밀번호입니다. :");
		}

	}

}
