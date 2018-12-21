import React from 'react';
import Link from 'next/link';

class Edit extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Link href="/edit-search">
            <a>Tìm sách</a>
          </Link>
        </div>
        <div>
          <Link href="/edit-new-book">
            <a>Thêm sách</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Edit;
