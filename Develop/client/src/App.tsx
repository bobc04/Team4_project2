import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Search } from "./pages/Search";
import { Candidates } from "./pages/Candidate";
import { Work } from "./pages/Work";
import { Profile } from "./pages/Profile";
import { Translate } from "./pages/Translate";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/search" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Candidates />} />
            <Route path="/work" element={<Work />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
