// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserName } from 'redux/auth/authSelectors';
// import { logoutUser } from 'redux/auth/authThanks';

// import { Button } from '@mui/material';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useState } from 'react';

export const LogoutBtn = ({ children }) => {
  const [showModalLogout, setShowModalLogout] = useState(false);

  const handleClick = () => {
    handleModalToggle();
  };

  const handleModalToggle = () => {
    setShowModalLogout(s => !s);
  };

  return (
    <>
      <button variant="contained" onClick={handleClick}>
        {children}
      </button>
      {showModalLogout && <ModalLogout onClose={handleModalToggle} />}
    </>
  );
};
