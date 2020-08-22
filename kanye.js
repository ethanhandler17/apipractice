const fetch = require('node-fetch');
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})



const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

readline.question('what drink do you require? ', alcohol=>{
    fetch(url+ alcohol)
    .then(response=> response.json())
    .then(data=>{
        //console.log(data);
         //var drinks = JSON.parse(data);
         for(var drink of data.drinks){
             console.log('*** NEW DRINK');
            console.log(drink.strDrink);
            console.log('** DRINK INGREDIENTS');
            for(var d = 1; d < 16; d++){
                var ingredient = 'strIngredient' + d;
                var measure = 'strMeasure' + d;
                if(drink[ingredient] != null){
                    console.log(drink[measure] + ' of ' + drink[ingredient]);
                    
                }
                
            }
        }
        
        //console.log(data.drinks);
    });
    readline.close();
});

