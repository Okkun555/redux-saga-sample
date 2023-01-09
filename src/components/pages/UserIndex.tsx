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
    // FIXME: 追加→リスト更新を表現するためにモーダルの開閉を監視（別の方法ありそう）
  }, [dispatch, isOpenModal]);

  return (
    <>
      <Header size="huge">User Manager</Header>
      <UserList />

      <AddButton onClick={() => setIsOpenModal(true)} />
      <UserRegisterModal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} />
    </>
  );
};

export default UserIndex;
