import React from 'react';
import t from 'prop-types';

const toolTipStyles = {
  background: '#000',
  borderRadius: '3px',
  color: '#fff',
  left: '50%',
  padding: '5px 10px',
  position: 'absolute',
  top: '-35px',
  transform: 'translateX(-50%)',
};

const afterStyles = {
  borderColor: '#000000 transparent transparent transparent',
  borderStyle: 'solid',
  borderWidth: '5px 7px 0 7px',
  bottom: '-5px',
  height: 0,
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: 0,
}

const Tooltip = ({ emailAddress, className }) => (
  <span
    className={className + '__tooltip'}
    style={toolTipStyles}
  >
    { emailAddress }
    <span
      className={className + '__tooltip-arrow'}
      style={afterStyles}
    />
  </span>
);

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string,
};

export default Tooltip;
