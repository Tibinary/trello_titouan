let nbrCol = 2;
let nbrCard = 2;
let colorNumber = 1;

function addCard (lieuCardNumber,inputTextNumber) {
    //carte
    let newCard = {
        author : "user",
        content : document.getElementById(inputTextNumber).value,
        date : Date.now()
    };
    let card = document.createElement("div");
    card.className = "text-center rounded cardCss";
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
    newReplaceButton.addEventListener("click",function(){replaceCard(baliseP.id)},false);
    
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
    div32.appendChild(card);

    nbrCard++;
}

function paintCard (cardNumber) {
    if (colorNumber == 1){
        document.getElementById(cardNumber).style.borderColor = "#0000FF";
        colorNumber++;
    }
    else if (colorNumber == 2){
        document.getElementById(cardNumber).style.borderColor = "#FF0000";
        colorNumber++;
    }
    else {
        document.getElementById(cardNumber).style.borderColor = "#343a40";
        colorNumber=1;
    }
}

function replaceCard (textNumber) {
    let carteToReplace = document.getElementById(textNumber);
    let divInput = document.createElement("div");
    let inputText = document.createElement("input");
    let divButton = document.createElement("div");
    let button = document.createElement("button");
    let titleButton = document.createTextNode("Ajouter");

    divInput.className ="input-group mb-3";
    inputText.className ="form-control";
    inputText.id ="inputTextReplace";
    divButton.className ="input-group-append";
    button.className ="btn btn-dark";
    
    inputText.placeholder = "Entrez le nouveau nom";

    divInput.appendChild(inputText);
    divInput.appendChild(divButton);
    divButton.appendChild(button);
    button.appendChild(titleButton);
    carteToReplace.appendChild(divInput);

    button.addEventListener("click",function(){validReplaceCard(textNumber,inputText.id)},false);
}

function validReplaceCard(textNumber, inputTextNumber) {
    let carteToReplace = document.getElementById(textNumber);
    carteToReplace.textContent = document.getElementById(inputTextNumber).value;
}

function delCard (cardNumber) {
    let carteToDel = document.getElementById(cardNumber);
    carteToDel.remove();
    nbrCard--;
}

function delCol (colNumber) {
    let colToDel = document.getElementById(colNumber);
    colToDel.remove();
    nbrCard--;
}

function addCol () {
    let newCol = document.createElement("div");
    let newUnderCol = document.createElement("div");
    let newDivNav = document.createElement("div");
    let newNav = document.createElement("nav");
    let title = document.createElement("h2");
    let br = document.createElement("br");
    let newDiv32 = document.createElement("div");
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
    newCol.id ="colNumber"+nbrCol;
    newUnderCol.className ="shadow-sm p-3 mb-5 bg-white rounded colone";
    newNav.className ="navbar navbar-dark bg-dark";
    newDiv32.className ="cardSpace";
    newDiv32.id="lieuCard"+nbrCol;
    divInput.className ="input-group mb-3";
    inputText.className ="form-control";
    inputText.id ="inputText"+nbrCol;
    divButton.className ="input-group-append";
    button.className ="btn btn-dark";
    
    inputText.placeholder = "Ajouter une carte";

    button.addEventListener("click",function(){addCard(newDiv32.id,inputText.id)},false);
    buttonDel.addEventListener("click",function(){delCol(newCol.id)},false);

    newCol.appendChild(newUnderCol);
    newUnderCol.appendChild(newDivNav);
    newDivNav.appendChild(newNav);
    newNav.appendChild(title);
    newUnderCol.appendChild(br);
    newUnderCol.appendChild(newDiv32);
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
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  // draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" ondrop="drop(event)"