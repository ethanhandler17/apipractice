const fetch = require('node-fetch');
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})

const url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';

readline.question('what is your favorite sports team? ', teams=>{
    fetch(url+ teams)
    .then(response=> response.json())
    .then(data=>{
        if(data.teams == null){
            console.log('no results');
        }
        else{
            for(var f of data.teams){
                console.log('SOCIAL MEDIA');
                console.log(f.strFacebook);
                console.log(f.strTwitter);
                console.log(f.strInstagram);
                console.log('description');
                console.log(f.strDescriptionEN);
            }
        }
    
    
    });
    readline.close();   
}); 