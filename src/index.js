import React, { Component } from 'react';
import t from 'prop-types';

import Tooltip from './Tooltip';

class BetterMailto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };

    this.toggleToolttip = this.toggleToolttip.bind(this);
  }

  toggleToolttip(e) {
    e.preventDefault();
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }

  // TODO:
  // - Add tooltip ✅
  // - Add support for settings/styles ✅
  // - Write tests
  // - Write docs

  render() {
    const { showTooltip } = this.state;
    const {
      children,
      emailAddress,
      className,
      style,
      ...props
    } = this.props;

    const _className = className || 'better-mailto';
    const _style = {
      position: 'relative',
      ...style
    };

    return (
      <a
        href={`mailto:${emailAddress}`}
        onClick={this.toggleToolttip}
        style={_style}
        className={_className}
        {...props}
      >
        { children }

        { showTooltip &&
          <Tooltip
            emailAddress={emailAddress}
            className={_className}
          />
        }
      </a>
    );
  }
}

BetterMailto.propTypes = {
  emailAddress: t.string.isRequired,
  className: t.string,
};

export default BetterMailto;
