

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
  
        </Routes>
    </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
