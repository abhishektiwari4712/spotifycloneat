// import React from 'react'
// import './trendingcard.css'
// import { TrendingCardData } from '../../config/config';

// const trendingcard = () => {


//   return (
//     <>
//       <div className='trendingcard'>
//         {
//           TrendingCardData.map(() => {
//             return (
//               <>
//                 <div className="cardcontainer">
//                   <img src={ele.imgSrc} alt="" />
//                   Trendingcard
//                 </div>


//               </>
//             )
//           })
//         }
//       </div>
//     </>

//   )
// }

// export default trendingcard
import React from 'react'
import './trendingcard.css'
import { TrendingCardData } from '../../config/config';

const TrendingCard = () => {
  return (
    <div className='trendingcard'>
      {
        TrendingCardData.map((ele, index) => (
          <div className="cardcontainer" key={index}>
            <img src={ele.imgSrc} alt={`Trending ${index}`} />
            <div className="CardTextContainer">
              <h2>{ele.heading}</h2>
              <p>{ele.subHeading}</p>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default TrendingCard;
