import {memo, useCallback} from 'react'
import {denim} from "../styles/colors/denim";
import {allports} from "../styles/colors/allports";
import Particles from "react-tsparticles";
import {Engine} from 'tsparticles-engine'
import {loadSlim} from 'tsparticles-slim'

interface Props {
  fullScreen?: boolean
  particlesCount?: number
}

export const MainBackgroundParticles = memo(({fullScreen = false, particlesCount = 100}: Props) => {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        background: {
          color: {
            value: denim[900],
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'bounce',
            },
            resize: false,
          },
          modes: {
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: allports[300],
          },
          links: {
            color: allports[300],
            distance: 120,
            enable: true,
            opacity: 0.4, // lines opacity
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'top-right', // animation direction
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 1, // animation speed
            straight: false,
          },
          number: {
            density: {
              enable: false,
            },
            value: particlesCount, // particles count
            max: 100,
            limit: 100,
          },
          opacity: {
            value: 0.4, // dots opacity
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {min: 3, max: 8},
          },
        },
        fullScreen: {
          enable: fullScreen,
          zIndex: -1,
        },
        detectRetina: true,
      }}
    />
  )
})

MainBackgroundParticles.displayName = 'MainBackgroundParticles'
