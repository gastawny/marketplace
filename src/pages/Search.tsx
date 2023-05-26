import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { useParams } from 'react-router-dom'

const Search = () => {
  const { query } = useParams()
  // const filteredItems = productsExample.filter((product) =>
  //   product.name.toLowerCase().includes(query?.toLowerCase() as string)
  // )

  return (
    <>
      <Header />
      {/* <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {filteredItems.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div> */}
    </>
  )
}

export default Search
