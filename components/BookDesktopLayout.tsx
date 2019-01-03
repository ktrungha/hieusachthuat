import React from 'react';
import BaseDesktopLayout from './BaseDesktopLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  book: React.ReactNode;
  footer: React.ReactNode;
  marker: React.ReactNode;
}

class BookDesktopLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, searchBox, book, footer, marker } = this.props;
    return (
      <BaseDesktopLayout
        logo={logo}
        searchBox={searchBox}
        content={book}
        footer={footer}
        marker={marker}
      />
    );
  }
}

export default BookDesktopLayout;
