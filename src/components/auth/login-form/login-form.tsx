import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
// import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input style={{ color: 'black' }} {...register('email')} />
      <input style={{ color: 'black' }} {...register('password')} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
