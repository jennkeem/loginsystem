package com.itg.examp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.Session;

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
			return hm;
		}
		if (!ckpw) {
			hm.put("message", "비밀번호를 점검하세요.");
			return hm;
		}

		int res = dao.signupMember(member);
		if (res == 1) {
			member.setMpw("");
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

	public Map signin(HttpServletRequest request, @RequestBody Map<String, String> logindata) {
		System.out.println(logindata);
		HashMap<String, Object> hm = new HashMap<>();
		// 로그인 검증
		MemberDTO member = dao.signinMember(logindata);
		if (member != null) {
			HttpSession auth = request.getSession(true);
			auth.setAttribute("mid", member.getMid()); // 세션에 아이디 설정
			// auth.getAttribute("mid"); // 세션에서 아이디 출력
			hm.put("message", "로그인 성공");
			hm.put("member", member);
		} else {
			hm.put("message", "아이디와 비밀번호를 다시 확인하세요.");
		}
		return hm;
	}

	@GetMapping("/logout") // 로그아웃 요청 보내기.

	public HashMap<String, Object> signout(HttpServletRequest request, HttpServletResponse response) {
		HttpSession auth = request.getSession(); // HttpServletRequest 세션 가져오고, 저장해줌.
		HashMap<String, Object> hm = new HashMap<>(); // 로그아웃 후 반활할 메시지 HashMap 객체 생성.
		hm.put("message", auth.getAttribute("mid")+ "님 로그아웃 되었습니다.");
		auth.invalidate(); // 저장된 쿠키값을 무효화 한다.
		// response.sendRedirect("/");
		return hm;
	}

	@GetMapping("/listview")

	public Map listView(HttpServletRequest request) { 
		HttpSession auth = request.getSession(); // 현재 HTTP 요청에서 세션 가져오기.
		HashMap<String, Object> hm = new HashMap<>(); // 클라이언트에게 반환될 데이터 저장
		if (auth == null) {
			hm.put("message", "로그인을 먼저 해주세요."); // 세션 없을 때 전달
		} else {
			List<MemberDTO> ll = dao.memberList(); // 로그인된 사용자의 경우, 회원 목록 가져옴.
			System.out.println(auth.getAttribute("mid") + "님이 회원 리스트 요구");
			hm.put("message", "리스트수신"); // 리스트 수신을 응답에 추가
			hm.put("members", ll); // 응답데이터에 추가
		}
		return hm;
	}

}
