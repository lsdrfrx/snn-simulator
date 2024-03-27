import React from 'react'
import "./appbar.scss"
import { Menu, InfoOutlined } from '@mui/icons-material';

const AppBar = ({ toggleSideMenu, toggleStatusMenu }) => {
    return (
      <div id="appbar">
        <div id="appbar-leading" onClick={(evt) => toggleSideMenu()}>
          <Menu />
        </div>
        <div id="appbar-title">SNN SIMULATOR</div>
        <div id="appbar-trailing" onClick={toggleStatusMenu}>
          <InfoOutlined />
        </div>
      </div>
    );
}

export default AppBar;