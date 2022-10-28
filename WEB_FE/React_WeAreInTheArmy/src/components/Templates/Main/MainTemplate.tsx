import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from 'src/util/client';
import '../../../../public/assets/imgs/MainPage/Main.png';
import Button from '../../UI/Button';
import FlexContainer from '../../UI/FlexContantainer';
import Text from '../../UI/Text';
import HelpMap from './atom/HelpMap';
import Actions from './molecule/Actions';

export default function MainTemplate() {
  const [count, setCount] = useState<number>(0);
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.get('/absproxy/3000/api/board/getAllBoards').then((res) => {
      setPosts(res.data);
      setCount(res.data.length);
    });
  }, []);
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
          {posts.length > 0 && <HelpMap posts={posts} />}
          <Button
            size="lg"
            onClick={() => {
              navigate('/apply');
            }}
          >
            신청하기
          </Button>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}
