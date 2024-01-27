import React from "react";
import Contents from "../layout/Contents";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Contents>
        <Link to="/react-hook-form-login">
          리액트 훅 폼으로 로그인 기능 구현하기
        </Link>
      </Contents>
    </>
  );
};

export default Home;
