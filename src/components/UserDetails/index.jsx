import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
const UserDetails = ({ data }) => {
  const {
    firstName,
    lastName,
    identityNumber,
    address,
    createdAt,
    attachments
  } = data

  return (
    <div className='detailsLeftContainer'>
      <p className="ticketDetails">
        <span className='ticketDetailsTitle'>Ad Soyad</span> {firstName} {lastName}
      </p>
      <p className="ticketDetails">
        <span className='ticketDetailsTitle'>T.C. Kimlik No</span> {identityNumber}
      </p>
      <p className="ticketDetails">
        <span className='ticketDetailsTitle'>Adres</span> {address}
      </p>
      <p className="ticketDetails">
        <span className='ticketDetailsTitle'>Başvuru Tarihi</span> {createdAt && createdAt.toDate().toLocaleString()}
      </p>
      {attachments && (
        <p className="ticketDetails">
          <span className='ticketDetailsTitle'>Ekler</span>
          {attachments.map((attachment, index) => (
            <a key={index} href={attachment} target="blank">
              {`Dosya (${index + 1})`}
            </a>
          ))}
        </p>
      )}
    </div>
  )
}

UserDetails.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    identityNumber: PropTypes.number,
    address: PropTypes.string,
    attachments: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.object
  })
}

export default UserDetails
