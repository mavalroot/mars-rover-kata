import { PLANET_MIN_MAX_SIZE, PLANET_OBSTACLES } from '../config';
import { type Difficulty, type Position, type Size } from '../types';
import { getRandomNumber, getRandomPosition } from '../utils';

export class Planet {
  private width: number;
  private height: number;
  private length: number;
  private obstacles: Position[];
  private difficulty: Difficulty;
  private size: Size;
  private name: string;

  constructor(
    name: string,
    difficulty: Difficulty = 'easy',
    size: Size = 'medium'
  ) {
    this.name = name;
    this.difficulty = difficulty;
    this.size = size;

    this.width = this.setSize();
    this.height = this.setSize();
    this.length = (this.width * 2 + 1) * (this.height * 2 + 1);
    this.obstacles = this.setRandomObstacles();
  }

  public getName(): string {
    return this.name;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getLength(): number {
    return this.length;
  }

  public getObstacles(): Position[] {
    return this.obstacles;
  }

  private setRandomObstacles(): Position[] {
    const obstacles: Position[] = [];
    const numberOfObstacles = Math.floor(
      this.length * PLANET_OBSTACLES[this.difficulty]
    );

    for (let i = 0; i < numberOfObstacles; i++) {
      const position = getRandomPosition(this.width, this.height);

      if (
        obstacles.some(
          (obstacle) => obstacle.x === position.x && obstacle.y === position.y
        )
      ) {
        i--;
      } else {
        obstacles.push(position);
      }
    }

    return obstacles;
  }

  private setSize(): number {
    const sizes = PLANET_MIN_MAX_SIZE;
    return getRandomNumber(sizes[this.size].min, sizes[this.size].max);
  }
}
