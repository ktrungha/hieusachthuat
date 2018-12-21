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
          width: '100%',
        }}
      >
        <div style={{ margin: '15px 25px', marginBottom: '0', fontSize: '1.3rem' }}>Sách mới:</div>
        <div
          style={{
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
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
