import React from "react";
import "./style.css"; // CSS 파일 경로가 맞는지 확인하세요.

function Login() {
  // 이벤트 핸들러와 상태 관리 로직을 추가하세요.

  return (
    <div>
      <div className="logo">
        <img src="f_logo.png" width="40" height="auto" alt="logo" />
        <a href="#">Daily Fortune</a>
      </div>

      <div className="container">
        <h1>Login to your account 👋🏼</h1>
        <div className="social-login">
          <button className="apple">
            <i className="bx bxl-apple"></i>
            Use apple
          </button>

          <button className="Kakao">
            <i className="bx bxl-kickstarter"></i>
            Use Kakao
          </button>
        </div>
        <div className="divider">
          <div className="line"></div>
          <p>Or</p>
          <div className="line"></div>
        </div>

        <form>
          <label htmlFor="email">Email:</label>
          <div className="custome-input">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
            />
            <i className="bx bx-at"></i>
          </div>
          <label htmlFor="password">Password:</label>
          <div className="custome-input">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <button type="submit" className="login">
            Login
          </button>
          <div className="links">
            <a href="#">Reset Password</a>
            <a href="#">Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
