import React from "react";
import SectionTitle from "../../components/layout/section/SectionTitle";
import Container from "../../components/layout/Container";
import CodeBlock from "../../utils/CodeBlock";

const Swr = () => {
  return (
    <div className="pt-[10%] relatve p-10">
      <Container>
        <img
          src="../images/logo/swr.svg"
          className="h-40 w-40"
          alt="zustand logo"
        />
      </Container>
      <SectionTitle title="SWR">
         SWR 라이브러리는 "Stale-While-Revalidate"의 약자로 이 라이브러리는 데이터를 가져오고 캐시하며, 해당 데이터가 사용되는 동안 캐시를 유지한다. 
         도중에 에러를 반환하더라도 캐시된 데이터를 활용할 수 있게 함으로써 <span className="text-primary">불필요한 데이터 호출과 렌더링에 시간을 쓰지 않고 효율적으로 동작</span>한다.
      </SectionTitle>
      <Container>
        <div className="font-NanumSquareNeo pt-[5%]">
          <h2 className="text-2xl mb-3">🤔SWR를 왜 써야할까?</h2>
          <p className="text-gray-300">
            swr 없이 데이터 가져오기
          </p>
          <CodeBlock
            code={`import { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/data');
      setData(result.data);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>{data}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
`}
          ></CodeBlock>
          <p>
            상태 관리 없이 구현한다면, 각 할 일 항목에 우선순위를 추가하는 것만으로도 <span className="text-primary">복잡성이 증가한다.</span><br />
            우선순위가 변경될 때마다 각 항목을 <span className="text-primary">다시 렌더링해야 하며, 우선순위 변경 로직도 추가</span>해야 한다.
            
          </p>

          <h2 className="text-2xl mb-3 mt-10">💜SWR 적용</h2>
          <p>
            1. <span className="text-primary">캐시 및 무효화 관리</span>: SWR은 데이터를 자동으로 캐싱하고, 데이터가 변할 때 캐시를 업데이트한다. 또한 서버로 요청을 보내고 다시 받아오는 과정을 자동으로 관리하여 앱의 성능을 최적화할 수 있다. <br />
            2. <span className="text-primary">타임리프 요청 제어</span>: SWR은 데이터를 가져오는 빈도를 제어할 수 있다. 사용자가 페이지를 열 때마다 매번 데이터를 요청하는 대신, 일정 시간 동안 데이터를 캐시하고 그 사이에는 캐시된 데이터를 사용할 수 있도록 설정할 수 있다.<br />
            3. <span className="text-primary">서버 사이드 렌더링 호환</span>: SWR은 서버 사이드 렌더링 (SSR)을 지원하므로, 서버 측에서도 데이터를 미리 가져와서 페이지를 렌더링할 수 있다.
          </p>
          <CodeBlock
            code={`import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/data', url => fetch(url).then(res => res.json()));
  
  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>{data}</div>;
}
`}
          ></CodeBlock>

          <h2 className="text-2xl mb-3 mt-10">📝SWR 사용법</h2>
        
          <h3 className="text-xl mb-3 mt-10">1. SWR 설치</h3>
           <CodeBlock
            code={`npm install swr`}
          ></CodeBlock>
          <CodeBlock
            code={`yarn add swr`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">2. key, fetcher, data, errorPermalink</h3>
          <p>SWR을 사용할 때에는 기본적으로 key, fetcher, data, error가 쓰인다.</p>
          <CodeBlock code={`const { data, error } = useSWR(key, fetcher);`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 key</h3>
          <p>요청을 보낼 주소를 의미한다. "/api/data"가 해당하는 부분.</p>
          <CodeBlock code={`const { data, error } = useSWR("/api/data", fetcher);`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 fetcher</h3>
          <p>SWR의 핵심적인 API로써, key를 받아 데이터를 반환하는 비동기 함수이다. 이 fetcher에는 데이터 페칭에 사용되는 Axios, GraphQL 등 어떠한 라이브러리든지 사용이 가능하다.</p>
          <CodeBlock code={`const { data, error } = useSWR("/api/data", fetcher);`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">🍯 전역으로 fetcher 설정하기</h3>
          <p>  
            매번 fetcher를 선언해주는 것은 번거로울 수 있다. 이 번거로움을 해소하기 위해 SWR은 SWRconfig 컨텍스트를 통해 전역 fetcher를 설정할 수 있게 해준다.<br />
            이렇게 SWRConfig로 감싸주는 컴포넌트에선 value에 전달하는 options의 내용이 전역 설정으로써 전달된다.
          </p>
          <CodeBlock code={`<SWRConfig value={options}>
  <Component />
</SWRConfig>`}></CodeBlock>

          <CodeBlock code={`<SWRConfig value={options}>
  <Component />
</SWRConfig>`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 data</h3>
          <p>useSWR에 의해 반환된 데이터를 의미한다.</p>

          <h3 className="text-xl mb-3 mt-10">👀 error</h3>
          <p>데이터를 페칭하는 과정에서 오류가 발생할 시 반환된다.</p>

          <h3 className="text-xl mb-3 mt-10">3. 실제 예시</h3>
          <p>보통은 utils 파일에 fetcher.js를 생성해 필요한 컴포넌트에서 import해서 사용한다.</p>
          <CodeBlock code={`// utils/fetcher.js

// fetcher 유틸리티 함수 정의
export default async function fetcher(url) {
  const res = await fetch(url); // 네트워크 요청
  if (!res.ok) throw new Error('Failed to fetch data'); // 에러 처리
  return res.json(); // JSON 데이터 반환
}`}></CodeBlock>
          <CodeBlock code={`// HomePage.jsx

import useSWR from 'swr';
import fetcher from '../utils/fetcher'; // 데이터를 가져오는 fetcher 유틸리티 함수

function HomePage() {
  // SWR 훅을 사용하여 데이터 가져오기
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>My App</h1>
      <p>{data.message}</p>
    </div>
  );
}

export default HomePage;`}></CodeBlock>
        </div>
      </Container>
    </div>
  );
};

export default Swr;
