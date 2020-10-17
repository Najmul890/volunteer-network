import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  
  Link,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Tasks from './components/Tasks/Tasks';
import Register from './components/Register/Register';
import { AuthContextProvider, PrivateRoute } from './components/Login/UseAuth';
import Login from './components/Login/Login';
import TaskEvents from './components/TaskEvents/TaskEvents';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <AuthContextProvider>
      <Router>
      <Switch>
        <Route exact path="/" >
           <Header></Header>
           <Tasks></Tasks>
        </Route>
        <Route path="/login">
          <Header></Header>
          <Login></Login>
        </Route>
        <PrivateRoute path="/task/:taskId" >
          <Header></Header>
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/admin" >
          <Header></Header>
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/regEvents">
          <Header></Header>
          <TaskEvents></TaskEvents>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
