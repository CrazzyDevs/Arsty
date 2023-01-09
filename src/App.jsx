import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home'
import MarketPlace from './pages/MarketPlace/MarketPlace';
import Auction from './pages/Auction/Auction';
import Drop from './pages/Drop/Drop';
import Layout from './Components/Layout';
import Error from './pages/Error';

function App() {

  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="marketplace" element={ <MarketPlace/> } />
            <Route path="auction" element={ <Auction/> } />
            <Route path="drop" element={ <Drop/> } />
            <Route path="*" element={ <Error/> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
