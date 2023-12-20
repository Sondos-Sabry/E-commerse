
import './ProjectStyle/App.css';
import Home from './component/Containers/Home';
import { Routes, Route } from 'react-router-dom'
import Products from './component/Containers/Products';
import Product from './component/Containers/Product';
import Cart from './component/Containers/Cart';
import Footer from './component/Utilities/Footer';
import Search from './component/Utilities/Search';
import Checkout from './component/Containers/Checkout';
import Navtest from './component/Utilities/NavBar';
import Login from './component/Containers/Login';
import Signup from './component/Containers/Signup';
import Review from './component/Utilities/Review';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
function App() {
  return (
    <>

      <Navtest />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={< Products />} />
        <Route exact path='/products/:id' element={< Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/review" element={<Review />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
