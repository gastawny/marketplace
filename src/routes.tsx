import { AuthProvider } from 'contexts/Auth'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/NotFound'
import { Register } from 'pages/Register'
import { Route, Routes } from 'react-router-dom'

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
          <Route index element={<h1>asd</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default AppRoutes
