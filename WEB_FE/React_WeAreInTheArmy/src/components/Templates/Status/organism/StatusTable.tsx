import StatusBody from '../molecule/StatusBody';
import StatusHead from '../molecule/StatusHead';
import { Post } from 'src/type';

export default function StatusTable({ post }: { post: Post[] }) {
  return (
    <table>
      <StatusHead />
      <StatusBody post={post} />
    </table>
  );
}
