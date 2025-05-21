import React from 'react'

const profileCard = (props) => {
  return (
   <div className="container py-5">
     <div className="card" style={{width: '25rem'}}>
  <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" className="card-img-top" alt="profile image" />
  <div className="card-body d-flex flex-column flex-wrap">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.profession}, {props.city} </p>
    <a href="#" className="btn btn-primary">View Details</a>
  </div>
</div>
   </div>
  )
}

export default profileCard