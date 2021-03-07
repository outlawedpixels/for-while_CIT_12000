// outcome is VICTORY, DEFEAT, or DRAW
var outcome = document.body.querySelector(".outcome")

// userDmg is the amount of damage dealt on a single turn by the user, and the ending narrative regarding the user
// dragDmg is the amount of damage dealt on a single turn by the dragon, and the ending narrative regarding the dragon
var userDmg = document.body.querySelector(".userDamage")
var dragDmg = document.body.querySelector(".dragonDamage")

// userDmgTotal is the total cumulative damage by the user
// dragDmgTotal is the total cumulative damage dealt by the dragon
var userDmgTotal = document.body.querySelector(".userTotalDamage")
var dragDmgTotal = document.body.querySelector(".dragonTotalDamage")

// userOut is a special narrative regarding the user
// dragOut is a special narrative regarding the dragon
var userOut = document.body.querySelector(".userOutcome")
var dragOut = document.body.querySelector(".dragonOutcome")
 
var dragEndDamage = 0
var userEndDamage = 0

var dragHealth = 10
var userHealth = 5

window.alert("A dragon crosses your path! You must slay the beast.")

while(userHealth > 0 && dragHealth > 0)
  
  {
  
    var userHits = Number(prompt("How many times will you swing your mighty sword?"))
     
    var userAttackDmg = Math.floor(Math.random() * userHits) + 1
    var userTotalDmg = userAttackDmg * userHits
    
    var dragAttackDmg = Math.floor(Math.random() * 2) + 1 
  
   // if the players total turn damage is exactly 10, it will count as a critical hit, and kill the dragon instantly
    if (userTotalDmg === 10)
    {dragHealth = 0
     userOut.innerHTML = "You landed a critical shot, the dragon has been slayed!"
     userEndDamage = userEndDamage + 10
     dragEndDamage = dragEndDamage + dragAttackDmg}     
    
   else if (userTotalDmg > 5)
      {userDmg.HTML = "You did 1 damage!"
       dragDmg.HTML = "The dragon did " +dragAttackDmg+ " damage!"
       dragHealth = dragHealth - 1
       userHealth = userHealth - dragAttackDmg
       userEndDamage = userEndDamage + 1
       dragEndDamage = dragEndDamage + dragAttackDmg}
  
    // if the player enters nothing or 0 into the prompt
    else if (userTotalDmg === 0)
      {userOut.innerHTML = "The dragon was fairly disappointed with your non-existant attack. You died."
       dragOut.innerHTML = "The dragon just decided to eat you."
       userHealth = 0}
   
    else if (userTotalDmg === 1 || userTotalDmg === 2 || userTotalDmg === 3 || userTotalDmg === 4 || userTotalDmg === 5)
      {userDmg.innerHTML = "You did " +userTotalDmg+ " damage!"
       dragDmg.innerHTML = "The dragon did " +dragAttackDmg+ " damage!"
       dragHealth = dragHealth - userTotalDmg
       userHealth = userHealth - dragAttackDmg
       userEndDamage = userEndDamage + userTotalDmg
       dragEndDamage = dragEndDamage + dragAttackDmg}
  
   // all other outcomes are decimal numbers and letters
    else
      {userOut.innerHTML = "Congratulations! You confused yourself and died."
      userHealth = 0}
 
   
    // if somehow the the user and dragon do the same amount of damage to eachother
    if (userEndDamage === 10 && dragEndDamage === 5)
     {outcome.innerHTML = "D R A W"
      userOut.innerHTML = "What are the chances?"
     
      userDmg.innerHTML = ""
      dragDmg.innerHTML = ""
      
      userDmgTotal.innerHTML = "Your total damage was " +userEndDamage
      dragDmgTotal.innerHTML = "The dragon's total damage was " +dragEndDamage}
    
    else if (dragHealth <= 0 && userHealth <= 0)
      {outcome.innerHTML = "V I C T O R Y"
       
       userDmg.innerHTML = "You just barely survived."
       dragDmg.innerHTML = "The ghost of the dragon will probably haunt you for the rest of your days."
    
       userDmgTotal.innerHTML = "Your total damage was " +userEndDamage
       dragDmgTotal.innerHTML = "The dragon didn't get to play its last attack, which would have killed you."}
    
    else if (dragHealth <= 0)
     {outcome.innerHTML = "V I C T O R Y"
      
      userDmg.innerHTML = "You made swift work of the dragon."
      dragDmg.innerHTML = ""
      
      userDmgTotal.innerHTML = "Your total damage was " +userEndDamage
      dragDmgTotal.innerHTML = "The dragon's total damage was " +dragEndDamage} 
    
    else if (userHealth <= 0)
     {outcome.innerHTML = "D E F E A T"
     
      userDmg.innerHTML = ""
      dragDmg.innerHTML = "The dragon will now pay a visit to your village."
      
      userDmgTotal.innerHTML = "Your total damage was " +userEndDamage
      dragDmgTotal.innerHTML = "The dragon's total damage was " +dragEndDamage}
  

    
  }

// i added an end total display damage for testing purposes, but kept it as a feature
// the reason why the end result doesn't display the userDmg or dragDmg is because it doesnt make any sense to have it there
// i was trying to make it so that the HTML would update and display each time the loop ran but i couldn't figure it out and i wasting too much time

// made by Coleman Maxwell
