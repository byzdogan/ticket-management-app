import React from 'react'
import CustomLink from '../shared/CustomLink/Link'
import Button from '../shared/CustomButton'
import { logOut } from 'src/services/firebase-auth'
import './styles.css'

const AdminMenu = () => {
  return (
        <div className='adminMenu'>
            <CustomLink path='/admin/basvuru-listesi' text='Başvuru Listesi' />
            <Button text='Sign Out' onclick={logOut} />
        </div>
  )
}

export default AdminMenu
