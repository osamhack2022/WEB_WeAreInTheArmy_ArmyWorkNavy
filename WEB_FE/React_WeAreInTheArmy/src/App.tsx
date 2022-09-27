import { Route, Routes } from 'react-router-dom';
import HeaderTemplate from './components/Templates/Header/HeaderTemplate';
import MainTemplate from './components/Templates/Main/MainTemplate';
import FlexContainer from './components/UI/FlexContantainer';
import Input from './components/UI/Input';

function App() {
  console.log(window.location);
  return (
    <div className="App h-screen font-NotoSansKR">
      <HeaderTemplate />
      <FlexContainer className="items-center h-full flex-col">
        <FlexContainer className="min-w-[800px]">
          <Routes>
            <Route path="/" element={<MainTemplate />} />
          </Routes>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
