import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Button = ({ text, onclick }) => {
  return (
    <>
      <button className='customButton' onClick={onclick}>{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func
}

export default Button
