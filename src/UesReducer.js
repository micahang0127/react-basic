import React, { useReducer } from "react";

/*
reducer
현재상태와 액션 객체를 파라미터로 받아오사ㅓ 새로운 상태를 반환해주는 함수

[code]
const [state, dispatch] = useReducer(reducer, initialState);
state : 컴포넌트에서 사용할 수 있는 상태
dispatch : 액션을 발생시키는 함수
useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태

*/
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
