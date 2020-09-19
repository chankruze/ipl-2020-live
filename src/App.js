import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';

export const STREAM_URL = 'https://ssh101.com/securelive/index.php?id=cric77'
export const STREAM_TITLE = 'CSK vs MI'

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <VideoPlayer streamData={{ url: STREAM_URL, title: STREAM_TITLE }} />
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
