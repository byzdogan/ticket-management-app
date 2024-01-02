import React from 'react'
import PropTypes from 'prop-types'

const TicketStatusAdmin = ({ data }) => {
  const { ticketStatus } = data
  return (
    <div className='statusContainer'>
      <div className='mainStatusContainer'>
        <span className="statusTitle">Başvuru </span>
        <span className="status">{ticketStatus}!</span>
      </div>
    </div>
  )
}

TicketStatusAdmin.propTypes = {
  data: PropTypes.shape({
    ticketStatus: PropTypes.string,
  })
}

export default TicketStatusAdmin
