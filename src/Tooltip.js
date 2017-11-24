import React from 'react';
import t from 'prop-types';

const toolTipStyles = {
  background: '#000',
  borderRadius: '3px',
  color: '#fff',
  left: '50%',
  padding: '5px 10px',
  position: 'absolute',
  bottom: '125%',
  transform: 'translateX(-50%)',
};

const toolTipBodyBtnStyles = {
  background: '#352e2e',
  display: 'inline-block',
  color: '#eee',
  margin: '5px 0px',
  border: '1px solid #352e2e',
  borderRadius: '5px'
}

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
};

const Tooltip = ({ emailAddress, className }) => (
  <div
    className={className + '__tooltip'}
    style={toolTipStyles}
  >
  <div className={className + '__tooltip-head'}>{ emailAddress }</div>
  <div className={className + '__tooltip-body'}>
    <button
      className={className + '__tooltip--copy-email-address __tooltip-body-btn'}
      style={toolTipBodyBtnStyles}
      >Copy Email Address To ClipBoard</button>
    <button
      className={className + '__tooltip--compose-default-email __tooltip-body-btn'}
      style={toolTipBodyBtnStyles}
      >Compose email in default client</button>
  </div>
  <span
      className={className + '__tooltip-arrow'}
      style={afterStyles}
    />
</div>
);

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string,
};

export default Tooltip;
