import { CSSProperties } from 'react';

export interface ButtonProps { text?: string; handleClick?: () => void, style?: CSSProperties };

const Button = ({ text, handleClick, style }: ButtonProps) => (
    <button
        style={
            {
                height: '40px',
                width: '128px',
                borderRadius: '20px',
                background: '#9E1C1C',
                color: '#FFFFFF',
                border: 0,
                marginLeft: '20px',
                cursor: 'pointer',
                ...style
            }}
        onClick={handleClick}>
        {text}
    </button>
);

export default Button;