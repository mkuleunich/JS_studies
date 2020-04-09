function logDefaultParameters(name, age = 25) {
  console.log('The person is ' + name + ' and he is ' + age + ' years old');
}

console.log(logDefaultParameters('John')); // John, null
