import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  width:'100%',
  height: '200px',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79',
};
const Khuyenmai = () => (
  <Carousel autoplay>
    <div>
    <h3 style={contentStyle}>1</h3>
    </div>
    <div>
    <h3 style={contentStyle}>2</h3>
    </div>
    <div>
    <h3 style={contentStyle}>3</h3>
    </div>
    <div>
    <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Khuyenmai;