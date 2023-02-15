import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layouts/Root';
import ForgotPwd from './pages/ForgotPwd';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Error Page</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'sign-in',
          element: <SignIn />,
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        },
        {
          path: 'offers',
          element: <Offers />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPwd />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
