import React from 'react';
import {useState} from 'react'

const Chips = () => {
    const [activeTab, setActiveTab] = useState(0);
    const buttons = [
        {
          text: "Glass",
          func: () => {},
        },
        {
          text: "Plastic",
          func: () => {},
        },
        {
          text: "Electric", 
          func: () => {},
        },
      ]
  
  return (
    <div>
        <div className="chip-nav">
        {buttons.map(({ text }, index) => <button className={'chip ' + (index === activeTab ? "active" : "")} onClick={() => setActiveTab(index)}>
            {text}
        </button>)}
    </div>
    </div>
  );
};

export default Chips;