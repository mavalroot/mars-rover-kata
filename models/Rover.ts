import type { Direction, Movement, Position } from '../types';
import { getRandomDirection, getRandomPosition } from '../utils';

export class Rover {
  private direction: Direction;
  private position: Position;

  constructor() {
    this.direction = getRandomDirection();
    this.position = getRandomPosition();
  }

  public getDirection(): Direction {
    return this.direction;
  }

  public getPosition(): Position {
    return this.position;
  }

  public move(movements: Movement[]): void {
    console.log('Rover is moving');
  }
}
