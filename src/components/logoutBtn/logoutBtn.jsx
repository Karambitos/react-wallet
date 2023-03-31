// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserName } from 'redux/auth/authSelectors';
// import { logoutUser } from 'redux/auth/authThanks';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authThunks';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleClick = form => {
    dispatch(logoutUser(form));
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Logout
    </Button>
  );
};
