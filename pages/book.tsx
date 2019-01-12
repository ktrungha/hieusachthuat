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
import LoadingBox from '../components/LoadingBox';

declare const FB: any;
declare const window: { fbAsyncInit: any };

const A = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
`;

interface Props {
  book: Book;
}

interface State {
  commentLoaded: boolean;
}

class BookPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { commentLoaded: false };

    this.commentLoaded = this.commentLoaded.bind(this);
  }

  static async getInitialProps(context: NextContext) {
    const bookId = context.query.id;

    const response = await axios.get(encodeURI(`http://localhost:8000/api/books/${bookId}`));

    return { book: response.data };
  }

  commentLoaded() {
    this.setState({ commentLoaded: true });
  }

  componentDidMount() {
    if (typeof FB === 'undefined') {
      window.fbAsyncInit = () => {
        FB && (FB as any).Event.subscribe('xfbml.render', this.commentLoaded);
      };
    } else {
      FB.Event.subscribe('xfbml.render', this.commentLoaded);
    }

    (function(d, s, id) {
      let js = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src =
        'https://connect.facebook.net/vi_VN/sdk.js' +
        '#xfbml=1&version=v3.2&appId=2220937081486681&autoLogAppEvents=1';
      fjs.parentNode && fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  componentWillUnmount() {
    FB.Event.unsubscribe('xfbml.render', this.commentLoaded);
  }

  render() {
    const { book } = this.props;
    const { commentLoaded } = this.state;
    const logo = <Logo />;
    const searchBox = <SearchBox />;
    const footer = <Footer />;
    const bookElement = (
      <div
        style={{ margin: '15px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <img src={book.image} style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
        <div style={{ margin: '10px 20px' }}>{book.title}</div>
        {!commentLoaded && <LoadingBox message="" />}
        <div className="fb-comments" data-numposts="10" data-order-by="reverse_time" />
      </div>
    );

    const marker = <div>© 2019 - Hiệu sách Thuật</div>;

    return (
      <div>
        <Head>
          <title>Hiệu sách Thuật - {book.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="fb:app_id" content="2220937081486681" />
        </Head>
        <div id="fb-root" />
        <MediaQuery minWidth={desktopMinWidth}>
          <BookDesktopLayout
            logo={logo}
            searchBox={searchBox}
            book={bookElement}
            footer={footer}
            marker={marker}
          />
        </MediaQuery>
        <MediaQuery maxWidth={mobileMaxWidth}>
          <BookMobileLayout
            logo={logo}
            menu={
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
            }
            searchBox={searchBox}
            book={bookElement}
            footer={footer}
            marker={marker}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default BookPage;
