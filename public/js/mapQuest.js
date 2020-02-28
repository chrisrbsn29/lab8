function initMap() {
	L.mapquest.key = '8Ebj16AvK2R51XKEMtvRJixnbvpMWaSO';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.878848, -117.235869],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	L.marker([32.878848, -117.235869]).addTo(map);
}