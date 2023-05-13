import { Home } from 'Home'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
