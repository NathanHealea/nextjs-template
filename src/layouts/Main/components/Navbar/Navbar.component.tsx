import Box, { BoxProps } from '@mui/material/Box';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { FC } from 'react';
import { useScreen } from '../../../../hooks';

interface NavbarProps extends BoxProps {
  /** Y margin spacing applied to each child in the Navbar */
  spy?: number | string;
  /** X margin spacing applied to each child in the Navbar */
  spx?: number | string;
  /** margin spacing applied to each child in the Navbar */
  sp?: number | string;

  /** Button that will be displayed on Mobile size screens */
  mobileButton: ReactNode | ReactElement;
}

const Navbar: FC<NavbarProps> = (props) => {

  const screens = useScreen();
  const {
    children,
    component = 'nav',
    display = 'flex',
    flexDirection = 'row',
    sx,
    sp,
    spx,
    spy,
    mobileButton
  } = props;

  useEffect(() => {
    console.log(screens)
  }, [screens])


  if (screens.isMobile) {
    return <Box>
      {mobileButton}
    </Box>
  }


  return (
    <>
      <Box
        component={component}
        sx={{
          display: display,
          flexDirection: flexDirection,
          ...sx
        }}>
        {React.Children.map(children, (child) => {
          return (
            <Box
              sx={{
                my: spy || sp,
                mx: spx || sp,
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              {child}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Navbar;
