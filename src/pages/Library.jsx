import React from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/section/SectionTitle";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="pt-[10%] relatve">
      <SectionTitle pretitle="summary" title="라이브러리 개념 정리">
        공부한 라이브러리의 용도나 사용법을 정리해두었습니다!
      </SectionTitle>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="pt-[10%] font-NanumSquareNeo">
          <img
            src="./images/logo/react_hook_form.svg"
            className="h-40 w-40"
            alt="client logo"
          />
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              react-hook-form
            </h3>

            <p className="max-w-4xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              react-hook-form은 React 어플리케이션에서 폼을 관리하기 위한
              라이브러리 중 하나입니다.이 라이브러리는 간단하고 성능이 우수하며,
              컴포넌트 기반의 API를 제공하여 폼 상태를 쉽게 관리할 수 있도록
              도와줍니다.
            </p>
          </div>

          <div className="w-full mt-5">
            <ul>
              <li>우앙</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Library;
