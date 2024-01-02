import React from 'react'
import Header from './Header'
import TicketCode from './TicketCode'
import './styles.css'

const TicketSuccess = () => {
  return (
      <div className='ticketIDContainer'>
        <Header/>
        <TicketCode />
      </div>
  )
}

export default TicketSuccess
