import React from 'react';
import BaseMobileLayout from './BaseMobileLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  book: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
  marker: React.ReactNode;
}
const BookMobileLayout: React.SFC<Props> = (props) => {
  const { logo, menu, searchBox, book, footer, marker } = props;

  return (
    <BaseMobileLayout
      marker={marker}
      logo={logo}
      menu={menu}
      searchBox={searchBox}
      content={book}
      footer={footer}
    />
  );
};

export default BookMobileLayout;
