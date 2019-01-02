import React from 'react';
import Link from 'next/link';

class Edit extends React.PureComponent {
  render() {
    return (
      <div>
        <div style={{ margin: '50px' }}>
          <Link href="/edit-search">
            <a>Tìm sách</a>
          </Link>
        </div>
        <div style={{ margin: '50px' }}>
          <Link href="/edit-new-book">
            <a>Thêm sách</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Edit;
