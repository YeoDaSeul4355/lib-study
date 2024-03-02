import { useForm } from "react-hook-form";
import React from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 font-NanumSquareNeo">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white NanumSquareNeo">
              로그인
            </h1>
            <form
              noValidate
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(async (data) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(
                  "이메일: " + data.email + "   비밀번호: " + data.password
                );
              })}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="이메일을 입력해주세요!"
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      // 정규식
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                  // 웹 접근성을 위한 속성
                  aria-invalid={
                    isSubmitted ? (errors.email ? "true" : "false") : undefined
                  }
                />
                {/* 에러메세지 */}
                {errors.email && (
                  <small className="text-red-500 ml-1">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요!"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      // 최소 값
                      value: 8,
                      message: "8자리 이상 비밀번호를 입력해주세요.",
                    },
                  })}
                  aria-invalid={
                    isSubmitted
                      ? errors.password
                        ? "true"
                        : "false"
                      : undefined
                  }
                />
                {errors.password && (
                  <small className="text-red-500 ml-1" role="alert">
                    {errors.password.message}
                  </small>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
