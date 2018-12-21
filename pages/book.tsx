import React from 'react';
import Book from '../models/Book';
import { NextContext } from 'next';
import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import Head from 'next/head';
import MediaQuery from 'react-responsive';
import BookDesktopLayout from '../components/BookDesktopLayout';
import axios from 'axios';

interface Props {
  book: Book;
}

class BookPage extends React.PureComponent<Props, {}> {
  static async getInitialProps(context: NextContext) {
    const bookId = context.query.id;

    const response = await axios.get(encodeURI(`http://localhost:8000/api/books/${bookId}`));

    return { book: response.data };
  }

  render() {
    const { book } = this.props;
    const logo = <Logo />;
    const searchBox = <SearchBox />;
    const footer = <Footer />;
    const bookElement = (
      <div
        style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <img src={book.image} style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
        <div style={{ margin: '10px 20px' }}>{book.title}</div>
      </div>
    );

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật - {book.title}</title>
        </Head>
        <MediaQuery query="(min-device-width: 600px)">
          <BookDesktopLayout logo={logo} searchBox={searchBox} book={bookElement} footer={footer} />
        </MediaQuery>
      </div>
    );
  }
}

export default BookPage;
