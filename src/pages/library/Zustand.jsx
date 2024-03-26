import React from "react";
import SectionTitle from "../../components/layout/section/SectionTitle";
import Container from "../../components/layout/Container";
import CodeBlock from "../../utils/CodeBlock";

const Zustand = () => {
  return (
    <div className="pt-[10%] relatve p-10">
      <Container>
        <img
          src="../images/logo/zustand.svg"
          className="h-40 w-40"
          alt="zustand logo"
        />
      </Container>
      <SectionTitle title="Zustand">
        Zustand는 React 내에서 상태 관리를 도와주는 라이브러리 중 하나이다. 
        Zustand는 Redux와 비슷한 기능을 제공하지만, 더 간단하고 직관적인 API를 가지고 있다. 
      </SectionTitle>
      <Container>
        <div className="font-NanumSquareNeo pt-[5%]">
          <h2 className="text-2xl mb-3">🤔zustand를 왜 써야할까?</h2>
          <p className="text-gray-300">
            zustand 없이 기존 useState로 todolist 구현
          </p>
          <CodeBlock
            code={`import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', priority: '중요', completed: false },
    { id: 2, text: 'Zustand 써보기', priority: '보통', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const changePriority = (id, newPriority) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, priority: newPriority };
      }
      return todo;
    }));
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <select value={todo.priority} onChange={(e) => changePriority(todo.id, e.target.value)}>
              <option value="낮음">낮음</option>
              <option value="보통">보통</option>
              <option value="중요">중요</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`}
          ></CodeBlock>
          <p>
            상태 관리 없이 구현한다면, 각 할 일 항목에 우선순위를 추가하는 것만으로도 <span className="text-primary">복잡성이 증가한다.</span><br />
            우선순위가 변경될 때마다 각 항목을 <span className="text-primary">다시 렌더링해야 하며, 우선순위 변경 로직도 추가</span>해야 한다.
          </p>

          <h2 className="text-2xl mb-3 mt-10">💜Zustand 적용</h2>
          <p>
            Zustand를 사용하면 상태 변경 로직을 <span className="text-primary">상태 관리자 함수에 분리</span>하여 복잡성을 줄일 수 있다.<br />
            보통 store.js라는 파일에 각 액션에 대한 함수들을 작성하고 import하는 방식으로 많이 쓰인다.(유지보수에 용이)
          </p>
          <CodeBlock
            code={`// store.js
import create from 'zustand';

// 상태 관리를 위한 초기 상태 정의
const useTodoStore = create((set) => ({
  todos: [
    { id: 1, text: 'React 공부하기', priority: '중요', completed: false },
    { id: 2, text: 'Zustand 써보기', priority: '보통', completed: false }
  ],
  // 상태를 변경하는 액션들 정의
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  },
  changePriority: (id, newPriority) => {
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    }));
  },
  addTodo: (text, priority) => {
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, priority, completed: false }]
    }));
  }
}));

export default useTodoStore;
`}
          ></CodeBlock>

          <CodeBlock
            code={`import React from 'react';
import useTodoStore from './store';

function TodoList() {
  const todos = useTodoStore(state => state.todos);
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const changePriority = useTodoStore(state => state.changePriority);

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <select value={todo.priority} onChange={(e) => changePriority(todo.id, e.target.value)}>
              <option value="낮음">낮음</option>
              <option value="보통">보통</option>
              <option value="중요">중요</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
`}
          ></CodeBlock>

          <h2 className="text-2xl mb-3 mt-10">📝Zustand 사용법</h2>
        
          <h3 className="text-xl mb-3 mt-10">1. Zustand 설치</h3>
           <CodeBlock
            code={`npm install zustand`}
          ></CodeBlock>
          <CodeBlock
            code={`yarn add zustand`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">2. 상태 및 액션 정의</h3>
          <p>Zustand를 사용하여 관리할 상태와 해당 상태를 변경하는 액션들을 정의한다. create 함수를 사용하여 Zustand 스토어를 생성하고, 이 안에서 상태와 액션들을 정의</p>
          <CodeBlock
            code={`// Todo Component
import create from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set(state => ({ todos: [...state.todos, { id: Date.now(), text, completed: false }] })),
  toggleTodo: (id) => set(state => ({ todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }))
}));

export default useTodoStore;`}
          ></CodeBlock>

          <h3 className="text-xl mb-3 mt-10">3. 컴포넌트에서 상태 및 액션 사용</h3>
          <p>생성한 Zustand 스토어를 필요한 컴포넌트에서 가져와 사용하는데, useStore 훅을 사용하여 상태 및 액션을 가져온다.</p>
          <CodeBlock
            code={`import React from 'react';
import useTodoStore from './useTodoStore';

function TodoList() {
  const todos = useTodoStore(state => state.todos);
  const addTodo = useTodoStore(state => state.addTodo);
  const toggleTodo = useTodoStore(state => state.toggleTodo);

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('새로운 할 일 추가')}>할 일 추가</button>
    </div>
  );
}

export default TodoList;
`}
          ></CodeBlock>
        </div>
      </Container>
    </div>
  );
};

export default Zustand;
