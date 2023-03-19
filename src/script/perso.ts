interface direction {
  up: boolean,
  down: boolean,
  left: boolean,
  right: boolean
}

export function persoRespawn (perso: HTMLDivElement) {
  perso.style.top = '50%'
  perso.style.left = '50%'
}

export function moovePerso(direction: direction, perso: HTMLDivElement, map: HTMLDivElement) {
  const persoCoordinated = [perso.offsetTop, perso.offsetLeft]
  const mapSize = [map.offsetHeight, map.offsetWidth]

  if (direction.up && persoCoordinated[0] > 0) {
    perso.style.top = `${persoCoordinated[0] - 10}px`
  }
  if (direction.down && persoCoordinated[0] < mapSize[0] - 50) {
    perso.style.top = `${persoCoordinated[0] + 10}px`
  }
  if (direction.left && persoCoordinated[1] > 0) {
    perso.style.left = `${persoCoordinated[1] - 10}px`
  }
  if (direction.right && persoCoordinated[1] < mapSize[1] - 50) {
    perso.style.left = `${persoCoordinated[1] + 10}px`
  }

  return direction;
}

export function listenKey(direction: direction, keydown: KeyboardEvent) {
  if (keydown.key) {
    switch (keydown.key) {
      case 'ArrowUp':
      case 'z':
      case 'Z':
        direction.up = true
        break
      case 'ArrowDown':
      case 's':
      case 'S':
        direction.down = true
        break
      case 'ArrowLeft':
      case 'q':
      case 'Q':
        direction.left = true
        break
      case 'ArrowRight':
      case 'd':
      case 'D':
        direction.right = true
        break
    }
  }
  document.addEventListener('keyup', (keyup) => {
    if (keyup.key) {
      switch (keyup.key) {
        case 'ArrowUp':
        case 'z':
        case 'Z':
          direction.up = false
          break
        case 'ArrowDown':
        case 's':
        case 'S':
          direction.down = false
          break
        case 'ArrowLeft':
        case 'q':
        case 'Q':
          direction.left = false
          break
        case 'ArrowRight':
        case 'd':
        case 'D':
          direction.right = false
          break
      }
    }
  })
}
