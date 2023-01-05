import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { fetchUsers } from '../../store/user';

const UserIndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Header size="huge">User Manager</Header>;
};

export default UserIndex;
