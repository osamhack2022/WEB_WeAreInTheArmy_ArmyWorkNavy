import HLText from 'src/components/UI/HLText';
import FlexContainer from '../../../UI/FlexContantainer';
import Text from '../../../UI/Text';

export default function AgreePersonData() {
  return (
    <div className="mb-4">
      <Text size="text-3xl" className="font-bold p-4">
        3. 개인정보 수집 및 동의
      </Text>
      <HLText>
        문의를 등록하고 관련 업무 처리를 위해서는 개인정보보호법 제 15조 제
        1항에 따라 아래 사항에 대한 동의가 필요합니다. <br /> <br />
        1. 수집 및 이용 항목 : 성명, 이메일주소, 휴대전화번호, 소속기관/기업 및
        부서 (조사 상담 시), 문의내용 <br />
        2. 수집 및 이용 목적 : 문의사항 접수, 처리 등을 위한 본인 식별, 답변
        안내 등 <br />
        3. 보유 및 이용 기간 : 수집한 개인정보는 답변 완료일까지 상기 목적만을
        위해 보유·이용되며 문의사항 처리 종료 후 6개월간만 보유·이용 <br />
        4. 동의를 거부할 권리 및 동의를 거부하는 경우 불이익 : 위 개인정보 수집
        및 이용 동의를 거부할 권리가 있으며, 동의를 거부하는 경우 홈페이지를
        통한 문의사항 등록 및 처리가 불가능합니다.
      </HLText>
    </div>
  );
}
