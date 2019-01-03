import React from 'react';
import BaseDesktopLayout from './BaseDesktopLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  list: React.ReactNode;
  footer: React.ReactNode;
  marker: React.ReactNode;
}

class ListDesktopLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, searchBox, list, footer, marker } = this.props;
    return (
      <BaseDesktopLayout
        logo={logo}
        searchBox={searchBox}
        content={list}
        footer={footer}
        marker={marker}
      />
    );
  }
}

export default ListDesktopLayout;
