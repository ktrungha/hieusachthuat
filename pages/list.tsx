import React from 'react';
import ListDesktopLayout from '../components/ListDesktopLayout';
import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import { NextContext } from 'next';
import Book from '../models/Book';
import MediaQuery from 'react-responsive';
import Head from 'next/head';
import ListBooks, { fetchSize } from '../components/ListBooks';
import axios from 'axios';

interface Props {
  books: Book[];
  title: string;
  baseQuery: string;
}

class List extends React.PureComponent<Props, {}> {
  static async getInitialProps(context: NextContext) {
    const search = context.query.search;
    if (search) {
      const baseQuery = `title_like=${search}`;
      const response = await axios.get(
        encodeURI(
          `http://localhost:8000/api/books?${baseQuery}&_sort=time&_order=desc` +
            `&_start=0&_limit=${fetchSize}`,
        ),
      );

      return {
        baseQuery,
        books: response.data,
        title: search,
      };
    }

    const category = context.query.category;
    const baseQuery = `category=${category}`;
    const response = await axios.get(
      encodeURI(
        `http://localhost:8000/api/books?${baseQuery}&_sort=time` +
          `&_order=desc&_start=0&_limit=${fetchSize}`,
      ),
    );

    return {
      baseQuery,
      books: response.data,
      title: category,
    };
  }

  render() {
    const { title, books, baseQuery } = this.props;

    const logo = <Logo />;
    const searchBox = <SearchBox />;
    const footer = <Footer />;
    const list = (
      <ListBooks
        books={books}
        fetchMore={async (offset, limit) => {
          const response = await axios.get(
            `/api/books?${baseQuery}&_sort=time&_order=desc&_start=${offset}&_limit=${limit}`,
          );
          return response.data as Book[];
        }}
      />
    );

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật - {title}</title>
        </Head>
        <MediaQuery query="(min-device-width: 600px)">
          <ListDesktopLayout logo={logo} searchBox={searchBox} list={list} footer={footer} />
        </MediaQuery>
      </div>
    );
  }
}

export default List;
