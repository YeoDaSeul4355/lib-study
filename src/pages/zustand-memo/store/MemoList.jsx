import { create } from "zustand";

// 스토어를 생성하는 create / 객체 상태를 리턴하는 함수를 만들어줌
export const useMemoStore = create((set) => ({
  // 리턴되는 객체 값이기 때문에 따로 변수 선언(const, let 등을 하지 않아도 됨.)
  memoList: [],

  // 상태를 조작할 함수(인자를 받아 set함수를 리턴하는 형태로 작성)
  // 메모 추가하는 함수!
  addMemo: (val) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        { content: val, id: new Date().getMilliseconds() + val },
      ], // 이전 값을 이전에 존재하는 값을 새로 넣어준다.
    })),
  // 메모 삭제하는 함수!
  removeMemo: (id) =>
    set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}));
