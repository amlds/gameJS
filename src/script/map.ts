const convertPxToVw = (px: number) => {
  return (px / window.innerWidth) * 100
}

const convertPxToVh = (px: number) => {
  return (px / window.innerHeight) * 100
}

const generateRandomSizeMap= () => {
  const width = Math.floor(Math.random() * 100) + 50
  const height = Math.floor(Math.random() * 100) + 50
  return { width, height }
}

export function setupMap(map: HTMLDivElement) {
  const { width, height } = generateRandomSizeMap()
  map.style.width = `${width}vw`
  map.style.height = `${height}vh`
  map.style.backgroundColor = 'red'
}
