const fetch = require('node-fetch');
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})

const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=';

readline.question('who is your favorite player ', player=>{
    fetch(url+ player)
    .then(response=> response.json())
    .then(data=>{
        if(data.contracts == null){
            console.log('no results');
        }
        else{

            for(var f of data.contracts){
                console.log('player name ' + f.strPlayer);
                console.log('player team ' + f.strTeam);
                console.log('player wage ' + f.strWage);
            }
        }
    
    
    });
    readline.close();   
}); 