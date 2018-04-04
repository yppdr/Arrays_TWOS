//Ma liste de basckets
var basket= [];

//Fonction ajout d'un item dans la liste
function exo01_addToBasket(){
    //Get la value de l'input exo01_item
    var itemAjout = document.getElementById("exo01_item").value;
    //Push les elements dans la liste 
    basket.push(itemAjout);    
    // Call ma fonction majVue
    majVue();
    
}

function majVue(){
    var nodeBasket = document.getElementById("exo01_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket.length ; i++){
        //Cree la div 
        var newDiv = document.createElement('div');
        // Nom de ma class 
        newDiv.className = "item";
        //Ajoute l'itenm de la liste dans la div qui a la calss item
        newDiv.innerHTML = basket[i];
        //Exec
        nodeBasket.appendChild(newDiv);      
    }        
}