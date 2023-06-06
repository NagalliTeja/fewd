import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Clock from "./Clock";
import Counter from "./Counter";
import FormTable from "./FormTable";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const MyContext=createContext();
const start=10;
root.render(
  <React.StrictMode>
      {/* <Clock/> */}
      {/* <Counter/>
      <FormTable/>
      <MyContext.Provider value={start}>
        <App1/>
      </MyContext.Provider> */}
      <App2/>
      {/* <App3/> */}
  </React.StrictMode>
);