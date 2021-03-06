let map = L.map('map').setView([19.00981002976871, -98.5861632210551], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})

var options = {
    maxZoom: 16,
    tolerance: 3,
    debug: 0,
    style: {
      fillColor: "red",
      color: "red",
    },
  };
  var vtLayer = L.geoJson.vt(data, options).addTo(map);