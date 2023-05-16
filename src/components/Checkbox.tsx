import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import tw from 'twin.macro'

export const CheckBox = ({ children, field }: { children: ReactNode; field: string }) => {
  const { register } = useFormContext()

  return (
    <LabelContainer htmlFor="remember">
      {children}
      <input
        {...register(field)}
        className="absolute opacity-0 cursor-pointer h-0 w-0"
        type="checkbox"
        id="remember"
      />
      <span className="absolute top-0 left-0 h-6 w-6 bg-bg-tertiary-color duration-300 rounded-sm"></span>
    </LabelContainer>
  )
}

const LabelContainer = styled.label`
  ${tw`block relative pl-8 mb-3 cursor-pointer text-sm md:text-lg`}
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    ${tw`bg-bg-primary-color`}
  }

  input:checked ~ span {
    ${tw`bg-primary-color`}

    &:after {
      ${tw`block`}
    }
  }

  span:after {
    content: '';
    ${tw`hidden absolute left-2 top-1 w-2 h-3 border-solid border-bg-primary-color`}
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
