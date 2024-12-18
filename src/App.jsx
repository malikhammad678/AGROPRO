import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  const location = useLocation();

  // Check if the current path is a product details page
  const isProductDetailPage = location.pathname.startsWith('/details/');

  return (
    <div>
      <Navbar />

      <Routes>
        
        <Route path="/details/:id" element={<ProductDetail />} />
      </Routes>

      
      {!isProductDetailPage && (
        <>
          <Home />
          <About />
          <Products />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
