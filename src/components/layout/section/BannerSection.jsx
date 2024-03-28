import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto font-NanumSquareNeo">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-3xl md:text-4xl xl:text-7xl">
              Library Study
              <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black">
                with
                <span className="text-primary dark:text-white">
                  💜JJul Coding💜
                </span>
              </div>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              라이브러리 스터디 사이트에 오신 걸 환영합니다! <br />
              프론트엔드 개발에 활용되는 라이브러리 종류를 알아보고
              쓰임새를 정리한 사이트입니다.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                to="/"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  About
                </span>
              </Link>
              <Link
                to="/"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </Link>
            </div>

            {/* 라이브러리 장점 */}
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-center">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  State Management
                </h6>
                <p className="mt-2 text-gray-500">상태 관리</p>
              </div>
              <div className="text-center">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  SPA Routing
                </h6>
                <p className="mt-2 text-gray-500">페이지 라우팅</p>
              </div>
              <div className="text-center">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  UI Styling
                </h6>
                <p className="mt-2 text-gray-500">UI 컴포넌트</p>
              </div>
            </div>
          </div>
          {/* 로고 */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/MUI.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/zustand.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/react_hook_form.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/redux.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/antDesign.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 cursor-pointer grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/logo/swr.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
