

let errorMessage = () => {
   var rand = Math.floor((Math.random() * 8) + 1);
   switch (rand) {
       case 1 :
           return "Sorry,  can't get you. say that again";
       case 2 :
           return "Can you rephrase that?";
       case 3:
           return "Ima not as smart as human. help me with understanding you.";
       case 4:
           return "I don't understand. Say that again.";
       case 5:
           return "Ask me again ?";
       case 6:
           return "What?";
       case 7:
           return "say 'help me' to see what i can do.";
       case 8:
           return "Hmm didn't catch that😕 \nSay 'help me' to see what i can do for you :)";
   }
}

module.exports  = {
  errorMessage : errorMessage
}
