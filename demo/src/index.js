import React from 'react';
import { render } from 'react-dom';

import BetterMailto from '../../src';

const Demo = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>react-better-mailto Demo</h1>

    <h2>Example</h2>
    <BetterMailto
      emailAddress="hi@anyemail.com"
      className="boss"
      style={{
        color: '#333',
        textDecoration: 'none',
        top: '200px'
      }}
    >
      Click me
    </BetterMailto>
  </div>
);

render(<Demo />, document.querySelector('#demo'));
