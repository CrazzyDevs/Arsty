import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import Auction from "./pages/auction/Auction";
import Drop from "./pages/drop/Drop";
import Layout from "./Components/Layout";
import Error from "./pages/Error";
import LiveStream from "./pages/auction/LiveStream";
import { AnimatePresence } from "framer-motion";
import MarketPlaceProduct from "./pages/marketPlace/MarketPlaceProduct";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="marketplace" element={<MarketPlace />} />
            <Route path="marketplace/:id" element={<MarketPlaceProduct />} />
            <Route path="auction" element={<Auction />} />
            <Route path="auction/:id" element={<LiveStream />} />
            <Route path="drop" element={<Drop />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
