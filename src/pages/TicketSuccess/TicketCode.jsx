import React from 'react'
import { useLocation } from 'react-router-dom'

const TicketCode = () => {
  const { state } = useLocation()
  const { ticketID } = state || {}

  return (
    <>
      <span
        id='ticketID'
        onClick={() => navigator.clipboard.writeText(ticketID)}
        title='Başvuru takip kodunu kopyalamak için tıkla!'>
        {ticketID && ticketID}
      </span>
      <span id='warningText'>Lütfen, başvuru takip kodunuzu kaybetmeyiniz!</span>
    </>
  )
}

export default TicketCode
