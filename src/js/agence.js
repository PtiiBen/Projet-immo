function initMap() { /* Déclaration lat et long*/
    let Lille = {
        lat : 50.633333,
        lng : 3.066667
    };


    /*Ce qu'il sera écrit dans la fenêtre du curseur*/
    let contenta = "<h5>Agence NOR'IMMO</h5> <p> Rue Nationale</p> <p>59000 Lille</p>";


    let afficheAgence = document.querySelector("#mapsa"); /* On créer un objet qui aura pour propriété un sélecteur */

    let map = new google.maps.Map ( afficheAgence, { /* On déclare une nouvelle map, on lui dit de centrer la map sur Lille */
        zoom :10,
        center : Lille
    });

    let marker = new google.maps.Marker({  /* On attribut un curseur a l'objet Lille qui se trouve dans la map */
        position : Lille,
        icon: 'src/img/logo2.jpg',
        map : map
    });


    let infosa = new google.maps.InfoWindow ({ /* On déclare infoa, content reçoit content a,2 ou 3 etc qui sont déclaré plus haut */
        content: contenta,
        position : Lille
    });


    marker.addListener("click", function () {  /* */
        infosa.open(map);
    });
}

initMap();