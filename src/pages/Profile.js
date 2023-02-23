import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { auth } from '../api/firebase';
import ListingItem from '../components/ListingItem';

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    setIsChanged(true);
  };
  const handleClick = () => {
    auth.signOut();
    toast.success('You have Signed out successfully');
    navigate('/');
    // Temp settings
    setListings(listings);
    setLoading(loading);
  };

  const updateProfile = () => {
    if (isChanged) console.log('update');
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const curMode = (!editMode) ? true : updateProfile();
    setEditMode(curMode);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form action="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              required
              disabled={!editMode}
              onChange={handleChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${editMode && 'bg-red-200 focus:bg-red-200'}`}
            />
            <input
              type="email"
              id="email"
              required
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <button
                  type="submit"
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {editMode ? 'Update' : 'Edit'}
                </button>
              </p>
              <button
                type="button"
                onClick={handleClick}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </button>
            </div>
          </form>
          <Link
            to="/create-listing"
            className="flex justify-center items-center w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
            Sell or rent your home
          </Link>
        </div>
      </section>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">
              My Listings
            </h2>
            <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {listings.map((listing) => (
                <ListingItem key={listing.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
