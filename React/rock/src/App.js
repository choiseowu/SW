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
  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');



  // 유저랑 컴퓨터가 선택한 값 업데이트
  let play = (userChoice) => {
    setUserSelect(choice[userChoice])

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgment(choice[userChoice], comChoice))
  }



  // 컴퓨터 랜덤 값 선택
  let randomChoice = () => {
    // choice object 키값을 배열로 만들어주는 함수 사용 
    // keys() : 객체의 key 값을 뽑아서 Array로 만들어주는 함수 
    let itemArr = Object.keys(choice);

    // 0부터 2사이에 있는 랜덤 값
    // Math.floor : 소수점 이하를 버리는 함수 
    let randomItem = Math.floor(Math.random() * itemArr.length)
    let final = itemArr[randomItem]
    
    // 해당 함수가 호출 됐을 때 반환할 값 
    return choice[final]
  }
  randomChoice()



  // 조건문으로 유지, 컴퓨터 중 누가 이겼는지 판단 
  let judgment = (user, computer) => {
    // user가 이겼는지, computer가 이겼는지 
    // 어떤 값을 이용해서 판단할건지 결정
    // 사용자가 rock 컴퓨터가 scissors 사용자가 win, com lose
    // 사용자가 선택한 값, 컴퓨터가 선택한 값 비교 
    if(user.name == computer.name) {
      return 'tie'
    } else if (user.name == 'Rock') return computer.name == 'Scissors' ? 'win': 'lose'
    else if(user.name == 'Paper') return computer.name == 'Rock' ? 'win' : 'lose'
    else if(user.name == 'Scissors') return computer.name == 'Paper' ? 'win' : 'lose'
  }
   


  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      
      <div className="btn-list">
        <button onClick={() => play('scissors')} type='button'>가위</button>
        <button onClick={() => play('rock')} type='button'>바위</button>
        <button onClick={() => play('paper')} type='button'>보</button>
      </div>
    </div>
  );
}

export default App;
