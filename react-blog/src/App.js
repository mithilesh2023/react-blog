import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Insert from './components/Insert';
function App() {
  const [blog,setBlog]=useState((localStorage.getItem('data')? JSON.parse(localStorage.getItem("data")):[]));

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(blog))
  },[blog])

  const handleDelete=(id)=>{
    // console.log(id)
    setBlog(blog.filter((value)=>value.id !== id));
  }
  return (
    <>
    <Header/>
    <div className='flex'>
       <Insert setBlog={setBlog} blog={blog}/>
        <Content data={blog} handleDelete={handleDelete}/>
    </div>
    
    </>
  );
}

export default App;
