import { Form } from 'semantic-ui-react';

const UserForm = () => {
  return (
    <Form.Group>
      <Form.Input label="Name" placeholder="Your Name" width={6} />
      <Form.Input label="age" type="number" placeholder="19" width={2} />
      <Form.Input label="email" placeholder="sample@email.com" width={8} />
    </Form.Group>
  );
};

export default UserForm;
