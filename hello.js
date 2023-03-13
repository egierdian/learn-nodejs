function sayHello(name) {
  return `Hi, ${name}`;
}

const creatorName = "Egi Erdian";

// module.exports.sayHello = sayHello
// module.exports.creatorName = creatorName // cara export

module.exports = {
  sayHello,
  creatorName,
};
