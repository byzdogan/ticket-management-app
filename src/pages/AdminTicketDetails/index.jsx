import React, { useEffect } from 'react'
import TicketContent from 'src/components/TicketContent'
import UserDetails from 'src/components/UserDetails'
import useTicket from 'src/contexts/TicketContext'
import { useCustomParams } from 'src/hooks/useParams'
import './styles.css'
import UpdateTicketForm from './UpdateTicketForm'

const AdminTicketDetails = () => {
  const { ticketID } = useCustomParams()
  const { ticketData, getTicketData } = useTicket()

  useEffect(() => {
    getTicketData(ticketID)
  }, [])

  return (
        <>
            {
                ticketData
                  ? (
                        <div className='adminDetailsContainer'>
                            <div className="leftContainer">
                                <UserDetails data={ticketData} />
                            </div>
                            <div className="rightContainer">
                              <TicketContent data={ticketData} />
                              <UpdateTicketForm />
                            </div>

                        </div>
                    )
                  : <p>Loading...</p>
            }
        </>
  )
}

export default AdminTicketDetails
