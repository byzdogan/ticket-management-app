import { object, string } from 'yup'

const validationScehema = object({
  username:
        string()
          .min(5, 'Kullanıcı adı en az 5 karakter olmalı')
          .required('Zorunlu Alan'),
  password:
      string()
        .min(8, 'Şifre en az 8 karakterden oluşmalı')
        .required('Zorunlu Alan')
})

export default validationScehema
