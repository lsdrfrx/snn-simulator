import React, { useState } from 'react'
import "./sidemenu.scss"
import ResizePanel from 'react-resize-panel';

const SideMenu = ({ visible }) => {
  return (
    <ResizePanel direction="e" style={{minWidth: '250px', maxWidth: '450px', display: visible ? "flex" : "none"}}>
      <div id="sidemenu" className="container"></div>
    </ResizePanel>
  );
}

export default SideMenu;