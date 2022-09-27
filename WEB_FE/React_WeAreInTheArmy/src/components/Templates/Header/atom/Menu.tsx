import { Link } from 'react-router-dom';

interface Menu extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  to: string;
}

export default function Menu({ name, to, ...props }: Menu) {
  return (
    <li {...props}>
      <Link to={to}>
        <strong>{name}</strong>
      </Link>
    </li>
  );
}
