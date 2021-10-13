import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Wrapper from '../Wrapper/Wrapper';

const MenuLogoWrapper = () => (
    <Wrapper Tag="div" style={{ height: '32px', display: 'flex', alignItems: 'center' }} >
        <Logo />
        <Menu menuItemNames={['Wydarzenia', 'Kontakt', 'Wesprzyj nas']} />
    </Wrapper>
);

export default MenuLogoWrapper;