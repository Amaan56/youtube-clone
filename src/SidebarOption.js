import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, text, active }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
      <Icon className="sidebarOption__icon" />
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarOption;
