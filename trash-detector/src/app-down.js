import React from 'react';
import {useState} from 'react'

const Down = () => {
  const [activeTab, setActiveTab] = useState(0);
  const buttons = [
    {
      text: "New Request",
      herf: "New-Request"
    },
    {
      text: "Map", 
    },
    {
      text: "Profile", 
    },
  ]
  
  return (
    <div>
    <div className="downnav">
        {buttons.map(({ text }, index) => <button className={'box ' + (index === activeTab ? "active" : "")} onClick={() => setActiveTab(index)}>
            {text}
        </button>)}
    </div>
    </div>
  );
};

export default Down;