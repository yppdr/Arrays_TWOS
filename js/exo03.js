//Liste de basket
var basket3 = [];
//Liste des comptes
var compteItems = [];

//Fonction ajout d'un item dans la liste
function exo03_addToBasket(){
    //Get la value de l'input exo03_item
    var itemAjout3 = document.getElementById("exo03_item").value;
    //Call ma fonction isAlreadyIn
    var testItem = isAlreadyIn(basket3,itemAjout3);

    if( testItem === false){
        //ajoute les items a la iste
        basket3.push(itemAjout3);
        //ajoute la qtt
        compteItems.push(1);
        //Call ma fonction majVue3
        majVue3();
        
    }else{
        
        for(var i = 0 ; i < basket3.length ; i++){
            if(itemAjout3 === basket3[i]){
                compteItems[i]  = compteItems[i] + 1;
            }
        }
    }
    
    
    
}

function majVue3(){
    
    //selection l'id exo03_basket
    var nodeBasket = document.getElementById("exo03_basket");
    //echo dans la console 
    console.log(compteItems);
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket3.length ; i++){
        
        var newIl = document.createElement('li');

        newIl.innerHTML = basket3[i];

       document.getElementById("exo03_basket").appendChild(newIl);      
    }        
}