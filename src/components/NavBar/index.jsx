import React from 'react'
import CustomLink from '../shared/CustomLink/Link'
import './styles.css'

const NavBar = () => {
  return (
      <div className='navBar'>
          <CustomLink path='/basvuru-olustur' text='Başvuru Oluştur'/>
          <CustomLink path='/basvuru-sorgula' text='Başvuru Sorgula' />
          <CustomLink path='/admin' text='Admin Girişi'/>
      </div>
  )
}

export default NavBar
