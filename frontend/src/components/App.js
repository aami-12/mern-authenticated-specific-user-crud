import NotesPage from "../Pages/NotesPage";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import LoginPage from "../Pages/LoginPage";
import RequiredAuth from "./RequiredAuth";
import SignupPage from "../Pages/SignupPage";
import LogoutPage from "../Pages/LogoutPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
       <li>
        <Link to="/login">Login</Link>
      </li>
       <li>
        <Link to="/signup">Signup</Link>
      </li>
        <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>

      <Routes>
        <Route index element={<RequiredAuth ><NotesPage /></RequiredAuth>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
