import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/shared/CustomButton'
import { useCustomNavigation } from 'src/hooks/useNavigate'
import { saveTicketDataToFirestore } from 'src/services/firebase-firestore'
import './styles.css'

const TicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useCustomNavigation()

  const onSubmit = async (data) => {
    try {
      const {
        firstNameInput,
        lastNameInput,
        identityNumberInput,
        addressInput,
        ticketContentInput,
        file
      } = data

      const attachments = Array.from(file)

      await saveTicketDataToFirestore(
        firstNameInput,
        lastNameInput,
        identityNumberInput,
        addressInput,
        ticketContentInput,
        attachments,
        navigate
      )
      console.log('Ticket data saved successfully!')
    } catch (error) {
      console.error('Error during form submission', error)
    }
  }

  return (
      <div className='ticketFormContainer'>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className='leftContainer'>
                  <label htmlFor='firstNameInput'>Ad *</label>
                  <input className='customInput' id='firstNameInput' type='string' {...register('firstNameInput', { required: true })} placeholder='Adınızı giriniz' />
                  <p>{errors?.firstNameInput && 'Zorunlu Alan'}</p>

                  <label htmlFor='lastNameInput'>Soyad *</label>
                  <input className='customInput' id='lastNameInput' type='string' {...register('lastNameInput', { required: true })} placeholder='Soyadınızı giriniz' />
                  <p>{errors?.lastNameInput && 'Zorunlu Alan'}</p>

                  <label htmlFor='identityNumberInput'>TC Kimlik No *</label>
                  <input className='customInput' id='identityNumberInput' type='number' {...register('identityNumberInput', { required: true, minLength: 11, maxLength: 11 })} placeholder='TC Kimlik Numarınızı giriniz' />
                  <p>{errors?.identityNumberInput && 'T.C Kimlik No`nun doğruluğundan emin olun'}</p>

                  <label htmlFor='addressInput'>Address *</label>
                  <input className='customInput' id='addressInput' type='string' {...register('addressInput', { required: true })} placeholder='Adresinizi giriniz' />
                  <p>{errors?.addressInput && 'Zorunlu Alan'}</p>
              </div>

              <div className='rightContainer'>
                  <label htmlFor='ticketContentInput'>Başvuru nedeni *</label>
                  <textarea className='customTextArea' type='string' id='ticketContentInput' {...register('ticketContentInput', { required: true })} placeholder='Başvuru nedeninizi giriniz' />
                  <p>{errors?.ticketContentInput && 'Zorunlu Alan'}</p>

                  <label htmlFor='file'>Başvuru eki</label>
                  <input id='file' type='file' multiple {...register('file', { multiple: true })} />
                  <p>{errors.file?.message}</p>
                  <Button text='Gönder' type='submit' />
                </div>
          </form>
      </div>
  )
}

export default TicketForm
