document.addEventListener("keydown", MiniGame);

function MiniGame(event)
{
    
   if (event.keyCode==80) 
    {
        var user = prompt ("Whats your weight?");
        var planet = parseInt(prompt("Choose your planet:\n1 if it's Jupiter or 2 if it's Marth"))
        var earthGrav = 9.8, marthGrav = 3.7, jupGrav = 24.8;
        var finalWeight = parseFloat(user);
        var finalWeightMarth, finalWeightJup;   
    }

    if(planet == 1) 
    {
    finalWeightJup = finalWeight * jupGrav / earthGrav;
        document.write("If your weight in the Earth is " + finalWeight + " your weight in Jupiter would be  "+ finalWeightJup.toFixed(2))
        // console.log("If your weight in the Earth is  " + finalWeight + " your weight in Jupiter would be "+ finalWeightJup.toFixed(2))    
    }    
    else if(planet == 2)    
    {
    finalWeightMarth = finalWeight * marthGrav / earthGrav; 
        document.write("If your weight in the Earth is  " + finalWeight + " your weight in Marth would be "+ finalWeightMarth.toFixed(2))
    }
    else
    {
    document.write("I see... it's your first time... don't worry there is place for all. PRESS F5 ;)")
    }
    

} 

    
