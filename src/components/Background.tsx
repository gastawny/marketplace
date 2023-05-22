import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

export const Background = () => {
  const numberOfSpans = 200
  const spans: number[] = []
  for (let i = 0; i < numberOfSpans; i++) spans.push(i)

  return (
    <BackGround>
      {spans.map((number) => (
        <span
          className="relative block bg-bg-primary-color z-20 hover:bg-primary-color hover:duration-0"
          key={number}
        ></span>
      ))}
    </BackGround>
  )
}

const animate = keyframes`
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`

const BackGround = styled.div`
  ${tw`overflow-hidden absolute flex-wrap bg-slate-950 gap-0.5 flex justify-center items-center w-screen h-screen`}

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--bg-primary), var(--primary), var(--bg-primary));
    animation: ${animate} 4s linear infinite;
  }

  span {
    width: calc(5vw - 2px);
    height: calc(10vh - 2px);
    transition: 1.5s;

    @media (max-width: 1366px) {
      width: calc(6.25vw - 2px);
      height: calc(12.5vh - 2px);
    }

    @media (max-width: 900px) {
      width: calc(10vw - 2px);
      height: calc(14vh - 2px);
    }

    @media (max-width: 600px) {
      width: calc(20vw - 2px);
      height: calc(20vw - 2px);
    }
  }
`
