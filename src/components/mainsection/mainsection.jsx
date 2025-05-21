import React from 'react'
import './mainsection.css';
import Trending from '../trending/trending'
import PopularArtists from '../popularArtist/popularArtist'
const mainsection = () => {
  return (
    <main className='mainSection'>
      <Trending/>
      <PopularArtists/>
    </main>
  )
}

export default mainsection