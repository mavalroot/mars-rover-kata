import { expect, describe, it, beforeAll } from 'bun:test';
import { Rover, Planet } from '../models';
import { getMockPlanet, getMockRover } from '../utils';

describe('Rover', () => {
  let rover: Rover;

  beforeAll(() => {
    const planet = new Planet('Mars');
    rover = new Rover(planet);
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

  it('should move forward if there is no obstacle in the way', () => {
    const mockPlanet = getMockPlanet({
      width: 1,
      height: 1,
      obstacles: [],
    });

    const mockRover = getMockRover({
      planet: mockPlanet,
      position: { x: 0, y: 0 },
      direction: 'N',
    });

    mockRover.move(['F']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: 1 });
  });

  it('should move backwards if there is no obstacle in the way', () => {
    const mockPlanet = getMockPlanet({
      width: 1,
      height: 1,
      obstacles: [],
    });

    const mockRover = getMockRover({
      planet: mockPlanet,
      position: { x: 0, y: 0 },
      direction: 'N',
    });

    mockRover.move(['B']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: -1 });
  });
});
