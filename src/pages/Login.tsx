import { Input } from 'components/Input'
import { CheckBox } from 'components/CheckBox'
import { Background } from 'components/Background'
import styled from 'styled-components'
import tw from 'twin.macro'
import z from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loading } from './Loading'

const loginFormDataSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de email inválido' }),
  password: z.string().nonempty({ message: 'A senha é obrigatória' }),
  isChecked: z.boolean().optional(),
})

type loginFormData = z.infer<typeof loginFormDataSchema>

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState({ error: false, message: '' })
  const [loginLoading, setLoginLoading] = useState(false)
  const { login } = useApi()
  const loginUserForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  })

  const { handleSubmit, register } = loginUserForm

  const submit = async ({ email, password, isChecked }: loginFormData) => {
    try {
      setLoginLoading(true)
      const { error, message } = await login(email, password, !!isChecked)
      setErrorMessage({ error, message })
      setLoginLoading(false)
      if (error) return

      navigate('/')
    } catch (error: any) {
      setErrorMessage({ error: true, message: error.message })
      setLoginLoading(false)
    }
  }

  return (
    <>
      {loginLoading && <Loading />}
      <Background />
      <section className="min-h-screen flex justify-center items-center relative">
        <Signin>
          <div className="relative w-full h-full gap-4 2xl:py-8 flex justify-around items-center flex-col">
            <h2 className="text-2xl md:text-3xl uppercase text-primary-color font-bold tracking-wider text-center">
              Acesse sua conta
            </h2>
            <FormProvider {...loginUserForm}>
              <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
                <Input name="email" field="E-mail" type="text" />
                <Input name="password" field="Senha" type="password" />
                {errorMessage.error && <span>E-mail ou senha incorretos</span>}
                <div className="relative w-full flex justify-between">
                  <CheckBox field="isChecked">Lembrar senha</CheckBox>
                  <Link
                    className="text-sm md:text-base no-underline text-primary-color font-semibold tracking-wider hover:mix-blend-hard-light"
                    to="/cadastro"
                  >
                    Criar uma conta
                  </Link>
                </div>
                <div>
                  <button
                    className="relative w-full bg-primary-color border-none p-2.5 rounded text-lg md:text-xl text-bg-primary-color font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </Signin>
      </section>
    </>
  )
}

const Signin = styled.div`
  ${tw`absolute rounded-lg w-5/6 md:w-2/5 lg:w-1/3 2xl:w-1/4 h-3/5 md:h-3/4 2xl:h-3/5 bg-bg-secondary-color z-50 p-10 box-border`}
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  min-height: 26rem;
`

export default Login
