function initMap() { /* Déclaration lat et long*/
    let Lille = {
        lat : 50.633333,
        lng : 3.066667
    };

    let FachesThumesnil = {
        lat : 50.6026031,
        lng : 3.0697877
    };


    /*Ce qu'il sera écrit dans la fenêtre du curseur*/
    let contenta = "<h5>Agence NOR'IMMO</h5> <p> Rue Nationale</p> <p>59000 Lille</p>";
    let content1 = "<h5>Ville de Faches-Thumesnil</h5> <p> Rue Henri Dillies</p> <p>59155 Faches-Thumesnial</p>";

    let afficheProduct1 = document.querySelector("#maps1"); /* On créer un objet qui aura pour propriété un sélecteur */

    let map = new google.maps.Map ( afficheProduct1, { /* On déclare une nouvelle map, on lui dit de centrer la map sur Lille */
        zoom :10,
        center : Lille
    });

    let marker = new google.maps.Marker({  /* On attribut un curseur a l'objet Lille qui se trouve dans la map */
        position : Lille,
        icon: '../src/img/logo2.jpg',
        map : map
    });

    let marker1 = new google.maps.Marker({
        position : FachesThumesnil,
        map : map
    });

    let infosa = new google.maps.InfoWindow ({ /* On déclare infoa, content reçoit content a,2 ou 3 etc qui sont déclaré plus haut */
        content: contenta,
        position : Lille
    });

    let infos1 = new google.maps.InfoWindow ({
        content: content1,
        position : FachesThumesnil
    });

    marker.addListener("click", function () {  /* */
        infosa.open(map);
    });

    marker1.addListener("click", function () {
        infos1.open(map);
    });

// Itinéraire Agence - Offre
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map });
    let request = {
        origin: Lille,
        destination: FachesThumesnil,
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