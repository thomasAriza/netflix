import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton><MenuIcon className="icon"/></IconButton>
                <img alt="" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/> 
            </div>
            <IconButton><MoreHorizIcon className="icon"/></IconButton>
            
        </div>
    )
}

export default Header
 