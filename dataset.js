
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("요구사항 명세서")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항 명세서 작성",imgurl:"https://drive.google.com/file/d/1kXUNzXyEd3pHf_N24Ml1lMYutrexQ2cw/view?usp=drive_link",imglog:"테스트를 위해 이미지를 업로드 해보았습니다.",sourceurl:"https://docs.google.com/document/d/1GKb4KCQCVX5BapmCDsHbMlGxPlkgqoinWDiyjnQAtBY/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"요구사항 분석 구현방안",imgurl:"https://drive.google.com/file/d/155KbxDVrTdg5mWzd_pN3a2o3AlxAniJx/view?usp=drive_link",imglog:"테스트를 위해 이미지를 업로드 해보았습니다.",sourceurl:"https://docs.google.com/document/d/1GKb4KCQCVX5BapmCDsHbMlGxPlkgqoinWDiyjnQAtBY/edit?usp=drive_link"})//이미지타이틀


d1.set_content("개발언어 선정")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/12mATWYAsk2_t13bwMxUTbIpcVUQkLNvN/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1TgzcX9PAB-rhjfiBXmpoueaAdimE-Wd3_mTGUFF945g/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1MjuPRTlTfUs5dJUk4--fjJG2f9OZYkYV/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:"https://docs.google.com/document/d/1ZvhT9o0P--VH8h9TBkRGgm57umeKFxDHYrwY-Wl-Hb0/edit?usp=drive_link"})//이미지타이틀


d1.set_content("개발환경")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1mw6ZBtTbbZQYlfz1YQXCuTfoi-hnvfpg/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1C4-vDMhB5Lkt31I5jbT_OEI1ef9yx0Ic/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1k6DBLrI5PEDsx0L9efg-RHJ5udqz-fTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/build.gradle"})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1H3NpiDysf_PFgUv5gqiRy5Io_IuqIpOD/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈구현",imgurl:"https://drive.google.com/file/d/12BkzuBGDXQV7iHhkjTa0Y-6x82WBz9z7/view?usp=drive_link", imglog: "공통모듈 구현", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})//이미지타이틀
d2.set_img(0,{imgtitle:"공통 모듈 분리대상",imgurl:"https://drive.google.com/file/d/19pU7D1vZTsnUiNBFGkjHx4jDq46_Dnfh/view?usp=drive_link", imglog: "공통모듈 분리대상", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})//이미지타이틀
d2.set_content("테스트케이스")
d2.set_img(1,{imgtitle:"테스트케이스",imgurl:"https://drive.google.com/file/d/1qsVuqqV38LyiEKQEZf833YMrILA7v_Uc/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크",sourceurl:"https://docs.google.com/document/d/1LGus6JuO_ysu5ZUFzy0aO6Ej-Pmrx33SmFW5DyupxMc/edit?usp=drive_link"})//이미지타이틀
d2.set_content("단위테스트")
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1_qE3sbqwVOkNnyMAhLtcmADKuLVgwHRw/view?usp=drive_link",imglog:"첫번째 회원 로그인 성공",sourceurl:""})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/10RE4kdNXxDxEKt_5XTU7FC79cggNTz0c/view?usp=drive_link",imglog:"두번째 회원 로그인 성공",sourceurl:""})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1a9o_Q6Y8FRYBjvmJFHxUEr67z7RqNdcI/view?usp=drive_link",imglog:"JUnit 테스트",sourceurl:"https://docs.google.com/document/d/1TgzcX9PAB-rhjfiBXmpoueaAdimE-Wd3_mTGUFF945g/edit?usp=drive_link"})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1KibYdyCKb2-fQ5JJF2tF7-9B_k8wNNzn/view?usp=drive_link",imglog:"로그인 기능",sourceurl:"https://docs.google.com/document/d/1TgzcX9PAB-rhjfiBXmpoueaAdimE-Wd3_mTGUFF945g/edit?usp=drive_link"})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1YJt5SFKwpkEbWtnxqJgSqLe4y5Cg_7A_/view?usp=drive_link",imglog:"첫번째 회원 로그아웃 성공",sourceurl:""})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1o7Nw-cd75wvy4YrD55s3MbkaSDHXYpcY/view?usp=drive_link",imglog:"두번째 회원 로그아웃 성공",sourceurl:""})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1lqxPegX4WuaJKlgquHh2CX6zz2Ca2ZhN/view?usp=drive_link",imglog:"로그아웃 기능",sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1rSocdqrEbZz0EHf5hsUUpHZ02ay0lxhW/view?usp=drive_link",imglog:"로그아웃 기능",sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1RdqjCsgkQaB---MpsJ4xVKfDVZd-loYt/view?usp=drive_link",imglog:"로그인 실패",sourceurl:""})//이미지타이틀
d2.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1riQMI59snLFUvsjfmKJ04boHrj8kmucv/view?usp=drive_link",imglog:"로그인 실패",sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})//이미지타이틀


