import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC, ReactElement } from 'react';
import Footer from './components/Footer.component';
import Header, {
  HeaderCenter,
  HeaderEnd,
  HeaderStart
} from './components/Header';
import Navbar from './components/Navbar';

import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavLink from './components/NavLink';
import { NextLinkComposed } from '../../components/Link.component';
interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>
      <Header>
        <HeaderStart>
          <Button component={NextLinkComposed} to='/'>NextJS Template</Button>
        </HeaderStart>
        <HeaderCenter />
        <HeaderEnd>
          <Navbar spx={1}
            mobileButton={<Button><MenuIcon /></Button>}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/404">Not Found</NavLink>
            <NavLink to="https://github.com/NathanHealea/nextjs-template" target="_blank" startIcon={<GitHubIcon />}>Source Code</NavLink>
          </Navbar>
        </HeaderEnd>
      </Header>
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
