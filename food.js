const fetch = require('node-fetch');
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})



const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

readline.question('what food do you require? ', food=>{
    fetch(url+ food)
    .then(response=> response.json())
    .then(data=>{
      if(data.meals == null){
          console.log('no results');
      }
      else{
         for(var meal of data.meals){
             console.log('*** NEW FOOD');
            console.log(meal.strMeal);
            console.log('instructions');
            console.log(meal.strInstructions);
            console.log('** FOOD INGREDIENTS');
            for(var d = 1; d < 16; d++){
                var ingredient = 'strIngredient' + d;
                var measure = 'strMeasure' + d;
                if(meal[ingredient] != null && meal[ingredient] != '' ){
                    console.log(meal[measure] + ' of ' + meal[ingredient]);
                    
                }
                
            }
            console.log('youtube: ' + meal['strYoutube']);
        }
        
    }
        
        
    });
    readline.close();   
});

