import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NextLinkComposed } from '../components/Link.component';
import CenterLayout from '../layouts/Center';
import { NextPage } from '../next.type';

interface NotFoundProps {}

const NotFoundPage: NextPage<NotFoundProps> = (props) => {
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
      <Typography variant='h1'>Not Found</Typography>
      <Typography variant='h4'>404</Typography>
      <Box sx={{ display: 'block', py: 1 }} />
      <Button component={NextLinkComposed} to='/' variant='contained'>
        Back to Home
      </Button>
    </Box>
  );
};

NotFoundPage.getLayout = (page) => {
  return <CenterLayout>{page}</CenterLayout>;
};

export default NotFoundPage;
