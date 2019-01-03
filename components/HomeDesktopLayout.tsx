import React from 'react';
import BaseDesktopLayout from './BaseDesktopLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  menu: React.ReactNode;
  cover: React.ReactNode;
  newBooks: React.ReactNode;
  footer: React.ReactNode;
  marker: React.ReactNode;
}

const HomeDesktopLayout: React.SFC<Props> = (props) => {
  const { logo, searchBox, menu, cover, newBooks, footer, marker } = props;

  const content = (
    <>
      <div style={{ display: 'flex', alignSelf: 'stretch' }}>
        <div style={{ flexGrow: 1 }}>{menu}</div>
        <div style={{ margin: '20px', flexGrow: 9 }}>{cover}</div>
      </div>
      <div style={{ display: 'flex', alignSelf: 'stretch' }}>{newBooks}</div>
    </>
  );
  return (
    <BaseDesktopLayout
      logo={logo}
      searchBox={searchBox}
      content={content}
      footer={footer}
      marker={marker}
    />
  );
};

export default HomeDesktopLayout;
