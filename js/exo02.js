//Ma liste de basckets
var basket2= [];

function exo02_addToBasket(){    
    //Get la value de l'input exo02_item
    var itemAjout2 = document.getElementById("exo02_item").value;
    //Call ma fonction isAlreadyIn
    var testItem = isAlreadyIn(basket2,itemAjout2);

    if( testItem === false){
        //Ajout d'items dans ma list
        basket2.push(itemAjout2);
        //Call ma fonction majvue2
        majVue2();
    }else{
        alert("Cette valeur a déjà été entré");
    }
}

function isAlreadyIn(panier,element){
    var flag = false;
    
    for(var i = 0 ; i < panier.length ; i++){
        if(panier[i] === element){
            flag = true;
        }
    }
    return flag;
}

function majVue2(){
    var nodeBasket = document.getElementById("exo02_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    for(var i = 0 ; i < basket2.length ; i++){   
        //Cree les li
        var newIl = document.createElement('li');
        //ajoute dans le li la liste
        newIl.innerHTML = basket2[i];
        //envoie tout ca dans l'ul exo02_basket
       document.getElementById("exo02_basket").appendChild(newIl);      
    }        
}