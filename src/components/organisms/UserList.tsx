import { useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { State } from '../../store';
import AddButton from '../atoms/AddButton';
import Loader from '../atoms/Loader';
import UserListContent from '../molecules/UserListContent';
import UserRegisterModal from './UserRegisterModal';

const UserList = () => {
  const { data: users, loading } = useSelector((state: State) => state.user);

  const [isOpenModal, setIsOpenModal] = useState(false);

  if (loading) return <Loader text="Loading" />;

  return (
    <>
      <List divided relaxed>
        {users.map((user) => (
          <List.Item key={user.id}>
            <UserListContent user={user} />
          </List.Item>
        ))}
      </List>
      <AddButton onClick={() => setIsOpenModal(true)} />

      <UserRegisterModal isOpen={isOpenModal} onClickCancel={() => setIsOpenModal(false)} />
    </>
  );
};

export default UserList;
