import { useState } from 'react'
import { Input } from 'components/Input'
import { CheckBox } from 'components/Checkbox'
import { Background } from 'components/Background'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Login = () => {
  const [datas, setDatas] = useState({ username: '', password: '' })
  const [checked, setChecked] = useState(false)

  const handleInputChange = (type: string, event: React.ChangeEvent<HTMLInputElement>) =>
    setDatas((datas) => ({ ...datas, [type]: event.target.value }))

  return (
    <>
      <Background />
      <section className="min-h-screen flex justify-center items-center relative">
        <Signin>
          <div className="relative w-full h-full gap-4 2xl:py-8 flex justify-around  items-center flex-col">
            <h2 className="text-2xl md:text-3xl uppercase text-primary-color font-bold tracking-wider text-center">
              Acesse sua conta
            </h2>
            <form className="w-full flex flex-col gap-6">
              <Input
                value={datas.username}
                onChange={(event) => handleInputChange('username', event)}
                type="text"
              >
                Usuário
              </Input>
              <Input
                value={datas.password}
                onChange={(event) => handleInputChange('password', event)}
                type="password"
              >
                Senha
              </Input>
              <div className="relative w-full flex justify-between">
                <CheckBox checked={checked} onChange={() => setChecked(!checked)}>
                  Lembrar senha
                </CheckBox>
                <a
                  className="text-sm md:text-base no-underline text-primary-color font-semibold tracking-wider hover:mix-blend-hard-light"
                  href="#"
                >
                  Criar uma conta
                </a>
              </div>
              <div>
                <input
                  className="relative w-full bg-primary-color border-none p-2.5 rounded text-lg md:text-xl text-bg-primary-color font-semibold  tracking-widest cursor-pointer hover:mix-blend-hard-light"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
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
