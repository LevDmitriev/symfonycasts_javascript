let yammyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];
let greatThings = ['swimming', 'sunsets', ...yammyThings, 'New Orleans'];
let copyOfGreatThings = [...greatThings];

copyOfGreatThings.push('summer');
console.log(greatThings);
console.log(copyOfGreatThings);