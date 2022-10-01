import FlexContainer from '../../UI/FlexContantainer';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';

export default function IntroduceTemplate() {
  return (
    <FlexContainer className="mt-[50px] ">
      <Paper className="w-[900px] h-[50vh]">
        <FlexContainer className="h-[200px] flex-col justify-evenly">
          <Text size="text-4xl" className="font-semibold">
            여긴 군대지 사업소개
          </Text>
          <Text size="text-base" className="font-semibold text-orrange">
            “여긴 군 대민지원” 사이트에 방문하신 것을 환영합니다.
          </Text>
        </FlexContainer>
        <FlexContainer className="flex-col w-full divide-y divide-slate-200 border-y-2">
          <div className="p-4">
            <Text size="text-3xl">1. 개발하게 된 계기</Text>
            <Text size="text-base" className="mt-2">
              어쩌구 저쩌구
            </Text>
          </div>
          <div className="p-4">
            <Text size="text-3xl">1. 개발하게 된 계기</Text>
            <Text size="text-base" className="mt-2">
              어쩌구 저쩌구
            </Text>
          </div>
        </FlexContainer>
      </Paper>
    </FlexContainer>
  );
}
