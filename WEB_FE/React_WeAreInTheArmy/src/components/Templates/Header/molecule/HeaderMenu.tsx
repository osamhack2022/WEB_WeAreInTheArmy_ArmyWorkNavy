import { URL } from '../../../../data/url';
import Menu from '../atom/Menu';

export default function HeaderMenu() {
  const menus = URL.slice(1);
  return (
    <ul className="flex">
      {menus.map(({ name, to }) => (
        <Menu key={to} name={name} to={to} className="mr-3" />
      ))}
    </ul>
  );
}
