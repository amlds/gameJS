//import scss
import './assets/index.scss'

//imort script
import { setupMap } from './script/map'
import { moovePerso } from './script/perso'


const perso = document.querySelector('.perso') as HTMLDivElement
const map = document.querySelector('.map') as HTMLDivElement

//setup games
setupMap(map);

//listen keydown
document.addEventListener('keydown', (event) => {
  moovePerso(event, perso, map)
});
