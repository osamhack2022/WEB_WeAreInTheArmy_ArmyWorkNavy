declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
    import.meta.env.VITE_KAKAO_API_KEY
  }&autoload=false`;
  document.head.appendChild(mapScript);

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      console.log('has');
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };

  mapScript.addEventListener('load', onLoadKakaoMap);

  return (
    <div className="w-full h-full">
      <div id="map" className="w-[100px] h-[100px]"></div>
    </div>
  );
};

export default Map;
