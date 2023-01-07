import { FC } from 'react';
import { Modal, Button } from 'semantic-ui-react';

type PropTypes = {
  isOpen: boolean;
  onClickCancel: () => void;
};

const UserRegisterModal: FC<PropTypes> = ({ isOpen, onClickCancel }) => {
  const onClickSubmit = () => console.log('登録');

  return (
    <Modal open={isOpen}>
      <Modal.Header>User Register Form</Modal.Header>
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
