import { Post } from 'src/type';
import { acceptConverter } from 'src/util/utils';
import ColorAccept from '../atom/ColorAccept';

export default function StatusBody({ post }: { post: Post[] }) {
  return (
    <tbody>
      {post.map(({ id, accept, title }) => (
        <tr key={id} className="text-center">
          <td className="p-5">{id}</td>
          <td>
            <ColorAccept accept={accept} />
          </td>
          <td className="text-left px-10">{title}</td>
        </tr>
      ))}
    </tbody>
  );
}
