import { ReactNode, useContext, createContext, useState, Dispatch, SetStateAction } from 'react'

interface IITem {
  id: number
  id_store: number
  name: string
  name_store: string
  amount: number
  price: string
}

interface ICartItems {
  cartItems: IITem[]
  setCartItems: Dispatch<SetStateAction<IITem[]>>
}

const CartItemsContext = createContext<ICartItems>({} as ICartItems)

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IITem[]>([])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}

export const useCartItems = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  function pushItem(id: number, name: string, id_store: number, name_store: string, price: string) {
    if (cartItems.some((item) => item.id === id))
      setCartItems((cartItems) =>
        cartItems.map((item) =>
          item.id === id && item.id_store == id_store ? { ...item, amount: item.amount + 1 } : item
        )
      )
    else
      setCartItems((cartItems) => [
        ...cartItems,
        { id, amount: 1, name, id_store, name_store, price },
      ])
  }

  function removeItem(id: number, store_id: number) {
    setCartItems((cartItems) =>
      cartItems
        .map((item) =>
          item.id === id && item.id_store == store_id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount !== 0)
    )
  }

  return {
    cartItems,
    pushItem,
    removeItem,
  }
}
