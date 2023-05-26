import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { StoreCard } from 'components/StoreCard'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [stores, setStores] = useState<{ id: number; name: string }[]>([])
  const { getStores } = useApi()
  useEffect(() => {
    getStores().then((stores) => setStores(stores))
  }, [])

  return (
    <>
      <Header />
      <div className="mt-12 flex flex-wrap gap-8 justify-center backdrop-filter backdrop-blur-sm">
        {stores.map((store) => (
          <StoreCard key={store.id} id={store.id} name={store.name} />
        ))}
      </div>
    </>
  )
}
