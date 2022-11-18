ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32645").setExtent([-3032409.936616, 574213.636227, 3227315.845697, 3936150.529333]);
var wms_layers = [];


        var lyr_Topo_0 = new ol.layer.Tile({
            'title': 'Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DumkaGaya_ln_1 = new ol.format.GeoJSON();
var features_DumkaGaya_ln_1 = format_DumkaGaya_ln_1.readFeatures(json_DumkaGaya_ln_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_DumkaGaya_ln_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DumkaGaya_ln_1.addFeatures(features_DumkaGaya_ln_1);
var lyr_DumkaGaya_ln_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DumkaGaya_ln_1, 
                style: style_DumkaGaya_ln_1,
                interactive: true,
                title: '<img src="styles/legend/DumkaGaya_ln_1.png" /> Dumka-Gaya_ln'
            });

lyr_Topo_0.setVisible(true);lyr_DumkaGaya_ln_1.setVisible(true);
var layersList = [lyr_Topo_0,lyr_DumkaGaya_ln_1];
lyr_DumkaGaya_ln_1.set('fieldAliases', {'ID': 'ID', });
lyr_DumkaGaya_ln_1.set('fieldImages', {'ID': 'Range', });
lyr_DumkaGaya_ln_1.set('fieldLabels', {'ID': 'no label', });
lyr_DumkaGaya_ln_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});