import { useNavigate } from 'react-router-dom';
import Button from 'src/components/UI/Button';
import { client } from 'src/util/client';
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
  const createBoard = () => {
    client.post('/api/board/createBoard', {
      type: applyDataState.requestCategory,
      title: applyDataState.title,
      description: applyDataState.description,
      location: defaultInformationState.location,
      admit: true,
      image: 'string',
    });
  };
  const navigate = useNavigate();
  return (
    <Paper className="w-[900px]">
      <SemiHeader
        title="대민지원 신청 양식"
        subTitle="아래 양식을 작성해주세요"
      />
      <span className="w-full p-0.5 bg-slate-200 my-5" />
      <FlexContainer className="flex-col w-full divide-y divide-slate-200">
        <DefaultInformationForm />
        <ApplyDataForm />
        <AgreePersonData />
      </FlexContainer>
      <FlexContainer className="my-5 justify-between w-full px-5">
        <Button size="lg" onClick={() => navigate('/')}>
          취소하기
        </Button>
        <Button size="lg" onClick={createBoard}>
          제출하기
        </Button>
      </FlexContainer>
    </Paper>
  );
}
