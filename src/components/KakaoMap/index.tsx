import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  coordi: {
    lat?: number;
    long?: number;
  };
}
const KakaoMap = ({ coordi }: KakaoMapProps) => {
  const mapScript = document.createElement('script');

  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
    import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
  }&libraries=services&autoload=false`;

  document.head.appendChild(mapScript);
  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(coordi.lat, coordi.long), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(
          coordi.lat,
          coordi.long
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
      <div id="map" className="w-full h-56" />
    </div>
  );
};

export default KakaoMap;
