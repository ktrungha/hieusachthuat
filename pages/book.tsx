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
import BookMobileLayout from '../components/BookMobileLayout';
import { stack as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import Category from '../models/Category';
import { desktopMinWidth, mobileMaxWidth } from '../styles';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
`;

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
        style={{ margin: '15px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <img src={book.image} style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
        <div style={{ margin: '10px 20px' }}>{book.title}</div>
      </div>
    );

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật - {book.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MediaQuery minWidth={desktopMinWidth}>
          <BookDesktopLayout logo={logo} searchBox={searchBox} book={bookElement} footer={footer} />
        </MediaQuery>
        <MediaQuery maxWidth={mobileMaxWidth}>
          <BookMobileLayout logo={logo} menu={
              <Menu>
                {Object.keys(Category).map((key) => {
                  const category = Category[key];
                  return (
                    <A key={category} href={`/list?category=${category}`}>
                      <span>{category}</span>
                    </A>
                  );
                })}
              </Menu>
            } searchBox={searchBox} book={bookElement} footer={footer} />
        </MediaQuery>
      </div>
    );
  }
}

export default BookPage;
