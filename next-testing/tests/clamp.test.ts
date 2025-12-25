import { clamp } from "../src/utils/clamp";

describe("clamp()", () => {
  test("returns min when value is below min", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test("returns max when value is above max", () => {
    expect(clamp(99, 0, 10)).toBe(10);
  });

  test("returns the value when it is within the range", () => {
    expect(clamp(7, 0, 10)).toBe(7);
  });

  test("throws if min is greater than max", () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });

  test("throws if any input is NaN", () => {
    expect(() => clamp(NaN, 0, 10)).toThrow(TypeError);
  });
});
