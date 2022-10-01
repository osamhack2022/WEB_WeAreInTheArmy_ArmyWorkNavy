import { Link } from 'react-router-dom';

interface Menu extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  src: string;
  to: string;
}

export default function Menu({ name, src, to, ...props }: Menu) {
  return (
    <li {...props}>
      <Link to={to} className="flex">
        <img src={src} className="w-[25px] h-[25px]" />
        <strong>{name}</strong>
      </Link>
    </li>
  );
}
