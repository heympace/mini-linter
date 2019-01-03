/* 
------------
Mini Linter
------------
iterate over arrays to improve the quality of a paragraph 
and gather some information about that paragraph.

This is the same type of work that word processing software does. 
Additionally, you may have heard of linting, a process by which 
text is evaluated and improved by an application. In this project, 
create a miniature version of a linter using array methods.
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// convert story string to array of words
let storyWords = story.split(' ');

// filter out unnecessary words
const betterWords = storyWords.filter(word => {
  // compare each word to those in unnecessaryWords array
  for (j=0; j < unnecessaryWords.length; j++){
    // return word if not in array
    if (word !== unnecessaryWords[j]) { return word }
  }
});

// another way to filter out unnecessary words
const betterWords2 = storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word)
})
// console.log(betterWords2);

// provide user a count of each overUsed word

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === "really") {
    reallyCount += 1
  } else if (word === "very"){
		veryCount += 1    
  } else if (word === "basically"){
    basicallyCount += 1
  }
}

// sentence count
let sentenceCount = 0;
for (word of storyWords) {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") { sentenceCount += 1
  } 
}

// print stuff:
console.log('Word count: ' + storyWords.length);
console.log("Sentence count: " + sentenceCount);
console.log("You used the word 'really' " + reallyCount + " times.");
console.log("You used the word 'very' " + veryCount + " times.");
console.log("You used the word 'basically' " + basicallyCount + " time. \n");

// print betterWords array to the console as a single string
console.log(betterWords.join(' '));
