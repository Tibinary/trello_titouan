let nbrCol = 1;
let idCol = 1;
let nbrCard = 1;
let colorNumber = 1;

function addCard (lieuCardNumber,inputTextNumber, bottomCol) {
    //carte
    let newCard = {
        author : "user",
        content : document.getElementById(inputTextNumber).value,
        date : Date.now()
    };
    let divdeplus = document.createElement("div");
    divdeplus.className = "portlet";
    let card = document.createElement("div");
    card.className = "text-center rounded cardCss portlet-header";
    card.id = "cardNumber"+nbrCard;

    //premier </br>
    let firstBr = document.createElement("br");
    card.appendChild(firstBr);

    //contenu
    let newContent = document.createTextNode(newCard.content);
    let baliseP = document.createElement("p");
    baliseP.id = "textNumber"+nbrCard;

    baliseP.appendChild(newContent);
    card.appendChild(baliseP);

    //div
    let div = document.createElement("div");
    card.appendChild(div);

    //Button paint
    let newPaintButton = document.createElement("button");
    let newPaintButtonContent = document.createElement("i");
    newPaintButtonContent.className = "fa fa-paint-brush";
    newPaintButton.className = "btn btn-outline-info";
    newPaintButton.appendChild(newPaintButtonContent);
    div.appendChild(newPaintButton);
    newPaintButton.addEventListener("click",function(){paintCard(card.id)},false);

    //Button replace
    let newReplaceButton = document.createElement("button");
    let newReplaceButtonContent = document.createElement("i");
    newReplaceButtonContent.className = "fas fa-edit";
    newReplaceButton.className = "btn btn-outline-warning";
    newReplaceButton.appendChild(newReplaceButtonContent);
    div.appendChild(newReplaceButton);
    newReplaceButton.addEventListener("click",function(){replaceCard(baliseP.id, bottomCol)},false);
    
    //Button suppr
    let newDelButton = document.createElement("button");
    let newDelButtonContent = document.createElement("i");
    newDelButtonContent.className = "fas fa-trash";
    newDelButton.className = "btn btn-outline-danger";
    newDelButton.appendChild(newDelButtonContent);
    div.appendChild(newDelButton);
    newDelButton.addEventListener("click",function(){delCard(card.id)},false);

    //deuxième </br>
    let secondBr = document.createElement("br");
    card.appendChild(secondBr);

    //placement
    let div32 = document.getElementById(lieuCardNumber);
    divdeplus.appendChild(card);
    div32.appendChild(divdeplus);

    nbrCard++;

    drag();

    if (newCard.content == "Faire les courses") {
        window.open("https://www.auchan.fr/magasins/drive/beziers/s-5341a2c0-f26b-d434-4b5a-06704a485ca9");
    }
    else if (newCard.content == "Générer une attestation") {
        window.open("https://media.interieur.gouv.fr/deplacement-covid-19/");
    }
    else if (newCard.content == "Acheter à manger") {
        window.open("https://www.ubereats.com/fr");
    }
    else if (newCard.content == "Dino") {
        window.open("chrome://dino/");
    }
    else if (newCard.content == "Utiliser le sopalin") {
        if (window.confirm("Avez-vous plus de 18 ans ?")) {
            window.confirm("Bon visionnage");
            window.open("https://fr.pornhub.com/");
        }
        else {
            txt = "Pas pour cette fois";
        }
        
    }
    else if (newCard.content == "Easter egg") {
        window.alert("Faire les courses => Auchan Drive \n Générer une attestation => Générateur d'attestation en ligne \n Acheter à manger => Uber eats \n Dino => Jeu du dinosaure \n Utiliser le sopalin => Site de vidéo éducatives de SVT en ligne");
    }
}

function paintCard (cardNumber) {
    if (colorNumber == 1){
        document.getElementById(cardNumber).style.borderColor = "#8EFF8B";
        colorNumber++;
    }
    else if (colorNumber == 2){
        document.getElementById(cardNumber).style.borderColor = "#E087FF";
        colorNumber++;
    }
    else if (colorNumber == 3){
        document.getElementById(cardNumber).style.borderColor = "#F5E278";
        colorNumber++;
    }
    else if (colorNumber == 4){
        document.getElementById(cardNumber).style.borderColor = "#FF8A63";
        colorNumber++;
    }
    else if (colorNumber == 5){
        document.getElementById(cardNumber).style.borderColor = "#75CFDB";
        colorNumber++;
    }
    else {
        document.getElementById(cardNumber).style.borderColor = "#000000";
        colorNumber=1;
    }
}

