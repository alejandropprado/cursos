export enum Color {
  red,
  black,
  blue,
  green,
}

export interface IHero {
  name: string;
  canFly: boolean;
  color: Color;
}
