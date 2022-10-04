import FlexContainer from '../../UI/FlexContantainer';
import Input from '../../UI/Input';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';

export default function ApplyTemplate() {
  return (
    <FlexContainer className="mt-[100px]">
      <Paper className="w-[900px] h-[500px]">
        <div>
          <Text size="text-4xl">대민지원 신청 양식</Text>
          <Text size="text-base">아래 양식을 작성해주세요.</Text>
        </div>
        <span className="w-full p-0.5 bg-slate-200 my-5"></span>
        <FlexContainer className="flex-col w-full divide-y divide-slate-200 border-y-2">
          <div>
            <Text size="text-3xl">1. 기본 정보</Text>
            <FlexContainer>
              <FlexContainer className="w-full justify-evenly items-center">
                <Text size="text-base" className="w-1/5">
                  이름(필수)
                </Text>
                <Input type="text" className="w-3/4" />
              </FlexContainer>
            </FlexContainer>
          </div>
          <div>2</div>
        </FlexContainer>
      </Paper>
    </FlexContainer>
  );
}
