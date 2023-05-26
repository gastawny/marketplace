import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'

const Store = ({ id, name }: { id: number; name: string }) => {
  const { getProducts } = useApi()
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await getProducts(id)
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
          <Card key={store.id} {...store} />
        ))}
      </div>
    </>
  )
}

export default Store
