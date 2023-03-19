const generateRandomSizeMap= () => {
  const width = Math.floor(Math.random() * 40) + 50
  const height = Math.floor(Math.random() * 40) + 50
  return { width, height }
}

export function setupMap(map: HTMLDivElement) {
  const { width, height } = generateRandomSizeMap()
  map.style.width = `${width}vw`
  map.style.height = `${height}vh`
}
