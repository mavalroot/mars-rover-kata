import { Rover } from './models/Rover';

const rover = new Rover();

console.log(rover.getDirection());
console.log(rover.getPosition());

rover.move(['F']);

console.log('Forward movement');

console.log(rover.getDirection());
console.log(rover.getPosition());
