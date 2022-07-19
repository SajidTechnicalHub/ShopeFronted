
import React, { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios'
import { render } from '@testing-library/react';
import ViewCategory from './ViewCategory';


const AddCategory = () => {

  let navigate = useNavigate();
    const [input, setInput] = useState({
      category:''
    });
  
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const submitEvent = (e) => {
        e.preventDefault()
        
        // fetch("http://localhost:3000/api/v1/categories", {
        //   method:'POST',
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     category_name:input
        //   })
        // }).then((res) => res.json())
        axios.post("http://localhost:3000/api/v1/categories", {category_name: input.category})
        
        .then(function (response){
          console.log(response);
         
          
        })
        .catch( function (error){
          console.log(error);
        })

        navigate( '/');
       

        



    }


  return (
    <>
    <div className="category-container">
      <form onSubmit={submitEvent} className='add-category-form'>
        <h2>Add Category</h2>
        <div className="mb-3">
          <label htmlFor="category"  className="form-label">Category Name</label>
          <input
            type="text"
            name='category'
            className="form-control"
            value={input.category}
            onChange={inputEvent}
            placeholder='Category'
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  )
}

export default AddCategory