import React from "react";
import SectionTitle from "../../components/layout/section/SectionTitle";
import Container from "../../components/layout/Container";
import CodeBlock from "../../utils/CodeBlock";

const Yup = () => {
  return (
    <div className="pt-[10%] relatve p-10">
      <Container>
        <img
          src="../images/logo/swr.svg"
          className="h-40 w-40"
          alt="zustand logo"
        />
      </Container>
      <SectionTitle title="Yup">
        yup은 JavaScript로 작성된 <span className="text-primary">데이터 유효성 검사 라이브러리</span>로, 주로 폼이나 API 요청과 같은 사용자 입력 데이터의 유효성을 확인하는 데 사용된다.<br />
        yup은 간단하고 직관적인 API를 제공하여 <span className="text-primary">데이터 스키마를 정의하고 유효성 검사 규칙을 쉽게 작성</span>할 수 있다.
      </SectionTitle>
      <Container>
        <div className="font-NanumSquareNeo pt-[5%]">
          <h2 className="text-2xl mb-3">🤔yup을 왜 써야할까?</h2>
          <p className="text-gray-300">
            yup 없이 유효성 검사하기
          </p>
          <CodeBlock
            code={`function validateFormData(data) {
  let errors = {};

  if (!data.name) {
    errors.name = '이름을 입력하세요.';
  }

  if (!data.age) {
    errors.age = '나이를 입력하세요.';
  } else if (isNaN(data.age) || data.age <= 0) {
    errors.age = '나이는 양의 정수여야 합니다.';
  }

  if (!data.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!isValidEmail(data.email)) {
    errors.email = '유효한 이메일을 입력하세요.';
  }

  return errors;
}

function isValidEmail(email) {
  // 이메일 유효성 검사 로직
}

const formData = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

const errors = validateFormData(formData);

if (Object.keys(errors).length === 0) {
  console.log('유효한 데이터입니다.');
} else {
  console.error(errors);
}
`} />
          <p>
            상태 관리 없이 구현한다면, 각 할 일 항목에 우선순위를 추가하는 것만으로도 <span className="text-primary">복잡성이 증가한다.</span><br />
            우선순위가 변경될 때마다 각 항목을 <span className="text-primary">다시 렌더링해야 하며, 우선순위 변경 로직도 추가</span>해야 한다.
            
          </p>

          <h2 className="text-2xl mb-3 mt-10">💜yup 적용</h2>
          <p>
            1. <span className="text-primary">데이터 스키마 정의</span>: 데이터 객체의 구조를 정의할 수 있는데, 이는 각 필드의 데이터 타입, 필수 여부, 최소/최대 값 등을 명시할 수 있다. <br />
            2. <span className="text-primary">유효성 검사 규칙 설정</span>: 각 필드에 대한 유효성 검사 규칙을 설정할 수 있다. 이메일 형식, 최소/최대 길이, 정규표현식 등 다양한 유효성 검사 규칙을 쉽게 정의할 수 있다.<br />
            3. <span className="text-primary">데이터 유효성 검사</span>: 정의된 데이터 스키마와 유효성 검사 규칙을 사용하여 데이터 객체의 유효성을 검사할 수 있다. 그리고 입력 데이터가 스키마에 맞지 않는 경우 오류 메시지를 반환하여 사용자에게 피드백을 제공할 수 있다.
          </p>
          <CodeBlock
            code={`import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요.'),
  age: yup.number().positive().integer().required('나이를 입력하세요.'),
  email: yup.string().email('유효한 이메일을 입력하세요.').required('이메일을 입력하세요.'),
});

const formData = {
 name: 'Da Seul',
  age: 24,
  email: 'yds43557340@gmail.com',
};

schema.validate(formData)
  .then(valid => console.log('유효한 데이터입니다.'))
  .catch(errors => console.error(errors));
`}/>

          <h2 className="text-2xl mb-3 mt-10">📝yup 사용법</h2>
        
          <h3 className="text-xl mb-3 mt-10">1. yup 설치</h3>
           <CodeBlock
            code={`npm install yup`}
          ></CodeBlock>
          <CodeBlock
            code={`yarn add yup`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">2. 데이터 스키마 정의</h3>
          <p>yup을 사용하여 데이터 스키마를 정의하는데, 이는 검사할 데이터의 구조와 각 필드의 유효성 검사 규칙을 포함한다.</p>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요.'),
  age: yup.number().positive().integer().required('나이를 입력하세요.'),
  email: yup.string().email('유효한 이메일을 입력하세요.').required('이메일을 입력하세요.'),
});
          
`} />
          
          <h3 className="text-xl mb-3 mt-10">3. 데이터 유효성 검사</h3>
          <p>  
            정의된 스키마를 사용하여 데이터의 유효성을 검사하는데, 유효성 검사 결과는 Promise로 반환된다.
          </p>
          <CodeBlock code={`const data = {
  name: 'Da Seul',
  age: 24,
  email: 'yds43557340@gmail.com',
};

schema.validate(data)
  .then(valid => console.log('유효한 데이터입니다.'))
  .catch(errors => console.error(errors));
`} />

           <h2 className="text-2xl mb-3 mt-10">💜schema 예시</h2>
           <p>
             yup의 스키마를 사용하여 다양한 데이터 유형을 검사하는 예시
           </p>

          <h3 className="text-xl mb-3 mt-10">1. 문자열(string) 유효성 검사</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.string().required('문자열을 입력하세요.');

schema.validate('hello')
  .then(valid => console.log('유효한 문자열입니다.'))
  .catch(errors => console.error(errors));
`} />

          <h3 className="text-xl mb-3 mt-10">2. 숫자(number) 유효성 검사</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.number().positive().integer().required('양의 정수를 입력하세요.');

