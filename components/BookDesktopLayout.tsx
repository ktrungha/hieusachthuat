import React from 'react';
import BaseDesktopLayout from './BaseDesktopLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  book: React.ReactNode;
  footer: React.ReactNode;
}

class BookDesktopLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, searchBox, book, footer } = this.props;
    return <BaseDesktopLayout logo={logo} searchBox={searchBox} content={book} footer={footer} />;
  }
}

export default BookDesktopLayout;
