import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상세페이지
// 1-1. 내비게이션 바 만들기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨
  useEffect(() => {
    console.log("Aaaa", authenticate);
  }, [authenticate]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
