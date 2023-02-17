import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../api/firebase';

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    auth.signOut();
    toast.success('You have Signed out successfully');
    navigate('/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>sign out</button>
    </div>
  );
};

export default Profile;
