var mymap = L.map("map").setView([52, 19], 10);

mymap.locate({ setView: true, maZoom: 12 });

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

(lyrOpentopo = L.tileLayer("https://tile.opentopomap.org/{z}/{x}/{y}.png")),
  (lyrGoogleHyb = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
  )),
  (lyrGoogleR = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
  )),
  mymap.addLayer(lyrOSM);

var baseMaps = {
  Openstreetmap: lyrOSM,
  "Google Road": lyrGoogleR,
  OpenTopoMap: lyrOpentopo,
  "Google Satelita": lyrGoogleHyb,
};

lyrJez = L.tileLayer.wms("http://localhost:8080/geoserver/projekt_prge/wms", {
  layers: "	projekt_prge:Jezioro_sta_ABH080_N",
  format: "image/png",
  transparent: "true",
  version: "1.1.1",
});

lyrOsno = L.tileLayer.wms("http://localhost:8080/geoserver/projekt_prge/wms", {
  layers: "	projekt_prge:Punkt_osnow_PZB060_N",
  format: "image/png",
  transparent: "true",
  version: "1.1.1",
});

lyrRzek = L.tileLayer.wms("http://localhost:8080/geoserver/projekt_prge/wms", {
  layers: "projekt_prge:Rzeka_strum_LBH140_N",
  format: "image/png",
  transparent: "true",
  version: "1.1.1",
});

var overlays = {
  Jeziora: lyrJez,
  Punkty_Osnowy: lyrOsno,
  Rzeki: lyrRzek,
};

L.control.layers(baseMaps, overlays).addTo(mymap);
