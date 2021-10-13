import { CSSProperties } from "react";

interface MenuItemProps { text: string; style?: CSSProperties }

const MenuItem = ({ text, style }: MenuItemProps) => <li style={{marginRight: style?.marginRight || '32px', ...style}}>{text}</li>;

export default MenuItem;