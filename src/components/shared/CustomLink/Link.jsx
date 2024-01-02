import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.css'

const CustomLink = ({ path, text, className }) => {
  return (
      <>
          <Link to={path} className={`${className} customLink`}>{text}</Link>
      </>
  )
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default CustomLink
