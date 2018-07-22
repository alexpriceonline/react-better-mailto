import React, { Component } from 'react';
import t from 'prop-types';

import Tooltip from './Tooltip';

class BetterMailto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip(e) {
    e.preventDefault();
    console.log('toggle toolTip Called');
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }

  // TODO:
  // - Style to make it look like design
  // - Write tests
  // - Write docs

  render() {
    const { showTooltip } = this.state;
    const { children, emailAddress, className, style, ...props } = this.props;

    const _className = className || 'better-mailto';
    const _style = {
      position: 'relative',
      ...style
    };

    return (
      <a href={`mailto:${emailAddress}`} onClick={this.toggleTooltip} style={_style} className={_className} {...props}>
        {children}

        {showTooltip && <Tooltip emailAddress={emailAddress} className={_className} />}
      </a>
    );
  }
}

BetterMailto.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string
};

export default BetterMailto;
