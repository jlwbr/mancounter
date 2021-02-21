import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css';

function App() {
  const { transcript, resetTranscript } = useSpeechRecognition()

  useEffect(() => {
    SpeechRecognition.startListening({ language: 'nl-NL', continuous: true })
  }, [])

  const countMan = () => {
    const re = /[M|m]an/g
    return ((transcript || '').match(re) || []).length
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="App">
        <header className="App-header">
          <p>We ondersteunen deze browser niet 😐</p>
          <p>Hint: probeer chrome</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{countMan()}</p>
      </header>
    </div>
  );
}

export default App;
