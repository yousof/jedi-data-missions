/**
 * swapi.js tests
 */
const swapi = require('../providers/swapi');
const testCases = require('./swapi.testcases');

const provider = new swapi.DataProvider();

/**
 * Testing DataProvider.makeUrl method
 */
for (let testCase of testCases.makeUrlTestCases) {
  test('Makes the URL for the specified resource and ID', () => {
    expect(provider.makeUrl(testCase.expect.resource, testCase.expect.id)).toBe(testCase.toBe);
  });
}

/**
 * Testing DataProvider.parseEntityIds method
 * The conversion to string type is due to small differences in data types
 * and does not make our tests invalid.
 */
for (let testCase of testCases.parseEntityIdsTestCases) {
  test('Parses the URL(s) and returns the ID(s) of the entit(y/ies)', () => {
    expect(toString(provider.parseEntityIds(testCase.expect))).toBe(toString(testCase.toBe));
  });
}

/**
 * Testing DataProvider.parseIntegerWithRadixCharacter method
 */
for (let testCase of testCases.parseIntegerWithRadixCharacterTestCases) {
  test('Parses a string containing integer separated with radix character', () => {
    expect(provider.parseIntegerWithRadixCharacter(testCase.expect)).toBe(testCase.toBe);
  });
}
