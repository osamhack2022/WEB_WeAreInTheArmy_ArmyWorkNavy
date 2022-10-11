import {
  RequestCategory,
  useeApplyDataDispatch,
} from '../../../../context/ApplyContext';
import FlexContainer from '../../../UI/FlexContantainer';
import Text from '../../../UI/Text';
import DescriptionArea from '../molecule/DescriptionArea';
import RequestCategorySelect from '../molecule/RequestCategorySelect';
import TitleInput from '../molecule/TitleInput';

export default function ApplyDataForm() {
  const dispatch = useeApplyDataDispatch();
  const setTitle = (value: string) =>
    dispatch({ type: 'SET_TITLE', title: value });
  const setRequestCategory = (value: RequestCategory) =>
    dispatch({ type: 'SET_REQUESTCATEGORY', requestCategory: value });
  const setDescription = (value: string) =>
    dispatch({ type: 'SET_DESCRIPTION', description: value });

  return (
    <div className="mb-4">
      <Text size="text-3xl" className="font-bold p-4">
        2. 신청 내용
      </Text>
      <FlexContainer className="flex-col h-[200px] justify-between">
        <TitleInput
          label="제목"
          placeholder="제목을 입력해주세요"
          dispatch={setTitle}
        />
        <RequestCategorySelect
          label="요청분류"
          options={[]}
          dispatch={setRequestCategory}
        />
        <DescriptionArea label="내용" dispatch={setDescription} />
      </FlexContainer>
    </div>
  );
}
