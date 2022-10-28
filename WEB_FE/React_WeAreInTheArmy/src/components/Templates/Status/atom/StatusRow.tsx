import { useNavigate } from 'react-router-dom';
import { Post } from 'src/type';
import ColorAccept from './ColorAccept';

export default function StatusRow({
  idx,
  admit,
  title,
  createdAt,
  description,
  image,
  location,
  type,
  updatedAt,
}: Post) {
  const navigate = useNavigate();
  return (
    <tr
      className="text-center cursor-pointer"
      onClick={() => navigate(`/status/${idx}`)}
    >
      <td className="p-5 font-bold">{idx}</td>
      <td>
        <div className="font-bold">{location}</div>
      </td>
      <td className="text-left px-10 font-bold">{title}</td>
    </tr>
  );
}

//  <ColorAccept accept={location} />
