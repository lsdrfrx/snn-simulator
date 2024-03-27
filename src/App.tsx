import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AppBar from './components/appbar/AppBar.tsx';
import SideMenu from './components/sidemenu/SideMenu.tsx';
import StatusMenu from './components/statusmenu/StatusMenu.tsx';
import Workspace from './components/workspace/Workspace.tsx';

function App() {
  const [sideMenuVisible, setSideMenuVisible] = useState(true);
  const [statusMenuVisible, setStatusMenuVisible] = useState(false);
  const [statusMenuData, setStatusMenuData] = useState({});

  const toggleSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
  }

  const toggleStatusMenu = () => {
    setStatusMenuVisible(!statusMenuVisible);
  }

  const openStatusMenu = (type, data) => {
    setStatusMenuVisible(true);
    setStatusMenuData({type: type, data: data});
  }

  const clearStatusMenu = () => {
    setStatusMenuVisible(false);
    setStatusMenuData({});
  }

  return (
    <div className="App">
      <AppBar toggleSideMenu={toggleSideMenu} toggleStatusMenu={toggleStatusMenu}/>
      <div className="container">
        <SideMenu visible={sideMenuVisible}/>
        <Workspace handleOpenInfo={openStatusMenu} handleClearInfo={clearStatusMenu}/>
        <StatusMenu data={statusMenuData} visible={statusMenuVisible}/>
      </div>
    </div>
  );
}

export default App;
