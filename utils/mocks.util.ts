import { Planet, Rover } from '../models';
import type { Direction, Position } from '../types';

export interface MockPlanetConfig {
  width: number;
  height: number;
  obstacles: { x: number; y: number }[];
}

export interface MockRoverConfig {
  planet: Planet;
  position: Position;
  direction: Direction;
}

export function getMockPlanet(config: MockPlanetConfig): Planet {
  const planet: any = new Planet('Mock planet');

  planet.width = config.width;
  planet.height = config.height;
  planet.obstacles = config.obstacles;
  planet.length = (planet.width * 2 + 1) * (planet.height * 2 + 1);

  return planet;
}

export function getMockRover(config: MockRoverConfig): Rover {
  const rover: any = new Rover(config.planet);

  rover.position = config.position;
  rover.direction = config.direction;

  return rover;
}
