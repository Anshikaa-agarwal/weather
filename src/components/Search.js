import React from 'react'
import './search.css'

function Search(props) {

  return (
    <form onSubmit={props.handleSubmit} className='search-form'>
      <input type="text" value={props.city} onChange={props.handleInput} className='cityinp' placeholder='Enter city name'/>
      <button type='submit' className='search-btn'><i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}></i></button>
    </form>


  )
}

export default Search
