import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import NewProduct from "./pages/newProduct/NewProduct";
import Logini from "./pages/logini/Logini";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { useEffect } from "react";
import Register from "./pages/register/Register";
import { Navigate } from 'react-router-dom';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Router>
  );
}

function AuthenticatedApp() {
  const navigate = useNavigate();

  // Redirect to root path if the user is logged in and tries to access /login
  useEffect(() => {
    if (window.location.pathname === "/logini") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Sidebar />
            <Home />
          </div>
        } />
        <Route path="/users" element={
           <div className="container">
           <Sidebar />
        <UserList />
        </div>
        } />
        <Route path="/user/:userId" element={
        <div className="container">
           <Sidebar />
        <User  />
        </div>
        } />



        <Route path="/newUser" element={
        <div className="container">
           <Sidebar />
        <NewUser />
        </div>
        } />
        <Route path="/register" element={
        <div className="container">
           <Register />
        
        </div>
        } />



        <Route path="/movies" element={
        <div className="container">
           <Sidebar />
        <ProductList />
        </div>
        } />



        <Route path="/product/:id" element={
        <div className="container">
           <Sidebar />
        <Product  />
        </div>
        } />




        <Route path="/newproduct" element={
        <div className="container">
           <Sidebar />
        <NewProduct />
        </div>
        } />


       <Route path="/lists" element={
        <div className="container">
           <Sidebar />
        <ListList />
        </div>
        } />



        <Route path="/list/:listId" element={
        <div className="container">
           <Sidebar />
        <List  />
        </div>
        } />




        <Route path="/newlist" element={
        <div className="container">
           <Sidebar />
        <NewList />
        </div>
        } />
 




      </Routes>
    </>
  );
}

function UnauthenticatedApp() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route exact path="/" element={user ? <Home/> : <Navigate to = "/register"/>} /> 
      <Route path="/register" element={!user ? <Register/> : <Navigate to = "/"/>} /> 
      <Route path="/logini" element= {!user ? <Logini/> : <Navigate to = "/"/>} /> 
     
    </Routes>
  );
}



export default App;
