import { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Input = ({
  value,
  children,
  onChange,
  type,
}: {
  value: string
  children: ReactNode
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: 'text' | 'password'
}) => (
  <InputBx>
    <input
      value={value}
      onChange={onChange}
      className="relative tracking-wide w-full bg-bg-tertiary-color border-none px-4 pt-6 pb-2 rounded font-medium text-xl"
      type={type}
      required
      data-testid="input"
    />
    <i className="font-medium tracking-wide absolute left-0 px-4 py-5 not-italic text-gray-300 duration-500 pointer-events-none">
      {children}
    </i>
  </InputBx>
)

const InputBx = styled.div`
  ${tw`relative w-full`}

  input:focus ~ i,
  input:valid ~ i {
    ${tw`-translate-y-4 text-sm`}
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--primary);
    box-sizing: border-box;
    padding-bottom: 0.28rem;
  }
`
