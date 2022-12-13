import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '../components/Container.component';
import Page from '../components/Page.component';
import CenterLayout from '../layouts/Center';
import { NextPage } from '../next.type';

const HomePage: NextPage = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='h1'>NextJS Template</Typography>
      <Typography variant='h4'>Build with NextJS, MUI, and 🧡</Typography>
    </Box>
  );
};

HomePage.getLayout = (page) => {
  return <CenterLayout>{page}</CenterLayout>;
};

export default HomePage;
