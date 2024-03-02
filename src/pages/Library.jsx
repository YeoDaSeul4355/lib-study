import React from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/section/SectionTitle";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="pt-[10%] relatve">
      <SectionTitle pretitle="summary" title="라이브러리 개념 정리">
        공부한 라이브러리의 용도나 사용법을 정리해두었습니다! <br />
        (아이콘을 누르면 공식 문서로 이동)
      </SectionTitle>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex flex-wrap font-NanumSquareNeo">
          {/* 라이브러리 요소 */}
          <div className="m-[5%]">
            <Link
              to="https://react-hook-form.com/"
              target="_blank"
              className="inline-block"
            >
              <img
                src="./images/logo/react_hook_form.svg"
                className="h-20 w-20 ml-6 mb-3"
                alt="client logo"
              />
            </Link>
            <p>react-hook-form</p>
            <Link to="/library/react-hook-form" target="_blank">
              <p className="mt-2 bg-primary py-1 text-center rounded-3xl text-white transition-all duration-500 hover:bg-primary_hover">
                학습 내용
              </p>
            </Link>
          </div>
          {/* 라이브러리 요소 */}
        </div>
      </Container>
    </div>
  );
};

export default Library;
