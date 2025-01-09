import { fetchData } from '@/actions/apiRoutes';
import { USERS_LIST } from '@/apiRoutes';
import { UsersList } from '@/components/UsersList';
import React from 'react';

const UsersPage = async () => {
  const resJson = await fetchData({ url: USERS_LIST });
  return (
    <div>
      <UsersList data={resJson || []} />
    </div>
  );
};

export const generateMetadata = async () => {
  return { title: 'Users Page' };
}

export default UsersPage;