var x = document.getElementById("demo");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var precision = 100; // 2 decimals
var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);  
x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude + 

  "<br><br> your nearest confirmed case is " + randomnum + " KM from your location";

  var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 14);
  console.log( position.coords.longitude)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,



accessToken: 'pk.eyJ1Ijoibm9vYjI0NTY3OCIsImEiOiJjazk0NGs5ZWcwNmtjM3FwZzF6aThzbGpiIn0.wsK-Q_3FmaLmmR2t1oKAiA'
}).addTo(mymap);


var marker  = new L.Marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
marker.bindPopup("You are here").openPopup();
var marker2 = new L.Marker([position.coords.latitude + 0.005, position.coords.longitude + 0.005],{
  color:'red'
}).addTo(mymap);
marker2.bindPopup("Nearest positive patient reported").openPopup();

mymap.on('zoomend', function() {  
  var zoomLevel = mymap.getZoom();  
      if (zoomLevel > 10) map.addLayer(highway); 
  }); 
var circle = L.circle([position.coords.latitude, position.coords.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap);






  
}





// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 8, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }


