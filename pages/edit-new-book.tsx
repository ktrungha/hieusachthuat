import React from 'react';
import styled from 'styled-components';
import EditBook from '../components/EditBook';
import Book from '../models/Book';
import Axios from 'axios';
import { withRouter, WithRouterProps } from 'next/router';
import Category from '../models/Category';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

interface State {
  book: Book;
}

interface Props extends WithRouterProps {}

class EditNewBook extends React.PureComponent<Props, State> {
  state = {
    book: { category: Category.sachGiaoTrinh } as Book,
  };
  render() {
    const { book } = this.state;
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '20px',
            alignSelf: 'stretch',
          }}
        >
          <Link href="/edit">
            <a>Tìm sách</a>
          </Link>
          <Link href="/edit-new-book">
            <a>Thêm sách</a>
          </Link>
        </div>
        <Container>
          <EditBook
            book={book}
            onChange={(book) => {
              this.setState({ book });
            }}
          />
          <Container>
            <button
              onClick={async () => {
                if (book.title && book.image) {
                  const time = new Date().getTime();
                  book.time = time;
                  Axios.post('/api/books', book, {
                    headers: { 'Content-Type': 'application/json' },
                  });
                  const emptyBook = { category: Category.sachGiaoTrinh } as Book;
                  this.setState({ book: emptyBook });
                }
              }}
            >
              Tạo mới
            </button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditNewBook);
