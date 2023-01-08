import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';

type PropTypes = {
  name: string;
  email: string;
  age: number;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserForm: FC<PropTypes> = ({
  name,
  email,
  age,
  handleChangeName,
  handleChangeEmail,
  handleChangeAge,
}) => (
  <Form.Group>
    <Form.Input
      value={name}
      onChange={handleChangeName}
      label="Name"
      placeholder="Your Name"
      width={6}
    />
    <Form.Input
      value={age}
      onChange={handleChangeAge}
      label="age"
      type="number"
      placeholder="19"
      width={2}
    />
    <Form.Input
      value={email}
      onChange={handleChangeEmail}
      label="email"
      placeholder="sample@email.com"
      width={8}
    />
  </Form.Group>
);

export default UserForm;
