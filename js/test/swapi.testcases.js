/**
 * swapi.js test cases
 */

const makeUrlTestCases = [
  {
    expect: { resource: 'films', id: 2 },
    toBe: 'https://swapi.dev/api/films/2',
  },
  {
    expect: { resource: 'films', id: 4 },
    toBe: 'https://swapi.dev/api/films/4',
  },
  {
    expect: { resource: 'starships', id: 13 },
    toBe: 'https://swapi.dev/api/starships/13',
  },
  {
    expect: { resource: 'vehicles', id: 16 },
    toBe: 'https://swapi.dev/api/vehicles/16',
  },
];

const parseEntityIdsTestCases = [
  {
    expect: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    toBe: [1, 3, 6],
  },
  { expect: 'https://swapi.dev/api/starships/12/', toBe: 12 },
  { expect: 'https://swapi.dev/api/starships/22/', toBe: 22 },
  { expect: 'https://swapi.dev/api/people/43/', toBe: 43 },
  { expect: 'https://swapi.dev/api/people/62/', toBe: 62 },
];

const parseIntegerWithRadixCharacterTestCases = [
  { expect: '23,819', toBe: 23819 },
  { expect: '87,945,654', toBe: 87945654 },
  { expect: '5,120', toBe: 5120 },
  { expect: '12', toBe: 12 },
  { expect: '364', toBe: 364 },
  { expect: '5', toBe: 5 },
];

module.exports = {
  makeUrlTestCases,
  parseEntityIdsTestCases,
  parseIntegerWithRadixCharacterTestCases,
};
