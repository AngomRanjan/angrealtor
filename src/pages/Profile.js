import { useNavigate } from 'react-router';
import { auth } from '../api/firebase';

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>sign out</button>
    </div>
  );
};

export default Profile;
