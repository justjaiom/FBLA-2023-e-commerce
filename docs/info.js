let map;

function initMap() {
  const the_living_room = { lat: 29.282981, lng: -94.800104 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: the_living_room,
    zoom: 13,
    mapTypeControl: false,
  
  });

  const marker = new google.maps.Marker({
    position: the_living_room,
    map,
    title: "The Living Room",
  });


  // Add controls to the map, allowing users to hide/show features.
  const styleControl = document.getElementById("style-selector-control");

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
  // Apply new JSON when the user chooses to hide/show features.
  document.getElementById("hide-poi").addEventListener("click", () => {
    map.setOptions({ styles: styles["hide"] });
  });
  document.getElementById("show-poi")
    map.setOptions({ styles: styles["default"] });
    
    const content_string =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">The Living Room</h1>' +
    '<div id="bodyContent">' +
    "<p> 2402 Avenue Q 1/2, Galveston, TX 77550 </p>";

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


const styles = {
  hide: [],
  default: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ]
  


};

window.initMap = initMap;