import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../public/assets/imgs/MainPage/Main.png';
import Button from '../../UI/Button';
import FlexContainer from '../../UI/FlexContantainer';
import Text from '../../UI/Text';
import Map from './atom/Map';
import Actions from './molecule/Actions';

export default function MainTemplate() {
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <FlexContainer className="flex-col">
        <FlexContainer>
          <div>
            <img src="../../../../public/assets/imgs/MainPage/Main.png" />
          </div>
        </FlexContainer>
        <Actions />
        <FlexContainer className="w-full flex-col items-center mb-10">
          <Text
            size="text-4xl"
            className="text-secondary mt-10 mb-2 font-medium"
          >
            현재 {count}곳에서 도움을 요청중입니다.
          </Text>
          <Text size="text-base" className="mb-3">
            최대한 빨리 조치할 수 있도록 노력하겠습니다.
          </Text>
          <Map />
          <Button size="lg" onClick={() => navigate('/apply')}>
            신청하기
          </Button>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}
