import React from 'react'
import  {PostForm, Container } from '../index'
import { useNavigate } from 'react-router-dom'


function AddPost() {
  const navigate=useNavigate()
  return (
    <div className='py-8'>
        <Container>
            <PostForm  />
        </Container>
    </div>
  )
}

export default AddPost