import clipboard from 'clipboardy';
// import readline from 'readline';
// var rl = readline.createInterface(process.stdin, process.stdout);

let text = `Protagonist (rd)
Old Man
Takahata Shun
Yuki Amane
Sheska
Re=L Rayford
Karen Kurutsu
Hibiki Sakura
Pepsiman
Bugs Bunny
Norimichi Shimada
Portgas D. Ace
Kigurumi Haroukitei
Marx Francois
Noriko Sonozaki`;

const commandBase = "$me @Tony";

let getArray = (text) => {
   return  text.split('\n');
}; 

let writeCommand = (charArray) => {
    let command = commandBase;
    let iterations = charArray.length;
    for (const char of charArray) {
        if(!--iterations) {
            command = command.concat(` ${char}`);
        } else {
            command = command.concat(`${char} $ `);
        }
    };
    
    // clipboard.writeSync(command);
    // console.log(command);
    // console.log(`Length: ${command.length}`);
    return command;
};

let checkLength = (command) => {
    const maxCharAllowed = 1900;
    if ( command.length > maxCharAllowed ) {
        const totalCommands = Math.ceil(command.length / maxCharAllowed);
        let arrayOfCommands = [];
     
        let lastPos = 0;
        for(let i = 1; i <= totalCommands; i++) {
            let newCommand = commandBase;
            
            
            let shortenedCommand = command.slice(lastPos, maxCharAllowed*i);
            
            let lastIndexOf$ = shortenedCommand.lastIndexOf('$');
            lastPos = lastIndexOf$;
      
            newCommand = newCommand.concat(shortenedCommand);
          
            arrayOfCommands.push(newCommand);
        };
        return arrayOfCommands;
    } else {
        return command 
    }
}

let copyCommands = (commands) => {
    if(typeof commands === 'object') {
        // for(let i = 0; i <= commands.length; i++) {
            
        // }
        console.log(commands);
    } else {
        console.log('here')
        clipboard.writeSync(commands);
    }
}

const array = getArray(text);

let rawCommand = writeCommand(array);

let arrayOfCommands = checkLength(rawCommand);

copyCommands(arrayOfCommands);



