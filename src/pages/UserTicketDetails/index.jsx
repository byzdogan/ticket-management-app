import React, { useEffect } from 'react'
import UserDetails from 'src/components/UserDetails'
import TicketStatus from './TicketStatus'
import TicketContent from 'src/components/TicketContent'
import useTicket from 'src/contexts/TicketContext'
import { useCustomParams } from 'src/hooks/useParams'
import Error404 from 'src/routes/Error404'
import './styles.css'

const UserTicketDetails = () => {
  const { ticketID } = useCustomParams()
  const { ticketData, loading, getTicketData } = useTicket()

  useEffect(() => {
    getTicketData(ticketID)
  }, [])

  return (
        <>
            {loading && !ticketData && <div>Loading...</div>}
            {!loading && !ticketData && <Error404 />}
            {
                ticketData &&
                <div className='ticketDetailsContainer'>
                    <div className='leftContainer'>
                        <UserDetails data={ticketData} />
                    </div>
                    <div className='rightContainer'>
                        <TicketStatus data={ticketData} />
                        <TicketContent data={ticketData} />
                    </div>
                </div>
            }
        </>
  )
}

export default UserTicketDetails
