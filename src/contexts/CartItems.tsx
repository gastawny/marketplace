import { ReactNode, useContext, createContext, useState, Dispatch, SetStateAction } from 'react'
import { cartItems as cartItemsDefault } from 'util/cartItems'

interface IITem {
  id: string
  amount: number
}

interface ICartItems {
  cartItems: IITem[]
  setCartItems: Dispatch<SetStateAction<IITem[]>>
}

const CartItemsContext = createContext<ICartItems>({} as ICartItems)

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IITem[]>(cartItemsDefault)

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}

export const useCartItems = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  function pushItem(id: string) {
    if (cartItems.some((item) => item.id === id))
      setCartItems((cartItems) =>
        cartItems.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item))
      )
    else setCartItems((cartItems) => [...cartItems, { id, amount: 1 }])
  }

  function removeItem(id: string) {
    setCartItems((cartItems) =>
      cartItems
        .map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item))
        .filter((item) => item.amount !== 0)
    )
  }

  return {
    cartItems,
    pushItem,
    removeItem,
  }
}
