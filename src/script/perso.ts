export function moovePerso(event: KeyboardEvent, perso: HTMLDivElement, map: HTMLDivElement) {
  const persoCoordinated = [perso.offsetTop, perso.offsetLeft]
  const mapSize = [map.offsetHeight, map.offsetWidth]

  switch (event.key) {
    case 'ArrowUp':
    case 'z':
    case 'Z':
      if (persoCoordinated[0] > 0) {
        perso.style.top = `${persoCoordinated[0] - 10}px`
      }
      break
    case 'ArrowDown':
    case 's':
    case 'S':
      if (persoCoordinated[0] < mapSize[0] - 50) {
        perso.style.top = `${persoCoordinated[0] + 10}px`
      }
      break
    case 'ArrowLeft':
    case 'q':
    case 'Q':
      if (persoCoordinated[1] > 0) {
        perso.style.left = `${persoCoordinated[1] - 10}px`
      }
      break
    case 'ArrowRight':
    case 'd':
    case 'D':
      if (persoCoordinated[1] < mapSize[1] - 50) {
        perso.style.left = `${persoCoordinated[1] + 10}px`
      }
      break
    }
}
