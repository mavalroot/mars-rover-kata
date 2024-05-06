import { expect, describe, it, beforeAll } from 'bun:test';
import { Rover } from '../models/Rover';
import { DIRECTIONS } from '../config/rover';
import { Planet } from '../models/Planet';
describe('Rover', () => {
  let rover: Rover;

  beforeAll(() => {
    const planet = new Planet('Mars');
    rover = new Rover(planet);
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
});
