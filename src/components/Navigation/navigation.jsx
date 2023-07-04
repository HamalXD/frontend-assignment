import React from 'react'
import "./nav.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type='text' className='search-input' placeholder='Enter your search items'/>
        <div className="profile-container">
          <a href='#'>
            <FavoriteBorderOutlinedIcon className='nav-icons'/>
          </a>

          <a href=''>
            <ShoppingCartOutlinedIcon className='nav-icons'/>
          </a>

          <a href=''>
            <Person4OutlinedIcon className='nav-icons'/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
