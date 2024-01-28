import React from "react";

const Contents = ({ children }) => {
  return (
    <main id="main" className="space-y-40 mb-40" role="main">
      {children}
    </main>
  );
};

export default Contents;
