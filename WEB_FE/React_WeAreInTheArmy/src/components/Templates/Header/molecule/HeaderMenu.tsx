import { URL } from '../../../../data/url';
import FlexContainer from '../../../UI/FlexContantainer';
import Menu from '../atom/Menu';

export default function HeaderMenu() {
  const menus = URL.slice(1);
  return (
    <ul className="flex whitespace-nowrap justify-between w-[700px]">
      <FlexContainer>
        {menus.map(({ name, to, src = '' }) => (
          <Menu key={to} name={name} to={to} src={src} className="mr-6" />
        ))}
      </FlexContainer>
      <Menu
        to="/login"
        name="로그인"
        src="../../../../../public/assets/imgs/Header/people.png"
      ></Menu>
    </ul>
  );
}
