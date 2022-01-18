const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer) => {
  answer1 = answer
  rl.question("What's an activity you like doing?", (answer) => {
    answer2 = answer
    rl.question("What do you listen to while doing that?", (answer) => {
      answer3 = answer
      rl.question("Which meal is your favourite?", (answer) => {
        answer4 = answer
        rl.question("Which sport is your absolute favourite?", (answer) => {
          answer5 = answer
          rl.question("What is your superpower?", (answer) => {
            answer6 = answer
            console.log(`Hi, I'm ${answer1}, and I like to ${answer2} while listening to ${answer3}. My favorite meal is : ${answer4}. I love doing ${answer5}. My superpower is ${answer6}, this is why I'm amazing!`);
              rl.close();
          });
        });  
      });   
    });    
  });
});

