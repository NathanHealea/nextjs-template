import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '../components/Container.component';
import Page from '../components/Page.component';

export default function Home() {
  return (
    <Page
      sx={{
        flexGrow: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
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
      </Container>
    </Page>
  );
}
