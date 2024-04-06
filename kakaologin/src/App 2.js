import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SocialKakao from "./pages/SocialKakao/SocialKakao";
import TodaysMessage from "./pages/DailyQuote/todays-message";

function App() {
  return (
    <div>
      <SimpleSlider />
      {
        <Router>
          <Routes>
            <Route path="/accounts/kakao/login/" element={<SocialKakao />} />
            <Route path="/todays-message" element={<TodaysMessage />} />
            <Route path="/" element={<SimpleSlider />} /> // 홈 경로에
            SimpleSlider 컴포넌트를 라우트합니다.
          </Routes>
        </Router>
      }
    </div>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SocialKakao />} />
    //     <Route path="/todays-message" element={<TodaysMessage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
