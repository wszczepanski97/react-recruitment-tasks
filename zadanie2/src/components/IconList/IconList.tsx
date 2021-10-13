import { IconType } from 'react-icons';
import Icon from '../Icon/Icon';
import Wrapper from '../Wrapper/Wrapper';

interface IconProps { IconNames: IconType[]; }

const IconList = ({ IconNames }: IconProps) => (
    <Wrapper
        Tag='div'
        style={{
            display: 'flex',
            width: '160px',
            justifyContent: 'space-between'
        }}>
        {IconNames.map(iconName => <Icon IconName={iconName} />)}
    </Wrapper>
);

export default IconList;