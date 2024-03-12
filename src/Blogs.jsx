import React from 'react'
import { useState ,useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';
function Blogs() {
  const {data,isPending,error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {data && <BlogList blogs = {data} title = 'All blogs' />}
    </div>
  )
}

export default Blogs;