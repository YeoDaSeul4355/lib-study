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

          <h3 className="text-xl mb-3 mt-10">2. key, fetcher, data, error</h3>
          <p>SWR을 사용할 때에는 기본적으로 key, fetcher, data, error가 쓰인다.</p>
          <CodeBlock code={`const { data, error } = useSWR(key, fetcher);`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 key</h3>
          <p>요청을 보낼 주소를 의미한다. "/api/data"가 해당하는 부분.</p>
          <CodeBlock code={`const { data, error } = useSWR("/api/data", fetcher);`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 fetcher</h3>
          <p>SWR의 핵심적인 API로써, key를 받아 데이터를 반환하는 비동기 함수이다. 이 fetcher에는 데이터 페칭에 사용되는 Axios, GraphQL 등 어떠한 라이브러리든지 사용이 가능하다.</p>
          <CodeBlock code={`const fetcher = (url) => fetch(url).then((res) => res.json());

const { data, error } = useSWR(key, fetcher);

// 혹은 useSWR함수 내에서 바로 작성 가능

const { data, error } = useSWR(key, (url) => {
  fetch(url).then((res) => res.json());
});

`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">🍯 전역으로 fetcher 설정하기</h3>
          <p>  
            매번 fetcher를 선언해주는 것은 번거로울 수 있다. 이 번거로움을 해소하기 위해 SWR은 SWRconfig 컨텍스트를 통해 전역 fetcher를 설정할 수 있게 해준다.<br />
            이렇게 SWRConfig로 감싸주는 컴포넌트에선 value에 전달하는 options의 내용이 전역 설정으로써 전달된다.
          </p>
          <CodeBlock code={`<SWRConfig value={options}>
  <Component />
</SWRConfig>`}></CodeBlock>

          <CodeBlock code={`function App() {
  const options = {
    fetcher: (resource, init) =>
      fetch(resource, init).then((res) => res.json()),
  };
  return (
    <SWRConfig value={options}>
      <Home />
    </SWRConfig>
  );
}`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">👀 data</h3>
          <p>useSWR에 의해 반환된 데이터를 의미한다.</p>

          <h3 className="text-xl mb-3 mt-10">👀 error</h3>
          <p>데이터를 페칭하는 과정에서 오류가 발생할 시 반환된다.</p>

          <h3 className="text-xl mb-3 mt-10">3. 예시(1)</h3>
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

          <h3 className="text-xl mb-3 mt-10">4. mutate</h3>
          <p>
            mutate 함수는 데이터를 즉시 갱신하는 데 사용된다.<br />
            예를 들어, 사용자가 어떤 데이터를 업데이트했을 때 서버로부터 데이터를 가져오지 않고도 UI를 즉시 업데이트하고 싶을 때 유용하다.
          </p>
          <CodeBlock code={`import useSWR, { mutate } from 'swr';

function addComment(comment) {
  // 새로운 댓글을 서버로 보내고, 성공하면 UI를 업데이트한다고 가정
  // 서버에서 새로운 댓글을 추가한 후에 서버에서 다시 댓글 목록을 가져올 필요가 없다.
  // 대신에 즉시 UI를 업데이트할 수 있다.
  mutate('/api/comments', { comments: [comment, ...comments] }, false);
}

// addComment 함수가 호출된 후에 실제로 다시 검증하기 위해 true로 설정
await mutate('/api/comments');`}></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">5. 옵션</h3>
          <ul>
              <li className="list-disc ml-5">suspense = false: React Suspense 모드를 활성화 (상세내용)</li>
              <li className="list-disc ml-5">fetcher(args): fetcher 함수</li>
              <li className="list-disc ml-5">revalidateIfStale = true: 오래된 데이터가 있더라도 자동으로 다시 확인 (상세내용)</li>
              <li className="list-disc ml-5">revalidateOnMount: 컴포넌트가 마운트되었을 때 자동 갱신 활성화 또는 비활성화 (details)</li>
              <li className="list-disc ml-5">revalidateOnFocus = true: 창이 포커싱되었을 때 자동 갱신 (상세내용)</li>
              <li className="list-disc ml-5">revalidateOnReconnect = true: 브라우저가 네트워크 연결을 다시 얻었을 때 자동으로 갱신(navigator.onLine을 통해) (상세내용)</li>
              <li className="list-disc ml-5">refreshInterval (상세내용):
              기본적으로는 비활성화: refreshInterval = 0
              number로 설정된 경우, 폴링 인터벌(밀리초)
              function으로 설정된 경우, 함수가 최신 데이터를 받고 인터벌 반환(밀리초)</li>
              <li className="list-disc ml-5">refreshWhenHidden = false: 창이 보이지 않을 때 폴링(refreshInterval이 활성화된 경우)</li>
              <li className="list-disc ml-5">refreshWhenOffline = false: 브라우저가 오프라인일 때 폴링(navigator.onLine에 의해 결정됨)</li>
              <li className="list-disc ml-5">shouldRetryOnError = true: fetcher에 에러가 있을 때 재시도</li>
              <li className="list-disc ml-5">dedupingInterval = 2000: 이 시간 범위내에 동일 키를 사용하는 요청 중복 제거(밀리초)</li>
              <li className="list-disc ml-5">focusThrottleInterval = 5000: 이 시간 범위 동안 단 한 번만 갱신(밀리초)</li>
              <li className="list-disc ml-5">loadingTimeout = 3000: onLoadingSlow 이벤트를 트리거 하기 위한 타임아웃(밀리초)</li>
              <li className="list-disc ml-5">errorRetryInterval = 5000: 에러 재시도 인터벌(밀리초)</li>
              <li className="list-disc ml-5">errorRetryCount: 최대 에러 재시도 수</li>
              <li className="list-disc ml-5">fallback: 다중 폴백 데이터의 키-값 객체 (예시)</li>
              <li className="list-disc ml-5">fallbackData: 반환될 초기 데이터(노트: hook 별로 존재)</li>
              <li className="list-disc ml-5">keepPreviousData = false: 새 데이터가 로드될 때까지 이전 키의 데이터를 반환 (상세내용)</li>
              <li className="list-disc ml-5">onLoadingSlow(key, config): 요청을 로드하는 데 너무 오래 걸리는 경우의 콜백 함수(loadingTimeout을 보세요)</li>
              <li className="list-disc ml-5">onSuccess(data, key, config): 요청이 성공적으로 종료되었을 경우의 콜백 함수</li>
              <li className="list-disc ml-5">onError(err, key, config): 요청이 에러를 반환했을 경우의 콜백 함수</li>
              <li className="list-disc ml-5">onErrorRetry(err, key, config, revalidate, revalidateOps): 에러 재시도 핸들러</li>
              <li className="list-disc ml-5">onDiscarded(key): 경합 상태(race condition)로 인해 요청이 무시될 경우 실행되는 콜백 함수</li>
              <li className="list-disc ml-5">compare(a, b): 비논리적인 리렌더러를 회피하기 위해 반환된 데이터가 변경되었는지를 감지하는데 사용하는 비교 함수. 기본적으로 stable-hash(opens in a new tab)을 사용합니다.</li>
              <li className="list-disc ml-5">isPaused(): 갱신의 중지 여부를 감지하는 함수. true가 반환될 경우 가져온 데이터와 에러는 무시합니다. 기본적으로는 false를 반환합니다.</li>
              <li className="list-disc ml-5">use: 미들웨어 함수의 배열 (상세내용)</li>
            
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Swr;
