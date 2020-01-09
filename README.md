# Recursion

The aim of this workshop is to introduce students to recursive programming.

Recursive programming is all about functions that invoke themselves. It allows
us to perform the same sort of tasks that loops are typically used for but in
an arguably more elegant way. Recursion isn't useful in every situation but
some problems are most easily solved recursively - and it's always fun to learn
something new.

For a lot of people this style of programming is initially confusing, but with
a little work it will become very understandable and powerful.

## Thinking recursively

In order to write recursive functions you'll need to think about your problem in repeatable solvable chunks.

Think about it this way: if you know how solve the minimal case then you'll know how to apply the same rules for a the same problem with a bigger scope.

A classic recursive example is the factorial function `!`:

`x! = 1*2*3*....*(x-2)*(x-1)*x`

e.g. `4! = 1*2*3*4 = 24`,

To solve `x!` we need to solve the smaller problem of `(x-1)!`, then what we need to solve is this equation `x! = (x-1)!*x`.
To solve `(x-1)!` we need to know the answer to `(x-2)!` and so on...

The minimal case which we already know the answer to is `1!` which is 1.

Here is how it looks like:

![5 factorial](https://user-images.githubusercontent.com/22002193/72061904-66157700-32df-11ea-8b25-4ef1531a021a.jpeg)

## How to write a recursive function


There are two main parts to a recursive function:
1. Something that will make the function stop. Sometimes called a 'base
case'.

2. A way for the function to invoke itself.

### Contrived example 1

```js
const countToTen = (count) => {
  if (count >= 10) {
    // this is our base case. If we have counted to ten - we stop
    // Without this we would keep going forever!!!
    console.log(count);
    return;
  } else {
    // this is what makes our function recursive. It calls itself!!!!!
    console.log(count);
    countToTen(count + 1);
  }
}

countToTen(0); // will console log the numbers from 1 to 10
```



### Contrived example 2

```js
// shout :: [String] -> [String]
const shout = words => {
  if (words.length <= 0) {
    // the base case
    return [];
  } else {
    // recursion! but this time we are returning something
    return [words[0].toUpperCase()].concat(shout(words.slice(1)));
  }
};

console.log(shout(['I', 'am', 'a', 'sensitive', 'boy']));
// -> [ 'I', 'AM', 'A', 'SENSITIVE', 'BOY' ]
```

The recursion might be a bit hard to parse. SO LET'S BREAK IT
DOWN!

`[(words[0].toUpperCase())]` - we uppercase the first word in our array, and stick it inside a new array

`.concat(...)` - we are appending something to the end of the array

`shout(words.slice(1))` - and that thing is shout invoked with our remaining words.

We could also write it out like this:

```js
const firstWord = words[0];
const restOfTheWords = words.slice(1);
const firstWordShouted = firstWord.toUpperCase();
const restOfTheWordsShouted = shout(restOfTheWords);
return [firstWordShouted].concat(restOfTheWordsShouted);
```

## Exercises!

To get started please run `npm install`, and then `npm run test -- --watch`.
You can then open the index.js file and start trying to write your solutions.

If you get stuck, ask your peers for help! 🦄

### Further research

If you want to really understand how this can possibly work, I suggest learning
about JavaScript's stack - [ this video is a good place to start ](https://www.youtube.com/watch?v=8aGhZQkoFbQ).

Here is also a [computerphile video about recursion](https://www.youtube.com/watch?v=Mv9NEXX1VHc).
