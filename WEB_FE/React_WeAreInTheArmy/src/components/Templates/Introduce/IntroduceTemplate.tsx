import FlexContainer from '../../UI/FlexContantainer';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';

export default function IntroduceTemplate() {
  return (
    <FlexContainer className="mt-[100px] ">
      <Paper className="w-[900px] h-[50vh]">
        <div className="">
          <Text size="text-4xl" className="font-semibold">
            여긴 군대지 사업소개
          </Text>
          <Text size="text-base" className="font-semibold text-orrange">
            “여긴 군 대민지원” 사이트에 방문하신 것을 환영합니다.
          </Text>
        </div>
        <div className="w-full divide-y divide-slate-200 border-y-2">
          <div>1. 개발하게 된 계기</div>
          <div>2. 기대 효과 및 전망</div>
          <div>asd</div>
        </div>
      </Paper>
    </FlexContainer>
  );
}
