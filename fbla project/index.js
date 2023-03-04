function initMap() {
  // Create the map.
  const the_living_room = { lat: 29.282981, lng: -94.800104 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: the_living_room,
    zoom: 17,
    mapId: "8d193001f940fde3",

  });

  //create marker
  const marker = new google.maps.Marker({
    position: the_living_room,
    map,
    title: "The Living Room",
  });

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
  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };

  // Perform a nearby search.
  service.nearbySearch(
    { location: the_living_room, radius: 2500, type: "store" },
    (results, status, pagination) => {
      if (status !== "OK" || !results) return;

      addPlaces(results, map);
      moreButton.disabled = !pagination || !pagination.hasNextPage;
      if (pagination && pagination.hasNextPage) {
        getNextPage = () => {
          // Note: nextPage will call the same handler function as the initial call
          pagination.nextPage();
        };
      }
    }
  );
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

<<<<<<< HEAD
  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });

      const li = document.createElement("li");

      li.textContent = place.name;
      placesList.appendChild(li);
      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}

window.initMap = initMap;
=======
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(function(){
    popup.style.opacity = 1;
  }, 10);
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.opacity = 0;
  setTimeout(function(){
    popup.style.display = "none";
  }, 2000);
}
>>>>>>> c26a40376378937cd7de5826bb5383bfe5906fca
