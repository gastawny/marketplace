import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import tw from 'twin.macro'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  field: string
}

export const Input = (props: IInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const input = watch(props.name)

  return (
    <InputBx length={input?.length > 0 ? true : false}>
      <input
        {...register(props.name)}
        {...props}
        className="relative tracking-wide w-full bg-bg-tertiary-color border-none px-4 pt-6 pb-2 rounded font-medium text-base md:text-xl"
        data-testid="input"
      />
      <i className="field font-medium tracking-wide absolute left-0 px-4 py-5 not-italic text-gray-300 duration-500 pointer-events-none">
        {props.field}
      </i>
      {Boolean(errors[props.name]?.message) && (
        <i className="w-4/5 text-right text-xs md:text-sm font-normal tracking-wide absolute right-0 -top-4 px-4 py-5 not-italic text-gray-300 duration-500 pointer-events-none">
          {errors[props.name]?.message?.toString()}
        </i>
      )}
    </InputBx>
  )
}

const InputBx = styled.div<{ length: boolean }>`
  ${tw`relative w-full`}

  input:focus ~ .field {
    ${tw`-translate-y-4 text-xs md:text-sm`}
  }

  input:valid ~ .field {
    ${({ length }) => (length ? tw`-translate-y-4 text-xs md:text-sm` : '')}
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--primary);
    box-sizing: border-box;
    padding-bottom: 0.28rem;
  }
`
