import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderTemplate from './components/Templates/Header/HeaderTemplate';

function App() {
  console.log(window.location);
  return (
    <div className="App h-screen">
      <HeaderTemplate />
      <Routes>
        <Route
          path="/"
          element={<div className="text-red-500">Home</div>}
        ></Route>
        <Route path="/hi" element={<div>hello</div>}></Route>
        <Route path="/*" element={<div>error</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
