import FlexContainer from '../../UI/FlexContantainer';
import Map from './atom/Map';

export default function MainTemplate() {
  return (
    <div className="w-full h-full mt-[50px]">
      <FlexContainer className="flex-col">
        <FlexContainer>
          <div></div>
        </FlexContainer>
        <FlexContainer className="w-full bg-white justify-center">
          <FlexContainer className="w-[800px] justify-between">
            <FlexContainer className="flex-col items-center w-[200px] text-center">
              <img src="../../../../public/assets/imgs/MainPage/icon_fire.png" />
              <div>
                신속하고 정확하게 <br /> 효율적으로 재난 피해 회복
              </div>
            </FlexContainer>
            <FlexContainer className="flex-col items-center w-[200px] text-center">
              <img src="../../../../public/assets/imgs/MainPage/icon_fire.png" />
              <div>
                신속하고 정확하게 <br /> 효율적으로 재난 피해 회복
              </div>
            </FlexContainer>
            <FlexContainer className="flex-col items-center w-[200px] text-center">
              <img src="../../../../public/assets/imgs/MainPage/icon_fire.png" />
              <div>
                신속하고 정확하게 <br /> 효율적으로 재난 피해 회복
              </div>
            </FlexContainer>
            <FlexContainer className="flex-col items-center w-[200px] text-center">
              <img src="../../../../public/assets/imgs/MainPage/icon_fire.png" />
              <div>
                신속하고 정확하게 <br /> 효율적으로 재난 피해 회복
              </div>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className="w-full justify-center">
          <Map />
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}
