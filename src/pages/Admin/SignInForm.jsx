import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/shared/CustomButton'
import { signIn } from 'src/services/firebase-auth'
import { yupResolver } from '@hookform/resolvers/yup'
import validationScehema from './validationSchema'
import { useCustomNavigation } from 'src/hooks/useNavigate'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationScehema)
  })

  const navigate = useCustomNavigation()

  const onSubmit = async (data) => {
    const { username, password } = data
    try {
      await signIn(username, password)
      console.log('signed in')
      navigate('/admin/basvuru-listesi')
    } catch (error) {
      console.error('Error occured during SignIn process:', error.message)
    }
  }

  return (
    <div className='signInFormContainer'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="usernameContainer">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            {...register('username')}
            className='customInput'
            placeholder='username'
          />
        <p>{errors.username?.message}</p>
        </div>
        <div className="passwordContainer">
          <label htmlFor="password">Şifre</label>
          <input
            {...register('password')}
            className='customInput'
            type='password'
            placeholder='password'
          />
        <p>{errors.password?.message}</p>
        </div>
        <Button text='Sign In' type='submit' />
      </form>
    </div>
  )
}

export default SignInForm
