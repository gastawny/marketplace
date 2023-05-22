import { Header } from 'components/Header'
import placadevideo from 'assets/images/placadevideo.jpg'

interface IProductProps {
  id: string
  text: string
  price: string
  units: string
  img: string
  seller: string
}

const defaultValues = {
  id: 'duiogasdlasjhkdabjklsd',
  text: 'Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6, DLSS, Ray Tracing - RTX 3060 Ventus 2X 12G OC',
  price: '29,35',
  units: '50',
  img: 'Placadevideo',
  seller: 'Cleito',
}

export const Product = () => {
  return (
    <>
      <Header />
      <div className="my-8"></div>
      <div className="mx-auto w-4/5 tracking-wider rounded-md bg-bg-secondary-color text-zinc-200 flex flex-col p-10">
        <h1 className="text-4xl font-bold text-zinc-200">{defaultValues.text}</h1>
        <div className="flex justify-between">
          <img src={placadevideo} className="mt-6 w-2/5 rounded-md" />
          <div className="w-full flex">
            <div className="flex flex-col justify-between h-min w-1/2 px-6 gap-8 my-auto">
              <div>
                <p className="text-xl">
                  ({defaultValues.units}){' '}
                  <span
                    className={`text-${
                      Number(defaultValues.units) != 0 ? 'positive' : 'negative'
                    }-color font-medium`}
                  >
                    {Number(defaultValues.units) != 0 ? 'Em estoque' : 'Esgotado'}
                  </span>
                </p>
                <p className="text-xl">
                  Vendido e entregue por:{' '}
                  <span className="font-medium text-primary-color">{defaultValues.seller}</span>
                </p>
              </div>
              <h2 className="text-7xl font-extrabold text-primary-color mix-blend-hard-light">
                R$ {defaultValues.price}
              </h2>
              <div className="flex flex-col gap-5">
                <button className="w-full bg-primary-color border-none p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light">
                  Comprar Agora
                </button>
                <button className="w-full bg-primary-color border-none p-5 rounded text-lg md:text-xl text-bg-primary-color uppercase font-semibold tracking-widest cursor-pointer hover:mix-blend-hard-light">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
            <div>
              <h1>Other Products</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
