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
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}
