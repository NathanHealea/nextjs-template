import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container';
import styled from '@mui/material/styles/styled';

const Container = styled(MuiContainer)<MuiContainerProps>(({ theme }) => ({}));

Container.defaultProps = {
  maxWidth: 'lg',
};

export default Container;
