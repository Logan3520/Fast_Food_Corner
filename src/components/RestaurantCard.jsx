import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({id, name, image }) => {
 return (
    <Link to={`/food/${id}`}>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          margin: '10px',
          width: '200px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
        <h3 style={{ margin: '10px 0' }}>{name}</h3>
      </div>
    </Link>
  )
}

export default RestaurantCard