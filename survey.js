const readline = require("readline");

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "While sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!",
  7: "What is your favourite book?",
  8: "What is your favourite movie?",
  9: "What is your favourite animal?",
  10: "What is the meaning of life, the universe and everything?",
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let question = 0; //key of questions object
let delay = 200; //delay in milliseconds

const survey = function () {
  if (question < 11) {
    rl.question(`${questions[question]}\n`, (answer) => {
      answers[question] = answer; //add answer to answers object
      question++; //increment question to the next question in the list
      console.log(); //add a new line
      survey(); //call survey again
    });
  } else {
    rl.close();
    console.log(
      `Thank you for completing this user survey! Here is your new user profile: \n`
    );
    setTimeout(() => {
      for (const key in answers) {
        for (const key2 in questions) {
          if (key === key2) {
            console.log(`${questions[key2]}: ${answers[key]}`);
            setTimeout(() => {}, delay);
            delay += 200;
          }
        }
      }
    });
  }
};

survey();
