'use client';

interface User {
  id: number;
  username: string;
  email: string;
}

export const UsersList = ({ data }: { data: User[] }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>
            <div>{user.username}  - {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}