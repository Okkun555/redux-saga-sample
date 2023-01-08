import { FC } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import UserForm from './UserForm';

type PropTypes = {
  isOpen: boolean;
  onClickCancel: () => void;
};

const UserRegisterModal: FC<PropTypes> = ({ isOpen, onClickCancel }) => {
  const onClickSubmit = () => console.log('登録');

  return (
    <Modal open={isOpen}>
      <Modal.Header>User Register Form</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <UserForm />
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
