import { getMonth } from "../index.js";

describe("test for getMonth function ", () => {
  const firstMonth = 1;
  const tenthMonth = 10;
  const invalidNumber = 13;
  const string = 'a';

  it("should operate correctly with months and invalid number ", () => {
    expect(getMonth(firstMonth)).toBe('January');
    expect(getMonth(tenthMonth)).toBe('October');
    expect(getMonth(invalidNumber)).toBe('Unknown');
    expect(getMonth(string)).toBe('Unknown');
  })
});
