import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from './privateroutes';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          
        </Switch>
    </BrowserRouter>
  );
}

export default App;