import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { userList, getUser } from "../redux/userSlice";

const AllMembers = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  // const [addFriend, setAddFriend] = useState({
  //   user_id: "",
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   avatar: "",
  // });

  console.log("user", user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userList());
   
  }, []);

  const handleViewProfile = (userId) => {
    dispatch(getUser(userId));
    navigate(`/view-profile/${userId}`);
  };

  const handleAddFriend = () => {
    console.log("addFriend");
  };

  return (
    <div className="mt-30 pt-10 text-7xl text-center text-orange-500">
      <h1>All Members.</h1>

      <div className="grid grid-cols-5 p-5 gap-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center pb-10 mt-10 ">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={
                  new URL(`../assets/images/${user.avatar}`, import.meta.url)
                    .href
                }
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.firstName} {user.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.company}
              </span>
              <div className="flex mt-4 md:mt-6">
                <button
                  onClick={() => handleAddFriend()}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add friend
                </button>
                <button
                  onClick={() => handleViewProfile(`${user.id}`)}
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMembers;