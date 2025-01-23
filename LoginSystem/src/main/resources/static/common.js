async function login(mid, mpw) { // 로그인 함수 분리
	const logindata = ($("#mid").val(), $("#mpw").val())
	const ctype = "application/json"
	const res = await fetch("/member/login", { method: "post", headers: { "Content-type": ctype }, body: JSON.stringify(logindata) }) // 실시간으로 보내기
	const data = await res.json();
	return data;
}

function logout(logoutui) { // 로그아웃 함수 분리
	logoutui.attr("href", "/member/logout").text("로그아웃")

}