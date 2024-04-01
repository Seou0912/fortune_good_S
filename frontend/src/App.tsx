import { Route, Routes } from "react-router-dom";
import { testBackgroundStyle } from "./App.css";

const Home = () => {
  return <div className={testBackgroundStyle}>Home</div>;
};
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  );
}

export default App;
