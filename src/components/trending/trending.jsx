import React from 'react'
import './trending.css'
import TrendingCard from '../trendingcard/trendingcard'
const trending = () => {
  return (
    <div className='trendingSectionMainContainer'>
      <span>
        Trending Songs
        </span>
      <TrendingCard/>
    </div>
  )
}

export default trending