import React, { useRef, useEffect } from 'react';
import mp3MR from './happybirthdayMR.mp3'

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // 페이지의 클릭 이벤트를 리스닝합니다.
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log('Play failed:', error);
        });
      }
    };

    // 페이지에서 클릭, 키보드 입력 등의 이벤트를 추가합니다.
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <div style={{backgroundColor: '#FFF8EE'}}>
      <audio ref={audioRef} src={mp3MR}>
        <source src="/audio/your-audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>화면을 터치하면 음악이 재생되요~</p>
    </div>
  );
};

export default AudioPlayer;