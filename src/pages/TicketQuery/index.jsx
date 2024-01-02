import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/shared/CustomButton'
import './styles.css'
import { yupResolver } from '@hookform/resolvers/yup'
import validationScehema from './validationSchema'
import { useCustomNavigation } from 'src/hooks/useNavigate'

const TicketQuery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationScehema)
  })

  const navigate = useCustomNavigation()

  const onSubmit = (data) => {
    navigate(`/basvuru/${data.ticketID}`)
  }

  return (
    <div className='ticketQueryContainer'>
      <h2 className='queryTitle'>Başvurunuz sonrası sistem tarafından size verilen kodu girerek
        <span className='highlight'> Sorgula</span> butonuna tıklayınız.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="message">
          <input
            className='customInput'
            id='ticketID'
            {...register('ticketID')}
          />
          <p>{errors.ticketID?.message}</p>
        </div>
        <Button type='submit' text='Sorgula' />
      </form>
    </div>
  )
}

export default TicketQuery
