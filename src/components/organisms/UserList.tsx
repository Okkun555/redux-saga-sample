import { useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { State } from '../../store';
import Loader from '../atoms/Loader';
import UserListContent from '../molecules/UserListContent';

const UserList = () => {
  const { data: users, loading } = useSelector((state: State) => state.user);

  if (loading) return <Loader text="Loading" />;

  return (
    <List divided relaxed>
      {users.map((user) => (
        <List.Item key={user.id}>
          <UserListContent user={user} />
        </List.Item>
      ))}
    </List>
  );
};

export default UserList;
