/* let name = 'bob';

console.log(`Hello ${name}`);

let sentence = `This is really a convenience.
 You probably will never want to do something
       quite like this. You might choose to put
     long passages of text into an external file
       and load it somehow.`;

let sentence2 = 'This is really a convenience.\
     You probably will never want to do something\
     quite like this. You might choose to put\
     long passages of text into an external file\
     and load it somehow.';

console.log(sentence);
console.log(sentence2); */


function getReasonCount() { return 1; }

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`;

console.log(interpolation);