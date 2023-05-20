import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useFormContext } from 'react-hook-form'
import { Input } from 'components/Input'

jest.mock('react-hook-form')

describe('<Input />', () => {
  test('Render correctly the Input component', () => {
    const useFormContextMock = useFormContext as jest.Mock
    const registerMock = jest.fn()
    const watchMock = jest.fn()
    useFormContextMock.mockReturnValueOnce({
      register: registerMock,
      formState: { errors: {} },
      watch: watchMock,
    })

    render(<Input name="test" field="Test Field" />)
    const inputElement = screen.getByTestId('input')
    expect(inputElement).toBeInTheDocument()
  })

  test('Correctly updates the value of the input', () => {
    const useFormContextMock = useFormContext as jest.Mock
    const registerMock = jest.fn()
    const watchMock = jest.fn()
    useFormContextMock.mockReturnValueOnce({
      register: registerMock,
      formState: { errors: {} },
      watch: watchMock,
    })

    render(<Input name="test" field="Test Field" />)
    const inputElement = screen.getByTestId('input') as HTMLInputElement

    const newValue = 'New value'
    fireEvent.change(inputElement, { target: { value: newValue } })

    expect(watchMock).toHaveBeenCalledWith('test')
    expect(inputElement.value).toBe(newValue)
  })

  test('Correctly displays the error messag', () => {
    const useFormContextMock = useFormContext as jest.Mock
    const errorsMock = { test: { message: 'Required field' } }
    useFormContextMock.mockReturnValueOnce({
      register: jest.fn(),
      formState: { errors: errorsMock },
      watch: jest.fn(),
    })

    render(<Input name="test" field="Test Field" />)
    const errorElement = screen.getByText('Required field')
    expect(errorElement).toBeInTheDocument()
  })

  test('Does not display the error message when there are no errors', () => {
    const useFormContextMock = useFormContext as jest.Mock
    const errorsMock = {}
    useFormContextMock.mockReturnValueOnce({
      register: jest.fn(),
      formState: { errors: errorsMock },
      watch: jest.fn(),
    })

    render(<Input name="test" field="Test Field" />)
    const errorElement = screen.queryByText('Required field')
    expect(errorElement).not.toBeInTheDocument()
  })
})
