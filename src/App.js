import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  const nextId = useRef(4);
  // [배열변경]
  // 리액트에서 배열, 객체 변경은 불변성을 지켜주어야 한다.
  // 때문에 배열에 push, splice, sort 등의 함수를 사용하면 안된다.
  // 기존의 배열을 복사후 사용해야 한다.

  // 방법1. spread 연산자 사용
  // 방법2. cancat 함수 사용 - 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어 준다.
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 방법1
    setUsers([...users, user]);
    // 방법2
    // setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // const onToggle = (id) => {
  //   setUsers(
  //     users.map((user) =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // };

  // useCallback
  // 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  // useMemo를 사용하지 않으면, input change에서도 리렌더링됨
  // const count = countActiveUsers(users);

  // useMemo
  // 첫번째 파라미터 : 처리 연산 함수
  // 두번째 파라미터 : deps배열을 넣어주면 됨
  // 이 배열 내용이 바귀면 첫번째 파라미터 함수 호출하고, 만약 바뀌지 않았으면, 이전에 연산한 값을 재사용함
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
