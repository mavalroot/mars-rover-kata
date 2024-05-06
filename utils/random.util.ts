import type { Direction, Position } from '../types';

export function getRandomNumber(min = 1, max = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomCharacterFromString(str: string): string {
  return str.charAt(getRandomNumber(0, str.length - 1));
}

export function getRandomValueFromArray(arr: any[]): any {
  return arr[getRandomNumber(0, arr.length - 1)];
}

export function getRandomPosition(): Position {
  return {
    x: getRandomNumber(-100),
    y: getRandomNumber(-100),
  };
}

export function getRandomDirection(): Direction {
  const directions: Direction[] = ['N', 'E', 'S', 'W'];
  return getRandomValueFromArray(directions) as Direction;
}
