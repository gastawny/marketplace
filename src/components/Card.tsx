import placadevideo from 'assets/images/placadevideo.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ICardProps {
  id: string
  text: string
  price: string
  units: string
  img: string
}

export const Card = ({ text, price, units, img }: ICardProps) => {
  return (
    <Link
      className="w-64 h-96 rounded-md bg-bg-secondary-color text-zinc-200 flex flex-col p-3 transition-transform hover:scale-105"
      to={`/${'produto'}`}
    >
      <img className="rounded-md" src={placadevideo} />
      <div className="flex h-full flex-col justify-around mt-2">
        <Text className="text-lg leading-6 font-bold">{text}</Text>
        <h3 className="text-4xl font-extrabold text-primary-color mix-blend-hard-light">
          R$ {price}
        </h3>
        <h4>Restam {units} unidades</h4>
      </div>
    </Link>
  )
}

const Text = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
