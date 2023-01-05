import { FC } from 'react';
import { Loader as LoaderUi } from 'semantic-ui-react';

type PropTypes = {
  text: string;
};

const Loader: FC<PropTypes> = ({ text }) => <LoaderUi active>{text}</LoaderUi>;

export default Loader;
