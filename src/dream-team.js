const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let nameDream = [];
  if (members && typeof members === 'object' && members.length > 0) {
    for (let index = 0; index < members.length; index++) {
      members[index] = typeof members[index] === 'string' ? members[index].trimStart().toUpperCase() : members[index];
    }
    members.sort();
    for (let index = 0; index < members.length; index++) {
      typeof members[index] === 'string' && nameDream.push(members[index].split('')[0]);
    }
    nameDream = nameDream.join('');
  } else {
    nameDream = false;
  }
  return nameDream;
}

module.exports = {
  createDreamTeam
};
