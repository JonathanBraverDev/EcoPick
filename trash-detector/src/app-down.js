import React from 'react';
import {useState} from 'react'

const Down = () => {
  const [activeTab, setActiveTab] = useState(1);
  const buttons = [
    {
      src:'new-req.png',
      text: "New Request",
      herf: "New-Request"
    },
    {
      src:'map-pin.jpg',
      text: "Map", 
    },
    {
      src:'profile.png',
      text: "Profile", 
    },
  ]
  
  return (
    <div>
    <div className="downnav">
        {buttons.map(({ text, src }, index) => <button className={'box ' + (index === activeTab ? "active" : "")} onClick={() => setActiveTab(index)}>
        <img src={src} width='40px'></img>
            {text}
        </button>)}
    </div>
    </div>
  );
};

export default Down;