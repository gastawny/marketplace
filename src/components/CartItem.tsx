import { productsExample } from 'util/productsExample'
import placadevideo from 'assets/images/placadevideo.jpg'
import { useCartItems } from 'contexts/CartItems'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

export const CartItem = ({ id, amount }: { id: string; amount: number }) => {
  const product = productsExample.filter((product) => product.id === id)[0]
  const { pushItem, removeItem } = useCartItems()

  return (
    <div className="flex p-3 bg-bg-secondary-color h-28 w-full rounded items-center justify-between">
      <img src={placadevideo} className="h-full rounded" />
      <div className="flex flex-col w-2/3 ml-4 gap-1">
        <h4 className="text-base font-medium tracking-wide text-primary-color">{product.seller}</h4>
        <h3 className="text-lg font-bold tracking-wider line leading-5">{product.name}</h3>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-light">Quant.</span>
        <div className="flex">
          <button onClick={() => removeItem(id)}>
            <MdKeyboardArrowLeft size={28} className="text-primary-color" />
          </button>
          <span className="text-xl mx-1 font-bold">{amount}</span>
          <button onClick={() => pushItem(id)}>
            <MdKeyboardArrowRight size={28} className="text-primary-color" />
          </button>
        </div>
      </div>
      <h3 className="pt-4 text-3xl font-extrabold text-primary-color mix-blend-hard-light">
        R$ {product.price}
      </h3>
    </div>
  )
}
