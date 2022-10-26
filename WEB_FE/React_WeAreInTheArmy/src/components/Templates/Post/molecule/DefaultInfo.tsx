import Text from 'src/components/UI/Text';
import HLText from '../../../UI/HLText';
import CombiInfo from '../atom/CombiInfo';

export default function DefaultInfo({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="m-4">
      <Text size="text-2xl" className="font-bold mb-4">
        1. 기본 정보
      </Text>
      <CombiInfo label="이름" isEssential>
        <HLText>{name}</HLText>
      </CombiInfo>
      <CombiInfo label="기업/기관">
        <HLText>군대지</HLText>
      </CombiInfo>
      <CombiInfo label="전화번호" isEssential>
        <HLText>군대지</HLText>
      </CombiInfo>
      <CombiInfo label="장소">
        <HLText>{location}</HLText>
      </CombiInfo>
    </div>
  );
}
