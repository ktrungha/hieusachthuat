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
  display: inline-block;
  min-width: 110px;
  max-width: 200px;
  :hover {
    cursor: pointer;
  }
`;

interface Props {
  book: Book;
  edit: boolean;
  mobile: boolean;
}

class BookElement extends React.PureComponent<Props, {}> {
  public static defaultProps = {
    edit: false,
    mobile: false,
  };

  render() {
    const { book, edit, mobile } = this.props;
    return (
      <Container
        style={{
          width: mobile ? 'calc(50% - 20px)' : 'calc(20% - 20px)',
        }}
      >
        <a
          style={{ textDecoration: 'none', color: 'inherit' }}
          href={edit ? `/edit-book?id=${book.id}` : `/book?id=${book.id}`}
        >
          <img style={{ width: '100%', objectFit: 'contain', display: 'block' }} src={book.image} />
          <div
            style={{
              padding: '15px 10px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '190px',
              whiteSpace: 'normal',
            }}
          >
            {book.title}
          </div>
        </a>
      </Container>
    );
  }
}

export default BookElement;
