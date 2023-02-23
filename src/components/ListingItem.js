import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

const ListingItem = () => {
  const listing = 'listing';
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link className="contents" to="/">
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          alt="of"
          src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          01/01/2023
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              Munich
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{listing}</p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            $134
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                bath
              </p>
            </div>
          </div>
        </div>
      </Link>
      <FaTrash
        className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
      />
      <MdEdit
        className="absolute bottom-2 right-7 h-4 cursor-pointer "
      />
    </li>
  );
};

export default ListingItem;
