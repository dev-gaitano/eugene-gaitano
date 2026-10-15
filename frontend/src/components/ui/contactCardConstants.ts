// Base fixed pitch to keep card facing forward
export const ROTATION_X = Math.PI / 2;

export interface CardRotation {
  x: number;
  y: number;
  z: number;
}

// Desktop scroll rotation constants
export const DESKTOP_ROTATION_START: CardRotation = {
  x: ROTATION_X,
  y: 12 * (Math.PI / 180),
  z: 0 * (Math.PI / 180),
};

export const DESKTOP_ROTATION_END: CardRotation = {
  x: 12 * (Math.PI / 180),
  y: -62.5 * (Math.PI / 180),
  z: 90 * (Math.PI / 180),
};

// Mobile scroll rotation constants
export const MOBILE_ROTATION_START: CardRotation = {
  x: ROTATION_X,
  y: 0,
  z: 0,
};

export const MOBILE_ROTATION_END: CardRotation = {
  x: ROTATION_X,
  y: 0,
  z: 0,
};
