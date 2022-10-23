import { Map, MapMarker } from 'react-kakao-maps-sdk';

const HelpMap = () => {
  return (
    <div className="p-5 h-full mb-3 w-[800px]">
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>도움이 필요해요</div>
        </MapMarker>
      </Map>
    </div>
  );
};

export default HelpMap;
