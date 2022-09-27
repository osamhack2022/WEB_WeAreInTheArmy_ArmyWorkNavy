import { useNavigate } from 'react-router-dom';
import FlexContainer from '../../UI/FlexContantainer';
import HeaderLogo from './atom/HeaderLogo';
import HeaderMenu from './molecule/HeaderMenu';

export default function HeaderTemplate() {
  const navigate = useNavigate();
  const onClickNavi = () => {
    navigate('/');
  };
  return (
    <div className="border-b-2 box-border">
      <header className="w-screen h-[80px]">
        <FlexContainer className="justify-center h-full">
          <FlexContainer className="items-center min-w-[800px] justify-around">
            <div onClick={onClickNavi} className="cursor-pointer">
              <HeaderLogo />
            </div>
            <HeaderMenu />
          </FlexContainer>
        </FlexContainer>
      </header>
    </div>
  );
}
