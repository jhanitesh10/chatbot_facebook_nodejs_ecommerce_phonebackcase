

let  greetingMessage = ({}) => {
   var rand = Math.floor((Math.random() * 7) + 1);
   switch (rand) {
       case 1 :
           return "Hi, great to see you using me!!! ";
       case 2 :
           return "Hello there  :)";
       case 3:
           return "What can i do for you ?";
       case 4:
           return "What's up? :)";
       case 5:
           return "Need help? just say 'Help me'";
       case 6:
           return "Ask me something or say 'help me'";
       case 7:
           return "let's buy the phonecase with me 😎";
   }
}

module.exports = {
  greetingMessage : greetingMessage
}
