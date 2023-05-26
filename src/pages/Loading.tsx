import styled, { keyframes } from 'styled-components'

export const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
    <div className="flex text-center items-center justify-center min-h-screen">
      <Ring className="absolute w-56 h-56 rounded-full"></Ring>
      <span className="text-primary-color z-50 text-xl uppercase tracking-widest">
        carregando...
      </span>
    </div>
  </div>
)

const ringAnimte = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #e65c00;
  }
  50% {
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px #18b201;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #0456c8;
  }
`

const Ring = styled.div`
  animation: ${ringAnimte} 2s linear infinite;
  background-color: rgba(0, 0, 0, 0.4);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`
