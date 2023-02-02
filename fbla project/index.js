let map;

function initMap() {
  const the_living_room = { lat: 30.266473, lng: -97.744242 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: the_living_room,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: the_living_room,
    map,
    title: "The Living Room",
  });

  const content_string = 'The Living Room'
  const infowindow = new google.maps.InfoWindow({
    content: content_string,
  });
 
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}


window.initMap = initMap;