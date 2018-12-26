import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import colors from '../styles/colors';

class Cover extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          borderRadius: '10px',
          boxShadow: `0 0 5px 1px ${colors.shadow}`,
          overflow: 'hidden',
        }}
      >
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          interval={5000}
          autoPlay={true}
          transitionTime={500}
        >
          <div>
            <img src="./static/Book1.png" />
          </div>
          <div>
            <img src="./static/Book2.png" />
          </div>
          <div>
            <img src="./static/Book3.png" />
          </div>
          <div>
            <img src="./static/Book4.png" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Cover;
