import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const useCodeBlock = (initialCode) => {
  const [copy, setCopy] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(initialCode);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return {
    copy,
    handleCopyClick,
  };
};

const CodeBlock = ({ code }) => {
  const { copy, handleCopyClick } = useCodeBlock(code);

  return (
    <div className="bg-[#3a404d] rounded-md overflow-hidden code-block my-3">
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm">Example Code</p>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1">
            <span className="text-base mt-1">
              <ion-icon name="checkmark-sharp"></ion-icon>
            </span>
            Copied!
          </button>
        ) : (
          <button
            className="py-1 inline-flex items-center gap-1"
            onClick={handleCopyClick}
          >
            <span className="text-base mt-1">
              <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            Copy code
          </button>
        )}
      </div>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          padding: "25px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
