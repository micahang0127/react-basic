import React, { useEffect } from "react";

/*
주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.

props 로 받은 값을 컴포넌트의 로컬 상태로 설정
외부 API 요청 (REST API 등)
라이브러리 사용 (D3, Video.js 등...)
setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.

setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
라이브러리 인스턴스 제거

[Code]
useEffect(() => { //마운트

return () => { //언마운트
    //useEffect 반환되는 함수는 cleanup 함수 (뒷정리)
    //deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출
};
}, []);

deps에 빈배열: 처음에만 함수 호출
deps에 의존값 존재 : 처음과 지정값이 변경될 때 호출
deps가 아예 없는 경우 : 컴포넌트가 리렌더링 될 때마다 호출
*/

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("미운트 = 컴포넌트가 화면 나타남");
    console.log("user갑이 설정됨");
    console.log(user);
    return () => {
      console.log("언마운트 =컴포넌트가 화면에서 사라짐");
      console.log("user가 바뀌기전");
      console.log(user);
    };
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
