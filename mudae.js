import clipboard from 'clipboardy';
// import readline from 'readline';
// var rl = readline.createInterface(process.stdin, process.stdout);

let banned = `Shouyou Hinata
Sarada Uchiha
Diego Maradona
Meruem
Mirio Togata
Tobio Kageyama
Opera
Lion
Menma Uzumaki
Chachamaru
Beloukas
Hanta Sero
Mangetsu Hoozuki`

let text = `Hiling
Shouyou Hinata
Sarada Uchiha
Diego Maradona
Meruem
Mirio Togata
Tobio Kageyama
Julie Sigtuna
Barry the Chopper
Saki Kasukabe
Neko
Ken Kitano
Takane Takamine
Lisa Eostre
Kinako (SnO)
Maya Fey
Eiji Hoshimiya
Opera
Mito Jujo
Arsène
Lion
Rinne Ohara
Kon (Bleach)
Menma Uzumaki
Burnin
Hayami Kohinata
Seiun Narima
Eto
Hinako Aikawa
Taku Kamishiro
Honami Ichinose
The Detective (None)
Angel Devil
Oscar (UM)
Tomo Kunagisa
Nagisa Akatsuki
Ling Yao
Perona
Chachamaru
Kou Mabuchi
Mirajane Strauss
Sōsuke Aizen
Grandpa Gohan
King Kai
Morio Kurokawa
Kirie Kanoe
Kenji Harima
Jack Sparrow
Thorfinn
Kuroko Shirai
Afro Samurai
Souka
Isla
Yuri Nakamura
Nadeko Sengoku
Akita Neru
Luppi Antenor
Cynthia
Kei Karuizawa
Mayoi Hachikuji
Beloukas
Yuuto Sakurai
Satou (TSS)
Yukana Yame
Hanta Sero
Touko Sakurai
Sonou Mori
Stanley Snyder
Mangetsu Hoozuki
Aigis
Marie Adlai
Nagisa Natsunagi
Fry
Yuri Briar
Guild Girl
Mariya Shidou
Ene
Reiri Kamura`;

const commandBase = "$me @Tony";

let getArray = (text) => {
   return  text.split('\n');
}; 

let writeCommand = (charArray) => {
    let command = commandBase;
    let iterations = charArray.length;
    let bannedArray = getArray(banned);
    for (const char of charArray) {
        if(!bannedArray.includes(char)) {
            if(!--iterations) {
                command = command.concat(` ${char}`);
            } else {
                command = command.concat(`${char} $ `);
            }
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
        clipboard.writeSync(commands);
        console.log('Copied');
    }
}

const array = getArray(text);

let rawCommand = writeCommand(array);

let arrayOfCommands = checkLength(rawCommand);

copyCommands(arrayOfCommands);



