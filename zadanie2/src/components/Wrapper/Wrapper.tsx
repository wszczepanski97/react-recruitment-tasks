import { CSSProperties } from 'react';

interface WrapperProps {
    children: React.ReactNode,
    Tag: keyof JSX.IntrinsicElements,
    style?: CSSProperties, 
};

const Wrapper = ({ children, Tag, style }: WrapperProps) => <Tag style={{ ...style }} >{children}</Tag>;

export default Wrapper;