import { expect, describe, it, beforeAll } from 'bun:test';
import { Rover } from '../models/Rover';
import {
  DIRECTIONS,
  type Direction,
  type Movement,
  type Position,
} from '../types';

describe('Rover', () => {
  let rover: Rover;

  beforeAll(() => {
    rover = new Rover();
  });

  it('should create a new Rover', () => {
    expect(rover).toBeDefined();
    expect(rover).toBeInstanceOf(Rover);
  });

  it('should return the current direction', () => {
    expect(rover.getDirection()).toBeDefined();
    expect(DIRECTIONS.includes(rover.getDirection()));
  });

  it('should return the current position', () => {
    expect(rover.getPosition()).toBeDefined();
    expect(rover.getPosition()).toHaveProperty('x');
    expect(rover.getPosition()).toHaveProperty('y');
  });

  it('should move the rover', () => {
    const movements: Movement[] = ['F', 'L'];
    // Test
  });
});
