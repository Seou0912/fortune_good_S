import { useNavigate } from "react-router-dom";

const SocialKakao = () => {
  const navigate = useNavigate();

  const Rest_api_key = "9ee0d285dac20ea6ec19791c1f513e9d"; //REST API KEY
  const redirect_uri = "http://localhost:3000/kakao_callback"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleLoginSuccess = () => {
    // 로그인 성공 후 처리 로직
    navigate("./DailyQuote/todays-message"); // 로그인 성공 후 페이지 이동
  };
  const handleLoginError = () => {
    // 로그인 실패 후 처리 로직
  };

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default SocialKakao;
