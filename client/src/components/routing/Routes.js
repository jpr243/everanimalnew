import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddPet from '../profile-forms/AddPet';
import CreateBooking from '../profile-forms/CreateBooking';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-client' component={CreateProfile} />
        <PrivateRoute exact path='/edit-client' component={EditProfile} />
        <PrivateRoute exact path='/add-pet' component={AddPet} />
        <PrivateRoute exact path='/create-booking' component={CreateBooking} />
      </Switch>
    </section>
  );
};

export default Routes;