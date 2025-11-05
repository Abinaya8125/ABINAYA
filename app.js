import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 w-full flex justify-center space-x-4">
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <div className="mt-8 w-full max-w-md">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
   
