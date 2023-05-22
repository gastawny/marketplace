import { AuthProvider } from 'contexts/Auth'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/NotFound'
import { Register } from 'pages/Register'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { productsExample } from 'util/productsExample'

const Product = lazy(() => import('pages/Product'))

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="produto">
          {productsExample.map((product) => (
            <Route key={product.id} path={product.id} element={<Product {...product} />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default AppRoutes
