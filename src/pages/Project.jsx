import React from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/section/SectionTitle";
import { Link } from "react-router-dom";

const project = () => {
  return (
    <div className="pt-[10%] relatve">
      {/* <img
        src="./images/3d-img/computer.svg"
        className="w-[13%] mx-auto absolute right-[30%] top-[13%] z-[-1] rotate-[-25deg]"
        alt="client logo"
      />
      <img
        src="./images/3d-img/folder.svg"
        className="w-[10%] mx-auto absolute right-[15%] top-[25%] z-[-1] rotate-[10deg]"
        alt="client logo"
      /> */}
      <SectionTitle
        pretitle="simple project"
        title="라이브러리를  활용한 예제와 프로젝트"
      >
        라이브러리를 활용해 여러가지 예제, 프로젝트 등 작업한 것을
        모아놓았습니다!
      </SectionTitle>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 pt-10 font-NanumSquareNeo">
          <div className="">
            <Link to="/react-hook-form-login">
              <div className="flex flex-col justify-between border-2 w-full h-[300px] bg-react-hook-form-login bg-cover px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover-container"></div>
            </Link>
            <p className="text-center pt-8">
              <span className="text-primary">react-hook-form</span>을 이용한
              로그인 기능
            </p>
            <Link
              to="https://github.com/YeoDaSeul4355/react-lib-study/blob/main/src/pages/react-hook-form/LoginForm.jsx"
              target="_blank"
            >
              <p className="mt-8 bg-primary py-3 text-center rounded-3xl text-white transition-all duration-500 hover:bg-primary_hover">
                코드 보기
              </p>
            </Link>
          </div>
          <div className="">
            <Link to="/zustand-memo">
              <div className="flex flex-col justify-between border-2 w-full h-[300px] bg-zustand-memo bg-cover px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover-container"></div>
            </Link>
            <p className="text-center pt-8">
              <span className="text-primary">zustand</span>와
              <span className="text-primary">style-components</span>을 이용한
              메모 기능
            </p>
            <Link
              to="https://github.com/YeoDaSeul4355/react-lib-study/tree/main/src/pages/zustand-memo"
              target="_blank"
            >
              <p className="mt-8 bg-primary py-3 text-center rounded-3xl text-white transition-all duration-500 hover:bg-primary_hover">
                코드 보기
              </p>
            </Link>
          </div>
          <div className="">
            <Link to="/zustand-todo">
              <div className="flex flex-col justify-between border-2 w-full h-[300px] bg-zustand-todo bg-cover px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover-container"></div>
            </Link>
            <p className="text-center pt-8">
              <span className="text-primary">zustand</span>와
              <span className="text-primary">framer-motion</span>을 이용한 투두
              리스트
            </p>
            <Link
              to="https://github.com/YeoDaSeul4355/react-lib-study/tree/main/src/pages/zustand-todo"
              target="_blank"
            >
              <p className="mt-8 bg-primary py-3 text-center rounded-3xl text-white transition-all duration-500 hover:bg-primary_hover">
                코드 보기
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default project;
