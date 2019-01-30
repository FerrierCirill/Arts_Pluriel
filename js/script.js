

function saveDonnee($user){
    //à coder
}

function afficheUser(id = -1){ //affiche sur le pannel d'administrateur tous les utilisateurs
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheUsers.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function modifDonnee($admin){
    //à coder
}

function afficheLieu(id = -1){ //affiche sur le pannel d'administrateur tous les lieux
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheAllLieux.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function SearchUser(){ //recherche d'un utilisateur en particulier
    var idSelected = document.getElementById('pseudo').value;
    afficheUser(idSelected);
}

function SearchLieu(){ //recherche d'un lieu en particulier
    var idSelected = document.getElementById('lieux').value;
    afficheLieu(idSelected);
}

function deleteActivite($user, $this){ //suppression d'une activité de l'utilisateur

}

function addActivite(){ //ajouter une activité à l'utilisateur

}

function SearchLieuByAct(id = -1){ //affiche sur le pannel d'administrateur tous les lieux
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheAct.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}


function SearchUserByAct(id = -1){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheUserAct.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function SeachUserByDist(id){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheUserDist.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function afficheForum(id = -1){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheForum.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function SearchForum(){
    var idSelected = document.getElementById('fTitre').value;
    afficheForum(idSelected);
}

function SearchForumByAct(id = -1){
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/ajax/afficheForumAct.php?id="+ id);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('Liste').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
}

function message(idU, idUtilisateur_a_use) {
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "message.php?id=" + idU + "&idUser="+  idUtilisateur_a_use);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('ListMessage').innerHTML = xhr.responseText;
                document.getElementById("contenuTxt").focus();
            }
        }
        xhr.send();

}


afficheForum();
