import { FC } from 'react';
import { Button } from 'semantic-ui-react';

type PropTypes = {
  onClick: () => void;
};

const AddButton: FC<PropTypes> = ({ onClick }) => (
  <Button circular color="google plus" icon="plus" onClick={onClick} />
);

export default AddButton;
