import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    // const data = useLoaderData()
const [data,setData] = useState({})
    useEffect(()=>{
fetch('https://api.github.com/users/FATEH02')
.then(response=>response.json())
.then(data=>{
    console.log(data)
   setData(data)
})
    },[])
console.log(data.followers)
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="git picture" width={300} ></img>
    </div>
  )
}

export const githubInfoLoader=async()=>
{
const response = await fetch('https://api.github.com/users/FATEH02')
return response.json
}