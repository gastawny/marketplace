import { AuthProvider } from 'contexts/Auth'
import { CartItemsProvider } from 'contexts/CartItems'
import { Home } from 'pages/Home'
import { Loading } from 'pages/Loading'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Product = lazy(() => import('pages/Product'))
const Login = lazy(() => import('pages/Login'))
const NotFound = lazy(() => import('pages/NotFound'))
const Search = lazy(() => import('pages/Search'))
const Register = lazy(() => import('pages/Register'))
const Cart = lazy(() => import('pages/Cart'))
const Store = lazy(() => import('pages/Store'))

const AppRoutes = () => (
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
            <Route path=":store_id" element={<Store />} />
          </Route>
          <Route path="produto">
            <Route path=":store_id/:product_id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </CartItemsProvider>
  </AuthProvider>
)

export default AppRoutes
