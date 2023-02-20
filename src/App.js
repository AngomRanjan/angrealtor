import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restricted from './components/Restricted';
import Root from './layouts/Root';
import ForgotPwd from './pages/ForgotPwd';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Listing from './pages/Listing';
import CreateListing from './pages/CreateListing';

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
          path: 'listing',
          element: <Listing />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPwd />,
        },
        {
          element: <Restricted />,
          children: [
            {
              path: 'profile',
              element: <Profile />,
            },

            {
              path: 'create-listing',
              element: <CreateListing />,
            },
          ],
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
