import React from 'react';
import t from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  toolTipStyles,
  toolTipInnerWrapper,
  toolTipHead,
  toolTipBodyBtnStyles,
  toolTipBtnText,
  toolTipAnchorText,
  toolTipComposeEmailStyles,
  afterStyles
} from './TooltipStyles.js';

const openEmailClient = email => {
  console.log('triggered');
  document.location = `mailto:${email}`;
};

const Tooltip = ({ emailAddress, className }) => (
  <div className={className + '__tooltip'} style={toolTipStyles}>
    <div className={className + '__tooltip-inner-wrapper'} style={toolTipInnerWrapper}>
      <div className={className + '__tooltip-head'} style={toolTipHead}>
        {emailAddress}
      </div>
      <div className={className + '__tooltip-body'}>
        <CopyToClipboard text={emailAddress} onCopy={() => alert('copied.')}>
          <button
            className={className + '__tooltip--copy-email-address __tooltip-body-btn'}
            style={toolTipBodyBtnStyles}
          >
            <span className={className + '__tooltip-body-btn--text'} style={toolTipBtnText}>
              Copy Email Address To ClipBoard
            </span>
          </button>
        </CopyToClipboard>

        <a
          href={`mailto:${emailAddress}`}
          className={className + '__tooltip--compose-default-email __tooltip-compose-default-email'}
          style={toolTipBodyBtnStyles}
        >
          <span className={className + '__tooltip-body-btn--text'} style={toolTipAnchorText}>
            Compose email in default client
          </span>
        </a>
      </div>
    </div>
    <span className={className + '__tooltip-arrow'} style={afterStyles} />
  </div>
);

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string
};

export default Tooltip;
