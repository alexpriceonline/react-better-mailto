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
  toolTipArrow
} from './TooltipStyles.js';

const Tooltip = props => {
  const _toolTipStyles = { ...toolTipStyles, ...props.toolTipStyles };
  const _toolTipInnerWrapper = { ...toolTipInnerWrapper, ...props.toolTipInnerWrapper };
  const _toolTipHead = { ...toolTipHead, ...props.toolTipHead };
  const _toolTipBodyBtnStyles = { ...toolTipBodyBtnStyles, ...props.toolTipBtnText };
  const _toolTipBtnText = { ...toolTipBtnText, ...props.toolTipBtnText };
  const _toolTipAnchorText = { ...toolTipAnchorText, ...props.toolTipAnchorText };
  const _toolTipArrow = { ...toolTipArrow, ...props.toolTipArrow };

  return (
    <div className={props.className + '__tooltip'} style={_toolTipStyles}>
      <div className={props.className + '__tooltip-head'} style={_toolTipHead}>
        {props.emailAddress}
      </div>
      <div className={props.className + '__tooltip-inner-wrapper'} style={_toolTipInnerWrapper}>
        <div className={props.className + '__tooltip-body'}>
          <CopyToClipboard text={props.emailAddress} onCopy={() => alert('copied.')}>
            <button className={props.className + '__tooltip-body-btn'} style={_toolTipBodyBtnStyles}>
              <span className={props.className + '__tooltip-body-btn--text'} style={_toolTipBtnText}>
                Copy Email Address To ClipBoard
              </span>
            </button>
          </CopyToClipboard>

          <a
            href={`mailto:${props.emailAddress}`}
            className={props.className + '__tooltip-body-btn'}
            style={_toolTipBodyBtnStyles}
          >
            <span className={props.className + '__tooltip-body-btn--text'} style={_toolTipAnchorText}>
              Compose email in default client
            </span>
          </a>
        </div>
      </div>
      <span className={props.className + '__tooltip-arrow'} style={toolTipArrow || props.toolTipArrow} />
    </div>
  );
};

Tooltip.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string,
  toolTipArrow: t.object,
  toolTipAnchorText: t.object,
  toolTipBodyBtnStyles: t.object,
  toolTipBtnText: t.object,
  toolTipBtnStyles: t.object,
  toolTipInnerWrapper: t.object,
  toolTipStyles: t.object
};

export default Tooltip;
