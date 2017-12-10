import React from 'react';
import t from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { toolTipStyles, toolTipBodyBtnStyles, afterStyles } from './TooltipStyles.js';

const openEmailClient = email => {
  console.log('triggered');
  document.location = `mailto:${email}`;
};

const Tooltip = ({ emailAddress, className }) => (
  <div className={className + '__tooltip'} style={toolTipStyles}>
    <div className={className + '__tooltip-head'}>{emailAddress}</div>
    <div className={className + '__tooltip-body'}>
      <CopyToClipboard text={emailAddress} onCopy={() => alert('copied.')}>
        <button className={className + '__tooltip--copy-email-address __tooltip-body-btn'} style={toolTipBodyBtnStyles}>
          Copy Email Address To ClipBoard
        </button>
      </CopyToClipboard>

      <button
        className={className + '__tooltip--compose-default-email __tooltip-body-btn'}
        style={toolTipBodyBtnStyles}
        onClick={() => openEmailClient(emailAddress)}
      >
        Compose email in default client
      </button>
    </div>
    <span className={className + '__tooltip-arrow'} style={afterStyles} />
  </div>
);

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string
};

export default Tooltip;