function replaceCard (textNumber, bottomCol) {
    let bottomColumn = document.getElementById(bottomCol);
    let divInput = document.createElement("div");
    let inputText = document.createElement("input");
    let divButton = document.createElement("div");
    let button = document.createElement("button");
    let titleButton = document.createTextNode("Modifier");

    divInput.className ="input-group mb-3";
    inputText.className ="form-control";
    inputText.id = "inputTextReplace";
    divButton.className ="input-group-append";
    button.className ="btn btn-warning";
    
    inputText.placeholder = "Entrez le nouveau nom";

    divInput.appendChild(inputText);
    divInput.appendChild(divButton);
    divButton.appendChild(button);
    button.appendChild(titleButton);
    bottomColumn.appendChild(divInput);

    button.addEventListener("click",function(){validReplaceCard(textNumber, inputText, divInput)},false);
}

function validReplaceCard(textNumber, inputTextNumber, divInput) {
    let carteToReplace = document.getElementById(textNumber);
    carteToReplace.textContent = inputTextNumber.value;
    divInput.remove();
}

function delCard (cardNumber) {
    let carteToDel = document.getElementById(cardNumber);
    carteToDel.remove();
    nbrCard--;
}

function delCol (colNumber) {
    let colToDel = document.getElementById(colNumber);
    colToDel.remove();
    nbrCol--;
}

function addCol () {
if (nbrCol <= 4){
    let newCol = document.createElement("div");
    let newUnderCol = document.createElement("div");
    let newDivNav = document.createElement("div");
    let newNav = document.createElement("nav");
    let title = document.createElement("h2");
    let br = document.createElement("br");
    let emplacementCard = document.createElement("div");
    let divInput = document.createElement("div");
    let inputText = document.createElement("input");
    let divButton = document.createElement("div");
    let button = document.createElement("button");
    let titleButton = document.createTextNode("Ajouter");
    let titre = document.createTextNode(document.getElementById("colButton").value);
    let buttonDel = document.createElement("button");
    let titleButtonDel = document.createTextNode("X");
    let row = document.getElementById("row");

    buttonDel.className ="btn btn-outline-danger";
    newCol.className ="colCss";
    newCol.id ="colNumber"+idCol;
    newUnderCol.className ="shadow-sm p-3 mb-5 bg-white rounded colone";
    newNav.className ="navbar navbar-dark bg-dark";
    emplacementCard.className ="cardSpace placementOfDragable";
    emplacementCard.id="lieuCard"+idCol;
    divInput.className ="input-group mb-3";
    divInput.id ="divInput"+idCol;
    inputText.className ="form-control";
    inputText.id ="inputText"+idCol;
    divButton.className ="input-group-append";
    button.className ="btn btn-dark";
    title.contentEditable = "true";
    
    inputText.placeholder = "Ajouter une carte";

    button.addEventListener("click",function(){addCard(emplacementCard.id,inputText.id, divInput.id)},false);
    buttonDel.addEventListener("click",function(){delCol(newCol.id)},false);

    newCol.appendChild(newUnderCol);
    newUnderCol.appendChild(newDivNav);
    newDivNav.appendChild(newNav);
    newNav.appendChild(title);
    newUnderCol.appendChild(br);
    newUnderCol.appendChild(emplacementCard);
    newUnderCol.appendChild(divInput);
    divInput.appendChild(inputText);
    divInput.appendChild(divButton);
    divButton.appendChild(button);
    title.appendChild(titre);
    row.appendChild(newCol);
    button.appendChild(titleButton);
    buttonDel.appendChild(titleButtonDel);
    newNav.appendChild(buttonDel);

    nbrCol++;
    idCol++;

    drag();
}
}

 function drag () {
    $( ".placementOfDragable" ).sortable({
      connectWith: ".placementOfDragable",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
       
 
    $( ".portlet-toggle" ).click(function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  };