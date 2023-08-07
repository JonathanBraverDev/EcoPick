import React from 'react';
import './Popup.css'; // Make sure to create this CSS file for styling

export const Popup = ({ onClose, title, content }) => {
//   if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="popup-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">{content}</div>
      </div>
    </div>
  );
};

// export default Popup;
