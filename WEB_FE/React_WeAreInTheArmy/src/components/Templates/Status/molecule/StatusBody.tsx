import { Post } from 'src/type';
import { acceptConverter } from 'src/util/utils';
import ColorAccept from '../atom/ColorAccept';
import StatusRow from '../atom/StatusRow';

export default function StatusBody({ post }: { post: Post[] }) {
  return (
    <tbody className="shadow-md">
      {post.map((post: Post) => (
        <StatusRow key={post.idx} {...post} />
      ))}
    </tbody>
  );
}
