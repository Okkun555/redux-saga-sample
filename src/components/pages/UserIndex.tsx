import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { fetchUsers } from '../../store/user';
import AddButton from '../atoms/AddButton';
import UserList from '../organisms/UserList';
import UserRegisterModal from '../organisms/UserRegisterModal';

const UserIndex = () => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header size="huge">User Manager</Header>
      <UserList />

      <AddButton onClick={() => setIsOpenModal(true)} />
      <UserRegisterModal isOpen={isOpenModal} onClickCancel={() => setIsOpenModal(false)} />
    </>
  );
};

export default UserIndex;
