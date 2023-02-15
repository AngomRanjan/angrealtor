import React from 'react';
import { Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
import SignIn from '../pages/SignIn';
import Spinner from './Spinner';

/* eslint-disable no-nested-ternary */

const Restricted = () => {
  const { isLoggedIn, isChecking } = useAuth();
  return (
    <>
      {isChecking ? <Spinner />
        : isLoggedIn ? <Outlet /> : <SignIn />}
    </>
  );
};

export default Restricted;
