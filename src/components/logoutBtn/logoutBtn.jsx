// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserName } from 'redux/auth/authSelectors';
// import { logoutUser } from 'redux/auth/authThanks';

// import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authThunks';

export const LogoutBtn = ({ children }) => {
  const dispatch = useDispatch();
  const handleClick = form => {
    dispatch(logoutUser(form));
  };

  return (
    <button variant="contained" onClick={handleClick}>
      {children}
    </button>
  );
};
