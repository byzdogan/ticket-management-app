import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import validationScehema from './validationSchema'
import Button from 'src/components/shared/CustomButton'
import { useCustomParams } from 'src/hooks/useParams'
import { updateTicketData } from 'src/services/firebase-firestore'
import { useCustomNavigation } from 'src/hooks/useNavigate'

const UpdateTicketForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationScehema)
  })

  const navigate = useCustomNavigation()

  const { ticketID } = useCustomParams()
  console.log(ticketID)

  const onSubmit = (data) => {
    console.log(data)
    updateTicketData(ticketID, data)
    navigate('/admin/basvuru-listesi')
  }

  return (
        <div className='ticketUpdateForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='aboveContainer'>
                    <label htmlFor="ticketStatus">Ticket Status:</label>
                    <Controller
                        name="ticketStatus"
                        control={control}
                        defaultValue='beklemede'
                        render={({ field }) => (
                            <select id="ticketStatus" className='customInput' {...field}>
                                <option value="beklemede">Beklemede</option>
                                <option value="işleme alındı">İşleme Alındı</option>
                                <option value="sonuçlandı">Sonuçlandı</option>
                            </select>
                        )}
                    />
                </div>
                <div className='belowContainer'>
                    <label htmlFor="adminAnswer">Başvuru Yanıt</label>
                    <Controller
                      name="adminAnswer"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <textarea id="adminAnswer" className='customInput' {...field} />}
                    />
                </div>
                <Button type="submit" text='Başvuruyu Güncelle'/>
            </form>
        </div>
  )
}

export default UpdateTicketForm
