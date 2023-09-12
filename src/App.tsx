//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { CreateMech } from "./pages/CreateMech";
import { ReadMech } from "./pages/ReadMech";
import { AllMechs } from "./pages/AllMechs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-mechs" element={<AllMechs />} />
          <Route path="/mech/:id" element={<ReadMech />} />
          <Route path="/create-mech/:id" element={<CreateMech />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
