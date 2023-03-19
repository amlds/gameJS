export function persoGoToPorte (perso: HTMLDivElement, porte: HTMLDivElement) {
  const persoCoordinated = [perso.offsetTop, perso.offsetLeft, (perso.offsetWidth + perso.offsetLeft)]
  const porteCoordinated = [porte.offsetTop, porte.offsetLeft, (porte.offsetWidth + porte.offsetLeft)]

  if (persoCoordinated[0] <= porteCoordinated[0] && persoCoordinated[0] >= porteCoordinated[0] - 50 && persoCoordinated[1] >= porteCoordinated[1] && persoCoordinated[2] <= porteCoordinated[2]){
    return true
  }
  return false
}
