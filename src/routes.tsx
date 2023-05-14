import { Login } from 'pages/Login'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
