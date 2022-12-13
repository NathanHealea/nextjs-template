import CenterLayout from '../layouts/Center';
import ReduxModule from '../modules/Redux';
import { NextPage } from '../next.type';

interface ReduxPageProps {}

const ReduxPage: NextPage<ReduxPageProps> = (props) => {
  return <ReduxModule />;
};

ReduxPage.getLayout = (page) => {
  return <CenterLayout>{page}</CenterLayout>;
};
export default ReduxPage;
