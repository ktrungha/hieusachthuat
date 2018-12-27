import React from 'react';
import Book from '../models/Book';
import styled from 'styled-components';
import { media } from '../styles';
import colors from '../styles/colors';

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
  width: calc(20% - 20px);
  :hover {
    cursor: pointer;
    background-color: ${colors.orange};
    color: white;
    transition: background-color 300ms;
  }
  ${media.mobile`
    margin: 10px 5px;
    width: calc(45% - 10px);
  `}
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
      <Container>
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
              textAlign: 'center',
              maxWidth: '190px',
              whiteSpace: 'normal',
              textOverflow: 'ellipsis',
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
