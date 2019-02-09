// Object destructuring
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

// put property name in destructuring object and pass the whole object
const { publisher } = book;
console.log(publisher);
const { name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName);

// Array destructuring
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);