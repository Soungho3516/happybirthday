import csh9 from './csh9.png';
import MyGallery from './gallery.js';
import './App.css';
import Kakao from './map';
import './Fonts/Font.css'

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <img src={csh9} style={{width: '100%'}}></img>
        <div style={{width: '90%', alignSelf:'center', maxWidth: '500px'}}>
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
        <div className="App-subtitle" style={{width:'100%', alignSelf:'center'}}>
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
        <div style={{width: '90%', alignSelf:'center', maxWidth: '500px'}}>
        <Kakao></Kakao>
        </div>
        </div>
    </div>
  );
}

export default App;
