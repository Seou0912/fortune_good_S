import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SocialKakao from "./pages/SocialKakao/SocialKakao";
import TodaysMessage from "./pages/DailyQuote/todays-message";
import SlideShow from "./pages/SlickCarousel/slick";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/accounts/kakao/login/" element={<SocialKakao />} />
          {/* <Route path="/todays-message" element={<TodaysMessage />} /> */}
          <Route path="/" element={<SlideShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// const SocialKakao = () => {
//   const Rest_api_key = "9ee0d285dac20ea6ec19791c1f513e9d"; //REST API KEY
//   const redirect_uri = "http://localhost:3000/kakao_callback"; //Redirect URI
//   // oauth 요청 URL
//   const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
//   const handleLogin = () => {
//     window.location.href = kakaoURL;
//   };
//   const handleKakaoLogin = () => {
//     // 로그인 성공 후 슬라이드 화면으로 리디렉션
//     navigate("/components/SlickCarousel/slick");
//   };
//   return (
//     <>
//       <button onClick={handleLogin}>카카오 로그인</button>
//     </>
//   );
// };
// export default SocialKakao;
