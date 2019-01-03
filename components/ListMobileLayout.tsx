import React from 'react';
import BaseMobileLayout from './BaseMobileLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  list: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
  marker: React.ReactNode;
}

class ListMobileLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, menu, searchBox, list, footer, marker } = this.props;

    return (
      <BaseMobileLayout
        logo={logo}
        menu={menu}
        searchBox={searchBox}
        content={list}
        footer={footer}
        marker={marker}
      />
    );
  }
}

export default ListMobileLayout;
