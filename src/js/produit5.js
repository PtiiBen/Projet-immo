function initMap() { /* Déclaration lat et long*/
    let Lille = {
        lat : 50.633333,
        lng : 3.066667
    };

    let Templemars = {
        lat : 50.576233,
        lng : 3.052854
    };


    /*Ce qu'il sera écrit dans la fenêtre du curseur*/
    let contenta = "<h5>Agence NOR'IMMO</h5> <p> Rue Nationale</p> <p>59000 Lille</p>";
    let content5 = "<h5>Ville de Templemars</h5> <p> Rue du Maréchal Juin</p> <p>59175 Templemars</p>";

    let afficheProduct5 = document.querySelector("#maps5"); /* On créer un objet qui aura pour propriété un sélecteur */

    let map = new google.maps.Map ( afficheProduct5, { /* On déclare une nouvelle map, on lui dit de centrer la map sur Lille */
        zoom :10,
        center : Lille
    });

    let marker = new google.maps.Marker({  /* On attribut un curseur a l'objet Lille qui se trouve dans la map */
        position : Lille,
        map : map
    });

    let marker5 = new google.maps.Marker({
        position : Templemars,
        map : map
    });


    let infosa = new google.maps.InfoWindow ({ /* On déclare infoa, content reçoit content a,2 ou 3 etc qui sont déclaré plus haut */
        content: contenta,
        position : Lille
    });

    let infos5 = new google.maps.InfoWindow ({
        content: content5,
        position : Templemars
    });

    marker.addListener("click", function () {  /* */
        infosa.open(map);
    });

    marker5.addListener("click", function () {
        infos5.open(map);
    });
// Itinéraire Agence - Offre
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map });
    let request = {
        origin: Lille,
        destination: Templemars,
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