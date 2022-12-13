import { FC } from 'react';
import MainLayout from '../layouts/Main';

// Redux Store
import { Provider } from 'react-redux';
import store from '../store';

// Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { NextPage, AppProps } from '../next.type';

/**
 *
 * @param page next page that may or may not contain a page layout
 * @returns true: page has a page layout, false: page does not have a page layout
 */
const hasPageLayout = (page: NextPage) =>
  (page as NextPage).getLayout ? true : false;

/**
 * Application Root
 */
const App: FC<AppProps> = ({ Component, pageProps }) => {
  /**
   * Renders the layout of a page if layout is present
   * @param page React Component exported from files in the page directories
   * @returns Page React component wrapped around a layout if a layout for hte page is defined.
   */
  const renderPageLayout =
    (hasPageLayout(Component) && Component.getLayout) || ((page) => page);

  return (
    <Provider store={store}>
      <MainLayout>{renderPageLayout(<Component {...pageProps} />)}</MainLayout>
    </Provider>
  );
};

export default App;
