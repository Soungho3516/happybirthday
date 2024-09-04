import { useEffect } from "react";

const { kakao } = window;
function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        const option = {
            center: new kakao.maps.LatLng(37.25131427528161, 127.01993397843383),
            level: 3
        };
        const map = new kakao.maps.Map(container, option);
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