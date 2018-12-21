import React from 'react';
import Book from '../models/Book';
import BookElement from './BookElement';
import Button from '@material-ui/core/Button';

export const fetchSize = 10;

interface Props {
  books: Book[];
  fetchMore: (offset: number, limit: number) => Promise<Book[]>;
}

interface State {
  readonly moreBooks: Book[];
  readonly offset: number;
}

class ListBooks extends React.PureComponent<Props, State> {
  state = {
    moreBooks: [] as Book[],
    offset: fetchSize,
  };

  render() {
    const { books, fetchMore } = this.props;
    const { moreBooks, offset } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {books.map((book) => {
            return <BookElement key={book.id} book={book} />;
          })}
          {moreBooks.map((book) => {
            return <BookElement key={book.id} book={book} />;
          })}
        </div>
        <div style={{ margin: 'auto' }}>
          <Button
            onClick={async () => {
              const fetchedBooks = await fetchMore(offset, fetchSize);
              const newMoreBooks = moreBooks.concat(fetchedBooks);
              this.setState({ moreBooks: newMoreBooks, offset: offset + fetchedBooks.length });
            }}
            variant="contained"
            color="primary"
          >
            Tải thêm
          </Button>
        </div>
      </div>
    );
  }
}

export default ListBooks;
