import logo from 'assets/images/logo.png'
import icon from 'assets/images/icon.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const windowWidth = window.innerWidth

  return (
    <div className="relative flex justify-between items-center py-3 lg:py-5 px-4 md:px8 lg:px-16 bg-bg-secondary-color h-24">
      {windowWidth > 768 && <img className="h-4/5  2xl:h-full" src={logo} alt="Logo OrionMarket" />}
      {windowWidth <= 768 && <img className="h-2/3" src={icon} alt="Logo OrionMarket" />}
      <Input length={search.length > 0 ? true : false}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(() => event.target.value)}
          className="relative tracking-wide w-full bg-bg-tertiary-color border-none px-4 pt-6 pb-2 rounded font-medium text-base md:text-xl"
        />
        <i className="field font-medium tracking-wide absolute left-0 px-4 py-5 not-italic text-gray-300 duration-500 pointer-events-none">
          Busque aqui
        </i>
      </Input>
      {windowWidth <= 768 && (
        <>
          <button className="bg-transparent" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
          {open && (
            <nav className="absolute h-40 w-full top-20 left-0 bg-bg-secondary-color">
              <ul className="flex flex-col justify-around h-full items-center">
                <Link to="login" className="text-lg tracking-widest font-medium">
                  Login
                </Link>
                <Link to="register" className="text-lg tracking-widest font-medium">
                  Cadastro
                </Link>
              </ul>
            </nav>
          )}
        </>
      )}
      {windowWidth > 768 && (
        <nav>
          <ul className="flex gap-6 lg:gap-9 xl:gap-12">
            <li>
              <Link
                to="/"
                className="text-base lg:text-lg tracking-wider font-medium hover:text-primary-color"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-base lg:text-lg tracking-wider font-medium hover:text-primary-color"
              >
                Cadastro
              </Link>
            </li>
            <li>
              <Link to="/">
                <RiShoppingCartFill size={28} className="text-white hover:text-primary-color" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

const Input = styled.div<{ length: boolean }>`
  ${tw`relative md:w-1/3 lg:w-1/2 2xl:w-3/5`}

  input:focus ~ .field {
    ${tw`-translate-y-4 text-xs md:text-sm`}
  }

  input:valid ~ .field {
    ${({ length }) => (length ? tw`-translate-y-4 text-xs md:text-sm` : '')}
  }

  input[type='text']:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--primary);
    box-sizing: border-box;
    padding-bottom: 0.28rem;
  }
`
