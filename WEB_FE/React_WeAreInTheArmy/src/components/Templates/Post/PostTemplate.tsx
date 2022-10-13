import Button from 'src/components/UI/Button';
import Divider from 'src/components/UI/Divider';
import FlexContainer from 'src/components/UI/FlexContantainer';
import Paper from 'src/components/UI/Paper';
import SemiHeader from 'src/components/UI/SemiHeader';
import DefaultInfo from './molecule/DefaultInfo';
import DetailInfo from './molecule/DetailInfo';

export default function PostTemplate() {
  return (
    <Paper className="w-[900px]">
      <SemiHeader
        title="대민지원 신청 관리"
        subTitle="내용을 읽고 수락여부를 결정해주세요."
      />
      <Divider />
      <FlexContainer className="flex-col w-full divide-y divide-slate-200">
        <DefaultInfo />
        <DetailInfo />
        <FlexContainer className="w-full p-4 justify-between">
          <Button className="bg-error">거절</Button>
          <Button className="bg-introduce">보류</Button>
          <Button>수락</Button>
        </FlexContainer>
      </FlexContainer>
    </Paper>
  );
}
