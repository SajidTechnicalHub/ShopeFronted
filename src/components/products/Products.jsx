import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ToDoList() {

  let navigate = useNavigate();

  const [Lists, fetchLists] = useState([])

  const [input, setInput] = useState({
    list:''
});

const [status, setStatus] = useState(false)

const InputEvent = (e) => {
    const { name, value } = e.target;
    setInput(() => {
        return { ...input, [name]: value }
    })
    
}
const newList = (e) =>{
  if (e.key === "Enter" && !(e.target.value === "")){
    axios.post("http://localhost:3000/api/v1/categories", {category_name: input.list})
    .then(function (response){
      console.log(response);
      navigate('/home');
      setStatus(true)
      setInput({
        list:''
      })
      
    })
    .catch( function (error){
      console.log(error);
    })
    
  }
}

  const getData = () => {
    const url = 'http://localhost:3000/api/v1/categories'

    axios.get(url)
            .then(response => response.data)
            .then((data) => {
              fetchLists(data)
            });
            
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:3000/api/v1/categories/${id}`)
    .then(function (response){
      console.log(response);
      navigate('home');
    })
  }

  const handleEdit = (id, title) =>{
   
    // axios.get(`http://localhost:3000/api/v1/categories/${id}`)
    // .then(function (response){
    //   console.log(response);
      
    //   console.log(title)
    // })
    console.log('clicked')
  }

  return (
    <>
      <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
            name="list"
            value={input.list}
            onChange={InputEvent}
            onKeyPress={newList}
/>
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {Lists.map((list) => {
              return (
                <li className="item"  key={list.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{list.category_name}</label>
                  <span className="removeItemButton" onClick={() => handleDelete(list.id)}>x</span>
                  <span className='editItemButton' onClick={() => handleEdit(list.id, list.title)}>Edit</span>
                </li>
              );
            })}
          </ul>
        </div>
    </>
  )
}