import {
  RequestCategory,
  useeApplyDataDispatch,
} from '../../../../context/ApplyContext';
import FlexContainer from '../../../UI/FlexContantainer';
import Text from '../../../UI/Text';
import DefaultInformationInput from '../atom/DefaultInformationInput';

export default function ApplyDataForm() {
  const dispatch = useeApplyDataDispatch();
  const setTitle = (value: string) =>
    dispatch({ type: 'SET_TITLE', title: value });
  const setRequestCategory = (value: RequestCategory) =>
    dispatch({ type: 'SET_REQUESTCATEGORY', requestCategory: value });
  const setDescription = (value: string) =>
    dispatch({ type: 'SET_DESCRIPTION', description: value });

  return (
    <div>
      <Text size="text-3xl" className="font-bold p-4">
        2. 신청 내용
      </Text>
      <FlexContainer className="flex-col h-[250px] justify-between">
        <DefaultInformationInput
          label="제목"
          placeholder={'제목을 입력해주세요.'}
          dispatch={setTitle}
          isEssential
        />
        <DefaultInformationInput
          label="요청 종류"
          placeholder={'기업/기관명을 입력해주세요.'}
          dispatch={setRequestCategory}
        />
        <DefaultInformationInput
          label="문의내용"
          placeholder={'문의내용을 입력해주세요'}
          dispatch={setDescription}
          isEssential
        />
      </FlexContainer>
    </div>
  );
}
