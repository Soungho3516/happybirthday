import logo from './logo.svg';
import csh1 from './csh2.jpg'
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
        <div>
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
        <div>
          2024년 9월 28일 토요일 오후 1시
        </div>
        <div>
          수원 마이어스
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
          엄마 아빠의 아들로 태어나줘서 고마워<br></br>
          그리고 건강하게 자라줘서 고마원<br></br>
          앞으로도 건강하고 씩씩하게 자라주렴
        </div>
        <Kakao></Kakao>

      </header>
    </div>
  );
}

export default App;
