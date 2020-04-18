import React from 'react';
import logo from './logo.svg';
import './App.css';

function Start() {
  return (
    <div className="start">
      <start />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ValuePlus와 시작하기
        </a>
      </header>
    </div>
  );
}

export default Start;