import { Modal } from 'flowbite-react';
import { ModalFooter } from 'flowbite-react/lib/esm/components/Modal/ModalFooter';
import { useState } from 'react';
import Button from 'src/components/UI/Button';
import DefaultInformation from 'src/components/UI/DefaultInformation';
import FlexContainer from 'src/components/UI/FlexContantainer';
import Input from 'src/components/UI/Input';
import Paper from 'src/components/UI/Paper';
import SemiHeader from 'src/components/UI/SemiHeader';
import Text from 'src/components/UI/Text';
import DefaultInformationInput from '../Apply/atom/DefaultInformationInput';
import StatusTable from '../Status/organism/StatusTable';

export default function ParticipateTemplate() {
  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Paper className="w-[900px]">
      <SemiHeader
        title="대민지원 참여하기"
        subTitle="주변 이웃들이 요청한 대민지원에 참여해주세요"
      />
      <FlexContainer>
        <Button onClick={() => setOpen(true)}>참여할 대민지원 선택하기</Button>
      </FlexContainer>

      <FlexContainer className="flex-col w-full">
        <div className="p-3">
          <Text size="text-2xl" className="font-bold">
            신청양식
          </Text>
        </div>
        <FlexContainer className="flex-col h-[300px] justify-evenly">
          <DefaultInformationInput
            label="이름"
            placeholder="이름을 적어주세요."
            dispatch={() => console.log('')}
            isEssential
          />
          <DefaultInformationInput
            label="군 부대"
            placeholder="어느 부대에서 복무하고 계시는지 알려주세요."
            dispatch={() => console.log('')}
            isEssential
          />
          <DefaultInformationInput
            label="군번"
            placeholder="본인의 군번을 적어주세요."
            dispatch={() => console.log('')}
            isEssential
          />
          <DefaultInformationInput
            label="비밀번호"
            placeholder="간부님께서 알려주신 비밀번호를 적어주세요."
            dispatch={() => console.log('')}
            isEssential
          />
        </FlexContainer>
        <FlexContainer className="w-full justify-between p-5">
          <Button className="bg-white text-black">❤️ {count}</Button>
          <Button>참여하기</Button>
        </FlexContainer>
      </FlexContainer>
      <Modal show={open}>
        <Modal.Header>Test</Modal.Header>
        <Modal.Body>
          <StatusTable />
        </Modal.Body>
        <ModalFooter>푸터</ModalFooter>
      </Modal>
    </Paper>
  );
}
