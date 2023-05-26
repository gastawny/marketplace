import Cookies from 'universal-cookie'

export const useCookies = () => {
  const cookies = new Cookies()
  const getCookie = (cookie: string) => cookies.get(cookie)

  const setAuthCookie = (token: string, expire: boolean) => {
    if (!expire) cookies.set('Authorization', `Bearer ${token}`)

    const expirationDate = new Date()
    expirationDate.setFullYear(expirationDate.getFullYear() + 1)
    cookies.set('Authorization', `Bearer ${token}`, { expires: expirationDate })
  }

  const setUserCookie = (user: any, expire: boolean) => {
    if (!expire) cookies.set('User', user)

    const expirationDate = new Date()
    expirationDate.setFullYear(expirationDate.getFullYear() + 1)
    cookies.set('User', user, { expires: expirationDate })
  }

  const removeCookie = (cookie: string) => {
    cookies.remove(cookie)
  }

  return { setAuthCookie, getCookie, setUserCookie, removeCookie }
}
