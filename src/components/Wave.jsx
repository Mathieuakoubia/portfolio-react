import React from 'react';

const Wave = ({ topColor, bottomColor, flip = false }) => (
  <div style={{ background: topColor, lineHeight: 0, display: 'block' }}>
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: 70,
        display: 'block',
        transform: flip ? 'scaleX(-1)' : 'none',
      }}
    >
      <path
        d="M0,35 C360,0 1080,70 1440,35 L1440,70 L0,70 Z"
        fill={bottomColor}
      />
    </svg>
  </div>
);

export default Wave;
