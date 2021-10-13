import Wrapper from '../Wrapper/Wrapper';

interface AppWrapperProps { children: React.ReactNode };

const AppWrapper = ({ children }: AppWrapperProps) => (
    <Wrapper
        Tag='div'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
    </Wrapper>
);

export default AppWrapper;