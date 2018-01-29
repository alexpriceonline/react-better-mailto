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

const Tooltip = props => (
  <div className={props.className + '__tooltip'} style={toolTipStyles || props.toolTipStyles}>
    <div
      className={props.className + '__tooltip-inner-wrapper'}
      style={toolTipInnerWrapper || props.toolTipInnerWrapper}
    >
      <div className={props.className + '__tooltip-head'} style={toolTipHead || props.toolTipHead}>
        {props.emailAddress}
      </div>
      <div className={props.className + '__tooltip-body'}>
        <CopyToClipboard text={props.emailAddress} onCopy={() => alert('copied.')}>
          <button
            className={props.className + '__tooltip--copy-email-address __tooltip-body-btn'}
            style={toolTipBodyBtnStyles || props.toolTipBtnStyles}
          >
            <span
              className={props.className + '__tooltip-body-btn--text'}
              style={toolTipBtnText || props.toolTipBtnText}
            >
              Copy Email Address To ClipBoard
            </span>
          </button>
        </CopyToClipboard>

        <a
          href={`mailto:${emailAddress}`}
          className={props.className + '__tooltip--compose-default-email __tooltip-compose-default-email'}
          style={toolTipBodyBtnStyles || props.toolTipBodyBtnStyles}
        >
          <span
            className={props.className + '__tooltip-body-btn--text'}
            style={toolTipAnchorText || props.toolTipAnchorText}
          >
            Compose email in default client
          </span>
        </a>
      </div>
    </div>
    <span className={props.className + '__tooltip-arrow'} style={afterStyles || props.afterStyles} />
  </div>
);

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string,
  afterStyles: t.object,
  toolTipAnchorText: t.object,
  toolTipBodyBtnStyles: t.object,
  toolTipBtnText: t.object,
  toolTipBtnStyles: t.object,
  toolTipInnerWrapper: t.object,
  toolTipStyles: t.object
};

export default Tooltip;
