import { FC } from 'react';
import { List } from 'semantic-ui-react';
import { User } from '../../types';

type PropTypes = {
  user: User;
};

const UserListContent: FC<PropTypes> = ({ user }) => {
  return (
    <List.Item>
      <List.Content>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Header>{user.name}</List.Header>
        <List.Description>
          【Email】 {user.email} 【Age】 {user.age}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default UserListContent;
