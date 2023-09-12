//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { CreateMech } from "./pages/CreateMech";
import { ReadMech } from "./pages/ReadMech";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mech/:id" element={<ReadMech />} />
          <Route path="/create-mech/:id" element={<CreateMech />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
