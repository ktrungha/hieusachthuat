import React from 'react';
import Autosuggest from 'react-autosuggest';
import { debounce } from 'lodash';
import Book from '../models/Book';
import { withRouter, WithRouterProps } from 'next/router';
import '../styles/react-autosuggest.css';

interface State {
  options: Book[];
  search: string;
  bookId: number;
}

interface Props extends WithRouterProps {}

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
      this.setState({ search: str });
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
    const { router } = this.props;
    const { options, search } = this.state;
    return (
      <div style={{ margin: '15px' }}>
        <Autosuggest
          onSuggestionsClearRequested={() => {
            this.setState({ options: [] });
          }}
          suggestions={options}
          inputProps={{
            onChange: (_event, { newValue }) => {
              this.setState({ search: newValue });
            },
            value: search,
            onKeyDown: (event) => {
              if (event.keyCode === 13) {
                if (router) {
                  router.push(`/list?search=${this.state.search}`);
                }
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
              if (router) {
                router.push(`/book?id=${this.state.bookId}`);
              }
            });
          }}
        />
      </div>
    );
  }
}

export default withRouter(SearchBox);
