import { object, string, array, mixed } from 'yup'

const validationScehema = object({
  firstNameInput:
    string()
      .required('Zorunlu alan'),
  lastNameInput:
    string()
      .required('Zorunlu alan'),
  identityNumberInput:
    string()
      .required('Zorunlu alan')
      .length(11, 'Eksik ya da yanlış T.C. Kimlik No'),
  adressInput:
    string()
      .length(10, 'Daha detaylı adres giriniz')
      .required('Zorunlu alan'),
  ticketContentInput:
    string()
      .required('Zorunlu alan'),
  file:
    mixed()
      .nullable()
      .test('fileSize', 'Dosya boyutu 50 MB`dan büyük olamaz',
        (value) => !value || value.size < 52428800 * 52428800
      )
})
export default validationScehema
