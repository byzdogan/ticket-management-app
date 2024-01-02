import { object, string } from 'yup'

const validationSchema = object().shape({
  ticketStatus:
        string()
          .required('Ticket status is required'),
  adminAnswer:
        string()
})

export default validationSchema
