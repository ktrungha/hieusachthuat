import React from 'react';

class Logo extends React.PureComponent {
  render() {
    return (
      <a href="/" style={{ textDecoration: 'none' }}>
        <div style={{ margin: '0 10px' }}>
          <svg viewBox="0 0 130 25" style={{ display: 'block', maxWidth: '400px', width: '100%' }}>
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.8" result="shadow" fill="#ff7b23" />
                <feOffset dx="0" dy="0" />
              </filter>
            </defs>
            <text
              style={{
                fill: '#ff9523',
                fontWeight: 700,
                strokeWidth: '0.5px',
                stroke: '#cc5e1a',
              }}
              x="10"
              y="70%"
            >
              Hiệu sách Thuật
            </text>
          </svg>
        </div>
      </a>
    );
  }
}

export default Logo;
