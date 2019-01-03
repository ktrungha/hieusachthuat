import React from 'react';
import colors from '../styles/colors';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
  marker: React.ReactNode;
}

const BaseMobileLayout: React.SFC<Props> = (props) => {
  const { logo, searchBox, footer, marker, content, menu } = props;
  return (
    <div
      id="outer-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          backgroundColor: colors.blue,
          height: '5px',
          margin: '0 2px',
        }}
      />
      <div>{logo}</div>
      <nav
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: colors.blue,
          padding: '10px 0',
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
        }}
      >
        {footer}
        <div style={{ padding: '10px', textAlign: 'center' }}>{marker}</div>
      </div>
    </div>
  );
};

export default BaseMobileLayout;
