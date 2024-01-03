import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const TicketContent = ({ data }) => {
  const { ticketContent, adminAnswer } = data
  return (
    <div className='ticketContentContainer'>
      <p className='ticketDetailsTitle'>Başvuru Nedeni</p>
      <div className='ticketContent'>{ticketContent}</div>
      <div className="adminAnswers">
      <span>Başvuru Yanıt</span>
        {/* {
        adminAnswer && adminAnswer.map((item, index) => (
          <p key={index}>{item}</p>
        ))
        } */}
        {
          adminAnswer &&
          (Array.isArray(adminAnswer)
            ? (
                adminAnswer.map((item, index) => (
            <p key={index}>{item}</p>
                ))
              )
            : (
          <p>{adminAnswer}</p>
              ))}
      </div>
    </div>
  )
}

TicketContent.propTypes = {
  data: PropTypes.shape({
    ticketContent: PropTypes.string,
    adminAnswer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  })
}

export default TicketContent
