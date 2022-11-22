import React from "react";
import { Redirect, Route } from "react-router-dom";
import DefaultLayoutPage from "./pages/Strater/DefaultLayoutPage";
import GeneralDashboard from "./pages/Dashboard/GeneralDashboard";
import Admins from "./pages/Components/Admin/Admins";
import AddAdmin from "./pages/Components/Admin/AddAdmin";
import EditAdmin from "./pages/Components/Admin/EditAdmin";
 
const App = () => {
  return (
    <>
      <div className="App">

        <Route path="/dashboard" component={GeneralDashboard} />
        <Route path="/layout/default" component={DefaultLayoutPage} />
        <Route path='/admins' component={Admins}/>
        <Route path='/addAdmin' component={AddAdmin}/>
        <Route path='/editAdmin/:id' component={EditAdmin}/>
        
      </div>
    </>
  );
}

export default App;
