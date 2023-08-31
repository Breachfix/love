import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersSuccess,
 
} from "./UserActions";
const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL
});

export const getUsers = async (dispatch) => {
  
  try {
    const res = await axiosInstance.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    
  }
};

//create
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axiosInstance.post("/users", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

// //movieBy Id
// export const fetchUserById = async (id, dispatch) => {
//   dispatch(fetchUserByIdStart());
//   try {
//     const res = await axiosInstance.get("/users/" + id,{
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
    
//     dispatch(fetchUserByIdSuccess(res.data));
// } catch (error) {
//     dispatch(fetchUserByIdFailure())
// }

// }


//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axiosInstance.delete("/user/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};