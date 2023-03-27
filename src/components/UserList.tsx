import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1 className="text-xl">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-xl">{error}</h1>;
  }

  return (
    <div className="flex flex-col items-start gap-2 font-dmsans font-semibold">
      <h1 className="text-xl underline">User List</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
