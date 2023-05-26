import { CartItem } from 'components/CartItem'
import { Header } from 'components/Header'
import { useCartItems } from 'contexts/CartItems'

const Cart = () => {
  const { cartItems } = useCartItems()
  const total = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.price.replace(',', '.')) * Number(currentValue.amount)
  }, 0)

  return (
    <>
      <Header />
      <div className="mt-8">
        <div className="flex flex-col gap-6 lg:w-3/4 2xl:w-2/3 mx-auto">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex p-8 justify-between items-center mx-auto rounded bg-bg-tertiary-color h-24 lg:w-3/4 2xl:w-2/3 mx auto">
        <button className="w-1/2 h-min bg-primary-color border-none p-4 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light">
          Efetuar compra
        </button>
        <h2 className="text-2xl font-semibold tracking-widest">
          Valor total:{' '}
          <span className="pt-4 text-3xl font-extrabold text-primary-color mix-blend-hard-light">
            R$ {`${total.toFixed(2)}`.replace('.', ',')}
          </span>
        </h2>
      </div>
    </>
  )
}

export default Cart
