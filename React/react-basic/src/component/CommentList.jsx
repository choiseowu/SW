import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

let comments = [
  {
    name : '서우',
    content : '안녕하세요 최서우 입니다.'
  },
  {
    name : '떠우로운',
    content : '하이룽'
  },
  {
    name : '로운',
    content : '떠우하트'
  }
]

const CommentList = () => {
  let [list, setList] = useState(comments);
  let [name, setName] = useState('');
  let [text, setText] = useState('');

  let deleteComment = (index) => {
    let newList = [...list];
    // slice(배열 변경 할 인덱스 값, 제거할 요소의 수)
    newList.splice(index, 1);
    setList(newList)
    console.log(index)
  }

// value값이 빈 값이라면 삼항연산자로 list가 추가되지 않고 alert창 띄우기
  let addComment = () => {
    name === '' || text === '' ? alert('이름과 글을 입력하세요') : (
      // 즉시 실행 함수 (IIFE)
      // 삼항연산자 조건이 false일 때(name, text에 값이 있을 때)
      // 다음 함수가 즉시 실행되도록 한다.
      (() => {
        // 첫번째 name : key값
        // 두번째 name : let [name, setName]의 초기값
        let add = {name : name, content : text};
        setList([add, ...list])
        // 글추가 후 input satate 변경 함수로 비우기
        setName('')
        setText('')
      })()
      )
  }

  return (
    <div>
      {
        list.map((item, i) => {
          return (
            // 자식 Comment component에 name,text이름으로 값 전달
            <Comment name={item.name} text={item.content} key={i} delete={() => deleteComment(i)}/>
          )
        })
      }
      <span>작성자 : <input value={name} onChange={(e) => setName(e.target.value)}/></span>
      <span>내용 : <input value={text} onChange={(e) => setText(e.target.value)}/></span>
      <button onClick={addComment} type='button'>글작성</button>
    </div>
  );
};

export default CommentList;