import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

export default function UserList() {

const { users, dispatch } = useContext(UserContext);

  
    useEffect(() => {
      getUsers(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
      deleteUser(id, dispatch);
    };
  
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar || "https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/avata.avif?alt=media&token=f4f000cd-3ba8-441c-89ba-356f553ad51e" } alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 120 },
    { field: "username", headerName: "Username", width: 120 },
    { field: "isAdmin", headerName: "isAdmin", width: 120 },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{
               pathname: "/user/" + params.row._id, 
               state:{ user: params.row }} }>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8, 10, 20, 50]}  
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
