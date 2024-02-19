import React from "react";
import { useMemoStore } from "./store/MemoList";
import MemoBoard from "./components/MemoBoard";
import MemoElement from "./components/MemoElement";
import MemoInput from "./components/MemoInput";

const ZustandMemo = () => {
  const { memoList } = useMemoStore();
  return (
    <div className="pt-[10%]">
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElement key={e.id} id={e.id}>
                {e.content}
              </MemoElement>
            );
          })
        ) : (
          <span>칠판</span>
        )}
      </MemoBoard>
      <MemoInput />
    </div>
  );
};

export default ZustandMemo;
