import { expect, describe, it, beforeAll } from 'bun:test';
import { Rover } from '../models/Rover';

describe('Rover', () => {
  let rover: Rover;

  beforeAll(() => {
    rover = new Rover();
  });

  it('should turn left', () => {
    const direction = rover.getDirection();
    rover.move(['L']);

    switch (direction) {
      case 'N':
        expect(rover.getDirection()).toBe('W');
        break;
      case 'E':
        expect(rover.getDirection()).toBe('N');
        break;
      case 'S':
        expect(rover.getDirection()).toBe('E');
        break;
      case 'W':
        expect(rover.getDirection()).toBe('S');
        break;
    }
  });

  it('should turn right', () => {
    const direction = rover.getDirection();
    rover.move(['R']);

    switch (direction) {
      case 'N':
        expect(rover.getDirection()).toBe('E');
        break;
      case 'E':
        expect(rover.getDirection()).toBe('S');
        break;
      case 'S':
        expect(rover.getDirection()).toBe('W');
        break;
      case 'W':
        expect(rover.getDirection()).toBe('N');
        break;
    }
  });

  it('should move forward', () => {
    const { x, y } = rover.getPosition();
    const direction = rover.getDirection();
    rover.move(['F']);

    switch (direction) {
      case 'N':
        expect(rover.getPosition().y).toBe(y + 1);
        break;
      case 'E':
        expect(rover.getPosition().x).toBe(x + 1);
        break;
      case 'S':
        expect(rover.getPosition().y).toBe(y - 1);
        break;
      case 'W':
        expect(rover.getPosition().x).toBe(x - 1);
        break;
    }
  });

  it('should move backward', () => {
    const { x, y } = rover.getPosition();

    const direction = rover.getDirection();
    rover.move(['B']);

    switch (direction) {
      case 'N':
        expect(rover.getPosition().y).toBe(y - 1);
        break;
      case 'E':
        expect(rover.getPosition().x).toBe(x - 1);
        break;
      case 'S':
        expect(rover.getPosition().y).toBe(y + 1);
        break;
      case 'W':
        expect(rover.getPosition().x).toBe(x + 1);
        break;
    }
  });
});
