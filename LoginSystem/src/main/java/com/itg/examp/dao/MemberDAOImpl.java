package com.itg.examp.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itg.examp.dto.MemberDTO;

@Repository

public class MemberDAOImpl implements MemberDAO {

	// 회원가입시 데이터 저장 DB 입력
	// 회원 로그인시 아이디 비밀번호 확인
	// 회원 리스트 조회시 리스트 출력

	@Autowired
	SqlSessionTemplate session;

	@Override

	public int signupMember(MemberDTO member) {
		int res = session.insert("memberMapper.signup", member);
		System.out.println("회원가입 DAO: " + res);
		return res;
	}

	@Override
	public MemberDTO signinMember(Map<String, String> data) {
		return null;
	}

	@Override
	public List<MemberDTO> memberList() {
		return null;
	}

}
