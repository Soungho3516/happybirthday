import { useEffect } from "react";
import cake from "./cakeicon.png";

const { kakao } = window;
function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        const option = {
            center: new kakao.maps.LatLng(37.25131427528161, 127.01993397843383),
            level: 3
        };
        const map = new kakao.maps.Map(container, option);
        const imgSrc = cake;
        const imgSize = new kakao.maps.Size(30, 30);
        const imgOption = {offset: new kakao.maps.Point(0,0)};

        const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
        const markerPos = new kakao.maps.LatLng(37.25131427528161, 127.01993397843383);
        const marker = new kakao.maps.Marker({
            position: markerPos,
            image: markerImg
        });
        marker.setMap(map);
    }, [])
    return (
        <div id="map" style={{
            width: '500px',
            height: '500px',
            alignSelf: 'center'
        }}></div>
    )
}

export default Kakao;