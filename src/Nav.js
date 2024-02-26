import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <>
        <nav>
            <Link to='/'>Blog1</Link>
            <Link to='/blog2'>Blog2</Link>
            <Link to='/blog3'>Blog3</Link>
        </nav>
    </>
  )
}
