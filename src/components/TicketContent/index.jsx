import React from 'react'
import PropTypes from 'prop-types'

const TicketContent = ({ data }) => {
  const { ticketContent, adminAnswers } = data
  return (
    <>
      <p className="ticketDetailsTitle">Başvuru Nedeni</p>
      <div className='ticketContent'>{ticketContent}</div>
      {adminAnswers &&
          adminAnswers.map((answer, index) => (
            <div key={index} className="adminAnswer">
              {answer}
            </div>
          ))}
    </>
  )
}

TicketContent.propTypes = {
  data: PropTypes.shape({
    ticketContent: PropTypes.string.isRequired,
    adminAnswers: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default TicketContent
