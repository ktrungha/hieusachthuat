import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Location from '@material-ui/icons/StoreOutlined';
import Call from '@material-ui/icons/CallOutlined';
import Email from '@material-ui/icons/EmailOutlined';

const Item = styled.div`
  margin: 0 15px;
  border-top: 1px solid ${colors.border};
  padding: 10px 0;
  :first-child {
    border-top: none;
  }
`;

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <Item>
          <div style={{ display: 'inline-block', padding: '0 10px' }}>{<Location />}</div>
          <div style={{ display: 'inline-block' }}>
            Địa chỉ:
            <br />
            80b Bà Triệu, Hoàn Kiếm, Hà Nội
          </div>
        </Item>
        <Item>
          <div style={{ display: 'inline-block', padding: '0 10px' }}>{<Email />}</div>
          <div style={{ display: 'inline-block' }}>
            Email:
            <br />
            hieusachthuat@gmail.com
          </div>
        </Item>
        <Item>
          <div style={{ display: 'inline-block', padding: '0 10px' }}>{<Call />}</div>
          <div style={{ display: 'inline-block' }}>
            Điện thoại:
            <br />
            (24) 38227272
          </div>
        </Item>
      </>
    );
  }
}

export default Footer;
