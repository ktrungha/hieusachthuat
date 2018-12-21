import React from 'react';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  menu: React.ReactNode;
  cover: React.ReactNode;
  newBooks: React.ReactNode;
  footer: React.ReactNode;
}

const HomeDesktopLayout: React.SFC<Props> = (props) => {
  const { logo, searchBox, menu, cover, newBooks, footer } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '98vh',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          minWidth: '600px',
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignSelf: 'stretch', alignItems: 'center' }}>
          <div style={{ flexGrow: 0 }}>{logo}</div>
          <div style={{ flexGrow: 1 }}>{searchBox}</div>
        </div>
        <hr style={{ width: '100%' }} />
        <div style={{ display: 'flex', alignSelf: 'stretch' }}>
          <div style={{ flexGrow: 1 }}>{menu}</div>
          <div style={{ flexGrow: 9 }}>{cover}</div>
        </div>
        <div style={{ display: 'flex', alignSelf: 'stretch' }}>{newBooks}</div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          backgroundColor: '#d6d7d8',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            minWidth: '600px',
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
          }}
        >
          {footer}
        </div>
      </div>
    </div>
  );
};

export default HomeDesktopLayout;
