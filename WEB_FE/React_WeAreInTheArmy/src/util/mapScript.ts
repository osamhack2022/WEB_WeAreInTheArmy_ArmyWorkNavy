const mapScript = document.createElement('script');
mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
  import.meta.env.VITE_APP_KAKAO_API_KEY
}&autoload=false`;
document.head.appendChild(mapScript);

export default function MapScript() {
  return mapScript;
}
