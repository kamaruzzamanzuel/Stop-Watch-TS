import { useState } from 'react'
import PracticeComponent from "./components/Script";
import Script from './components/Script';
import Performance from './components/performance/Performance';
import StopWatch from './components/stopwatch/StopWatch';
import "./components/stopwatch/style/style.css"
import  {StopWatchTwo} from './components/stopwatch/StopWatchTwo';

function App() {

  return (
    <>
      {/* <PracticeComponent/> */}
      {/* <Performance/> */}
      {/* <StopWatch/> */}
      <StopWatchTwo/>
    </>
  )
}

export default App
