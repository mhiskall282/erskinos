import React from 'react';
import { User } from '../../types/admin';

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="border-b pb-2">
            <p className="font-medium">{user.email}</p>
            <p className="text-sm text-gray-600">Joined: {user.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;