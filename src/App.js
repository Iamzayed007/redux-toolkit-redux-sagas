

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import Users from './views/Users';
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Theme from "./components/Theme/Theme";
import UserDetails from "./views/UserDetails/UserDetails";

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="dark:bg-slate-900">
    <Router >
      <Theme/>
        <Routes >
          <Route path="/" element={ <Users />}>
           
          </Route>
          <Route path="/:userId" element={ <UserDetails />}>
           
          </Route>
  
        </Routes>
    </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
