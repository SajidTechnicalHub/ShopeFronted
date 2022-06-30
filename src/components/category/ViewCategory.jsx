import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const ViewCategory = () => {
    let navigate = useNavigate();
    const [status, setStatus] = useState()

    const [category, setCategory] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/api/v1/categories')
            .then(response => response.data)
            .then((data) => {
                setCategory(data)

            });

    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/api/v1/categories/${id}`)
        .then(function (response){
            setStatus(true)
          console.log(response);
        //   navigate('/');
        })

        
      }

      if(status == true){
        return <ViewCategory/>
    }

    return (
        <>
            <div className="category-container">
                <div className="view-category-container">
                    <h2>All Categories</h2>
                    <table className="table table-hover">
                        <thead className='table-dark'>

                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((category, index) => {
                                    return (
                                        <>
                                            <tr key={category.id}>
                                                <td>{category.id}</td>
                                                <td>{category.category_name}</td>
                                                <td>
                                                    <span className='category-action-container'>
                                                        <span className='btn btn-primary btn-sm'>View</span>
                                                        <span className='btn btn-success btn-sm'>Edit</span>
                                                        <span className='btn btn-danger btn-sm' onClick={() => handleDelete(category.id)}>Delete</span>
                                                    </span>
                                                </td>

                                            </tr>
                                        </>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewCategory