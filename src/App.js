import logo from './logo.svg';
import csh1 from './csh2.jpg';
import cake from './cakeicon.png';
import './App.css';
import Kakao from './map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          24/09/28
        </div>
        <div className="App-subtitle">
          SATURADY
        </div>
        <div>
          <img src={csh1} className="App-logo"></img>
        </div>
        <div>
          조승희 첫번째 생일에 초대합니다.
          <br></br>
          <br></br>
        </div>
        <div className="App-subtitle">
          2024년 9월 28일 토요일 오후 1시
        </div>
        <div className="App-subtitle">
          수원 마이어스
          <br></br>
          <br></br>
          <br></br>
        </div>
        <img src={cake} className='cake-logo'/>
        <div className="App-subtitle">
          품에 안기도 조심스러웠던 승희가<br></br>
          어느새 사계절을 지나<br></br>
          첫 생일을 맞이했습니다.<br></br>
          따뜻한 관심과 사랑을 보내주신 덕에 <br></br>
          예쁘고 건강하게 자랄 수 있었습니다.<br></br>
          받은 사랑을 더 크게 나눌 줄 아는<br></br>
          따뜻하고 지혜로운 아이로 키우겠습니다.<br></br>
          감사합니다.<br></br>
          승희 아빠 조성호 엄마 오수영<br></br>
        </div>
        <Kakao></Kakao>

      </header>
    </div>
  );
}

export default App;
