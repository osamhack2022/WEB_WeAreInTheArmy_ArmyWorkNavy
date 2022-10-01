import { useNavigate } from 'react-router-dom';
import FlexContainer from '../../UI/FlexContantainer';
import Text from '../../UI/Text';
import HeaderLogo from './atom/HeaderLogo';
import HeaderMenu from './molecule/HeaderMenu';

export default function HeaderTemplate() {
  const navigate = useNavigate();
  const onClickNavi = () => {
    navigate('/');
  };
  return (
    <div className="border-b-2 box-border">
      <header className="w-screen h-[120px]">
        <FlexContainer className="h-1/4 justify-center items-center bg-secondary text-white">
          <Text size="text-base" className="font-bold">
            우리의 영원한 친구{' '}
            <span role="img" aria-label="writing hand">
              😟
            </span>{' '}
            대한민국 국군
          </Text>
        </FlexContainer>
        <FlexContainer className="justify-center h-3/4 bg-main drop-shadow-lg">
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
