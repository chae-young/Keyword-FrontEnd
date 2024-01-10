import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
const kakaoMap = () => {
  const mapScript = document.createElement('script');

  mapScript.async = true;
  mapScript.src =
    '//dapi.kakao.com/v2/maps/sdk.js?appkey=fcc80e2ed455d63a470ed9570e74df05&libraries=services&autoload=false';

  document.head.appendChild(mapScript);
  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [mapScript]);

  return (
    <div>
      <div id="map" className="w-full h-80" />
    </div>
  );
};

export default kakaoMap;
