import { object, string } from 'yup'

const validationScehema = object({
  ticketID:
        string()
          .required('Başvuru Takip Kodunuzu Girin')
})

export default validationScehema
