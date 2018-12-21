import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Container = styled.div`
  background-color: #d6d7d8;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Item = styled.div`
  margin: 10px 15px;
  border-top: 1px solid ${colors.border};
  padding: 10px;
  :first-child {
    border-top: none;
  }
`;

class Footer extends React.PureComponent {
  render() {
    return (
        <Container>
          <div />
          <div>
            <Item>
              Địa chỉ:
              <br />
              80b Bà Triệu, Hoàn Kiếm, Hà Nội
            </Item>
            <Item>
              Email:
              <br />
              hieusachthuat@gmail.com
            </Item>
            <Item>
              Điện thoại:
              <br />
              (24) 38227272
            </Item>
          </div>
        </Container>
    );
  }
}

export default Footer;
