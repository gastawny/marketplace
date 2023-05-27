import { useCookies } from './useCookies'

interface IProduct {
  id: number
  name: string
  created_at: Date
  updated_at: Date
  price: number
  units: number
  store_id: number
}

export const useApi = () => {
  const { setAuthCookie, setUserCookie } = useCookies()

  const login = async (email: string, password: string, isChecked: boolean) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }

    const response = await fetch('https://marketplace-poc.herokuapp.com/login', requestOptions)
    const data = await response.json()

    if (data?.user === undefined) return { error: true, message: data }

    setAuthCookie(data.token, isChecked)
    setUserCookie(data.user, isChecked)

    return { error: false, message: 'Login realizado com sucesso' }
  }

  const getStores = async () => {
    const response = await fetch('https://marketplace-poc.herokuapp.com/store')
    const data: any[] = await response.json()
    const filteredStores = data.map(({ id, name }) => ({ id, name }))

    return filteredStores
  }

  const getProducts = async (id: number) => {
    const response = await fetch(`https://marketplace-poc.herokuapp.com/product?storeid=${id}`)
    const data = await response.json()
    const products: IProduct[] = data.product
    const filteredProducts = products.map(({ id, price, store_id, name, units }) => ({
      id,
      price,
      store_id,
      name,
      units,
    }))

    return filteredProducts
  }

  const getOneProduct = async (store_id: number, id: number) => {
    const response = await fetch(
      `https://marketplace-poc.herokuapp.com/product?storeid=${store_id}`
    )
    const data = await response.json()
    const products: IProduct[] = data.product
    const filteredProducts = products.map(({ id, price, store_id, name, units }) => ({
      id,
      price,
      store_id,
      name,
      units,
    }))
    const product = filteredProducts.filter((product) => product.id === id)[0]

    return { ...product, storeName: data.name }
  }

  const getAllProducts = async () => {
    const response = await fetch('https://marketplace-poc.herokuapp.com/product?storeid=all')
    const data = await response.json()

    return data
  }

  const registerUser = async (name: string, email: string, password: string) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      }

      const response = await fetch('https://marketplace-poc.herokuapp.com/user', requestOptions)
      const data = await response.json()

      if (data?.user === undefined) return { error: true, message: data }

      return { error: false, message: 'Cadastro realizado com sucesso' }
    } catch (error) {
      return { error: true, message: 'O cadastro não foi realizado' }
    }
  }

  return { login, getStores, getProducts, registerUser, getOneProduct, getAllProducts }
}
