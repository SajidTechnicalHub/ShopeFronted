
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

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
console.log('submit event occure')
        axios.post("http://localhost:3000/api/v1/categories", {category_name: input.category})
        .then(function (response){
          console.log(response);
         
          
        })
        .catch( function (error){
          console.log(error);
        })

        navigate("/");

    }


    // const newList = (e) =>{
    //   if (e.key === "Enter" && !(e.target.value === "")){
    //     axios.post("http://localhost:3000/api/v1/tdlists", {title: input.list})
    //     .then(function (response){
    //       console.log(response);
    //       navigate('/home');
    //       setStatus(true)
    //       setInput({
    //         list:''
    //       })
          
    //     })
    //     .catch( function (error){
    //       console.log(error);
    //     })
        
    //   }
    // }


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