import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { productsExample } from 'util/productsExample'

export const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {productsExample.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}