schema.validate(42)
  .then(valid => console.log('유효한 숫자입니다.'))
  .catch(errors => console.error(errors));
`} />

          <h3 className="text-xl mb-3 mt-10">3. 부울(boolean) 유효성 검사</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.boolean().required('부울 값을 입력하세요.');

schema.validate(true)
  .then(valid => console.log('유효한 부울 값입니다.'))
  .catch(errors => console.error(errors));
`} />

           <h3 className="text-xl mb-3 mt-10">4. 객체(object) 유효성 검사</h3>
           <CodeBlock code={`import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요.'),
  age: yup.number().positive().integer().required('나이를 입력하세요.'),
});

const data = {
  name: 'John',
  age: 30,
};

schema.validate(data)
  .then(valid => console.log('유효한 객체입니다.'))
  .catch(errors => console.error(errors));
`} />
          <h3 className="text-xl mb-3 mt-10">4. 배열(array) 유효성 검사</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.array().of(yup.number().required()).required('숫자 배열을 입력하세요.');

const data = [1, 2, 3];

schema.validate(data)
  .then(valid => console.log('유효한 배열입니다.'))
  .catch(errors => console.error(errors));
`} />
          <h3 className="text-xl mb-3 mt-10">5. 날짜(date) 유효성 검사</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.date().max(new Date(), '미래의 날짜를 입력하세요.').required('날짜를 입력하세요.');

const date = new Date();

schema.validate(date)
  .then(valid => console.log('유효한 날짜입니다.'))
  .catch(errors => console.error(errors));
`} />

          <h3 className="text-xl mb-3 mt-10">6. 정규표현식 사용하기</h3>
          <CodeBlock code={`import * as yup from 'yup';

const schema = yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식(YYYY-MM-DD)으로 입력하세요.').required('날짜를 입력하세요.');

const dateString = '2024-03-30';

schema.validate(dateString)
  .then(valid => console.log('유효한 날짜입니다.'))
  .catch(errors => console.error(errors));
`} />
        </div>
      </Container>
    </div>
  );
};

export default Yup;
