import React from 'react';
import './Box.css';

const Box = (props) => {
  return (
    <div className='box-item'>
      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img src="https://cdn.topstarnews.net/news/photo/202004/769312_495856_1926.jpg" alt="바위 이미지" />
      <h2>win</h2>
    </div> 
  );
};

export default Box;