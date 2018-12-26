import React from 'react';
import Book from '../models/Book';
import colors from '../styles/colors';
import BookElement from './BookElement';

interface Props {
  books: Book[];
}

class NewBooks extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0 0 5px 1px ${colors.shadow}`,
          borderRadius: '10px',
          margin: '15px',
          width: 'calc(100% - 30px)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '10px 20px',
            marginBottom: '0',
            fontSize: '1.2rem',
            backgroundColor: colors.blue,
            color: 'white',
          }}
        >
          Sách mới:
        </div>
        <div
          style={{
            alignSelf: 'center',
            margin: '0 10px',
            width: 'calc(100% - 20px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {this.props.books.map((book: Book) => {
            return <BookElement key={book.id} book={book} />;
          })}
        </div>
      </div>
    );
  }
}

export default NewBooks;
