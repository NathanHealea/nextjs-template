import { NextPage } from 'next/types';
import ReduxModule from '../modules/Redux';

interface ReduxPageProps {}

const ReduxPage: NextPage<ReduxPageProps> = (props) => {
  return <ReduxModule />;
};

export default ReduxPage;
