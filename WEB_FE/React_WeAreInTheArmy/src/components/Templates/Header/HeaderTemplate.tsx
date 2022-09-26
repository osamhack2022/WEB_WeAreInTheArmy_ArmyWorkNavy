import FlexContainer from '../../UI/FlexContantainer';
import HeaderLogo from './atom/HeaderLogo';
import HeaderContents from './molecule/HeaderContents';

export default function HeaderTemplate() {
  return (
    <div>
      <header className="w-screen h-[80px]">
        <FlexContainer className="items-center">
          <HeaderLogo />
          <HeaderContents />
        </FlexContainer>
      </header>
    </div>
  );
}
