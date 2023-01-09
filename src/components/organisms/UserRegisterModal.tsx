import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'semantic-ui-react';
import useUserDetail from '../../hooks/useUserDetail';
import { registerUser } from '../../store/user';
import UserForm from './UserForm';

type PropTypes = {
  isOpen: boolean;
  closeModal: () => void;
};

const UserRegisterModal: FC<PropTypes> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const {
    name,
    email,
    age,
    handleChangeName,
    handleChangeEmail,
    handleChangeAge,
    resetUserDetail,
  } = useUserDetail();

  const onClickSubmit = () => {
    const params = {
      name,
      email,
      age,
    };

    dispatch(registerUser(params));
    resetUserDetail();
    closeModal();
  };

  return (
    <Modal open={isOpen}>
      <Modal.Header>User Register Form</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <UserForm
            name={name}
            email={email}
            age={age}
            handleChangeName={handleChangeName}
            handleChangeEmail={handleChangeEmail}
            handleChangeAge={handleChangeAge}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClickSubmit} color="google plus">
          Submit
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UserRegisterModal;
