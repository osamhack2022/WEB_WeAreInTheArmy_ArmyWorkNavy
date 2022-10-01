import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HeaderTemplate from './components/Templates/Header/HeaderTemplate';
import IntroduceTemplate from './components/Templates/Introduce/IntroduceTemplate';
import LoginTemplate from './components/Templates/Login/LoginTemplate';
import MainTemplate from './components/Templates/Main/MainTemplate';
import SignupTemplate from './components/Templates/Signup/SignupTemplate';
import FlexContainer from './components/UI/FlexContantainer';
import { URL } from './data/url';

function App() {
  const location = useLocation();
  const title = URL.find((v) => v.to === location.pathname);
  console.log(title);
  return (
    <div className="App h-screen font-Noto Sans KR">
      <HeaderTemplate />
      <FlexContainer className="items-center flex-col bg-main">
        <FlexContainer className="min-w-[800px] w-full flex-col items-center">
          {title?.name !== '메인' && (
            <div className="w-[800px] text-slate-400 mt-[30px]">
              여긴 군대지 &gt;{' '}
              <span className="text-orrange font-semi">{title?.name}</span>
            </div>
          )}
          <Routes>
            <Route path="/" element={<MainTemplate />} />
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/signup" element={<SignupTemplate />} />
            <Route path="/introduce" element={<IntroduceTemplate />} />
          </Routes>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
