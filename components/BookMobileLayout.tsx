import React from 'react';
import BaseMobileLayout from './BaseMobileLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  book: React.ReactNode;
  footer: React.ReactNode;
  menu: React.ReactNode;
}
const BookMobileLayout: React.SFC<Props> = (props) => {
  const { logo, menu, searchBox, book, footer } = props;

  return (
    <BaseMobileLayout
      logo={logo}
      menu={menu}
      searchBox={searchBox}
      content={book}
      footer={footer}
    />
  );
};

export default BookMobileLayout;
