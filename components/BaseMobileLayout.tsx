import React from 'react';
import colors from '../styles/colors';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
}

const BaseMobileLayout: React.SFC<Props> = (props) => {
  const { logo, searchBox, footer, content, menu } = props;
  return (
    <div
      id="outer-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          backgroundColor: colors.blue,
          height: '10px',
          margin: '0 2px',
        }}
      />
      <div>{logo}</div>
      <nav
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {menu}
        <div style={{ flex: 1 }}>{searchBox}</div>
      </nav>
      <div style={{ alignSelf: 'stretch' }}>{content}</div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          alignSelf: 'stretch',
          backgroundColor: '#d6d7d8',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {footer}
      </div>
    </div>
  );
};

export default BaseMobileLayout;
