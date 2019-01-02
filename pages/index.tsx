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
import { desktopMinWidth, mobileMaxWidth } from '../styles';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
`;

interface Props {
  books1: Book[];
  books2: Book[];
  books3: Book[];
}

class Home extends React.PureComponent<Props, {}> {
  static async getInitialProps() {
    const response1 = await Axios.get(
      encodeURI(
        `http://localhost:8000/api/books?category=${
          Category.sachThieuNhi
        }&_sort=time&_order=desc&_start=0&_limit=5`,
      ),
    );
    const response2 = await Axios.get(
      encodeURI(
        `http://localhost:8000/api/books?category=${
          Category.sachLuyenThi
        }&_sort=time&_order=desc&_start=0&_limit=5`,
      ),
    );
    const response3 = await Axios.get(
      encodeURI(
        `http://localhost:8000/api/books?category=${
          Category.truyen
        }&_sort=time&_order=desc&_start=0&_limit=5`,
      ),
    );

    return { books1: response1.data, books2: response2.data, books3: response3.data };
  }

  render() {
    const { books1, books2, books3 } = this.props;

    const logo = <Logo />;
    const searchBox = <SearchBox />;
    const menu = <Menu />;
    const cover = <Cover />;
    const newBooks = <NewBooks books1={books1} books2={books2} books3={books3} />;
    const footer = <Footer />;

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Hiệu sách Thuật 80b Bà Triệu Hà Nội." />
          <meta
            name="keywords"
            content={
              'Sách,ngoại ngữ,luyện thi,tiếng Anh,Bà Triệu' +
              ',Hà Nội,Thuật,TOEFL,IELTS,TOEIC,PET,SAT,GMAT,GRE'
            }
          />
        </Head>
        <MediaQuery minWidth={desktopMinWidth}>
          <HomeDesktopLayout
            logo={logo}
            searchBox={searchBox}
            menu={menu}
            cover={cover}
            newBooks={newBooks}
            footer={footer}
          />
        </MediaQuery>
        <MediaQuery maxWidth={mobileMaxWidth}>
          <HomeMobileLayout
            logo={logo}
            searchBox={searchBox}
            menu={
              <MobileMenu>
                {Object.keys(Category).map((key) => {
                  const category = Category[key];
                  return (
                    <A key={category} href={`/list?category=${category}`}>
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
