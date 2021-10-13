import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import Wrapper from '../Wrapper/Wrapper';

interface IconProps { IconName: IconType; style?: CSSProperties }

const Icon = ({ IconName, style }: IconProps) => (
    <Wrapper
        Tag='div'
        style={{
            display: 'flex',
            height: '40px',
            width: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            ...style
        }} >
        <IconName size='28px' />
    </Wrapper>
);

export default Icon;