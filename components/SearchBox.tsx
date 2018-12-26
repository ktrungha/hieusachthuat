import React from 'react';
import Autosuggest from 'react-autosuggest';
import { debounce } from 'lodash';
import Book from '../models/Book';
import '../styles/react-autosuggest.css';

interface State {
  options: Book[];
  search: string;
  bookId: number;
}

interface Props {}

class SearchBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: [] as Book[],
      search: '',
      bookId: NaN,
    };

    this.inputChange = debounce(this.inputChange.bind(this), 500);
  }

  inputChange(str: string) {
    if (str === '') {
      this.setState({ options: [] as Book[] });
    } else {
      fetch(`/api/books?title_like=${str}&_sort=title`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({ options: json });
        });
    }
  }

  render() {
    const { options, search } = this.state;
    return (
      <div style={{ margin: '0 10px' }}>
        <Autosuggest
          onSuggestionsClearRequested={() => {
            this.setState({ options: [] });
          }}
          suggestions={options}
          inputProps={{
            placeholder: 'Nhập tên sách để tìm kiếm...',
            onChange: (_event, { newValue }) => {
              this.setState({ search: newValue });
            },
            value: search,
            onKeyDown: (event) => {
              if (event.keyCode === 13) {
                window.location.href = encodeURI(`/list?search=${this.state.search}`);
              }
            },
          }}
          getSuggestionValue={(option) => {
            return option.title;
          }}
          onSuggestionsFetchRequested={({ value }) => {
            this.inputChange(value);
          }}
          renderSuggestion={(suggestion) => {
            return <div>{suggestion.title}</div>;
          }}
          onSuggestionSelected={(_event, { suggestion }) => {
            this.setState({ bookId: suggestion.id }, () => {
              window.location.href = encodeURI(`/book?id=${this.state.bookId}`);
            });
          }}
        />
      </div>
    );
  }
}

export default SearchBox;
