import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Baselyout from "./components/layout/Baselyout";
import Products from "./pages/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Baselyout />}>
          <Route index element={<Home />} />
          <Route path="/categories/:category?/:subcategory?" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;