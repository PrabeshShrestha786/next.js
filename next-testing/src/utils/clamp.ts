// src/utils/clamp.ts
export function clamp(value: number, min: number, max: number): number {
  if ([value, min, max].some((n) => Number.isNaN(n))) {
    throw new TypeError("clamp() only accepts numbers (not NaN).");
  }

  if (min > max) {
    throw new RangeError("min must be <= max");
  }

  return Math.min(Math.max(value, min), max);
}
