import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { RootState } from '../../store/redux.types';
import { actions } from './Redux.slice';
import { useDispatch, useSelector } from '../../store';

interface ReduxModuleProps {}

const ReduxModule: FC<ReduxModuleProps> = (props) => {
  const count = useSelector((state: RootState) => state.redux.value);
  const dispatch = useDispatch();

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
      <Typography variant='h1'>Redux Demo</Typography>
      <Typography
        variant='h4'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography component='span' variant='h4'>
          {count}
        </Typography>
        <Typography component='span' variant='overline'>
          Count
        </Typography>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Button onClick={() => dispatch(actions.incrementByAmount(5))}>
          <AddIcon /> 5
        </Button>
        <Button onClick={() => dispatch(actions.increment())}>
          <AddIcon /> 1
        </Button>
        <Button onClick={() => dispatch(actions.decrement())}>
          <RemoveIcon /> 1
        </Button>
        <Button onClick={() => dispatch(actions.decrementByAmount(5))}>
          <RemoveIcon /> 5
        </Button>
      </Box>
    </Box>
  );
};

export default ReduxModule;
