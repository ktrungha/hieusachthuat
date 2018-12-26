import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Category from '../models/Category';
import styled from 'styled-components';
import '../styles/burgerMenu.css';
import colors from '../styles/colors';
import BaseMobileLayout from './BaseMobileLayout';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  menu: React.ReactNode;
  cover: React.ReactNode;
  newBooks: React.ReactNode;
  footer: React.ReactNode;
}

const A = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
`;

class HomeMobileLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, menu, searchBox, cover, newBooks, footer } = this.props;
    const content = (
      <>
        <div style={{ margin: '15px' }}>{cover}</div>
        <div style={{ overflowX: 'auto', width: '100%' }}>{newBooks}</div>{' '}
      </>
    );

    return (
      <BaseMobileLayout
        logo={logo}
        menu={menu}
        searchBox={searchBox}
        content={content}
        footer={footer}
      />
    );
  }
}

export default HomeMobileLayout;
