package com.itg.examp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

@RestController
@RequestMapping("/member") // 주소 뒤에 이렇게 써주면 멤버로 들어감. root주소임(주소라우팅)
public class MemberController {

	@Autowired
	MemberDAO dao;
	@Autowired
	MemberService service;

	@PostMapping("/signup")

	public Map<String, Object> signupMember(MemberDTO member) {

		// id는 4글자 이상이고 pw는 6글자 이상으로 입력되게.
		System.out.println(member.toString());
		boolean ckid = service.checkId(member.getMid());
		boolean ckpw = service.checkPassword(member.getMpw());
		HashMap<String, Object> hm = new HashMap<>();
		if (!ckid) {
			hm.put("message", "아이디를 점검하세요.");
		}
		if (!ckpw) {
			hm.put("message", "비밀번호를 점검하세요.");
		}

		int res = dao.signupMember(member);
		if (res == 1) {
			hm.put("message", "회원가입성공");
			hm.put("data", member);
			System.out.println(member.getName() + "회원 가입 성공");
		} else {
			hm.put("message", "회원가입실패 관리자 문의");
			System.out.println("회원가입 실패");
		}
		return hm;

		// System.out.println("로그인페이지 접속");
		// return 100;
	}

	@PostMapping("/login")

	public void signin() {

	}

	@GetMapping("/logout")

	public void signout() {

	}

	@GetMapping("/listview")

	public void listView() {

	}

}
