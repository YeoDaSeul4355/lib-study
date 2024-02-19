import styled from "styled-components";
import { useMemoStore } from "./../store/MemoList";
import { useState } from "react";
const MemoInput = () => {
  const { addMemo } = useMemoStore();
  const [value, setValue] = useState("");

  return (
    <AddMemoForm
      onSubmit={(e) => {
        e.preventDefault();
        addMemo(value);

        setValue("");
      }}
    >
      <div>
        <input
          type="text"
          placeholder="메모를 입력해주세요!"
          onChange={(e) =>
            setValue((prev) => {
              if (prev !== e.target.value) {
                return e.target.value;
              }
            })
          }
          value={value}
        />
        <button type="submit">저장</button>
      </div>
    </AddMemoForm>
  );
};

export default MemoInput;

const AddMemoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16px;
  > div {
    position: relative;
    width: 71.5%;
    height: 100px;
    font-family: "NanumSquareNeo";
  }
  input {
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid #000;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
