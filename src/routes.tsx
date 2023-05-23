import { AuthProvider } from 'contexts/Auth'
import { CartItemsProvider } from 'contexts/CartItems'
import { Cart } from 'pages/Cart'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/NotFound'
import { Register } from 'pages/Register'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { productsExample } from 'util/productsExample'

const Product = lazy(() => import('pages/Product'))

const AppRoutes = () => {
  return (
    <AuthProvider>
      <CartItemsProvider>
        <Suspense fallback={<div>loading ...</div>}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="produto">
              {productsExample.map((product) => (
                <Route key={product.id} path={product.id} element={<Product {...product} />} />
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
