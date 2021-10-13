import MenuItem from '../MenuItem/MenuItem';

interface MenuProps { menuItemNames: string[]; };

const Menu = ({ menuItemNames }: MenuProps) => (
    <ul style={{
        display: 'flex',
        listStyle: 'none',
        padding: '0px',
        height: '19px',
        marginLeft: '32px'
    }}>
        {menuItemNames.map((menuItemName, index) => <MenuItem key={menuItemName} text={menuItemName} style={index === menuItemNames.length-1 ? {marginRight: '0px'}: {}} />)}
    </ul>
);

export default Menu;