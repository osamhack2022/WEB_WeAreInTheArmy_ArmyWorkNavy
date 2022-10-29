import Text from 'src/components/UI/Text';
import { isoStringToYYYYMMDD } from 'src/util/utils';
import HLText from '../../../UI/HLText';
import CombiInfo from '../atom/CombiInfo';

export default function DefaultInfo({
  createdAt,
  location,
}: {
  createdAt: string;
  location: string;
}) {
  return (
    <div className="m-4">
      <Text size="text-2xl" className="font-bold mb-4">
        1. 기본 정보
      </Text>
      <CombiInfo label="등록일자" isEssential>
        <HLText>{isoStringToYYYYMMDD(createdAt)}</HLText>
      </CombiInfo>
      <CombiInfo label="장소">
        <HLText>{location}</HLText>
      </CombiInfo>
    </div>
  );
}
