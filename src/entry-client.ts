//import scss
import './assets/index.scss'

//imort script
import { setupMap } from './script/map'
import { moovePerso, persoRespawn, listenKey } from './script/perso'
import { persoGoToPorte } from './script/porte'


const perso = document.querySelector('.perso') as HTMLDivElement
const map = document.querySelector('.map') as HTMLDivElement
const arrayPorte = document.querySelectorAll('.porte') as NodeListOf<HTMLDivElement>

const direction = {
  up: false,
  down: false,
  left: false,
  right: false
}

//setup games
setupMap(map);

//listen keydown
document.addEventListener('keydown', (keydown) => {
  listenKey(direction, keydown)
  moovePerso(direction, perso, map)
  arrayPorte.forEach((porte) => {
    if (persoGoToPorte(perso, porte)) {
      persoRespawn(perso);
      setupMap(map);
    }
  })
});

document.addEventListener('keyup', () => {
  moovePerso(direction, perso, map)
});
