import logo from './logo.svg';
import csh1 from './csh2.jpg';
import csh9 from './csh9.png';
import cake from './cakeicon.png';
import MyGallery from './gallery.js';
import './App.css';
import Kakao from './map';
import './Fonts/Font.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div>
          24/09/28
        </div>
        <div className="App-subtitle">
          SATURADY
        </div>
        <div>
          <img src={csh1} className="App-logo"></img>
        </div>
        <div style={{fontFamily: "GalMet KR"}}>
          조승희 첫번째 생일에 초대합니다.
          <br></br>
          <br></br>
        </div>
        <img src={cake} className='cake-logo'/>
        <div className="App-subtitle" style={{fontFamily: "GalMet KR"}}>
          품에 안기도 조심스러웠던 승희가<br></br>
          어느새 사계절을 지나<br></br>
          첫 생일을 맞이했습니다.<br></br>
          따뜻한 관심과 사랑을 보내주신 덕에 <br></br>
          예쁘고 건강하게 자랄 수 있었습니다.<br></br>
          받은 사랑을 더 크게 나눌 줄 아는<br></br>
          따뜻하고 지혜로운 아이로 키우겠습니다.<br></br>
          감사합니다.<br></br>
          <br></br>
          승희 아빠 조성호 엄마 오수영<br></br>
          <br></br>
          <br></br>
          <br></br>
        </div> */}
        <div className="App-header">
          <img src={csh9} style={{width: '100%'}}></img>
        </div>
        <div style={{width: '600px', alignSelf:'center'}}>
        <MyGallery></MyGallery>
        </div>
        <br></br>
        <br></br>
        <div>오시는 길</div>
        <div className="App-subtitle">
          2024년 9월 28일 토요일 오전 11시 30분
        </div>
        <div className="App-subtitle">
          수원 마이어스
        </div>
        <div className="App-subtitle" style={{width:700, alignSelf:'center'}}>
          <ul>
            <li style={{textAlign: 'left'}}>
              세류역에서 버스 82-1번 (수원버스터미널 하차) / 도보시 15분
            </li>
            <li style={{textAlign: 'left'}}>
            수원역 6번출구에서 버스 환승 (수원버스터미널 하차)
            </li>
            <li style={{textAlign: 'left'}}>
            분당선 망포역 하차 4번출구에서 버스 환승 (수원버스터미널 하차)
            </li>
          </ul>
          <ul>
            <li style={{textAlign: 'left'}}>
              네비게이션: "마이어스" 또는 "0312675500" 입력
            </li>
            <li style={{textAlign: 'left'}}>
            주소 검색: "권선동 1189" 또는 "경수대로 270" 입력
            </li>
          </ul>
        </div>
        <div style={{width: '600px', alignSelf:'center'}}>
        <Kakao></Kakao>
        </div>

      </header>
    </div>
  );
}

export default App;
