import React from 'react';
import Book from '../models/Book';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 10px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

interface Props {
  book: Book;
  edit: boolean;
}

class BookElement extends React.PureComponent<Props, {}> {
  public static defaultProps = {
    edit: false,
  };

  render() {
    const { book, edit } = this.props;
    return (
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        href={edit ? `/edit-book?id=${book.id}` : `/book?id=${book.id}`}
      >
        <Container>
          <img style={{ height: '200px', objectFit: 'contain' }} src={book.image} />
          <div
            style={{ padding: '15px 10px', height: '45px', display: 'flex', alignItems: 'center' }}
          >
            {book.title}
          </div>
        </Container>
      </a>
    );
  }
}

export default BookElement;
