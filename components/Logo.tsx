import React from 'react';
import colors from '../styles/colors';

class Logo extends React.PureComponent {
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <svg height="80px" viewBox="0 0 130 25" style={{ display: 'block' }}>
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" result="shadow" fill="#ff7b23" />
              <feOffset dx="0" dy="0" />
            </filter>
          </defs>
          <text
            style={{
              fill: '#ff9523',
              alignmentBaseline: 'middle',
              fontWeight: 700,
              strokeWidth: '0.5px',
              stroke: '#cc5e1a',
            }}
            x="10"
            y="53%"
          >
            Hiệu sách Thuật
          </text>
        </svg>
      </div>
    );
  }
}

export default Logo;
