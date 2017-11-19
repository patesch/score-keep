import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});

// 
// // Object Spread Operator
//
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia',
//   age: 0
// };
//
// let person = {
//   ...user,
//   age: 25
// }
//
// console.log(user);
// console.log(person);
//
// // Object Properties Shorthand
// let bike = 'Scott';
// let stuff = {
//   bike,
//   laptop: 'Mac'
// };
//
// console.log(stuff);
//
// let yearBuild = '1995';
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let newHouse = {
//   ...house,
//   bedrooms: 3,
//   yearBuild,
//   flooring: 'Carpet'
// };
// console.log(newHouse);
