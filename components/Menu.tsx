import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Category from '../models/Category';

const MenuItem = styled.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  border-top: 1px solid ${colors.border};
  :hover {
    cursor: pointer;
  }
  :first-child {
    border-top: none;
  }
`;

const Container = styled.div`
  max-width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px 25px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 5px 1px ${colors.shadow};
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Menu: React.SFC = () => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: colors.blue,
          color: 'white',
          padding: '15px',
          fontSize: '1.15rem',
        }}
      >
        Danh Mục
      </div>
      <div>
        {Object.keys(Category).map((key) => {
          const category = Category[key];
          return (
            <MenuItem>
              <A href={`/list?category=${category}`}>
                <span style={{ textDecoration: 'none' }}>{category}</span>
              </A>
            </MenuItem>
          );
        })}
      </div>
    </Container>
  );
};

export default Menu;
