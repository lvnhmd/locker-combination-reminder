const reminder = require('./src/reminder');

const output = async () => {
  const lock = await reminder.remind();
  console.log(`You locker combination is [${lock}] , you are welcome!`);
};

output();
