import React from 'react';
import Axios from 'axios';
import Book from '../models/Book';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../styles/colors';
import EditBook from '../components/EditBook';

const BookItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${colors.orange};
  }
`;

interface State {
  search: string;
  books: Book[];
  currentBook?: Book;
}

class EditSearch extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: '',
      books: [] as Book[],
    };
  }

  fetchBooks = () => {
    Axios.get(encodeURI(`/api/books?title_like=${this.state.search}&_sort=time&_order=desc`)).then(
      (response) => {
        this.setState({ books: response.data });
      },
    );
  };

  render() {
    const { search, books, currentBook } = this.state;
    return (
      <div style={{ minWidth: '1000px' }}>
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
        <div style={{ alignSelf: 'stretch', display: 'flex' }}>
          <div
            style={{
              alignItems: 'center',
              width: '400px',
              overflow: 'auto',
              padding: '10px',
            }}
          >
            <div style={{ display: 'flex', margin: '15px' }}>
              <input
                style={{
                  padding: '10px',
                  margin: '0 15px',
                  flex: 1,
                }}
                placeholder="Nhập tên sách để tìm kiếm"
                value={search}
                onChange={(event) => {
                  this.setState({ search: event.target.value });
                }}
                onKeyUp={(event) => {
                  if (event.keyCode === 13) {
                    this.fetchBooks();
                  }
                }}
              />
              <button onClick={this.fetchBooks}>Tìm kiếm</button>
            </div>
            <div style={{ maxHeight: '750px' }}>
              {books.map((book, _index) => (
                <BookItem onClick={() => this.setState({ currentBook: { ...book } })}>
                  <img src={book.image} style={{ width: '100px', objectFit: 'contain' }} />
                  <div>
                    [{book.category}] - {book.title}
                  </div>
                </BookItem>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            {currentBook && (
              <>
                <EditBook
                  book={currentBook}
                  onChange={(changedBook) => this.setState({ currentBook: changedBook })}
                />
                <button
                  onClick={() => {
                    Axios.put(`/api/books/${currentBook.id}`, currentBook, {
                      headers: { 'Content-Type': 'application/json' },
                    });
                  }}
                >
                  Lưu
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EditSearch;
