import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import AppTopBar from "./components/AppTopBar";

function App() {
  return (
    <>
      <Router>
        <AppTopBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
