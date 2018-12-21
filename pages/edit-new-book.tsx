import React from 'react';
import styled from 'styled-components';
import EditBook from '../components/EditBook';
import Book from '../models/Book';
import Axios from 'axios';
import { withRouter, WithRouterProps } from 'next/router';

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
    book: {} as Book,
  };
  render() {
    const { book } = this.state;
    return (
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
              const time = new Date().getTime();
              book.time = time;
              Axios.post('/api/books', book, {
                headers: { 'Content-Type': 'application/json' },
              });
              window.location.reload();
            }}
          >
            Tạo mới
          </button>
        </Container>
      </Container>
    );
  }
}

export default withRouter(EditNewBook);
