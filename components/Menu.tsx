import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Category from '../models/Category';

const MenuItem = styled.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  border-top: 0.5px solid ${colors.border};
  position: relative;
  display: flex;
  :hover {
    cursor: pointer;
  }
  :first-child {
    border-top: none;
  }
  :hover > div {
    transition: transform 300ms ;
    transform: translate(0)
  }
  :hover > a {
    color: white;
    transition: color 0ms none 300ms;
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
  flex-grow: 1;
`;

const Background = styled.div`
  background-color: #ff9946;
  transform: translate(-100%);
  transition: transform 300ms;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
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
      <nav>
        {Object.keys(Category).map((key) => {
          const category = Category[key];
          return (
            <MenuItem key={category}>
              <Background />
              <A href={`/list?category=${category}`}>
                <span>{category}</span>
              </A>
            </MenuItem>
          );
        })}
      </nav>
    </Container>
  );
};

export default Menu;
