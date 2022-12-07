import React from 'react'
const Content = ({data,handleDelete}) => {
    const Card=({value ,id,handleDelete})=>(
        <div className='bg-slate-200 rounded-lg border p-3'>
            <h1 className='text-3xl uppercase mb-3'>{value.title}</h1>
                <div className='flex gap-12 text-sm text-slate-400'>
                    <span>Author : {value.author}</span>
                    <span>Date : {value.date}</span>
                </div>
                <p className='text-lg mb-3'>{value.content}</p>
                {/* <div className='gap'> */}
                <button  onClick={()=>handleDelete(value.id)} className='bg-red-400 float-right rounded-md hover:bg-red-500  p-2  '>Delete</button>
                <button  className='bg-green-400 float-right rounded-lg p-2 mr-1 '>Read More</button>
                {/* </div> */}
                
        </div>
        )
  return (
    <div className='w-3/4 p-3'>
        <div className="flex flex-col gap-4">
            {
                data.map((value,index)=>(
                        <Card value={value} key={index} handleDelete={handleDelete} />
                ))
            }
        </div>
    </div>
  )
}

export default Content