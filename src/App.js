import csh9 from './csh9.png';
import MyGallery from './gallery.js';
import './App.css';
import Kakao from './map';
import './Fonts/Font.css'
import AudioPlayer from './AudioPlayer.js';
import naviImg from './MAP.svg';

function App() {
  return (
    <div className="App">
      <AudioPlayer></AudioPlayer>
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
