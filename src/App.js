import React from 'react';
import './App.css';
import styled from 'styled-components';
import logo from './images/ping1.jpg'
import arrow from "./images/Arrow.png";
import Header from './components/Header';
  const onStart = e => {
    e.preventDefault();
    window.location = '/survey';
  };

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <div id="Texts">
        <h1> Value+</h1>
        <div className="demo">
          <p>성능 디자인 가격</p>
          <p>당신이 원하는 바로 그 제품</p>
          <p>이젠 전문가가 골라드립니다 </p>
        </div>
        <div id= "btn">
            <button id="StartButton" onClick={onStart}>TV로 시작하기</button>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
