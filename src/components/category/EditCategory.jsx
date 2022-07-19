import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import axios from 'axios';

const EditCategory = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [category, setCategory] = useState([])
    const [input, setInput] = useState({
      category:''
    });
  
    const inputEvent = (e) => {
        const { name, value } = e.target;
        
        setInput(() => {
            return { ...input, [name]: value }
        })

        setCategory(input)
    }
    const submitEvent = (e) => {
        e.preventDefault()
        
        axios.put(`http://localhost:3000/api/v1/categories/${id}`, {category_name: input.category})
        
        .then(function (response){
          console.log(response);
         
          
        })
        .catch( function (error){
          console.log(error);
        })

        navigate( '/');
     
    }

    
    const getData = () => {
      axios.get(`http://localhost:3000/api/v1/categories/${id}`)
          .then(response => response.data)
          .then((data) => {
              setCategory(data)
              // setInput(category)

          });
          console.log(category)
  }

  useEffect(() => {
      getData()
  }, [])

  return (
    <>
    <div className="category-container">
      <form onSubmit={submitEvent} className='add-category-form'>
        <h2>Edit Category</h2>
        <h5>id: {id}</h5>
        <div className="mb-3">
          <label htmlFor="category"  className="form-label">Category Name</label>
          <input
            type="text"
            name='category'
            className="form-control"
            value={category.category_name}
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

export default EditCategory