d2.set_content("테스트 결과보고서")
d2.set_img(3,{imgtitle:"테스트 결과보고서",imgurl:"https://drive.google.com/file/d/1cydFxY6lFmT4DlMlF1DVd-rdto5nzVZP/view?usp=drive_link",imglog:"테스트 결과 보고서",sourceurl:"https://docs.google.com/document/d/1rdD0PvvM5JBGO0pwOtxeeBnMEDwGJbrSyzXKGzGv0rQ/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1Tj3ZAMsM4CeBU3UAb4RYp0ieAIj2LyuK/view?usp=drive_link", imglog: "회원가입 첫 화면", sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1Iu4LG0QaJ80-KxMqtJPmK488EUH3Usxi/view?usp=drive_link", imglog: "첫번째 회원 입력하기", sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1F4tibjw7jFPWSmarTYWL1Dp11wKVm1t_/view?usp=drive_link", imglog: "두번째 회원 입력하기", sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1_2hQcUl_8chP4PEH1oV9clfpRejU687H/view?usp=drive_link", imglog: "회원가입 Form 코드", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1EzLXhZJiSebGb31If5ZSSUAe0-D9P6fu/view?usp=drive_link", imglog: "회원가입 Form 코드", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1TjlzMemUflC974_6zUGfnjUEvs0Ke1ms/view?usp=drive_link", imglog: "회원 서비스 코드", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberService.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1U73CF6Du1iLZcH5f-5zml26rxF0z_ZsX/view?usp=drive_link", imglog: "회원 로그인 시 확인", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAO.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입구현",imgurl:"https://drive.google.com/file/d/1a9o_Q6Y8FRYBjvmJFHxUEr67z7RqNdcI/view?usp=drive_link", imglog: "유효성 점검", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberServiceTests.java"})//이미지타이틀
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"회원로그인구현",imgurl:"https://drive.google.com/file/d/1_qE3sbqwVOkNnyMAhLtcmADKuLVgwHRw/view?usp=drive_link", imglog: "첫번째 회원 로그인 성공", sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"회원로그인구현",imgurl:"https://drive.google.com/file/d/10RE4kdNXxDxEKt_5XTU7FC79cggNTz0c/view?usp=drive_link", imglog: "두번째 회원 로그인 성공", sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"회원로그인구현",imgurl:"https://drive.google.com/file/d/1rdOWomdlBPLevyml4Wk0ZTah1YmauM_R/view?usp=drive_link", imglog: "회원가입 처리 쿼리", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_content("회원로그아웃 구현")
d3.set_img(2,{imgtitle:"회원 로그아웃",imgurl:"https://drive.google.com/file/d/1YJt5SFKwpkEbWtnxqJgSqLe4y5Cg_7A_/view?usp=drive_link", imglog: "첫번째 회원 로그아웃", sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"회원 로그아웃",imgurl:"https://drive.google.com/file/d/1o7Nw-cd75wvy4YrD55s3MbkaSDHXYpcY/view?usp=drive_link", imglog: "두번째 회원 로그아웃", sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"회원 로그아웃",imgurl:"https://drive.google.com/file/d/1lqxPegX4WuaJKlgquHh2CX6zz2Ca2ZhN/view?usp=drive_link", imglog: "로그아웃 UI 설정 및 처리", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})//이미지타이틀
d3.set_img(2,{imgtitle:"회원 로그아웃",imgurl:"https://drive.google.com/file/d/1rSocdqrEbZz0EHf5hsUUpHZ02ay0lxhW/view?usp=drive_link", imglog: "로그아웃 세션", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_content("회원리스트연동")
d3.set_img(3,{imgtitle:"회원리스트연동",imgurl:"https://drive.google.com/file/d/1Tj3ZAMsM4CeBU3UAb4RYp0ieAIj2LyuK/view?usp=drive_link", imglog: "회원 리스트 연원", sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트연동",imgurl:"https://drive.google.com/file/d/1Esd4jONEZv5PMjIZb-xdUoQmdfpt72w5/view?usp=drive_link", imglog: "회원 목록 조회", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트연동",imgurl:"https://drive.google.com/file/d/1I2JEoNdy-uZLvnidWWstx0dBk62_U1Hp/view?usp=drive_link", imglog: "리스트 수신", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})//이미지타이틀



d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀
d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"배치스케줄",imgurl:"https://drive.google.com/file/d/1k6DBLrI5PEDsx0L9efg-RHJ5udqz-fTr/view?usp=drive_link", imglog: "리스트 수신", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/build.gradle"})//이미지타이틀
d4.set_img(0,{imgtitle:"배치스케줄",imgurl:"https://drive.google.com/file/d/1MWrc930POECXGU8sMZinXaUNfi1qFTDx/view?usp=drive_link", imglog: "배치", sourceurl:"https://github.com/jennkeem/loginsystem/blob/main/LoginSystem/src/main/resources/application.properties"})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
