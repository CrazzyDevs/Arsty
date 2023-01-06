import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace';
import Auction from './pages/Auction';
import Drop from './pages/Drop';
import Layout from './Components/Layout';

function App() {

  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="marketplace" element={ <MarketPlace/> } />
            <Route path="auction" element={ <Auction/> } />
            <Route path="drop" element={ <Drop/> } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
