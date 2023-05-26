import { StoreCard } from 'components/StoreCard'
import { AuthProvider } from 'contexts/Auth'
import { CartItemsProvider } from 'contexts/CartItems'
import { useApi } from 'hooks/useApi'
import { Home } from 'pages/Home'
import { Loading } from 'pages/Loading'
import Store from 'pages/Store'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const Product = lazy(() => import('pages/Product'))
const Login = lazy(() => import('pages/Login'))
const NotFound = lazy(() => import('pages/NotFound'))
const Search = lazy(() => import('pages/Search'))
const Register = lazy(() => import('pages/Register'))
const Cart = lazy(() => import('pages/Cart'))

const AppRoutes = () => {
  const [stores, setStores] = useState<any[]>([])
  const { getStores } = useApi()

  useEffect(() => {
    fetchStores()
  }, [])

  const fetchStores = async () => {
    try {
      const response = await getStores()
      setStores(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <AuthProvider>
      <CartItemsProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Register />} />
              <Route path="carrinho" element={<Cart />} />
              <Route path="busca/:query" element={<Search />} />
            </Route>
            <Route path="loja">
              {stores.map(({ id, name }) => (
                <Route key={id} path={`${id}`} element={<Store id={id} name={name} />} />
              ))}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CartItemsProvider>
    </AuthProvider>
  )
}

export default AppRoutes
