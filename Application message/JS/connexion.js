function connexion () {
    if (document.getElementById("inputId").value == "1234" && document.getElementById("inputPassword").value == "0000"){
        window.open("card.html");
    }
    else {
        window.alert("Mauvaise combinaison identifiant / mot de passe veuillez résseyer");
    }
}