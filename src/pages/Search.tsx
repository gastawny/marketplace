import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
  const { query } = useParams()
  const { getAllProducts } = useApi()
  const [products, setProducts] = useState<any[]>([])
  const filteredItems = products.filter((product) =>
    product.name.toLowerCase().includes(query?.toLowerCase() as string)
  )

  useEffect(() => {
    async function fetchProducts() {
      setProducts(await getAllProducts())
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {filteredItems.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}

export default Search
