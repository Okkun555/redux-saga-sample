import { FC } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import useUserDetail from '../../hooks/useUserDetail';
import UserForm from './UserForm';

type PropTypes = {
  isOpen: boolean;
  onClickCancel: () => void;
};

const UserRegisterModal: FC<PropTypes> = ({ isOpen, onClickCancel }) => {
  const { name, email, age, handleChangeName, handleChangeEmail, handleChangeAge } =
    useUserDetail();

  const onClickSubmit = () => {
    console.log(name);
    console.log(email);
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
        <Button onClick={onClickCancel}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UserRegisterModal;
