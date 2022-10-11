import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "vel",
      email: "a@a.com",
    },
    {
      id: 2,
      username: "te",
      email: "b@b.com",
    },
    {
      id: 3,
      username: "li",
      email: "c@c.com",
    },
  ];

  // 리액트에서 배열을 렌더링 할때 key라는 props를 주어야함
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
