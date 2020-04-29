import shortDescription from '../../index';

test('return description', () => {
  const player = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const result = shortDescription(player);

  expect(toString(result)).toEqual(toString('[0x1F620 Л(1)0x2694 40 0x1F6E1  10 0x2764 50]'));
});

test('no such type of character', () => {
  const player = {
    name: 'Лучник',
    type: 'Boman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const result = shortDescription(player);

  expect(result.message).toBe('Такого типа персонажа нет');
});
