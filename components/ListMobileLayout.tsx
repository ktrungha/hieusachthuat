import React from 'react';
import BaseMobileLayout from './BaseMobileLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  list: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
}

class ListMobileLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, menu, searchBox, list, footer } = this.props;

    return (
      <BaseMobileLayout
        logo={logo}
        menu={menu}
        searchBox={searchBox}
        content={list}
        footer={footer}
      />
    );
  }
}

export default ListMobileLayout;
