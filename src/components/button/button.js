import React from 'react';
import '../button/button.css';

function Button({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
