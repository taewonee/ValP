import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)
const logoclick = e => {
    e.preventDefault();
    window.location='';
}
const Header = () => {
    return (    
        <div>
            <div className="logo" onclick = {logoclick}>
                Value +
            </div>
        </div>
    );
};

export default Header;

//            <div className="menu">
//                <MenuItem>홈</MenuItem>
//                <MenuItem>소개</MenuItem>
//                <MenuItem>포스트</MenuItem>
//            </div>
