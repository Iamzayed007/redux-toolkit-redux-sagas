

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Users from './views/Users';

function App() {

  
  return (
    <Router >
        <Routes >
          <Route path="/" element={ <Users />}>
           
          </Route>
  
        </Routes>
    </Router>
  );
}

export default App;
