import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import AppTopBar from "./components/AppTopBar";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";

function App() {
  return (
    <>
      <Router>
        <AppTopBar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
