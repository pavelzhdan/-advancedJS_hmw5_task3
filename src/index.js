// TODO: write your code in app.js
const player = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

export default function shortDescription(input) {
  const error = Error('Такого типа персонажа нет');
  const emojies = {
    Bowman: '0x1F620',
    Swordsman: '0x1F621',
    Magician: '0x1F9D0',
    Daemon: '0x1F47F',
    Undead: '0x1F480',
    Zombie: '0x1F9DF',
  };
  if (emojies[input.type] === undefined) {
    return error;
  }
  const attackEmoji = String.fromCodePoint(0x2694);
  const defenceEmoji = String.fromCodePoint(0x1F6E1);
  const healthEmoji = String.fromCodePoint(0x2764);
  const typeOfPlayer = String.fromCodePoint(emojies[input.type]);

  const outcome = `${typeOfPlayer} ${input.name.charAt(0)}(${input.level})${attackEmoji}${input.attack} ${defenceEmoji}  ${input.defence} ${healthEmoji} ${input.health}`;

  return outcome;
}

shortDescription(player);
