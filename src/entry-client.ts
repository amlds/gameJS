//import scss
import './assets/index.scss'

//imort script
import { setupMap } from './script/map'

//setup games
setupMap(document.querySelector('.map') as HTMLDivElement)
