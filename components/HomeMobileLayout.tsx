import React from 'react';
import styled from 'styled-components';
import '../styles/burgerMenu.css';
import BaseMobileLayout from './BaseMobileLayout';
import { media } from '../styles';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  menu: React.ReactNode;
  cover: React.ReactNode;
  newBooks: React.ReactNode;
  footer: React.ReactNode;
  marker: React.ReactNode;
}

const CoverContainer = styled.div`
  margin: 15px;
  ${media.mobile`
    margin: 10px;
  `}
`;

class HomeMobileLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, menu, searchBox, cover, newBooks, footer, marker } = this.props;
    const content = (
      <>
        <CoverContainer>{cover}</CoverContainer>
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
        marker={marker}
      />
    );
  }
}

export default HomeMobileLayout;
