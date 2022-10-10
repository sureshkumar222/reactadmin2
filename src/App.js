import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import "./css/sb-admin-2.css";
import Top from "./Top";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import View from "./View";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Top />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}> </Route>
            <Route path="/user" element={<User/>}> </Route>
            <Route path="/user_create" element={<Usercreate/>}> </Route>
            <Route path="/user/:id" element={<View/>}> </Route>
            <Route path="/edit/:id" element={<Edituser/>}> </Route>
            
            

          </Routes>
        </div>
      </div>
    </div></BrowserRouter>
  );
}

export default App;