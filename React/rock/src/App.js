import { useState } from 'react';
import './App.css';
import Box from './component/Box';

let choice = {
  rock : {
    name : 'Rock',
    img : 'https://cdn.topstarnews.net/news/photo/202004/769312_495856_1926.jpg'
  },
  paper : {
    name : 'Paper',
    img : 'https://r2.jjalbot.com/2023/07/ZkrXbfjJ3.jpeg'
  },
  scissors : {
    name : 'Scissors',
    img : 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/979/b1e5e152a2a4c09bde22bcdad76c2f58_res.jpeg'
  }
}

function App() {
  let [userSelect, setuserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');
  
  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      
      <div className="btn-list">
        <button type='button'>가위</button>
        <button type='button'>바위</button>
        <button type='button'>보</button>
      </div>
    </div>
  );
}

export default App;
