import { Route, Routes } from 'react-router-dom';
import HeaderTemplate from './components/Templates/Header/HeaderTemplate';
import LoginTemplate from './components/Templates/Login/LoginTemplate';
import MainTemplate from './components/Templates/Main/MainTemplate';
import SignupTemplate from './components/Templates/Signup/SignupTemplate';
import FlexContainer from './components/UI/FlexContantainer';
import Input from './components/UI/Input';

function App() {
  console.log(window.location);
  return (
    <div className="App h-screen font-Noto Sans KR">
      <HeaderTemplate />
      <FlexContainer className="items-center h-full flex-col bg-main">
        <FlexContainer className="min-w-[800px]">
          <Routes>
            <Route path="/" element={<MainTemplate />} />
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/signup" element={<SignupTemplate />} />
          </Routes>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
