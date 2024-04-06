import React, { useState, useEffect } from "react";
import axios from "axios"; // axios 라이브러리를 가져옵니다
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading message...");

  useEffect(() => {
    // axios를 사용하여 API에서 메시지를 불러옵니다
    axios
      .get("/api/message/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []); // 빈 의존성 배열은 컴포넌트가 마운트될 때 이펙트를 한 번만 실행하도록 보장

  return (
    <div className="App">
      <div className="messageContainer">
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
