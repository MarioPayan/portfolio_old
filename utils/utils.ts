export const getKeyFromLabel = (label: string) => label.toLocaleLowerCase().replace(' ', '-')

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const rotate = (array: any[], times = 1, reverse = false): any[] => {
  const rightWay = (array: any[]) => array.push(array.shift())
  const leftWay = (array: any[]) => array.unshift(array.pop())
  const loop = (callback: (array: any[]) => number, times: number) => {
    for (let i = 0; i < times; i++) {
      callback(array)
    }
  }
  if (reverse) loop(leftWay, times)
  else loop(rightWay, times)
  return array
}

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export const tsParticlesOptions: any = (show = true) => ({
  background: {
    color: {
      value: '#000000',
    },
    opacity: 0,
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          enable: true,
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        '': 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: {
        value: '#ffffff',
      },
      distance: 150,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 8,
      },
      animation: {
        enable: true,
        speed: 20,
        minimumValue: 0.1,
      },
    },
  },
})
