import React from 'react'

const RatingReview = ({ className, rating }) => {
  const totalStars = 5

  // Function to render stars
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= totalStars; i++) {
      let starStyle = { color: 'gray' } // Default to gray for empty stars

      if (i <= Math.floor(rating)) {
        starStyle.color = 'gold' // Full stars
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Partial star
        starStyle = {
          background: `linear-gradient(to right, gold ${
            (rating % 1) * 100
          }%, gray ${(rating % 1) * 100}%)`,
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }
      }

      stars.push(
        <span
          key={i}
          style={{
            display: 'inline-block',
            fontSize: '25px',
            marginRight: '2px',
            position: 'relative',
            ...starStyle,
          }}
        >
          ★
        </span>
      )
    }
    return stars
  }

  return <div className={className}>{renderStars()}</div>
}

export default RatingReview
