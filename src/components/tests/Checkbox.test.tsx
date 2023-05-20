import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useFormContext } from 'react-hook-form'
import { CheckBox } from 'components/CheckBox'

jest.mock('react-hook-form')

describe('<CheckBox />', () => {
  test('Renders the CheckBox component correctly', () => {
    const registerMock = jest.fn()
    const useFormContextMock = useFormContext as jest.Mock
    useFormContextMock.mockReturnValue({
      register: registerMock,
    })

    render(<CheckBox field="test">Checkbox Label</CheckBox>)
    const checkboxElement = screen.getByLabelText('Checkbox Label')
    expect(checkboxElement).toBeInTheDocument()
  })

  test('Correctly register the field in the useFormContext', () => {
    const registerMock = jest.fn()
    const useFormContextMock = useFormContext as jest.Mock
    useFormContextMock.mockReturnValue({
      register: registerMock,
    })

    render(<CheckBox field="test">Checkbox Label</CheckBox>)
    expect(registerMock).toHaveBeenCalledWith('test')
  })
})
