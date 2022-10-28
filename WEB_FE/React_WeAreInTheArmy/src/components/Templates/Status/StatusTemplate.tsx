import { useEffect, useState } from 'react';
import Divider from 'src/components/UI/Divider';
import FlexContainer from 'src/components/UI/FlexContantainer';
import Paper from 'src/components/UI/Paper';
import SemiHeader from 'src/components/UI/SemiHeader';
import { Accept, Post } from 'src/type';
import { client } from 'src/util/client';
import StatusBody from './molecule/StatusBody';
import StatusHead from './molecule/StatusHead';

export default function StatusTemplate() {
  const [post, setPost] = useState<Post[]>([]);
  console.log(post);
  useEffect(() => {
    client
      .get('/absproxy/3000/api/board/getAllBoards')
      .then((res) => setPost(res.data));
  }, []);
  return (
    <Paper className="w-[900px]">
      <SemiHeader
        title="대민지원 신청 현황"
        subTitle="도움을 필요로 하는 곳들의 현황을 모았습니다."
      />
      <Divider />
      <FlexContainer className="flex-col w-full p-4">
        <div className="mb-3">{post.length}개의 게시물이 있습니다.</div>
        <table>
          <StatusHead />
          <StatusBody post={post} />
        </table>
      </FlexContainer>
    </Paper>
  );
}
