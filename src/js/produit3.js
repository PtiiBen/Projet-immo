function initMap() { /* Déclaration lat et long*/
    let Lille = {
        lat : 50.633333,
        lng : 3.066667
    };

    let Herlies = {
        lat : 50.577389,
        lng : 2.853746
    };


    /*Ce qu'il sera écrit dans la fenêtre du curseur*/
    let contenta = "<h5>Agence NOR'IMMO</h5> <p> Rue Nationale</p> <p>59000 Lille</p>";
    let content3 = "<h5>Ville de Herlies</h5> <p> Rue du Pilly</p> <p>59134 Herlies</p>";

    let afficheProduct3 = document.querySelector("#maps3"); /* On créer un objet qui aura pour propriété un sélecteur */

    let map = new google.maps.Map ( afficheProduct3, { /* On déclare une nouvelle map, on lui dit de centrer la map sur Lille */
        zoom :10,
        center : Lille
    });

    let marker = new google.maps.Marker({  /* On attribut un curseur a l'objet Lille qui se trouve dans la map */
        position : Lille,
        icon: '../src/img/logo2.jpg',
        map : map
    });

    let marker3 = new google.maps.Marker({
        position : Herlies,
        map : map
    });


    let infosa = new google.maps.InfoWindow ({ /* On déclare infoa, content reçoit content a,2 ou 3 etc qui sont déclaré plus haut */
        content: contenta,
        position : Lille
    });

    let infos3 = new google.maps.InfoWindow ({
        content: content3,
        position : Herlies
    });

    marker.addListener("click", function () {  /* */
        infosa.open(map);
    });


    marker3.addListener("click", function () {
        infos3.open(map);
    });

// Itinéraire Agence - Offre
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map });
    let request = {
        origin: Lille,
        destination: Herlies,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({ 'suppressMarkers': true });
        }
    });
}

initMap();