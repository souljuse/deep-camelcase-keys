import { camelcase } from "./camelcase";

const TEST_CASES = [
  ["", ""],
  ["test", "test"],
  ["test-string", "testString"],
  [" test-string ", "testString"],
  ["Test-String", "testString"],
  ["TestV2", "testV2"],
  ["_foo_bar_", "fooBar"],
  ["foo 1.2.10", "foo1210"],
  ["foo 1.21.0", "foo1210"],
  ["foo 1.2.10", "foo1210"]
];

describe("camel case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelcase(input)).toEqual(result);
    });
  }
});
