import React from 'react';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  marker: React.ReactNode;
}

const BaseDesktopLayout: React.SFC<Props> = (props) => {
  const { logo, searchBox, content, marker, footer } = props;
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
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'stretch',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          <div style={{ flexGrow: 0 }}>{logo}</div>
          <div style={{ flexGrow: 1 }}>{searchBox}</div>
        </div>
        <hr style={{ width: 'calc(100% - 4px)' }} />
        <div style={{ alignSelf: 'stretch' }}>{content}</div>
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
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', padding: '10px' }}>{marker}</div>
          <div>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseDesktopLayout;
