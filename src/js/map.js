function initMap() { /* Déclaration lat et long*/
    let Lille = {
        lat : 50.633333,
        lng : 3.066667
    };

    let FachesThumesnil = {
        lat : 50.6026031,
        lng : 3.0697877
    };

    let Bondues = {
        lat : 50.703462,
        lng : 3.092164
    };

    let Herlies = {
        lat : 50.577389,
        lng : 2.853746
    };

    let Lambersart = {
        lat : 50.647792,
        lng : 3.022364
    };

    let Templemars = {
        lat : 50.576233,
        lng : 3.052854
    };

    let Verlinghem = {
        lat : 50.681639,
        lng : 2.997583
    };


    /*Ce qu'il sera écrit dans la fenêtre du curseur*/
    let contenta = "<h5>Agence NOR'IMMO</h5> <p> Rue Nationale</p> <p>59000 Lille</p>";
    let content1 = "<h5>Ville de Faches-Thumesnil</h5> <p> Rue Henri Dillies</p> <p>59155 Faches-Thumesnial</p>";
    let content2 = "<h5>Ville de Bondues</h5> <p> Avenue Jean Perrin</p> <p>59910 Bondues</p>";
    let content3 = "<h5>Ville de Herlies</h5> <p> Rue du Pilly</p> <p>59134 Herlies</p>";
    let content4 = "<h5>Ville de Lambersart</h5> <p> Avenue de l'Hippodrome</p> <p>59130 Lambersart</p>";
    let content5 = "<h5>Ville de Templemars</h5> <p> Rue du Maréchal Juin</p> <p>59175 Templemars</p>";
    let content6 = "<h5>Ville de Verlinghem</h5> <p> Rue de Messines</p> <p>59237 Verlinghem</p>";

    let affichePlan = document.querySelector("#maps0"); /* On créer un objet qui aura pour propriété un sélecteur */

    let map = new google.maps.Map ( affichePlan, { /* On déclare une nouvelle map, on lui dit de centrer la map sur Lille */
        zoom :10,
        center : Lille
    });

    let marker = new google.maps.Marker({  /* On attribut un curseur a l'objet Lille qui se trouve dans la map */
        position : Lille,
        map : map
    });

    let marker1 = new google.maps.Marker({
        position : FachesThumesnil,
        map : map
    });

    let marker2 = new google.maps.Marker({
        position : Bondues,
        map : map
    });

    let marker3 = new google.maps.Marker({
        position : Herlies,
        map : map
    });

    let marker4 = new google.maps.Marker({
        position : Lambersart,
        map : map
    });

    let marker5 = new google.maps.Marker({
        position : Templemars,
        map : map
    });

    let marker6 = new google.maps.Marker({
        position : Verlinghem,
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

    let infos2 = new google.maps.InfoWindow ({
        content: content2,
        position : Bondues
    });

    let infos3 = new google.maps.InfoWindow ({
        content: content3,
        position : Herlies
    });

    let infos4 = new google.maps.InfoWindow ({
        content: content4,
        position : Lambersart
    });

    let infos5 = new google.maps.InfoWindow ({
        content: content5,
        position : Templemars
    });

    let infos6 = new google.maps.InfoWindow ({
        content: content6,
        position : Verlinghem
    });

    marker.addListener("click", function () {  /* */
        infosa.open(map);
    });

    marker1.addListener("click", function () {
        infos1.open(map);
    });

    marker2.addListener("click", function () {
        infos2.open(map);
    });

    marker3.addListener("click", function () {
        infos3.open(map);
    });

    marker4.addListener("click", function () {
        infos4.open(map);
    });

    marker5.addListener("click", function () {
        infos5.open(map);
    });

    marker6.addListener("click", function () {
        infos6.open(map);
    });

}

initMap();