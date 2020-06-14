var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoibm9vYjI0NTY3OCIsImEiOiJjazk0NGs5ZWcwNmtjM3FwZzF6aThzbGpiIn0.wsK-Q_3FmaLmmR2t1oKAiA'
}).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap);


// var current_position, current_accuracy;

// function onLocationFound(e) {
//   // if position defined, then remove the existing position marker and accuracy circle from the map
//   if (current_position) {
//       map.removeLayer(current_position);
//       map.removeLayer(current_accuracy);
//   }

//   var radius = e.accuracy / 2;

//   current_position = L.marker(e.latlng).addTo(map)
//     .bindPopup("You are within " + radius + " meters from this point").openPopup();

// //   current_accuracy = L.circle(e.latlng, radius).addTo(map);
// }

// function onLocationError(e) {
//   alert(e.message);
// }

// map.on('locationfound', onLocationFound);
// map.on('locationerror', onLocationError);

// // wrap map.locate in a function    
// function locate() {
//   map.locate({setView: true, maxZoom: 12});
// }

// locate();

// // call locate every 3 seconds... forever
// // setInterval(locate, 3000);

