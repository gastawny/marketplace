import { Card } from 'components/Card'
import { Header } from 'components/Header'

export const Home = () => {
  return (
    <>
      <Header />
      <div className="my-16"></div>
      <div className="flex flex-wrap gap-8 justify-center">
        {['', '', '', '', '', '', '', '', ''].map((asd, index) => (
          <Card
            key={index}
            id="duiogasdlasjhkdabjklsd"
            text="Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6, DLSS, Ray Tracing - RTX 3060 Ventus 2X 12G OC"
            price="29,35"
            units="50"
            img="Placadevideo"
          />
        ))}
      </div>
    </>
  )
}
