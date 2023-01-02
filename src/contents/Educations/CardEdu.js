import React from 'react'

function CardEdu(props) {
  return (
    <div>
      {
        props.educationsList.map((edu) => {
          return (
            <div className="cardEdu">
              <h1>{edu[1]} - {edu[2]}</h1>
              <div className="detail">
                <h2>{edu[0]}</h2>
                <p>{edu[3]}</p>
                <p>{edu[4]}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardEdu
