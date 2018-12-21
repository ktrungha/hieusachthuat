import React from 'react';
import Axios from 'axios';
import Book from '../models/Book';
import BookElement from '../components/BookElement';

interface State {
  search: string;
  books: Book[];
}

class EditSearch extends React.PureComponent<{}, State> {
  state = {
    search: '',
    books: [] as Book[],
  };
  render() {
    const { search } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            style={{ padding: '10px', width: '400px', margin: '15px' }}
            placeholder="Nhập tên sách để tìm kiếm"
            value={search}
            onChange={(event) => {
              this.setState({ search: event.target.value });
            }}
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                Axios.get(encodeURI(`/api/books?title_like=${this.state.search}`)).then(
                  (response) => {
                    this.setState({ books: response.data });
                  },
                );
              }
            }}
          />
          <button
            style={{ height: 'fit-content' }}
            onClick={() => {
              Axios.get(encodeURI(`/api/books?title_like=${this.state.search}`)).then(
                (response) => {
                  this.setState({ books: response.data });
                },
              );
            }}
          >
            Tìm kiếm
          </button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
          {this.state.books.map((book) => {
            return <BookElement book={book} edit={true} />;
          })}
        </div>
      </div>
    );
  }
}

export default EditSearch;
