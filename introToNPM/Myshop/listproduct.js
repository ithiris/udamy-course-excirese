var faker =require('faker');
var randomName = faker.name.findName();
var randomEmail =faker.internet.email();
var randomCard =faker.helpers.createCard();

console.log(randomName);
console.log(randomEmail);
console.log(randomCard);

console.log(faker.commerce.productName());
console.log(faker.commerce.price());