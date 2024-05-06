import { expect, describe, it } from 'bun:test';
import { getMockPlanet, getMockRover } from '../utils';

describe('Obstacles', () => {
  it('should stop moving forward if there is an obstacle in the way', () => {
    const mockPlanet = getMockPlanet({
      width: 5,
      height: 5,
      obstacles: [{ x: 0, y: 2 }],
    });

    const mockRover = getMockRover({
      planet: mockPlanet,
      position: { x: 0, y: 0 },
      direction: 'N',
    });

    mockRover.move(['F', 'F', 'F', 'F']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: 1 });
  });

  it('should stop moving backwards if there is an obstacle in the way', () => {
    const mockPlanet = getMockPlanet({
      width: 5,
      height: 5,
      obstacles: [{ x: 0, y: -2 }],
    });

    const mockRover = getMockRover({
      planet: mockPlanet,
      position: { x: 0, y: 0 },
      direction: 'N',
    });

    mockRover.move(['B', 'B', 'B', 'B']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: -1 });
  });

  it('should continue moving forward after bound reached', () => {
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

    mockRover.move(['F', 'F']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: -1 });
  });

  it('should continue moving backwards after bound reached', () => {
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

    mockRover.move(['B', 'B']);

    expect(mockRover.getPosition()).toEqual({ x: 0, y: 1 });
  });
});
