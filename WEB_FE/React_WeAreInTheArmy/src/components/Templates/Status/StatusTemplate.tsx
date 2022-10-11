import { useState } from 'react';
import Divider from 'src/components/UI/Divider';
import FlexContainer from 'src/components/UI/FlexContantainer';
import Paper from 'src/components/UI/Paper';
import SemiHeader from 'src/components/UI/SemiHeader';
import { Accept, Post } from 'src/type';
import StatusBody from './molecule/StatusBody';
import StatusHead from './molecule/StatusHead';

export default function StatusTemplate() {
  const [post, setPost] = useState<Post[]>([]);
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
          <StatusBody
            post={[{ id: 1, accept: Accept.Accept, title: '안녕' }]}
          />
        </table>
      </FlexContainer>
    </Paper>
  );
}
