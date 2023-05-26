import { Header } from 'components/Header'
import placadevideo from 'assets/images/placadevideo.jpg'
import { Link } from 'react-router-dom'
import { useCartItems } from 'contexts/CartItems'

interface IProductProps {
  id: string
  text: string
  price: string
  units: string
  img: string
  seller: string
}

const Product = ({ text, price, units, img, id, seller }: IProductProps) => {
  const { pushItem } = useCartItems()

  return (
    <>
      <Header />
      <div className="my-8"></div>
      <div className="mx-auto w-4/5 tracking-wider rounded-md bg-bg-secondary-color text-zinc-200 flex flex-col p-10">
        <h1 className="text-4xl font-bold text-zinc-200">{text}</h1>
        <div className="flex justify-between">
          <img src={placadevideo} className="mt-6 w-2/5 rounded-md" />
          <div className="w-full flex">
            <div className="flex flex-col justify-between h-min w-1/2 px-6 gap-8 my-auto">
              <div>
                <p className="text-xl">
                  ({units}){' '}
                  <span
                    className={`text-${
                      Number(units) != 0 ? 'positive' : 'negative'
                    }-color font-medium`}
                  >
                    {Number(units) != 0 ? 'Em estoque' : 'Esgotado'}
                  </span>
                </p>
                <p className="text-xl">
                  Vendido e entregue por:{' '}
                  <span className="font-medium text-primary-color">{seller}</span>
                </p>
              </div>
              <h2 className="text-7xl font-extrabold text-primary-color mix-blend-hard-light">
                R$ {price}
              </h2>
              <div className="flex flex-col gap-5">
                <Link
                  to="/carrinho"
                  className="w-full bg-primary-color border-none text-center p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                >
                  Comprar Agora
                </Link>
                <button
                  onClick={() => pushItem(id)}
                  className="w-full bg-primary-color border-none p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
            <div>
              <h1>Other Products</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
