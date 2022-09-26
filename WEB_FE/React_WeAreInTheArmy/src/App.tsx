import { Route, Routes } from 'react-router-dom';
import HeaderTemplate from './components/Templates/Header/HeaderTemplate';
import FlexContainer from './components/UI/FlexContantainer';
import { URL } from './data/url';

function App() {
  console.log(window.location);
  return (
    <div className="App h-screen">
      <HeaderTemplate />
      <FlexContainer className="justify-center items-center h-full">
        <FlexContainer className="min-w-[800px]">
          <Routes>
            {URL.map(({ to, name }) => (
              <Route key={to} path={to} element={<div>{name}</div>} />
            ))}
          </Routes>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
