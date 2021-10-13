import { MdSearch, MdNotificationsNone, MdAccountCircle } from 'react-icons/md';
import IconList from '../IconList/IconList';
import MenuLogoWrapper from '../MenuLogoWrapper/MenuLogoWrapper';
import IconLoginButtonWrapper from '../IconLoginButtonWrapper/IconLoginButtonWrapper';
import NavWrapper from '../NavWrapper/NavWrapper';

interface NavbarProps { isLogged: boolean; };

const Navbar = ({ isLogged }: NavbarProps) => (
    <NavWrapper>
        <MenuLogoWrapper />
        {isLogged ?
            <IconList IconNames={[MdSearch, MdNotificationsNone, MdAccountCircle]} /> :
            <IconLoginButtonWrapper />
        }
    </NavWrapper>
);

export default Navbar;
