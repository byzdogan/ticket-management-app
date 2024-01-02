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
        {
        adminAnswer && adminAnswer.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }
      </div>
    </div>
  )
}

TicketContent.propTypes = {
  data: PropTypes.shape({
    ticketContent: PropTypes.string.isRequired,
    adminAnswer: PropTypes.array
  }).isRequired
}

export default TicketContent
