import csh9 from './csh9.png';
import MyGallery from './gallery.js';
import './App.css';
import Kakao from './map';
import './Fonts/Font.css'
import AudioPlayer from './AudioPlayer.js';
import naviImg from './MAP.svg';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

function App() {
  function firework() {
    var duration = 15 * 100;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
    //  startVelocity: 범위, spread: 방향, ticks: 갯수
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }
  useEffect(()=> {
    firework();
  },[])
  return (
    <div className="App">
      <div className='App-subtitle'>
        화면을 터치하면 음악이 재생되요~    
      <AudioPlayer></AudioPlayer>
        </div>
        <div className="App-header">
          <img src={csh9} style={{width: '100%'}}></img>
        <div style={{width: '90%', alignSelf:'center', maxWidth: '500px'}}>
        <MyGallery></MyGallery>
        </div>
        <div>
        <img src={naviImg} style={{width: '100%'}}></img>
        </div>
        <div style={{width: '90%', alignSelf:'center', maxWidth: '500px'}}>
        <Kakao></Kakao>
        </div>
        </div>
    </div>
  );
}

export default App;
