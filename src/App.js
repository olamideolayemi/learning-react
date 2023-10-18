import React, { useEffect } from 'react';
import "./index.css"
import Home from "./Routes/Home"

import { Route, Routes } from "react-router-dom"

function App() {

  useEffect(() => {
    document.title = 'Learning React';
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;