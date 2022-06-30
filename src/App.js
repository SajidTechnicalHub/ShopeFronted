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

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ViewCategory />} />
          <Route index element={<ViewCategory />} />
          <Route path="add" element={<AddCategory />} />
          <Route path="edit" element={<EditCategory />} />
          <Route path="products" element={<Products />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// https://medicalstore.com.pk/product-category/buy-medicine-and-health-products-online-in-pakistan/drugs-used-in-anesthesia/