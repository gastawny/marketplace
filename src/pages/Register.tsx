import { zodResolver } from '@hookform/resolvers/zod'
import { Background } from 'components/Background'
import { CheckBox } from 'components/CheckBox'
import { Input } from 'components/Input'
import { useApi } from 'hooks/useApi'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { z } from 'zod'
import { Loading } from './Loading'

const RegisterFormDataSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'O e-mail é obrigatório' })
      .email({ message: 'Formato de email inválido' }),
    name: z
      .string()
      .nonempty('O nome é obrigatório')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    password: z
      .string()
      .nonempty({ message: 'A senha é obrigatória' })
      .min(8, { message: 'Senha muito curta' })
      .max(20, { message: 'Senha muito longa' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
        message: 'A senha deve conter letras maiúsculas e números',
      }),
    confirmPassword: z.string().nonempty({ message: 'A confirmação é obrigatória' }),
    privacyPolicy: z.boolean().refine((value) => value === true, {
      message: 'Você precisa concordar com as políticas de privacidade',
    }),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    path: ['confirmPassword'],
    message: 'As senhas não coincidem',
  })

type RegisterFormData = z.infer<typeof RegisterFormDataSchema>

const Register = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState({ error: false, message: '' })
  const [registerLoading, setRegisterLoading] = useState(false)
  const RegisterFormData = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormDataSchema),
  })
  const { registerUser } = useApi()

  const {
    handleSubmit,
    formState: {
      errors: { privacyPolicy },
    },
  } = RegisterFormData

  const submit = async ({ email, name, password }: RegisterFormData) => {
    try {
      setRegisterLoading(true)
      const { error, message } = await registerUser(name, email, password)
      setErrorMessage({ error, message })
      setRegisterLoading(false)
      if (error) return

      navigate('/')
    } catch (error: any) {
      setErrorMessage({ error: true, message: error.message })
      setRegisterLoading(false)
    }
  }

  return (
    <>
      <Background />
      {registerLoading && <Loading />}
      <section className="min-h-screen flex justify-center items-center relative">
        <Signin>
          <div className="relative w-full gap-5 md:gap-8 2xl:py-10 flex justify-around items-center flex-col">
            <h2 className="text-2xl md:text-3xl uppercase text-primary-color font-bold tracking-wider text-center">
              Crie sua conta
            </h2>
            <FormProvider {...RegisterFormData}>
              <form
                className="w-full flex flex-col md:grid md: grid-cols-2 2xl:flex  gap-3 md:gap-4"
                onSubmit={handleSubmit(submit)}
              >
                <div className="col-span-2">
                  <Input field="Nome Completo" name="name" type="text" />
                </div>
                <div className="col-span-2">
                  <Input field="E-mail" name="email" type="text" />
                </div>
                <Input field="Senha" name="password" type="text" />
                <Input field="Confirme a sua senha" name="confirmPassword" type="text" />
                <div className="flex flex-col gap-1 col-span-2">
                  <CheckBox field="privacyPolicy">
                    {'Li e estou de acordo com as '}
                    <Link
                      to="/cadastro"
                      className="text-sm md:text-base no-underline text-primary-color font-medium tracking-wider hover:mix-blend-hard-light"
                    >
                      políticas da empresa e políticas de privacidade.
                    </Link>
                  </CheckBox>
                  <span className="text-sm md:text-base">{privacyPolicy?.message}</span>
                  {/* <span className="text-sm md:text-base">{errorMessage.message}</span> */}
                </div>
                <div className="col-span-2">
                  <input
                    className="relative w-full bg-primary-color border-none p-2.5 rounded text-lg md:text-xl text-bg-primary-color font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                    type="submit"
                    value="Criar conta"
                  />
                </div>
              </form>
            </FormProvider>
          </div>
          <div className="absolute flex gap-1 w-full items-baseline bottom-6">
            <h3>Já possui uma conta?</h3>
            <Link
              to={'/login'}
              className="text-sm md:text-base no-underline text-primary-color font-semibold tracking-wider hover:mix-blend-hard-light"
            >
              Login
            </Link>
          </div>
        </Signin>
      </section>
    </>
  )
}

const Signin = styled.div`
  ${tw`absolute rounded-lg w-5/6 md:w-3/4 lg:w-2/3 2xl:w-1/4 h-5/6 md:h-3/4 2xl:h-2/3 bg-bg-secondary-color z-50 p-5 md:p-8 box-border`}
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  min-height: 26rem;
`

export default Register
