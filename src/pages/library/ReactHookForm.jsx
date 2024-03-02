import React from "react";
import SectionTitle from "../../components/layout/section/SectionTitle";
import Container from "../../components/layout/Container";
import CodeBlock from "../../utils/CodeBlock";

const ReactHookForm = () => {
  return (
    <div className="pt-[10%] relatve p-10">
      <Container>
        <img
          src="../images/logo/react_hook_form.svg"
          className="h-40 w-40"
          alt="client logo"
        />
      </Container>
      <SectionTitle title="react-hook-form">
        React Hook Form은 React 내에서 From을 쉽게 제어하고 손쉽게 유효성 검사를
        처리하도록 도와주는 라이브러리다. 다른 종속성이 없는 최소한의
        라이브러리로 구성되어 있어 성능이 뛰어나고 사용이 간편하다.
      </SectionTitle>
      <Container>
        <div className="font-NanumSquareNeo pt-[5%]">
          <h2 className="text-2xl mb-3">🤔"react-hook-form"을 왜 써야할까?</h2>
          <p className="text-gray-300">
            react-hook-form을 쓰지 않고 기존 입력 필드 처리
          </p>
          <CodeBlock
            code={`import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}`}
          ></CodeBlock>
          <p>
            기존에 입력 필드들을 처리할 때면{" "}
            <span className="text-primary">state</span>를 선언하고{" "}
            <span className="text-primary">
              각 입력 필드에 event를 연결해 value를 받아오는 과정
            </span>
            을 거쳐야 한다. 이런 입력 필드가 많은 회원가입, 설문조사 등 입력
            필드가 많아 질 수록 제어하기 힘들어지고 유효성 검사를 처리하기
            어려워진다!
          </p>

          <h2 className="text-2xl mb-3 mt-10">💜react-hook-form 적용</h2>
          <p>
            React Hook Form을 사용하게 되면 value와 onChange로 각 입력 필드에
            대한 처리를 추가할 필요가 없고 state를 직접 관리할 필요가 없다.
          </p>
          <CodeBlock
            code={`import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register} />
        <input type="password" name="password" ref={register} />
        <button type="submit">Login</button>
      </form>
    </div>
  );`}
          ></CodeBlock>

          <h2 className="text-2xl mb-3 mt-10">📝react-hook-form 사용법</h2>
          <CodeBlock
            code={`const { register, handleSubmit, errors } = useForm();`}
          ></CodeBlock>
          <p>
            React Hook Form은 form 작업에 사용할 수 있는 useForm hook을
            제공한다. hook은 초기값 설정, 입력 필드 지우기 기능 등을 제공하는데,
            제일 중요한 개념 3가지만 알아보자.
          </p>

          <h3 className="text-xl mb-3 mt-10">[register]</h3>
          <p>
            ref로 사용되는 함수로 입력 필드를 React Hook Form에 등록하고 변경
            사항에 대해 값을 추적한다. 이때 주의할 점은 입력 필드에 name속성이
            반드시 있어야한다.
          </p>
          <CodeBlock
            code={`<input type="text" name="email" ref={register} />`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">[handleSubmit]</h3>
          <p>form을 서버로 제출할 때 사용하는 함수이다.</p>
          <CodeBlock
            code={`<form onSubmit={handleSubmit(onSubmit)}>

const onSubmit = (data) => {  
    console.log(data);
};`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">[errors]</h3>
          <p>유효성 검사를 포함하는 객체이다.</p>
          <CodeBlock
            code={`<input type="text" name="email" ref={register({ required: true})} />
<input
  type="password"
  name="password"
  ref={register({ required: true, minLength: 6 })}
/>
`}
          ></CodeBlock>

          <h2 className="text-2xl mb-3 mt-10">🪄validation 기본 구현</h2>
          <p>
            validation를 추가하기 위해서는 각 입력 필드 ref로 전달되는 레지스터
            함수에 유효성 검사를 매개변수를 전달한다.
          </p>
          <CodeBlock
            code={`<input type="text" name="email" ref={register({ required: true})} />
<input
  type="password"
  name="password"
  ref={register({ required: true, minLength: 6 })}
/>
`}
          ></CodeBlock>
          <h3 className="text-xl mb-3 mt-10">
            자주 사용되는 유효성 검사 속성들
          </h3>
          <ul>
            <li className="list-disc ml-5">
              required : 입력 필드에 대한 필수 여부 검사
            </li>
            <li className="list-disc ml-5">
              minlength maxlength : 문자열 입력 값의 최소, 최대 길이 설정
            </li>
            <li className="list-disc ml-5">
              min max : 숫자 입력 값의 최소값, 최대값 설정
            </li>
            <li className="list-disc ml-5">
              type : 입력 필드에 대한 유형 (이메일, 숫자, 텍스트 등)
            </li>
            <li className="list-disc ml-5">
              pattern : 정규식을 이용한 입력 필드에 대한 패턴 정의
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default ReactHookForm;
