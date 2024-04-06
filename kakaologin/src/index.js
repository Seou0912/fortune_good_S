import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
