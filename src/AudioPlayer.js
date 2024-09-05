import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  // useRef를 사용하여 audio 엘리먼트에 접근합니다.
  const audioRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 오디오를 재생합니다.
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
        // 자동 재생이 차단될 경우 사용자가 직접 상호작용하도록 유도할 수 있습니다.
      });
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="./happybirthdayMR.mp3" autoPlay />
    </div>
  );
};

export default AudioPlayer;