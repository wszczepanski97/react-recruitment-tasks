import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Wrapper from '../Wrapper/Wrapper';
import { MdSearch } from 'react-icons/md';

const IconLoginButtonWrapper = () => (
    <Wrapper Tag="div" style={{ height: '40px', display: 'flex', width: '188px' }}>
        <Icon IconName={MdSearch} />
        <Button text='Zaloguj się' />
    </Wrapper>
);

export default IconLoginButtonWrapper;