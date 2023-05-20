import { Input } from 'components/Input'
import { CheckBox } from 'components/CheckBox'
import { Background } from 'components/Background'
import styled from 'styled-components'
import tw from 'twin.macro'
import z from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormDataSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de email inválido' }),
  password: z.string().nonempty({ message: 'A senha é obrigatória' }),
  checked: z.boolean(),
})

type loginFormData = z.infer<typeof loginFormDataSchema>

export const Login = () => {
  const loginUserForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  })

  const { handleSubmit } = loginUserForm

  const submit = (data: any) => console.log(data)

  return (
    <>
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
                <div className="relative w-full flex justify-between">
                  <CheckBox field="checkbox">Lembrar senha</CheckBox>
                  <a
                    className="text-sm md:text-base no-underline text-primary-color font-semibold tracking-wider hover:mix-blend-hard-light"
                    href="#"
                  >
                    Criar uma conta
                  </a>
                </div>
                <div>
                  <input
                    className="relative w-full bg-primary-color border-none p-2.5 rounded text-lg md:text-xl text-bg-primary-color font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                    type="submit"
                    value="Login"
                  />
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
