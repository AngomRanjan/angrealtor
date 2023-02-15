import React from 'react';
import { Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
import SignIn from '../pages/SignIn';

const Restricted = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <Outlet /> : <SignIn />}
    </>
  );
};

export default Restricted;
