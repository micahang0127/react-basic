import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
