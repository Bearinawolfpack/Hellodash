import React from 'react';

const FindIndex = () => {
  const Index = () => {
    return 'Hello World';
  };

  return <h3>{Index()}</h3>;
};

export default FindIndex;

// Description: This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

// Arguments:
// 1. array (Array): The array to inspect,
// 2. [predicate=_.identity] (Function): The function invoked per iteration,
// 3. [fromIndex=0] (number): The index to search from.

// Returns:
// (number): Returns the index of the found element, else -1.

// Example
// var users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];

// _.findIndex(users, function(o) { return o.user == 'barney'; });
// // => 0

// // The `_.matches` iteratee shorthand.
// _.findIndex(users, { 'user': 'fred', 'active': false });
// // => 1

// // The `_.matchesProperty` iteratee shorthand.
// _.findIndex(users, ['active', false]);
// // => 0

// // The `_.property` iteratee shorthand.
// _.findIndex(users, 'active');
// // => 2
