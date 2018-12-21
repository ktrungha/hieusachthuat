import React from 'react';
import Book from '../models/Book';
import Axios from 'axios';
import { NextContext } from 'next';
import styled from 'styled-components';
import EditBook from '../components/EditBook';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

interface State {
  book?: Book;
}

interface Props {
  id: number;
}

class EditBookPage extends React.PureComponent<Props, State> {
  state = {} as State;

  static getInitialProps(context: NextContext) {
    return {
      id: context.query.id,
    };
  }

  async componentDidMount() {
    const response = await Axios.get(`/api/books/${this.props.id}`);
    this.setState({ book: response.data });
  }

  render() {
    const { book } = this.state;
    return (
      <Container>
        {book && (
          <>
            <EditBook
              book={book}
              onChange={(book) => {
                this.setState({ book });
              }}
            />
            <Container>
              <button
                onClick={() => {
                  Axios.put(`/api/books/${this.props.id}`, book, {
                    headers: { 'Content-Type': 'application/json' },
                  });
                }}
              >
                Lưu
              </button>
            </Container>
          </>
        )}
      </Container>
    );
  }
}

export default EditBookPage;
