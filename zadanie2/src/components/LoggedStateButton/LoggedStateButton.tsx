import Button, { ButtonProps } from "../Button/Button";

const LoggedStateButton = ({ text, handleClick, style }: ButtonProps) => (
    <Button
        text={text || 'Change logged state'}
        handleClick={handleClick}
        style={style || { marginTop: '20px' }} />
);

export default LoggedStateButton;