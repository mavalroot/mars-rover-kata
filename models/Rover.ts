import { DIRECTIONS } from '../config';
import { type Direction, type Movement, type Position } from '../types';
import { getRandomDirection, getRandomPosition } from '../utils';
import type { Planet } from './Planet';

export class Rover {
  private direction: Direction;
  private position: Position;
  private planet: Planet;
  private obstacleFound?: Position;

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

  public getPlanet(): Planet {
    return this.planet;
  }

  public move(movements: Movement[]): void {
    this.obstacleFound = undefined;

    movements.forEach((movement) => {
      if (this.obstacleFound) {
        return;
      }

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

    if (this.obstacleFound) {
      console.error({
        obstacleFound: this.obstacleFound,
        rover: {
          position: this.position,
          direction: this.direction,
        },
      });
    }
  }

  private checkObstacle(position: Position): boolean {
    const obstacles = this.planet.getObstacles();

    return obstacles.some((obstacle) => {
      return obstacle.x === position.x && obstacle.y === position.y;
    });
  }

  private checkNewBound(position: Position): Position {
    const width = this.planet.getWidth();
    const height = this.planet.getHeight();

    if (position.x < -width) {
      position.x = width;
    }

    if (position.x > width) {
      position.x = -width;
    }

    if (position.y < -height) {
      position.y = height;
    }

    if (position.y > height) {
      position.y = -height;
    }

    return position;
  }

  private launch(): Position {
    const position = getRandomPosition(
      this.planet.getWidth(),
      this.planet.getHeight()
    );

    if (this.checkObstacle(position)) {
      return this.launch();
    }

    return position;
  }

  private moveForward(): void {
    const newPosition = { ...this.position };

    switch (this.direction) {
      case 'N':
        newPosition.y += 1;
        break;
      case 'E':
        newPosition.x += 1;
        break;
      case 'S':
        newPosition.y -= 1;
        break;
      case 'W':
        newPosition.x -= 1;
        break;
    }

    if (this.checkObstacle(newPosition)) {
      this.obstacleFound = newPosition;
      return;
    }

    this.position = this.checkNewBound(newPosition);
  }

  private moveBackward(): void {
    const newPosition = { ...this.position };

    switch (this.direction) {
      case 'N':
        newPosition.y -= 1;
        break;
      case 'E':
        newPosition.x -= 1;
        break;
      case 'S':
        newPosition.y += 1;
        break;
      case 'W':
        newPosition.x += 1;
        break;
    }

    if (this.checkObstacle(newPosition)) {
      this.obstacleFound = newPosition;
      return;
    }

    this.position = this.checkNewBound(newPosition);
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
