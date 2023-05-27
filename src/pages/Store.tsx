import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Store = () => {
  const { store_id } = useParams()
  const { getProducts, getStores } = useApi()
  const [products, setProducts] = useState<any[]>([])

  let storeName: string

  async function getStoreName() {
    const stores = await getStores()
    const store = stores.filter((store) => store.id == store_id)
  }

  useEffect(() => {
    getStoreName()
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await getProducts(Number(store_id))
      setProducts(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Header />
      <div className="mt-12 flex flex-wrap gap-8 justify-center backdrop-filter backdrop-blur-sm">
        {products.map((store) => (
          <Card key={store.id} store_id={Number(store_id)} {...store} />
        ))}
      </div>
    </>
  )
}

export default Store
