import { Background } from 'components/Background'
import { ReactComponent as Svg404 } from 'assets/svgs/404.svg'

export const NotFound = () => (
  <>
    <Background />
    <section className="relative min-h-screen w-full flex justify-center items-center">
      <div className="shadow flex items-center flex-col justify-center gap-8 absolute rounded-lg w-5/6 md:w-2/5 lg:w-1/2 2xl:w-1/3 h-1/2 md:h-3/5 2xl:h-3/5 bg-bg-secondary-color z-50 p-10 box-border">
        <Svg404 className="w-5/6 w- lg:w-3/4" />
        <h1 className="text-2xl lg:text-4xl text-white text-center font-bold">
          Oops, página não encontrada
        </h1>
      </div>
    </section>
  </>
)
