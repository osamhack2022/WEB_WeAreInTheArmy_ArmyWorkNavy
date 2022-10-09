import { useDefaultInfomationDispatch } from '../../../../context/ApplyContext';
import FlexContainer from '../../../UI/FlexContantainer';
import Text from '../../../UI/Text';
import DefaultInformationInput from '../atom/DefaultInformationInput';

export default function DefaultInformationForm() {
  const dispatch = useDefaultInfomationDispatch();
  const setName = (value: string) =>
    dispatch({ type: 'SET_NAME', name: value });
  const setOrganization = (value: string) =>
    dispatch({ type: 'SET_ORGANIZATION', organizaion: value });
  const setPhone = (value: string) =>
    dispatch({ type: 'SET_PHONE', phone: value });
  const setLocation = (value: string) =>
    dispatch({ type: 'SET_LOCATION', location: value });
  return (
    <div className="mb-4">
      <Text size="text-3xl" className="font-bold p-4">
        1. 기본 정보
      </Text>
      <FlexContainer className="flex-col h-[240px] justify-between">
        <DefaultInformationInput
          label="이름"
          placeholder={'이름을 입력해주세요.'}
          dispatch={setName}
          isEssential
        />
        <DefaultInformationInput
          label="기업/기관"
          placeholder={'기업/기관명을 입력해주세요.'}
          dispatch={setOrganization}
        />
        <DefaultInformationInput
          label="전화번호"
          placeholder={'전화번호를 입력해주세요'}
          dispatch={setPhone}
          isEssential
        />
        <DefaultInformationInput
          label="장소"
          placeholder={'도움이 필요한 장소를 입력해주세요.'}
          dispatch={setLocation}
        />
      </FlexContainer>
    </div>
  );
}
