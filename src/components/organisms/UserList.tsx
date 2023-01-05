import { useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { State } from '../../store';
import Loader from '../atoms/Loader';

const UserList = () => {
  const { data: users, loading } = useSelector((state: State) => state.user);
  console.log(users);

  if (loading) return <Loader text="Loading" />;

  return <div>Test</div>;
};

export default UserList;
