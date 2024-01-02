import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const CustomInput = ({ id, type }) => {
  return (
      <>
          <input id={id} type={type} className='customInput' />
      </>
  )
}
CustomInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
}

export default CustomInput
