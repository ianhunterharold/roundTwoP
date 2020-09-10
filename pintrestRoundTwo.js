"use strict";

/*
You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.

You settle on a route cipher, which is a type of transposition cipher. Given a message and integers r and c, to compute the route encryption of the message:

Write out the message row-wise in a grid with r rows and c columns
then read the message column-wise.

You are guaranteed that r * c == len(message).

Your task is to write a function that, given a message, r, and c, returns the route encryption of the message.

Example:

message = "One does not simply walk into Mordor", r = 6, c = 6

// [
// [O n e   d o]
// [e s   n o t]
// [  s i m p l]
// [y   w a l k]
// [  i n t o  ]
// [M o r d o r ]
// ]

grid that build inbetween row wise and then you return the message below 



-> "Oe y Mnss ioe iwnr nmatddoploootlk r"

Other examples:

message = "1.21 gigawatts!", r = 5, c = 3
1 . 2
1   g
i g a
w a t
t s !

-> "11iwt. gas2gat!"

message = "1.21 gigawatts!", r = 3, c = 5 -> "1ga.it2gt1as w!"

Complexity analysis:

n: the length of the message

*/

const message1 = "One does not simply walk into Mordor";
const r1 = 6;
const c1 = 6;

const message2 = "1.21 gigawatts!";
const r2 = 5;
const c2 = 3;
const r3 = 3;
const c3 = 5;

// solve as a dev 

// build a 2-D array. // fill out the column 

// iterate through your string and place each element at an index into that arrray 

// build the final string --> iterate over this structure top to bottom left to right 
//return that incripted string 

//edge cases --> no blank strings, no edge cases, character of some sort 

function obfuscateTheMessage(message, row, column){
  let outerArray = [];
  // [  [],[],[]  ]
  for (let i=0; i< row; i++){
    let add = outerArray.push([])
  }
  
  var lengthOfRow = 0; 
  var position = 0;  //index for the row 
  for (let j=0; j <message.length;j++){
      
      let addCharToSubArray = outerArray[position].push(message[j]);
      lengthOfRow++  
    
      if (lengthOfRow === column){
        position++
        lengthOfRow = 0;
      }
    }
  
  var finalSt = '';
  
  const iterateOverColumn = (column, outerArray, col) => {
    for (let k=0; k<column;k++){

      finalSt = finalSt.concat( outerArray[k][col] ); 
    }
  }

  for (let col=0; col<row; col++){
    iterateOverColumn(column, outerArray, col);
  }

  return finalSt;
};





console.log(obfuscateTheMessage(message1,r1,c1))