import placadevideo from 'assets/images/placadevideo.jpg'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StoreCard = ({ name, id }: { name: string; id: number }) => {
  return (
    <Link
      className="w-64 h-80 rounded-md bg-bg-secondary-color text-zinc-200 flex flex-col p-3 transition-transform hover:scale-105"
      to={`/loja/${id}`}
    >
      <img className="rounded-md" src={placadevideo} />
      <div className="flex h-full flex-col justify-around mt-2">
        <Text className="text-xl leading-6 font-bold tracking-widest">{name}</Text>
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
