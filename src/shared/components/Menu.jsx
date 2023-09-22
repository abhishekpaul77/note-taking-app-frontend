import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/add-note">Add Note</NavLink>
      <br />
      <NavLink to="/view-all/view">View All</NavLink>
      <br />
      <NavLink to="/view-all/update">Update All</NavLink>
      <br />
      <NavLink to="/view-all/search">Search All</NavLink>
      <br />
      <NavLink to="/view-all/delete">Delete All</NavLink>
    </div>
  )
}

export default Menu
