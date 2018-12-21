import React from 'react';
import styled from 'styled-components';
import Book from '../models/Book';
import Category from '../models/Category';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

interface Props {
  book: Book;
  onChange: (book: Book) => void;
}

class EditBook extends React.PureComponent<Props, {}> {
  render() {
    const { book, onChange } = this.props;

    return (
      <>
        <Container>
          <img src={book.image} style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
          <Input
            value={book.image}
            onChange={(event) => {
              const newBook = { ...book, image: event.target.value };
              onChange(newBook);
            }}
          />
        </Container>
        <Container>
          Tiêu đề:&nbsp;
          <Input
            value={book.title}
            onChange={(event) => {
              const newBook = { ...book, title: event.target.value };
              onChange(newBook);
            }}
          />
        </Container>
        <Container>
          Thể loại:&nbsp;
          <Select
            defaultValue={book.category}
            onChange={(event) => {
              const newBook = { ...book, category: event.target.value };
              onChange(newBook);
            }}
          >
            {Object.keys(Category).map((key: string) => {
              const category: string = Category[key];
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </Select>
        </Container>
      </>
    );
  }
}

export default EditBook;
