import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // inputs[name] = value; (X) 리액트 상태에서 객체 직접수정 불가
    // 아래처럼 새로운 객체를 생서후 새로운 객체에 변화를 주어야 한다.
    // 이를 "불변성을 지킨다" 라고 한다.
    // 불변성을 지켜주어야 리액트 컴포넌트에서 상태가 업데이트 됐을을 감지할수 있고, 이에 따른 필요한 리렌더링이 진행된다.
    setInputs({
      ...inputs, // 기존의 inputs 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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
    </>
  );
}

export default InputSample;
