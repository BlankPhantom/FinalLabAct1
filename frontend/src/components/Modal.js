import React from 'react';

function Modal({ children, onClose }) {
  return (
    <div>
      <div>
        <span className="close" onClick={onClose}>Click me to close</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
