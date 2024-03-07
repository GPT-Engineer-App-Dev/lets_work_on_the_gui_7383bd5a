import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import GuiUpdates from "./pages/GuiUpdates.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/gui" element={<GuiUpdates />} />
      </Routes>
    </Router>
  );
}

export default App;
