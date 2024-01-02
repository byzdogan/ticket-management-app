import React, { createContext, useContext, useState } from 'react'
import { getAllTickets, getTicketByID } from 'src/services/firebase-firestore'

const TicketContext = createContext()

// eslint-disable-next-line react/prop-types
export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([])
  const [ticketData, setTicketData] = useState({ data: 'data' })
  const [loading, setLoading] = useState(true)

  const getTicketData = (ticketID) => {
    try {
      setLoading(true)

      getTicketByID(ticketID, (ticketData, error) => {
        if (error) {
          console.error('Error occurred during getTicketByID:', error)
          setTicketData(null)
        } else {
          setTicketData(ticketData)
        }
      })
    } catch (error) {
      console.error('Error occurred during getTicketData', error)
    } finally {
      setLoading(false)
    }
  }

  // to set the tickest with all the tickets
  const setAllTickets = async () => {
    try {
      const ticketList = await getAllTickets()
      setTickets(ticketList)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }

  const values = {
    ticketData,
    loading,
    getTicketData,
    tickets,
    setAllTickets
  }

  return <TicketContext.Provider value={values}>{children}</TicketContext.Provider>
}

const useTicket = () => useContext(TicketContext)

export default useTicket
