import { FC, ReactNode } from 'react';
import Container from '../../components/Container.component';
import Page from '../../components/Page.component';

interface CenterLayoutProps {
  children?: ReactNode;
}

const CenterLayout: FC<CenterLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Page
      sx={{
        flexGrow: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>{children}</Container>
    </Page>
  );
};

export default CenterLayout;
