import './App.css';
import User from './component/User';
import State from './component/State';

function App() {
  let element = <h1>안녕!</h1>;
  // HTML 코드 return() 안에 작성 해야한다.
  // return() 안에는 무조건 하나의 태그로 시작해서
  // 하나의 태그로 끝나야 한다.(태그를 병렬로 기입 X)
  return (
    // class -> className 
    // 리액트가 Javascript class 문법으로 인식하기 때문
    <div className="App">
    
      <User/>
      <State/>
    </div>
  )};

  export default App;