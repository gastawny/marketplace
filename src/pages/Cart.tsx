import { CartItem } from 'components/CartItem'
import { Header } from 'components/Header'
import { useCartItems } from 'contexts/CartItems'

export const Cart = () => {
  const { cartItems, removeItem } = useCartItems()

  return (
    <>
      <Header />
      <div className="bg-bg-secondary-color mt-8">
        <div className="flex flex-col gap-6 p-12 lg:w-3/4 2xl:w-2/3 mx-auto">
          {cartItems.map(({ id, amount }) => (
            <CartItem key={id} id={id} amount={amount} />
          ))}
        </div>
      </div>
    </>
  )
}
