import FlexContainer from '../../../UI/FlexContantainer';
import '../../../../../public/assets/imgs/logo.jpg';

export default function HeaderLogo() {
  return (
    <FlexContainer className="items-center">
      <img
        src="../../../../../public/assets/imgs/logo.jpg"
        className="object-contain w-16 h-16 mr-1"
      />
      <div className="font-bold text-xl">여긴군대지</div>
    </FlexContainer>
  );
}
