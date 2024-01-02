import React, { useEffect, useState } from 'react'
import CustomLink from 'src/components/shared/CustomLink/Link'
import useTicket from 'src/contexts/TicketContext'
import './styles.css'

const AdminDashboard = () => {
  const { tickets, setAllTickets } = useTicket()
  const [loading, setLoading] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await setAllTickets()
        setLoading(false)
      } catch (error) {
        console.error('Error fetching tickets:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [setAllTickets])

  if (loading) <div>Loading...</div>
  return (
    <div className='ticketListContainer'>
            <p>Başvurular</p>
            <table>
                <thead>
                    <tr>
              <th>Başvuru Tarihi</th>
              <th>Ad Soyad</th>
              <th>Başvuru Durumu</th>
              <th>Görüntüle</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketID}>
                <td>{ticket.createdAt.toDate().toLocaleString() }</td>
                <td>{ticket.firstName} {ticket.lastName}</td>
                <td>{ticket.ticketStatus}</td>
                <td>
                  <CustomLink path={`/admin/basvuru/${ticket.documentID}`} text='Başvuruyu görüntüle'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default AdminDashboard
