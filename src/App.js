import UserDetails from "./components/UserDetails/UserDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";
import ComingSoon from "./components/ComingSoonPage/ComingSoon";
import ListOfUsers from "./components/ListOfUsers";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListOfUsers />} />
        <Route
          path="/profile"
          element={<UserDetails currentPath="Profile" />}
        />
        <Route path="/posts" element={<ComingSoon currentPath="Posts" />} />
        <Route path="/gallery" element={<ComingSoon currentPath="Gallery" />} />
        <Route path="/todo" element={<ComingSoon currentPath="ToDo" />} />
      </Routes>
    </Router>
  );
}
