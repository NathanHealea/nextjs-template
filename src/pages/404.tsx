import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NextPageContext } from 'next/types';
import { FC } from 'react';
import Container from '../components/Container.component';
import { NextLinkComposed } from '../components/Link.component';
import Page from '../components/Page.component';

interface NotFoundProps extends NextPageContext {}

const NotFoundPage: FC<NotFoundProps> = (props) => {
  return (
    <Page
      sx={{
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container>
        <Box sx={{}}>
          <Typography variant='h1'>Not Found</Typography>
          <Typography variant='h4'>404</Typography>
          <Button component={NextLinkComposed} to='/' variant='contained'>
            Back to Home
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

export default NotFoundPage;
