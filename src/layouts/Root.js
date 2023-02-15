import { Outlet } from 'react-router';
import Header from '../components/Header';

const Root = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Root;
