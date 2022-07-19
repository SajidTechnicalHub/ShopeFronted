import * as React from 'react';
import './App.css';
import './css/Category.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddCategory from './components/category/AddCategory';
import ViewCategory from './components/category/ViewCategory';
import EditCategory from './components/category/EditCategory';
import Products from './components/products/Products';
import Header from './components/HomeLayout/Header';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';

function App() {
  return (
    <>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element={<ViewCategory />} />
          <Route index element={<ViewCategory />} />
          <Route path="add" element={<AddCategory />} />
          <Route path="edit/:id" element={<EditCategory />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="products" element={<Products />} />
          
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// https://medicalstore.com.pk/product-category/buy-medicine-and-health-products-online-in-pakistan/drugs-used-in-anesthesia/

// Theme Link

// http://preview.themeforest.net/item/peyamba-dating-website-html-template/full_screen_preview/27308779?_ga=2.197545579.592241319.1656569878-266719229.1656569878



// Theme Link

// Main 
// http://preview.themeforest.net/item/ella-responsive-shopify-template/full_screen_preview/9691007?_ga=2.9433717.1170516251.1658129148-461658920.1646849267&_gac=1.263464702.1657945219.CjwKCAjwoMSWBhAdEiwAVJ2ndhf2D72Y78V7gFuvxcfIzsBkAcxNdnuwgGHEEvbPoHDp4U4cICjaUBoCdJIQAvD_BwE

// Theme to be implemented
//https://new-ella-demo-11.myshopify.com/?_ab=0&_fd=0&_sc=1