import React, { useState } from 'react'

const Insert = ({setBlog,blog}) => {
    const InitObj={title:"",author:"",date:"",content:""}
    const [data,setData]=useState(InitObj)

    const handlerSubmit=()=>{
        const newObj={ id:blog.length+1,title:data.title,author:data.author,date:data.date,content:data.content}
        setBlog([...blog,newObj]);
        setData(InitObj)
    }
  return (
        <div className='w-1/4'>
            <div className="p-3 bg-slate-500 ">
                <div className="flex flex-col ">
                    <label htmlFor="">Title</label>
                    <input placeholder='title' value={data.title}  onChange={(e)=>setData({...data,title:e.target.value})}  className=" rounded-lg px-3 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Author</label>
                    <input placeholder='author' value={data.author} onChange={(e)=>setData({...data,author:e.target.value})} className=" rounded-lg px-3 py-2"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Date</label>
                    <input type="date" value={data.date} onChange={(e)=>setData({...data,date:e.target.value})} placeholder='date'className=" rounded-lg px-3 py-2"/>
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="">Content</label>
                    <textarea value={data.content} onChange={(e)=>setData({...data,content:e.target.value})} placeholder='content' rows="9"  className=" rounded-lg px-3 py-2"/>
                </div>
                <div className='mb-3 flex flex-col'>
                    <button type="button"  onClick={handlerSubmit} className='bg-red-600 rounded-lg  text-white p-3'>Submit </button>
                </div>
            </div>
    </div>
  )
}

export default Insert