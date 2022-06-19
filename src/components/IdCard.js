import React from 'react';
// import profiles from '../fakeData'


const IdCard = ({title, subtitle, description}) => {
  return (
    <div className="card_id_box">
      <div className="card_id_top">
        <div>
        <img height="200px" src={`https://robohash.org/${Math.random()}.png`} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card_id_content">
          <p>{description}</p>
      </div>
    </div>
  )
}

export default IdCard;