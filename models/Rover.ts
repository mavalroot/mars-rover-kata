import {
  DIRECTIONS,
  type Direction,
  type Movement,
  type Position,
} from '../types';
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
    movements.forEach((movement) => {
      switch (movement) {
        case 'F':
          this.moveForward();
          break;
        case 'B':
          this.moveBackward();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
      }
    });
  }

  private moveForward(): void {
    switch (this.direction) {
      case 'N':
        this.position.y += 1;
        break;
      case 'E':
        this.position.x += 1;
        break;
      case 'S':
        this.position.y -= 1;
        break;
      case 'W':
        this.position.x -= 1;
        break;
    }
  }

  private moveBackward(): void {
    switch (this.direction) {
      case 'N':
        this.position.y -= 1;
        break;
      case 'E':
        this.position.x -= 1;
        break;
      case 'S':
        this.position.y += 1;
        break;
      case 'W':
        this.position.x += 1;
        break;
    }
  }

  private turnLeft(): void {
    const directionIndex = DIRECTIONS.indexOf(this.direction);

    if (directionIndex === 0) {
      this.direction = DIRECTIONS[DIRECTIONS.length - 1];
    } else {
      this.direction = DIRECTIONS[directionIndex - 1];
    }
  }

  private turnRight(): void {
    const directionIndex = DIRECTIONS.indexOf(this.direction);

    if (directionIndex === DIRECTIONS.length - 1) {
      this.direction = DIRECTIONS[0];
    } else {
      this.direction = DIRECTIONS[directionIndex + 1];
    }
  }
}
