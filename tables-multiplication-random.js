var trouve, tableNumber, multiplicateurNumber, message;
var maxMultiplicateurNumber = 10;
var minMultiplicateurNumber = 1;
var maxTableNumber = 10;
var minTableNumber = 1;
var tries = 0;
var won = false;
var playing = true;

while(playing){
  
  // Multiplication aléatoire lors de la première itération
  if (tries ==0){
    tableNumber = minTableNumber + Math.floor(Math.random() * (maxTableNumber - minTableNumber));
    multiplicateurNumber = minMultiplicateurNumber + Math.floor(Math.random() * (maxMultiplicateurNumber - minMultiplicateurNumber));
  }
  
  //Saisie de l'utilisateur
  trouve = prompt(`Combien font ${tableNumber} fois ${multiplicateurNumber} ?`);
  trouve = parseInt(trouve);
  
  console.log(trouve);
  //playing = false;
  
  //Test de la validité de la saisie

  if(trouve !== tableNumber * multiplicateurNumber){
    tries++;
    
    //Test du choix du joueur SAUVEGARDE CODE POUR DECLINAISON CHOIX TABLE
    if(trouve === tableNumber * multiplicateurNumber){
      won = true;
      message = `YESSSS!! en ${tries} coups`;
    } else if(trouve !== tableNumber * multiplicateurNumber){
      message = "Essaie encore!";
    }
    
    alert(message);
  } else {
   /* playing = confirm("Saisie incorrecte : le chiffre doit être entre 0 et 100! Voulez-vous continuer à jouer ?");
  }
  
  if(won){
    playing = confirm("Voulez-vous rejouer?");*/
    won = false;
    tries = 0;
  }
  
  
}