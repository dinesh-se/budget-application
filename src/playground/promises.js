const promise = new Promise((resolve, reject) => {
  resolve('this is my resolved data');
});

promise.then((data) => {
  console.log(data);
});