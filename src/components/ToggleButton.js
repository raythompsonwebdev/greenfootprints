import React from 'react';

function ToggleButton(props) {
  const { menuToggleFunc } = { ...props };

  return (
    <button id="mobile-toggle" title="menu" onClick={menuToggleFunc}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
  );
}

export default ToggleButton;
