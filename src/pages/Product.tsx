import { Header } from 'components/Header'
import placadevideo from 'assets/images/placadevideo.jpg'
import { Link, useParams } from 'react-router-dom'
import { useCartItems } from 'contexts/CartItems'
import { useApi } from 'hooks/useApi'
import { useEffect, useState } from 'react'

const Product = () => {
  const { pushItem } = useCartItems()
  const { getOneProduct } = useApi()
  const [product, setProduct] = useState<any>({})
  const { store_id, product_id } = useParams()

  useEffect(() => {
    async function fetchProduct() {
      const productResponse = await getOneProduct(Number(store_id), Number(product_id))
      setProduct(productResponse)
    }

    fetchProduct()
  }, [])

  return (
    <>
      <Header />
      <div className="my-4 2xl:my-8"></div>
      <div className="mx-auto my-3 w-4/5 tracking-wider rounded-md bg-bg-secondary-color text-zinc-200 flex flex-col p-10 bg">
        <h1 className="text-4xl font-bold text-zinc-200">{product.name}</h1>
        <div className="flex justify-between">
          <img src={placadevideo} className="mt-6 w-2/5 rounded-md" />
          <div className="w-full flex">
            <div className="flex flex-col justify-between h-min w-full   px-6 gap-8 my-auto">
              <div>
                <p className="text-xl">
                  ({product.units}){' '}
                  <span
                    className={`${
                      Number(product.units) != 0 ? 'text-positive-color' : 'text-negative-color'
                    } font-medium`}
                  >
                    {Number(product.units) != 0 ? 'Em estoque' : 'Esgotado'}
                  </span>
                </p>
                <p className="text-xl">
                  Vendido e entregue por:{' '}
                  <span className="font-medium text-primary-color">{product.storeName}</span>
                </p>
              </div>
              <h2 className="text-5 xl 2xl:text-6xl font-extrabold text-primary-color mix-blend-hard-light">
                R$ {product.units}
              </h2>
              <div className="flex flex-col gap-5">
                <Link
                  to="/carrinho"
                  className="w-full bg-primary-color border-none text-center p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                >
                  Comprar Agora
                </Link>
                <button
                  onClick={() =>
                    pushItem(
                      product.id,
                      product.name,
                      Number(store_id),
                      product.storeName,
                      product.price
                    )
                  }
                  className="w-full bg-primary-color border-none p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
