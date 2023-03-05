var numbers = [3, 56, 2, 48, 5]

function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

var newNumbers2 = [];

function doublePush(x) {
    newNumbers2.push(x * 2);
}

numbers.forEach(doublePush);

console.log(newNumbers2);


const newNumbers3 = numbers.filter(function (number) {
    return number < 10;
})

console.log(newNumbers3);

const newNumber4 = [];

numbers.forEach(function (number){
    if (number > 10) {
        newNumber4.push(number);
    }
});

console.log(newNumber4);

var newNumber = numbers.reduce(function(accumulator,currentNumber){
    console.log("accumulator = "+accumulator);
    console.log("currentNumber = "+currentNumber);
    return accumulator + currentNumber;
})

console.log(newNumber);


var newNum = numbers.find(function(number){
    return number > 10;
})

console.log(newNum);

var newNum = numbers.findIndex(function(number){
    return number > 10;
})

console.log(newNum);

//=====================================================================


const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
      id: 4,
      emoji: "😌",
      name: "Relieved Face",
      meaning:
        "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries."
    },
    {
      id: 5,
      emoji: "😇",
      name: "Smiling Face With Halo",
      meaning:
        "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
    },
    {
      id: 6,
      emoji: "😊",
      name: " Smiling Face With Smiling Eyes",
      meaning:
        "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^."
    }
    
  ];


const newEmojipedia = emojipedia.map(function(i){
    return i.meaning.substring(0,100);
})  

console.log(newEmojipedia);

