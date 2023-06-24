import React, { useState, useEffect, useRef } from "react";

function App() {
  const inputText = useRef();

  useEffect(() => {
    inputText.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputText} />
    </>
  );
}

export default App;
