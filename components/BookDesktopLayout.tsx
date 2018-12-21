import React from 'react';

interface Props {
  logo: React.ReactNode;
  searchBox: React.ReactNode;
  book: React.ReactNode;
  footer: React.ReactNode;
}

class BookDesktopLayout extends React.PureComponent<Props, {}> {
  render() {
    const { logo, searchBox, book, footer } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '98vh',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            minWidth: '600px',
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignSelf: 'stretch', alignItems: 'center' }}>
            <div style={{ flexGrow: 0 }}>{logo}</div>
            <div style={{ flexGrow: 1 }}>{searchBox}</div>
          </div>
          <hr style={{ width: '100%' }} />
          <div style={{ display: 'flex', alignSelf: 'stretch' }} >
          {
            book
          }
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            backgroundColor: '#d6d7d8',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              minWidth: '600px',
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
            }}
          >
            {footer}
          </div>
        </div>
      </div>
    );
  }
}

export default BookDesktopLayout;
