import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { useParams } from 'react-router-dom'
import { productsExample } from 'util/productsExample'

export const Search = () => {
  const { query } = useParams()
  const filteredItems = productsExample.filter((product) =>
    product.text.toLowerCase().includes(query?.toLowerCase() as string)
  )

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
