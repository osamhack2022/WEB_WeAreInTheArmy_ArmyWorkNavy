import Text from 'src/components/UI/Text';
import CombiInfo from '../atom/CombiInfo';
import HLText from '../../../UI/HLText';
import FlexContainer from 'src/components/UI/FlexContantainer';

export default function DefaultInfo() {
  return (
    <div className="m-4">
      <Text size="text-2xl" className="font-bold mb-4">
        1. 기본 정보
      </Text>
      <CombiInfo label="이름" isEssential>
        <HLText>군대지</HLText>
      </CombiInfo>
      <CombiInfo label="기업/기관">
        <HLText>군대지</HLText>
      </CombiInfo>
      <CombiInfo label="전화번호" isEssential>
        <HLText>군대지</HLText>
      </CombiInfo>
      <CombiInfo label="장소">
        <HLText>군대지</HLText>
      </CombiInfo>
    </div>
  );
}
