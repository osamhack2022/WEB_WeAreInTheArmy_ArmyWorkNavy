import StatusBody from '../molecule/StatusBody';
import StatusHead from '../molecule/StatusHead';
import { Post } from 'src/type';

export default function StatusTable({ posts }: { posts: Post[] }) {
  return (
    <table>
      <StatusHead />
      <StatusBody posts={posts} />
    </table>
  );
}
