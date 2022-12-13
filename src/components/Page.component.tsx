import Box, { BoxProps } from '@mui/material/Box';
import styled from '@mui/material/styles/styled';

const Page = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: '1',
  paddingTop: '1rem',
  paddingBottom: '1rem',
}));

Page.defaultProps = {
  component: 'main',
};

export default Page;
