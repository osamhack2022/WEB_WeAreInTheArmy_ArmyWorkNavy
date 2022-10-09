import {
  useApplyDataState,
  useDefaultInformationState,
} from '../../../context/ApplyContext';
import FlexContainer from '../../UI/FlexContantainer';
import Paper from '../../UI/Paper';
import SemiHeader from '../../UI/SemiHeader';
import AgreePersonData from './organism/AgreePersonData';
import ApplyDataForm from './organism/ApplyDataForm';
import DefaultInformationForm from './organism/DefaultInformationForm';

export default function ApplyTemplate() {
  const defaultInformationState = useDefaultInformationState();
  const applyDataState = useApplyDataState();
  console.log(defaultInformationState, applyDataState);
  return (
    <Paper className="w-[900px]">
      <SemiHeader
        title="대민지원 신청 양식"
        subTitle="아래 양식을 작성해주세요"
      />
      <span className="w-full p-0.5 bg-slate-200 my-5"></span>
      <FlexContainer className="flex-col w-full divide-y divide-slate-200">
        <DefaultInformationForm />
        <ApplyDataForm />
        <AgreePersonData />
      </FlexContainer>
    </Paper>
  );
}
