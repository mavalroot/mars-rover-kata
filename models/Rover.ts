import { DIRECTIONS } from '../config/rover';
import { type Direction, type Movement, type Position } from '../types';
import { getRandomDirection, getRandomPosition } from '../utils';
import type { Planet } from './Planet';

export class Rover {
  private direction: Direction;
  private position: Position;
  private planet: Planet;

  constructor(planet: Planet) {
    this.planet = planet;

    const height = this.planet.getHeight();
    const width = this.planet.getWidth();

    this.direction = getRandomDirection();
    this.position = this.launch();
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

  private launch(): Position {
    console.log('launch');
    const position = getRandomPosition(
      this.planet.getWidth(),
      this.planet.getHeight()
    );

    if (this.isObstacle(position)) {
      return this.launch();
    }

    return position;
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

  private isObstacle(position: Position): boolean {
    const obstacles = this.planet.getObstacles();

    return obstacles.some((obstacle) => {
      return obstacle.x === position.x && obstacle.y === position.y;
    });
  }
}
