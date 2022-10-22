import React, { useState } from "react";
import styled from "styled-components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form, Home } from "./Pages";

function App() {
  const [user, setUser] = useState("");

  return <Root>{user ? <Home /> : <Form setUser={() => setUser} />}</Root>;
}

const Root = styled.div`
  width: 100%;
`;

export default App;

// <BrowserRouter>
// <Routes>
//   <Route path="/autorization" element={<Form />} />
//   <Route path="/" element={<Home />} />
// </Routes>
// </BrowserRouter>
