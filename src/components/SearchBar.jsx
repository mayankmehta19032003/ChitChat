import React from 'react'

const SearchBar = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'  />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='userChatInfo'>
          <span>Mayank</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
