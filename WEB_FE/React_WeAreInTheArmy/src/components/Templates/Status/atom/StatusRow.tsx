import { useNavigate } from 'react-router-dom';
import { Post } from 'src/type';
import ColorAccept from './ColorAccept';

export default function StatusRow({ id, accept, title }: Post) {
  const navigate = useNavigate();
  return (
    <tr
      className="text-center cursor-pointer"
      onClick={() => navigate(`/status/${id}`)}
    >
      <td className="p-5">{id}</td>
      <td>
        <ColorAccept accept={accept} />
      </td>
      <td className="text-left px-10">{title}</td>
    </tr>
  );
}
