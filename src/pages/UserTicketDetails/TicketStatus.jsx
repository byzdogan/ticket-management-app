import React from 'react'
import PropTypes from 'prop-types'

const TicketStatus = ({ data }) => {
  const { ticketStatus } = data
  return (
    <div className='statusContainer'>
      <div className='mainStatusContainer'>
        <span className="statusTitle">Başvurunuz </span>
        <span className="status">{ticketStatus}!</span>
      </div>
      {ticketStatus === 'beklemede' && 'Başvurunuz en kısa zamanda işleme alınacaktır.'}
      {ticketStatus === 'işleme alındı' && 'Başvurunuz işleme alındı.'}
      {ticketStatus === 'sonuçlandı' && 'Başvurunuz sonuçlandı.'}
    </div>
  )
}

TicketStatus.propTypes = {
  data: PropTypes.shape({
    ticketStatus: PropTypes.string.isRequired
  }).isRequired
}

export default TicketStatus
