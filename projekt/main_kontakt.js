var mymap = L.map("mapka").setView([52.253191, 20.900147], 12);

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

mymap.addLayer(lyrOSM);

// L.circleMarker([52.253191, 20.900147], {radius: 5, color:'#ff0000'}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'img/blue_MarkerB.png',
    iconSize: [20, 34],
    iconAnchor: [10, 34],

})

L.marker([52.253191, 20.900147],{icon: myIcon}).addTo(mymap);