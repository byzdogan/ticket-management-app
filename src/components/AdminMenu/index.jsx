import React from 'react'
import CustomLink from '../shared/CustomLink/Link'
import Button from '../shared/CustomButton'
import { logOut } from 'src/services/firebase-auth'
import './styles.css'
import { useCustomNavigation } from 'src/hooks/useNavigate'

const AdminMenu = () => {
  const navigate = useCustomNavigation()

  const singOut = () => {
    logOut()
    navigate('/admin')
  }

  return (
    <div className='adminMenu'>
      <CustomLink path='/admin/basvuru-listesi' text='Başvurular' />
      <Button text='Sign Out' onclick={singOut} />
    </div>
  )
}

export default AdminMenu
