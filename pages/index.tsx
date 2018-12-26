import React from 'react';
import Head from 'next/head';
import MediaQuery from 'react-responsive';
import HomeDesktopLayout from '../components/HomeDesktopLayout';
import SearchBox from '../components/SearchBox';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Cover from '../components/Cover';
import NewBooks from '../components/NewBooks';
import Axios from 'axios';
import Book from '../models/Book';
import HomeMobileLayout from '../components/HomeMobileLayout';
import Category from '../models/Category';
import { stack as MobileMenu } from 'react-burger-menu';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
`;

interface Props {
  books: Book[];
}

class Home extends React.PureComponent<Props, {}> {
  static async getInitialProps() {
    const response = await Axios.get(
      'http://localhost:8000/api/books?_sort=time&_order=desc&_start=0&_limit=5',
    );

    return { books: response.data };
  }

  render() {
    const { books } = this.props;

    const logo = <Logo />;
    const searchBox = <SearchBox />;
    const menu = <Menu />;
    const cover = <Cover />;
    const newBooks = <NewBooks books={books} />;
    const footer = <Footer />;

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật - 80b Bà Triệu - Hà Nội</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MediaQuery minWidth={601}>
          <HomeDesktopLayout
            logo={logo}
            searchBox={searchBox}
            menu={menu}
            cover={cover}
            newBooks={newBooks}
            footer={footer}
          />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeMobileLayout
            logo={logo}
            searchBox={searchBox}
            menu={
              <MobileMenu >
                {Object.keys(Category).map((key) => {
                  const category = Category[key];
                  return (
                    <A href={`/list?category=${category}`}>
                      <span>{category}</span>
                    </A>
                  );
                })}
              </MobileMenu>
            }
            cover={cover}
            newBooks={newBooks}
            footer={footer}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Home;
