import React, { useState, useRef } from "react";

// 리액트에서 DOM을 조작할때 ref를 사용한다.
// 함수형 컴포넌트에서는 ref를 사용할때 useRef 라는 Hook을 사용한다.
// 클래스 컴포넌트에서는 콜백함수를 사용하거나 React.createRef를 사용하는데, 클래스 컴포넌트는 이제 별로 중요하지 않다.

// 아래 예제는 초기화 버튼을 누르면 포커스가 input으로 잡히도록 한다.
function InputFocus() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputFocus;
