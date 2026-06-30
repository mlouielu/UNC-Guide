import React, { useState } from 'react';

// Fixed the image paths to start with exactly '/assets/'
const scenarios = [
  {
    image: '/assets/bus-stop-quiz/bus-stop-q1.png',
    action: "go",
    explanation: "四線道以上，有中央分隔島的對向車不用停"
  },
  {
    image: '/assets/bus-stop-quiz/bus-stop-q2.png',
    action: "stop",
    explanation: "二線道有中央左轉道的雙向車輛都要停車"
  },
  {
    image: '/assets/bus-stop-quiz/bus-stop-q3.png',
    action: "stop",
    explanation: "同向車輛皆應停車"
  }
];

export default function DashcamBusGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  // NEW: State to track if the game is finished
  const [isFinished, setIsFinished] = useState(false);

  const scenario = scenarios[current];

  const handleChoice = (choice) => {
    if (choice === scenario.action) {
      setScore(score + 1);
      setFeedback({ text: `正確! 🚌 ${scenario.explanation}`, type: 'success' });
    } else {
      setFeedback({ text: `錯誤! 🚨 ${scenario.explanation}`, type: 'error' });
    }

    // Check if we are on the last question
    setTimeout(() => {
      setFeedback(null);
      if (current < scenarios.length - 1) {
        // Move to the next question
        setCurrent(current + 1);
      } else {
        // End the game
        setIsFinished(true);
      }
    }, 4000);
  };

  // NEW: Function to let the user play again
  const resetGame = () => {
    setCurrent(0);
    setScore(0);
    setFeedback(null);
    setIsFinished(false);
  };

  // IF THE GAME IS FINISHED: Show the final score screen
  if (isFinished) {
    return (
      <div style={{
        border: '2px solid #e5e7eb',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        backgroundColor: '#f9fafb',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '2rem', margin: '0 0 15px 0' }}>測驗結束!</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '25px' }}>
          你的分數: <strong>{score} / {scenarios.length}</strong>
        </p>
        <button
          onClick={resetGame}
          style={{
            padding: '12px 40px', backgroundColor: '#3b82f6', color: 'white',
            border: 'none', borderRadius: '8px', cursor: 'pointer',
            fontSize: '1.2rem', fontWeight: 'bold'
          }}>
          再玩一次 🔄
        </button>
      </div>
    );
  }

  // IF THE GAME IS RUNNING: Show the normal game UI
  return (
    <div style={{
      border: '2px solid #e5e7eb',
      padding: '1rem',
      borderRadius: '12px',
      textAlign: 'center',
      backgroundColor: '#f9fafb',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>我該在校車前後停車嗎? ({current + 1}/{scenarios.length})</h2>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Score: {score}</span>
      </div>

      {/* The Dashcam Image Container */}
      <div style={{
        width: '100%',
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <img
          src={scenario.image}
          alt="Dashcam view of the road ahead"
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* Controls & Feedback */}
      <div style={{ minHeight: '80px', marginTop: '20px' }}>
        {feedback ? (
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: feedback.type === 'success' ? '#15803d' : '#b91c1c',
            padding: '10px',
            backgroundColor: feedback.type === 'success' ? '#dcfce7' : '#fee2e2',
            borderRadius: '8px'
          }}>
            {feedback.text}
          </div>
        ) : (
          <div>
            <p style={{fontSize: '1.1rem', marginBottom: '15px', fontWeight: '500'}}>你該停車嗎?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button
                onClick={() => handleChoice('stop')}
                style={{ padding: '12px 50px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>
                停車 🛑
              </button>
              <button
                onClick={() => handleChoice('go')}
                style={{ padding: '12px 50px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>
                繼續開 🟢
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
