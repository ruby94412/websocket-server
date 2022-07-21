const fs = require('fs');
const path = require('path');
const loginInfo = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../data/loginInfo.json'),
    'utf8'
));

const validateUser = ({username, password}) => {
  for (let user of loginInfo) {
    if (username === user.username) {
      return user.password === password ? user : false;
    }
  }
  return false;
}

module.exports = {
  validateUser,
}