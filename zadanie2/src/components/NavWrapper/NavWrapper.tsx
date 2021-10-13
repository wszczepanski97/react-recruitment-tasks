import Wrapper from '../Wrapper/Wrapper';

interface NavWrapperProps { children: React.ReactNode };

const NavWrapper = ({ children }: NavWrapperProps) => (
    <Wrapper
        Tag="nav"
        style={{
            height: '72px',
            display: 'flex',
            width: '1440px',
            alignItems: 'center',
            margin: '0 auto',
            boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)'
        }}>
        <Wrapper
            Tag="div"
            style={{
                height: '40px',
                display: 'flex',
                width: '1280px',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>
            {children}
        </Wrapper>
    </Wrapper>
);

export default NavWrapper;