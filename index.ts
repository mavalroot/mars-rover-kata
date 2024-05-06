import { Planet } from './models/Planet';
import { Rover } from './models/Rover';

const planet = new Planet('Mars', 'easy', 'small');
const rover = new Rover(planet);

rover.move(['F', 'F', 'F', 'F', 'F']);
