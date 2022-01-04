
// ------------- ORIGINAL ------------- //
if (recipe == 'SPANISH') {
   fudge = SPANISH_FUDGE;
   amt = base * SPANISH_FUDGE;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
   fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
   amt = base * fudge;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
   if (recipe == 'FRENCH') {
       chocolate = 7;
   }
} else {
   fudge = 1;
   amt = base;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
}


// If we canno't create any functions nor variables we can separate FRENCH and ENGLISH into different 'else if'
// Using ternary operator adds more mess to the code like this.
// Also we can create another fucntion for calculating sugar, since we repeat ourselves sugar = getSugar(amt)
// function getSugar(amt){return 2 * bottom(amt) + top(amt) * 1.17}

// ------------- VERSION 1 ------------- //
if (recipe == 'SPANISH') {
    fudge = SPANISH_FUDGE;
    amt = base * SPANISH_FUDGE;
    sugar = 2 * bottom(amt) + top(amt) * 1.17; 
} else if (recipe == 'FRENCH') {
   fudge = FRENCH_FUDGE
   amt = base * fudge;
   sugar = 2 * bottom(amt) + top(amt) * 1.17; 
   chocolate = 7;
} else if (recipe == 'ENGLISH'){
   fudge = ENGLISH_FUDGE;
   amt = base * fudge;
   sugar = 2 * bottom(amt) + top(amt) * 1.17; 
} else {
   fudge = 1;
   amt = base;
   sugar = 2 * bottom(amt) + top(amt) * 1.17; 
}


//For better redability and scalibility we can turn this into a switch case
//this will be easy to scale for future recipies and less confusing than
//bunch of chained on if else statements. Also it's faster with bigger data sets

// ------------- VERSION 2 ------------- //
switch (recipe) {
    case 'SPANISH':
        fudge = SPANISH_FUDGE;
        amt = base * SPANISH_FUDGE;
        sugar = 2 * bottom(amt) + top(amt) * 1.17;
    break;
    case 'FRENCH': 
        fudge = FRENCH_FUDGE;
        amt = base * fudge;
        sugar = 2 * bottom(amt) + top(amt) * 1.17;
        chocolate = 7;
    break;
    case 'ENGLISH': 
        fudge = ENGLISH_FUDGE;
        amt = base * fudge;
        sugar = 2 * bottom(amt) + top(amt) * 1.17;
    break;

    default: 
       fudge = 1;
       amt = base;
       sugar = 2 * bottom(amt) + top(amt) * 1.17;
    
}