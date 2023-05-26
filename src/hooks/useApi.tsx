import { useCookies } from './useCookies'

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
    const data: any[] = await response.json()
    const filteredProducts = data.map(({ id, price, store_id, name, units }) => ({
      id,
      price,
      store_id,
      name,
      units,
    }))

    return filteredProducts
  }

  return { login, getStores, getProducts }
}
