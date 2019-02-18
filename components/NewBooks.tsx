import React from 'react';
import Book from '../models/Book';
import colors from '../styles/colors';
import BookElement from './BookElement';
import styled from 'styled-components';
import { media } from '../styles';

const NewBooksHeader = styled.div`
  padding: 10px 20px;
  margin-bottom: 0;
  font-size: 1.2rem;
  background-color: ${colors.blue};
  color: white;
  ${media.mobile`
    padding: 5px 10px;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 1px ${colors.shadow};
  border-radius: 10px;
  margin: 15px;
  width: calc(100% - 30px);
  overflow: hidden;
  ${media.mobile`
    margin: 10px;
    width: calc(100% - 20px);
  `}
`;

const SectionHeaderDiv = styled.div`
  margin: 15px;
  ${media.mobile`
    margin: 10px;
  `}
`;

interface Props {
  books1: Book[];
  books2: Book[];
  books3: Book[];
}

class NewBooks extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Container>
        <NewBooksHeader>Sách mới:</NewBooksHeader>
        <SectionHeaderDiv>Sách thiếu nhi:</SectionHeaderDiv>
        <div
          style={{
            alignSelf: 'center',
            margin: '0 10px',
            width: 'calc(100% - 20px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
          }}
        >
          {this.props.books1.map((book: Book) => {
            return <BookElement key={book.id} book={book} />;
          })}
        </div>
        <SectionHeaderDiv>Sách luyện thi:</SectionHeaderDiv>
        <div
          style={{
            alignSelf: 'center',
            margin: '0 10px',
            width: 'calc(100% - 20px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
		display: 'flex',
          }}
        >
          {this.props.books2.map((book: Book) => {
            return <BookElement key={book.id} book={book} />;
          })}
        </div>
        <SectionHeaderDiv>Truyện:</SectionHeaderDiv>
        <div
          style={{
            alignSelf: 'center',
            margin: '0 10px',
            width: 'calc(100% - 20px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
		display: 'flex',
          }}
        >
          {this.props.books3.map((book: Book) => {
            return <BookElement key={book.id} book={book} />;
          })}
        </div>
      </Container>
    );
  }
}

export default NewBooks;
