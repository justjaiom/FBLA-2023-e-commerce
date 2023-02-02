let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.5083, lng: -97.6789 },
    zoom: 8,
  });
}

window.initMap = initMap;