import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
import { TextFieldDemo, InputDemo, Trainee, ChildrenDemo, Login, NotFound,} from './pages/index';
import { AuthRoute, PrivateRoute } from './routes/index';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/trainee" />
        </Route>
        <AuthRoute path="/login" component={Login} />
        <PrivateRoute path="/childrendemo" component={ChildrenDemo} />
        <PrivateRoute path="/textField demo" component={TextFieldDemo} />
        <PrivateRoute path="/inputdemo" component={InputDemo} />
        <PrivateRoute path="/trainee" component={Trainee} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Router>
  </div>
);
export default App;