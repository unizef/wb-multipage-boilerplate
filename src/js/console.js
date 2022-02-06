// Console Example
const fruit = {
  consoles: 3,
  mango: 5,
  jackfruit: 2,
  banana: 10
};

const groceries = {
  "ficus lyrata": 1,
  facewash: 2,
  mirror: 1,
  ...fruit
};

export { fruit, groceries };
