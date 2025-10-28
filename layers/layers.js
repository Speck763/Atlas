var wms_layers = [];
var format_DepartamentosdeMendoza_0 = new ol.format.GeoJSON();
var features_DepartamentosdeMendoza_0 = format_DepartamentosdeMendoza_0.readFeatures(json_DepartamentosdeMendoza_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeMendoza_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosdeMendoza_0.addFeatures(features_DepartamentosdeMendoza_0);var lyr_DepartamentosdeMendoza_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdeMendoza_0, 
                style: style_DepartamentosdeMendoza_0,
                title: '<img src="styles/legend/DepartamentosdeMendoza_0.png" /> Departamentos de Mendoza'
            });var format_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1 = new ol.format.GeoJSON();
var features_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1 = format_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.readFeatures(json_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.addFeatures(features_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1);var lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1, 
                style: style_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1,
                title: 'Energía por combustión directa de aserrín-viruta-estocones-costaneros'
            });var format_Energaporgasificacindeaserrnvirutaestoconescostaneros_2 = new ol.format.GeoJSON();
var features_Energaporgasificacindeaserrnvirutaestoconescostaneros_2 = format_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.readFeatures(json_Energaporgasificacindeaserrnvirutaestoconescostaneros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energaporgasificacindeaserrnvirutaestoconescostaneros_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.addFeatures(features_Energaporgasificacindeaserrnvirutaestoconescostaneros_2);var lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energaporgasificacindeaserrnvirutaestoconescostaneros_2, 
                style: style_Energaporgasificacindeaserrnvirutaestoconescostaneros_2,
                title: 'Energía por gasificación de aserrín-viruta-estocones-costaneros'
            });var format_Aserrnvirutaestoconescostaneros_3 = new ol.format.GeoJSON();
var features_Aserrnvirutaestoconescostaneros_3 = format_Aserrnvirutaestoconescostaneros_3.readFeatures(json_Aserrnvirutaestoconescostaneros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aserrnvirutaestoconescostaneros_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Aserrnvirutaestoconescostaneros_3.addFeatures(features_Aserrnvirutaestoconescostaneros_3);var lyr_Aserrnvirutaestoconescostaneros_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aserrnvirutaestoconescostaneros_3, 
                style: style_Aserrnvirutaestoconescostaneros_3,
                title: 'Aserrín-viruta-estocones-costaneros'
            });var format_EnergadePlantacionesforestales_4 = new ol.format.GeoJSON();
var features_EnergadePlantacionesforestales_4 = format_EnergadePlantacionesforestales_4.readFeatures(json_EnergadePlantacionesforestales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergadePlantacionesforestales_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergadePlantacionesforestales_4.addFeatures(features_EnergadePlantacionesforestales_4);var lyr_EnergadePlantacionesforestales_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergadePlantacionesforestales_4, 
                style: style_EnergadePlantacionesforestales_4,
                title: 'Energía de Plantaciones forestales'
            });var format_BiomasadePlantacionesforestales_5 = new ol.format.GeoJSON();
var features_BiomasadePlantacionesforestales_5 = format_BiomasadePlantacionesforestales_5.readFeatures(json_BiomasadePlantacionesforestales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasadePlantacionesforestales_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasadePlantacionesforestales_5.addFeatures(features_BiomasadePlantacionesforestales_5);var lyr_BiomasadePlantacionesforestales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasadePlantacionesforestales_5, 
                style: style_BiomasadePlantacionesforestales_5,
                title: 'Biomasa de Plantaciones forestales'
            });var format_Energadebiomasaderestosdealimentospapelycartn_6 = new ol.format.GeoJSON();
var features_Energadebiomasaderestosdealimentospapelycartn_6 = format_Energadebiomasaderestosdealimentospapelycartn_6.readFeatures(json_Energadebiomasaderestosdealimentospapelycartn_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energadebiomasaderestosdealimentospapelycartn_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energadebiomasaderestosdealimentospapelycartn_6.addFeatures(features_Energadebiomasaderestosdealimentospapelycartn_6);var lyr_Energadebiomasaderestosdealimentospapelycartn_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energadebiomasaderestosdealimentospapelycartn_6, 
                style: style_Energadebiomasaderestosdealimentospapelycartn_6,
                title: 'Energía de biomasa de restos de alimentos, papel y cartón'
            });var format_BiomasadeRestosdealimentospapelycartn_7 = new ol.format.GeoJSON();
var features_BiomasadeRestosdealimentospapelycartn_7 = format_BiomasadeRestosdealimentospapelycartn_7.readFeatures(json_BiomasadeRestosdealimentospapelycartn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasadeRestosdealimentospapelycartn_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasadeRestosdealimentospapelycartn_7.addFeatures(features_BiomasadeRestosdealimentospapelycartn_7);var lyr_BiomasadeRestosdealimentospapelycartn_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasadeRestosdealimentospapelycartn_7, 
                style: style_BiomasadeRestosdealimentospapelycartn_7,
                title: 'Biomasa de Restos de alimentos, papel y cartón'
            });var format_Energiadeguanodeplantasdefaenaavcola_8 = new ol.format.GeoJSON();
var features_Energiadeguanodeplantasdefaenaavcola_8 = format_Energiadeguanodeplantasdefaenaavcola_8.readFeatures(json_Energiadeguanodeplantasdefaenaavcola_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energiadeguanodeplantasdefaenaavcola_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energiadeguanodeplantasdefaenaavcola_8.addFeatures(features_Energiadeguanodeplantasdefaenaavcola_8);var lyr_Energiadeguanodeplantasdefaenaavcola_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energiadeguanodeplantasdefaenaavcola_8, 
                style: style_Energiadeguanodeplantasdefaenaavcola_8,
                title: 'Energia de guano de plantas de faena avícola'
            });var format_Energiadebiomasahmedadeplantasdefaenaavcola_9 = new ol.format.GeoJSON();
var features_Energiadebiomasahmedadeplantasdefaenaavcola_9 = format_Energiadebiomasahmedadeplantasdefaenaavcola_9.readFeatures(json_Energiadebiomasahmedadeplantasdefaenaavcola_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energiadebiomasahmedadeplantasdefaenaavcola_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energiadebiomasahmedadeplantasdefaenaavcola_9.addFeatures(features_Energiadebiomasahmedadeplantasdefaenaavcola_9);var lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energiadebiomasahmedadeplantasdefaenaavcola_9, 
                style: style_Energiadebiomasahmedadeplantasdefaenaavcola_9,
                title: 'Energia de biomasa húmeda de plantas de faena avícola'
            });var format_Energiadeefluenteslquidosdeplantasdefaena_10 = new ol.format.GeoJSON();
var features_Energiadeefluenteslquidosdeplantasdefaena_10 = format_Energiadeefluenteslquidosdeplantasdefaena_10.readFeatures(json_Energiadeefluenteslquidosdeplantasdefaena_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energiadeefluenteslquidosdeplantasdefaena_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Energiadeefluenteslquidosdeplantasdefaena_10.addFeatures(features_Energiadeefluenteslquidosdeplantasdefaena_10);var lyr_Energiadeefluenteslquidosdeplantasdefaena_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Energiadeefluenteslquidosdeplantasdefaena_10, 
                style: style_Energiadeefluenteslquidosdeplantasdefaena_10,
                title: 'Energia de efluentes líquidos de plantas de faena'
            });var format_EnergiaEstiercolOvinobovinoporcino_11 = new ol.format.GeoJSON();
var features_EnergiaEstiercolOvinobovinoporcino_11 = format_EnergiaEstiercolOvinobovinoporcino_11.readFeatures(json_EnergiaEstiercolOvinobovinoporcino_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaEstiercolOvinobovinoporcino_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaEstiercolOvinobovinoporcino_11.addFeatures(features_EnergiaEstiercolOvinobovinoporcino_11);var lyr_EnergiaEstiercolOvinobovinoporcino_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaEstiercolOvinobovinoporcino_11, 
                style: style_EnergiaEstiercolOvinobovinoporcino_11,
                title: 'Energia Estiercol Ovino-bovino-porcino'
            });var format_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12 = new ol.format.GeoJSON();
var features_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12 = format_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.readFeatures(json_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.addFeatures(features_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12);var lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12, 
                style: style_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12,
                title: 'Energia de efluentes líquidos de mataderos  Ovino-bovino-porcino'
            });var format_Guanodeplantasdefaenaavcola_13 = new ol.format.GeoJSON();
var features_Guanodeplantasdefaenaavcola_13 = format_Guanodeplantasdefaenaavcola_13.readFeatures(json_Guanodeplantasdefaenaavcola_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guanodeplantasdefaenaavcola_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Guanodeplantasdefaenaavcola_13.addFeatures(features_Guanodeplantasdefaenaavcola_13);var lyr_Guanodeplantasdefaenaavcola_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guanodeplantasdefaenaavcola_13, 
                style: style_Guanodeplantasdefaenaavcola_13,
                title: 'Guano de plantas de faena avícola'
            });var format_Biomasahmedadeplantasdefaenaavcola_14 = new ol.format.GeoJSON();
var features_Biomasahmedadeplantasdefaenaavcola_14 = format_Biomasahmedadeplantasdefaenaavcola_14.readFeatures(json_Biomasahmedadeplantasdefaenaavcola_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomasahmedadeplantasdefaenaavcola_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Biomasahmedadeplantasdefaenaavcola_14.addFeatures(features_Biomasahmedadeplantasdefaenaavcola_14);var lyr_Biomasahmedadeplantasdefaenaavcola_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biomasahmedadeplantasdefaenaavcola_14, 
                style: style_Biomasahmedadeplantasdefaenaavcola_14,
                title: 'Biomasa húmeda de plantas de faena avícola'
            });var format_Efluenteslquidosdeplantasdefaenaavcola_15 = new ol.format.GeoJSON();
var features_Efluenteslquidosdeplantasdefaenaavcola_15 = format_Efluenteslquidosdeplantasdefaenaavcola_15.readFeatures(json_Efluenteslquidosdeplantasdefaenaavcola_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Efluenteslquidosdeplantasdefaenaavcola_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Efluenteslquidosdeplantasdefaenaavcola_15.addFeatures(features_Efluenteslquidosdeplantasdefaenaavcola_15);var lyr_Efluenteslquidosdeplantasdefaenaavcola_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Efluenteslquidosdeplantasdefaenaavcola_15, 
                style: style_Efluenteslquidosdeplantasdefaenaavcola_15,
                title: 'Efluentes líquidos de plantas de faena avícola'
            });var format_EstircolOvinobovinoporcino_16 = new ol.format.GeoJSON();
var features_EstircolOvinobovinoporcino_16 = format_EstircolOvinobovinoporcino_16.readFeatures(json_EstircolOvinobovinoporcino_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstircolOvinobovinoporcino_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EstircolOvinobovinoporcino_16.addFeatures(features_EstircolOvinobovinoporcino_16);var lyr_EstircolOvinobovinoporcino_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstircolOvinobovinoporcino_16, 
                style: style_EstircolOvinobovinoporcino_16,
                title: 'Estiércol Ovino-bovino-porcino'
            });var format_BiomasalquidaOvinobovinoporcino_17 = new ol.format.GeoJSON();
var features_BiomasalquidaOvinobovinoporcino_17 = format_BiomasalquidaOvinobovinoporcino_17.readFeatures(json_BiomasalquidaOvinobovinoporcino_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasalquidaOvinobovinoporcino_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasalquidaOvinobovinoporcino_17.addFeatures(features_BiomasalquidaOvinobovinoporcino_17);var lyr_BiomasalquidaOvinobovinoporcino_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasalquidaOvinobovinoporcino_17, 
                style: style_BiomasalquidaOvinobovinoporcino_17,
                title: 'Biomasa líquida Ovino-bovino-porcino'
            });var format_EnergiaOrujoAceituna_18 = new ol.format.GeoJSON();
var features_EnergiaOrujoAceituna_18 = format_EnergiaOrujoAceituna_18.readFeatures(json_EnergiaOrujoAceituna_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaOrujoAceituna_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaOrujoAceituna_18.addFeatures(features_EnergiaOrujoAceituna_18);var lyr_EnergiaOrujoAceituna_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaOrujoAceituna_18, 
                style: style_EnergiaOrujoAceituna_18,
                title: 'Energia Orujo Aceituna'
            });var format_EnergiaOrujoUva_19 = new ol.format.GeoJSON();
var features_EnergiaOrujoUva_19 = format_EnergiaOrujoUva_19.readFeatures(json_EnergiaOrujoUva_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaOrujoUva_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaOrujoUva_19.addFeatures(features_EnergiaOrujoUva_19);var lyr_EnergiaOrujoUva_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaOrujoUva_19, 
                style: style_EnergiaOrujoUva_19,
                title: 'Energia Orujo Uva'
            });var format_EnergiaConservasTomate_20 = new ol.format.GeoJSON();
var features_EnergiaConservasTomate_20 = format_EnergiaConservasTomate_20.readFeatures(json_EnergiaConservasTomate_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaConservasTomate_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaConservasTomate_20.addFeatures(features_EnergiaConservasTomate_20);var lyr_EnergiaConservasTomate_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaConservasTomate_20, 
                style: style_EnergiaConservasTomate_20,
                title: 'Energia Conservas Tomate'
            });var format_EnergiaConservasPera_21 = new ol.format.GeoJSON();
var features_EnergiaConservasPera_21 = format_EnergiaConservasPera_21.readFeatures(json_EnergiaConservasPera_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaConservasPera_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaConservasPera_21.addFeatures(features_EnergiaConservasPera_21);var lyr_EnergiaConservasPera_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaConservasPera_21, 
                style: style_EnergiaConservasPera_21,
                title: 'Energia Conservas Pera'
            });var format_EnergiaConservasDurazno_22 = new ol.format.GeoJSON();
var features_EnergiaConservasDurazno_22 = format_EnergiaConservasDurazno_22.readFeatures(json_EnergiaConservasDurazno_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaConservasDurazno_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaConservasDurazno_22.addFeatures(features_EnergiaConservasDurazno_22);var lyr_EnergiaConservasDurazno_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaConservasDurazno_22, 
                style: style_EnergiaConservasDurazno_22,
                title: 'Energia Conservas Durazno'
            });var format_OrujoAceituna_23 = new ol.format.GeoJSON();
var features_OrujoAceituna_23 = format_OrujoAceituna_23.readFeatures(json_OrujoAceituna_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrujoAceituna_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OrujoAceituna_23.addFeatures(features_OrujoAceituna_23);var lyr_OrujoAceituna_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrujoAceituna_23, 
                style: style_OrujoAceituna_23,
                title: 'Orujo Aceituna'
            });var format_OrujoUva_24 = new ol.format.GeoJSON();
var features_OrujoUva_24 = format_OrujoUva_24.readFeatures(json_OrujoUva_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrujoUva_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OrujoUva_24.addFeatures(features_OrujoUva_24);var lyr_OrujoUva_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrujoUva_24, 
                style: style_OrujoUva_24,
                title: 'Orujo Uva'
            });var format_ConservasTomate_25 = new ol.format.GeoJSON();
var features_ConservasTomate_25 = format_ConservasTomate_25.readFeatures(json_ConservasTomate_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservasTomate_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ConservasTomate_25.addFeatures(features_ConservasTomate_25);var lyr_ConservasTomate_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConservasTomate_25, 
                style: style_ConservasTomate_25,
                title: 'Conservas Tomate'
            });var format_ConservasPera_26 = new ol.format.GeoJSON();
var features_ConservasPera_26 = format_ConservasPera_26.readFeatures(json_ConservasPera_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservasPera_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ConservasPera_26.addFeatures(features_ConservasPera_26);var lyr_ConservasPera_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConservasPera_26, 
                style: style_ConservasPera_26,
                title: 'Conservas Pera'
            });var format_ConservasDurazno_27 = new ol.format.GeoJSON();
var features_ConservasDurazno_27 = format_ConservasDurazno_27.readFeatures(json_ConservasDurazno_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservasDurazno_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ConservasDurazno_27.addFeatures(features_ConservasDurazno_27);var lyr_ConservasDurazno_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConservasDurazno_27, 
                style: style_ConservasDurazno_27,
                title: 'Conservas Durazno'
            });var format_EnergiaAlmendro_28 = new ol.format.GeoJSON();
var features_EnergiaAlmendro_28 = format_EnergiaAlmendro_28.readFeatures(json_EnergiaAlmendro_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaAlmendro_28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaAlmendro_28.addFeatures(features_EnergiaAlmendro_28);var lyr_EnergiaAlmendro_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaAlmendro_28, 
                style: style_EnergiaAlmendro_28,
                title: 'Energia Almendro'
            });var format_EnergiaMembrillo_29 = new ol.format.GeoJSON();
var features_EnergiaMembrillo_29 = format_EnergiaMembrillo_29.readFeatures(json_EnergiaMembrillo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaMembrillo_29 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaMembrillo_29.addFeatures(features_EnergiaMembrillo_29);var lyr_EnergiaMembrillo_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaMembrillo_29, 
                style: style_EnergiaMembrillo_29,
                title: 'Energia Membrillo'
            });var format_EnergiaCerezo_30 = new ol.format.GeoJSON();
var features_EnergiaCerezo_30 = format_EnergiaCerezo_30.readFeatures(json_EnergiaCerezo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaCerezo_30 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaCerezo_30.addFeatures(features_EnergiaCerezo_30);var lyr_EnergiaCerezo_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaCerezo_30, 
                style: style_EnergiaCerezo_30,
                title: 'Energia Cerezo'
            });var format_EnergiaNogal_31 = new ol.format.GeoJSON();
var features_EnergiaNogal_31 = format_EnergiaNogal_31.readFeatures(json_EnergiaNogal_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaNogal_31 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaNogal_31.addFeatures(features_EnergiaNogal_31);var lyr_EnergiaNogal_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaNogal_31, 
                style: style_EnergiaNogal_31,
                title: 'Energia Nogal'
            });var format_EnergiaDamasco_32 = new ol.format.GeoJSON();
var features_EnergiaDamasco_32 = format_EnergiaDamasco_32.readFeatures(json_EnergiaDamasco_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaDamasco_32 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaDamasco_32.addFeatures(features_EnergiaDamasco_32);var lyr_EnergiaDamasco_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaDamasco_32, 
                style: style_EnergiaDamasco_32,
                title: 'Energia Damasco'
            });var format_EnergiaManzano_33 = new ol.format.GeoJSON();
var features_EnergiaManzano_33 = format_EnergiaManzano_33.readFeatures(json_EnergiaManzano_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaManzano_33 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaManzano_33.addFeatures(features_EnergiaManzano_33);var lyr_EnergiaManzano_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaManzano_33, 
                style: style_EnergiaManzano_33,
                title: 'Energia Manzano'
            });var format_EnergiaPeral_34 = new ol.format.GeoJSON();
var features_EnergiaPeral_34 = format_EnergiaPeral_34.readFeatures(json_EnergiaPeral_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaPeral_34 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaPeral_34.addFeatures(features_EnergiaPeral_34);var lyr_EnergiaPeral_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaPeral_34, 
                style: style_EnergiaPeral_34,
                title: 'Energia Peral'
            });var format_EnergiaOlivo_35 = new ol.format.GeoJSON();
var features_EnergiaOlivo_35 = format_EnergiaOlivo_35.readFeatures(json_EnergiaOlivo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaOlivo_35 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaOlivo_35.addFeatures(features_EnergiaOlivo_35);var lyr_EnergiaOlivo_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaOlivo_35, 
                style: style_EnergiaOlivo_35,
                title: 'Energia Olivo'
            });var format_EnergiaDuraznero_36 = new ol.format.GeoJSON();
var features_EnergiaDuraznero_36 = format_EnergiaDuraznero_36.readFeatures(json_EnergiaDuraznero_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaDuraznero_36 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaDuraznero_36.addFeatures(features_EnergiaDuraznero_36);var lyr_EnergiaDuraznero_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaDuraznero_36, 
                style: style_EnergiaDuraznero_36,
                title: 'Energia Duraznero'
            });var format_EnergiaCiruelo_37 = new ol.format.GeoJSON();
var features_EnergiaCiruelo_37 = format_EnergiaCiruelo_37.readFeatures(json_EnergiaCiruelo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaCiruelo_37 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaCiruelo_37.addFeatures(features_EnergiaCiruelo_37);var lyr_EnergiaCiruelo_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaCiruelo_37, 
                style: style_EnergiaCiruelo_37,
                title: 'Energia Ciruelo'
            });var format_EnergiaVidespaldero_38 = new ol.format.GeoJSON();
var features_EnergiaVidespaldero_38 = format_EnergiaVidespaldero_38.readFeatures(json_EnergiaVidespaldero_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaVidespaldero_38 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaVidespaldero_38.addFeatures(features_EnergiaVidespaldero_38);var lyr_EnergiaVidespaldero_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaVidespaldero_38, 
                style: style_EnergiaVidespaldero_38,
                title: 'Energia Vid espaldero'
            });var format_EnergiaVidparral_39 = new ol.format.GeoJSON();
var features_EnergiaVidparral_39 = format_EnergiaVidparral_39.readFeatures(json_EnergiaVidparral_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnergiaVidparral_39 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnergiaVidparral_39.addFeatures(features_EnergiaVidparral_39);var lyr_EnergiaVidparral_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EnergiaVidparral_39, 
                style: style_EnergiaVidparral_39,
                title: 'Energia Vid parral'
            });var format_BiomasaAlmendro_40 = new ol.format.GeoJSON();
var features_BiomasaAlmendro_40 = format_BiomasaAlmendro_40.readFeatures(json_BiomasaAlmendro_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaAlmendro_40 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaAlmendro_40.addFeatures(features_BiomasaAlmendro_40);var lyr_BiomasaAlmendro_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaAlmendro_40, 
                style: style_BiomasaAlmendro_40,
                title: 'Biomasa Almendro'
            });var format_BiomasaMembrillo_41 = new ol.format.GeoJSON();
var features_BiomasaMembrillo_41 = format_BiomasaMembrillo_41.readFeatures(json_BiomasaMembrillo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaMembrillo_41 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaMembrillo_41.addFeatures(features_BiomasaMembrillo_41);var lyr_BiomasaMembrillo_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaMembrillo_41, 
                style: style_BiomasaMembrillo_41,
                title: 'Biomasa Membrillo'
            });var format_BiomasaCerezo_42 = new ol.format.GeoJSON();
var features_BiomasaCerezo_42 = format_BiomasaCerezo_42.readFeatures(json_BiomasaCerezo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaCerezo_42 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaCerezo_42.addFeatures(features_BiomasaCerezo_42);var lyr_BiomasaCerezo_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaCerezo_42, 
                style: style_BiomasaCerezo_42,
                title: 'Biomasa Cerezo'
            });var format_BiomasaNogal_43 = new ol.format.GeoJSON();
var features_BiomasaNogal_43 = format_BiomasaNogal_43.readFeatures(json_BiomasaNogal_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaNogal_43 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaNogal_43.addFeatures(features_BiomasaNogal_43);var lyr_BiomasaNogal_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaNogal_43, 
                style: style_BiomasaNogal_43,
                title: 'Biomasa Nogal'
            });var format_BiomasaDamasco_44 = new ol.format.GeoJSON();
var features_BiomasaDamasco_44 = format_BiomasaDamasco_44.readFeatures(json_BiomasaDamasco_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaDamasco_44 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaDamasco_44.addFeatures(features_BiomasaDamasco_44);var lyr_BiomasaDamasco_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaDamasco_44, 
                style: style_BiomasaDamasco_44,
                title: 'Biomasa Damasco'
            });var format_BiomasaManzano_45 = new ol.format.GeoJSON();
var features_BiomasaManzano_45 = format_BiomasaManzano_45.readFeatures(json_BiomasaManzano_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaManzano_45 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaManzano_45.addFeatures(features_BiomasaManzano_45);var lyr_BiomasaManzano_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaManzano_45, 
                style: style_BiomasaManzano_45,
                title: 'Biomasa Manzano'
            });var format_BiomasaPeral_46 = new ol.format.GeoJSON();
var features_BiomasaPeral_46 = format_BiomasaPeral_46.readFeatures(json_BiomasaPeral_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaPeral_46 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaPeral_46.addFeatures(features_BiomasaPeral_46);var lyr_BiomasaPeral_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaPeral_46, 
                style: style_BiomasaPeral_46,
                title: 'Biomasa Peral'
            });var format_BiomasaOlivo_47 = new ol.format.GeoJSON();
var features_BiomasaOlivo_47 = format_BiomasaOlivo_47.readFeatures(json_BiomasaOlivo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaOlivo_47 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaOlivo_47.addFeatures(features_BiomasaOlivo_47);var lyr_BiomasaOlivo_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaOlivo_47, 
                style: style_BiomasaOlivo_47,
                title: 'Biomasa Olivo'
            });var format_BiomasaDuraznero_48 = new ol.format.GeoJSON();
var features_BiomasaDuraznero_48 = format_BiomasaDuraznero_48.readFeatures(json_BiomasaDuraznero_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaDuraznero_48 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaDuraznero_48.addFeatures(features_BiomasaDuraznero_48);var lyr_BiomasaDuraznero_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaDuraznero_48, 
                style: style_BiomasaDuraznero_48,
                title: 'Biomasa Duraznero'
            });var format_BiomasaCiruelo_49 = new ol.format.GeoJSON();
var features_BiomasaCiruelo_49 = format_BiomasaCiruelo_49.readFeatures(json_BiomasaCiruelo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaCiruelo_49 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaCiruelo_49.addFeatures(features_BiomasaCiruelo_49);var lyr_BiomasaCiruelo_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaCiruelo_49, 
                style: style_BiomasaCiruelo_49,
                title: 'Biomasa Ciruelo'
            });var format_BiomasaVidespaldero_50 = new ol.format.GeoJSON();
var features_BiomasaVidespaldero_50 = format_BiomasaVidespaldero_50.readFeatures(json_BiomasaVidespaldero_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaVidespaldero_50 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaVidespaldero_50.addFeatures(features_BiomasaVidespaldero_50);var lyr_BiomasaVidespaldero_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaVidespaldero_50, 
                style: style_BiomasaVidespaldero_50,
                title: 'Biomasa Vid espaldero'
            });var format_BiomasaVidparral_51 = new ol.format.GeoJSON();
var features_BiomasaVidparral_51 = format_BiomasaVidparral_51.readFeatures(json_BiomasaVidparral_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomasaVidparral_51 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BiomasaVidparral_51.addFeatures(features_BiomasaVidparral_51);var lyr_BiomasaVidparral_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiomasaVidparral_51, 
                style: style_BiomasaVidparral_51,
                title: 'Biomasa Vid parral'
            });var format_Diciembreacumulado_52 = new ol.format.GeoJSON();
var features_Diciembreacumulado_52 = format_Diciembreacumulado_52.readFeatures(json_Diciembreacumulado_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diciembreacumulado_52 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diciembreacumulado_52.addFeatures(features_Diciembreacumulado_52);var lyr_Diciembreacumulado_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diciembreacumulado_52, 
                style: style_Diciembreacumulado_52,
    title: 'Diciembre - acumulado<br />\
    <img src="styles/legend/Diciembreacumulado_52_0.png" /> 216084.59<br />\
    <img src="styles/legend/Diciembreacumulado_52_1.png" /> 220177.05<br />\
    <img src="styles/legend/Diciembreacumulado_52_2.png" /> 224269.51<br />\
    <img src="styles/legend/Diciembreacumulado_52_3.png" /> 228361.97<br />\
    <img src="styles/legend/Diciembreacumulado_52_4.png" /> 232454.43<br />\
    <img src="styles/legend/Diciembreacumulado_52_5.png" /> 236546.89<br />\
    <img src="styles/legend/Diciembreacumulado_52_6.png" /> 240639.35<br />\
    <img src="styles/legend/Diciembreacumulado_52_7.png" /> 244731.81<br />\
    <img src="styles/legend/Diciembreacumulado_52_8.png" /> 248824.27<br />\
    <img src="styles/legend/Diciembreacumulado_52_9.png" /> 252916.73<br />\
    <img src="styles/legend/Diciembreacumulado_52_10.png" /> 257009.19<br />\
    <img src="styles/legend/Diciembreacumulado_52_11.png" /> 261101.65<br />\
    <img src="styles/legend/Diciembreacumulado_52_12.png" /> 265194.11<br />\
    <img src="styles/legend/Diciembreacumulado_52_13.png" /> 269286.56<br />\
    <img src="styles/legend/Diciembreacumulado_52_14.png" /> 273379.02<br />\
    <img src="styles/legend/Diciembreacumulado_52_15.png" /> 277471.48<br />\
    <img src="styles/legend/Diciembreacumulado_52_16.png" /> 281563.94<br />\
    <img src="styles/legend/Diciembreacumulado_52_17.png" /> 285656.40<br />\
    <img src="styles/legend/Diciembreacumulado_52_18.png" /> 289748.86<br />\
    <img src="styles/legend/Diciembreacumulado_52_19.png" /> 293841.32<br />\
    <img src="styles/legend/Diciembreacumulado_52_20.png" /> 297933.78<br />\
    <img src="styles/legend/Diciembreacumulado_52_21.png" /> 302026.24<br />\
    <img src="styles/legend/Diciembreacumulado_52_22.png" /> 306118.70<br />\
    <img src="styles/legend/Diciembreacumulado_52_23.png" /> 310211.16<br />\
    <img src="styles/legend/Diciembreacumulado_52_24.png" /> 314303.62<br />'
        });var format_Noviembreacumulado_53 = new ol.format.GeoJSON();
var features_Noviembreacumulado_53 = format_Noviembreacumulado_53.readFeatures(json_Noviembreacumulado_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noviembreacumulado_53 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noviembreacumulado_53.addFeatures(features_Noviembreacumulado_53);var lyr_Noviembreacumulado_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noviembreacumulado_53, 
                style: style_Noviembreacumulado_53,
    title: 'Noviembre - acumulado<br />\
    <img src="styles/legend/Noviembreacumulado_53_0.png" /> 143786.46<br />\
    <img src="styles/legend/Noviembreacumulado_53_1.png" /> 146305.74<br />\
    <img src="styles/legend/Noviembreacumulado_53_2.png" /> 148825.01<br />\
    <img src="styles/legend/Noviembreacumulado_53_3.png" /> 151344.29<br />\
    <img src="styles/legend/Noviembreacumulado_53_4.png" /> 153863.56<br />\
    <img src="styles/legend/Noviembreacumulado_53_5.png" /> 156382.84<br />\
    <img src="styles/legend/Noviembreacumulado_53_6.png" /> 158902.11<br />\
    <img src="styles/legend/Noviembreacumulado_53_7.png" /> 161421.39<br />\
    <img src="styles/legend/Noviembreacumulado_53_8.png" /> 163940.66<br />\
    <img src="styles/legend/Noviembreacumulado_53_9.png" /> 166459.94<br />\
    <img src="styles/legend/Noviembreacumulado_53_10.png" /> 168979.21<br />\
    <img src="styles/legend/Noviembreacumulado_53_11.png" /> 171498.49<br />\
    <img src="styles/legend/Noviembreacumulado_53_12.png" /> 174017.76<br />\
    <img src="styles/legend/Noviembreacumulado_53_13.png" /> 176537.04<br />\
    <img src="styles/legend/Noviembreacumulado_53_14.png" /> 179056.31<br />\
    <img src="styles/legend/Noviembreacumulado_53_15.png" /> 181575.59<br />\
    <img src="styles/legend/Noviembreacumulado_53_16.png" /> 184094.86<br />\
    <img src="styles/legend/Noviembreacumulado_53_17.png" /> 186614.13<br />\
    <img src="styles/legend/Noviembreacumulado_53_18.png" /> 189133.41<br />\
    <img src="styles/legend/Noviembreacumulado_53_19.png" /> 191652.68<br />\
    <img src="styles/legend/Noviembreacumulado_53_20.png" /> 194171.96<br />\
    <img src="styles/legend/Noviembreacumulado_53_21.png" /> 196691.23<br />\
    <img src="styles/legend/Noviembreacumulado_53_22.png" /> 199210.51<br />\
    <img src="styles/legend/Noviembreacumulado_53_23.png" /> 201729.78<br />\
    <img src="styles/legend/Noviembreacumulado_53_24.png" /> 204249.06<br />\
    <img src="styles/legend/Noviembreacumulado_53_25.png" /> 206768.33<br />\
    <img src="styles/legend/Noviembreacumulado_53_26.png" /> 209287.61<br />\
    <img src="styles/legend/Noviembreacumulado_53_27.png" /> 211806.88<br />\
    <img src="styles/legend/Noviembreacumulado_53_28.png" /> 214326.16<br />\
    <img src="styles/legend/Noviembreacumulado_53_29.png" /> 216845.43<br />'
        });var format_Octubreacumulado_54 = new ol.format.GeoJSON();
var features_Octubreacumulado_54 = format_Octubreacumulado_54.readFeatures(json_Octubreacumulado_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Octubreacumulado_54 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Octubreacumulado_54.addFeatures(features_Octubreacumulado_54);var lyr_Octubreacumulado_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Octubreacumulado_54, 
                style: style_Octubreacumulado_54,
    title: 'Octubre - acumulado<br />\
    <img src="styles/legend/Octubreacumulado_54_0.png" /> 61335.38<br />\
    <img src="styles/legend/Octubreacumulado_54_1.png" /> 63620.24<br />\
    <img src="styles/legend/Octubreacumulado_54_2.png" /> 65905.09<br />\
    <img src="styles/legend/Octubreacumulado_54_3.png" /> 68189.95<br />\
    <img src="styles/legend/Octubreacumulado_54_4.png" /> 70474.81<br />\
    <img src="styles/legend/Octubreacumulado_54_5.png" /> 72759.67<br />\
    <img src="styles/legend/Octubreacumulado_54_6.png" /> 75044.52<br />\
    <img src="styles/legend/Octubreacumulado_54_7.png" /> 77329.38<br />\
    <img src="styles/legend/Octubreacumulado_54_8.png" /> 79614.24<br />\
    <img src="styles/legend/Octubreacumulado_54_9.png" /> 81899.09<br />\
    <img src="styles/legend/Octubreacumulado_54_10.png" /> 84183.95<br />\
    <img src="styles/legend/Octubreacumulado_54_11.png" /> 86468.81<br />\
    <img src="styles/legend/Octubreacumulado_54_12.png" /> 88753.67<br />\
    <img src="styles/legend/Octubreacumulado_54_13.png" /> 91038.52<br />\
    <img src="styles/legend/Octubreacumulado_54_14.png" /> 93323.38<br />\
    <img src="styles/legend/Octubreacumulado_54_15.png" /> 95608.24<br />\
    <img src="styles/legend/Octubreacumulado_54_16.png" /> 97893.09<br />\
    <img src="styles/legend/Octubreacumulado_54_17.png" /> 100177.95<br />\
    <img src="styles/legend/Octubreacumulado_54_18.png" /> 102462.81<br />\
    <img src="styles/legend/Octubreacumulado_54_19.png" /> 104747.67<br />\
    <img src="styles/legend/Octubreacumulado_54_20.png" /> 107032.52<br />\
    <img src="styles/legend/Octubreacumulado_54_21.png" /> 109317.38<br />\
    <img src="styles/legend/Octubreacumulado_54_22.png" /> 111602.24<br />\
    <img src="styles/legend/Octubreacumulado_54_23.png" /> 113887.10<br />\
    <img src="styles/legend/Octubreacumulado_54_24.png" /> 116171.95<br />\
    <img src="styles/legend/Octubreacumulado_54_25.png" /> 118456.81<br />\
    <img src="styles/legend/Octubreacumulado_54_26.png" /> 120741.67<br />\
    <img src="styles/legend/Octubreacumulado_54_27.png" /> 123026.52<br />\
    <img src="styles/legend/Octubreacumulado_54_28.png" /> 125311.38<br />\
    <img src="styles/legend/Octubreacumulado_54_29.png" /> 127596.24<br />\
    <img src="styles/legend/Octubreacumulado_54_30.png" /> 129881.10<br />\
    <img src="styles/legend/Octubreacumulado_54_31.png" /> 132165.95<br />'
        });var format_Septiembreacumulado_55 = new ol.format.GeoJSON();
var features_Septiembreacumulado_55 = format_Septiembreacumulado_55.readFeatures(json_Septiembreacumulado_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Septiembreacumulado_55 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Septiembreacumulado_55.addFeatures(features_Septiembreacumulado_55);var lyr_Septiembreacumulado_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Septiembreacumulado_55, 
                style: style_Septiembreacumulado_55,
    title: 'Septiembre - acumulado<br />\
    <img src="styles/legend/Septiembreacumulado_55_0.png" /> 76870.76<br />\
    <img src="styles/legend/Septiembreacumulado_55_1.png" /> 78867.78<br />\
    <img src="styles/legend/Septiembreacumulado_55_2.png" /> 80864.81<br />\
    <img src="styles/legend/Septiembreacumulado_55_3.png" /> 82861.83<br />\
    <img src="styles/legend/Septiembreacumulado_55_4.png" /> 84858.86<br />\
    <img src="styles/legend/Septiembreacumulado_55_5.png" /> 86855.89<br />\
    <img src="styles/legend/Septiembreacumulado_55_6.png" /> 88852.91<br />\
    <img src="styles/legend/Septiembreacumulado_55_7.png" /> 90849.94<br />\
    <img src="styles/legend/Septiembreacumulado_55_8.png" /> 92846.97<br />\
    <img src="styles/legend/Septiembreacumulado_55_9.png" /> 94843.99<br />\
    <img src="styles/legend/Septiembreacumulado_55_10.png" /> 96841.02<br />\
    <img src="styles/legend/Septiembreacumulado_55_11.png" /> 98838.04<br />\
    <img src="styles/legend/Septiembreacumulado_55_12.png" /> 100835.07<br />\
    <img src="styles/legend/Septiembreacumulado_55_13.png" /> 102832.10<br />\
    <img src="styles/legend/Septiembreacumulado_55_14.png" /> 104829.12<br />\
    <img src="styles/legend/Septiembreacumulado_55_15.png" /> 106826.15<br />\
    <img src="styles/legend/Septiembreacumulado_55_16.png" /> 108823.17<br />\
    <img src="styles/legend/Septiembreacumulado_55_17.png" /> 110820.20<br />\
    <img src="styles/legend/Septiembreacumulado_55_18.png" /> 112817.23<br />\
    <img src="styles/legend/Septiembreacumulado_55_19.png" /> 114814.25<br />\
    <img src="styles/legend/Septiembreacumulado_55_20.png" /> 116811.28<br />\
    <img src="styles/legend/Septiembreacumulado_55_21.png" /> 118808.31<br />\
    <img src="styles/legend/Septiembreacumulado_55_22.png" /> 120805.33<br />\
    <img src="styles/legend/Septiembreacumulado_55_23.png" /> 122802.36<br />\
    <img src="styles/legend/Septiembreacumulado_55_24.png" /> 124799.38<br />\
    <img src="styles/legend/Septiembreacumulado_55_25.png" /> 126796.41<br />\
    <img src="styles/legend/Septiembreacumulado_55_26.png" /> 128793.44<br />\
    <img src="styles/legend/Septiembreacumulado_55_27.png" /> 130790.46<br />\
    <img src="styles/legend/Septiembreacumulado_55_28.png" /> 132787.49<br />\
    <img src="styles/legend/Septiembreacumulado_55_29.png" /> 134784.52<br />\
    <img src="styles/legend/Septiembreacumulado_55_30.png" /> 136781.54<br />\
    <img src="styles/legend/Septiembreacumulado_55_31.png" /> 138778.57<br />'
        });var format_Agostoacumulado_56 = new ol.format.GeoJSON();
var features_Agostoacumulado_56 = format_Agostoacumulado_56.readFeatures(json_Agostoacumulado_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agostoacumulado_56 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Agostoacumulado_56.addFeatures(features_Agostoacumulado_56);var lyr_Agostoacumulado_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agostoacumulado_56, 
                style: style_Agostoacumulado_56,
    title: 'Agosto - acumulado<br />\
    <img src="styles/legend/Agostoacumulado_56_0.png" /> 97521.74<br />\
    <img src="styles/legend/Agostoacumulado_56_1.png" /> 100273.19<br />\
    <img src="styles/legend/Agostoacumulado_56_2.png" /> 103024.64<br />\
    <img src="styles/legend/Agostoacumulado_56_3.png" /> 105776.09<br />\
    <img src="styles/legend/Agostoacumulado_56_4.png" /> 108527.54<br />\
    <img src="styles/legend/Agostoacumulado_56_5.png" /> 111278.99<br />\
    <img src="styles/legend/Agostoacumulado_56_6.png" /> 114030.44<br />\
    <img src="styles/legend/Agostoacumulado_56_7.png" /> 116781.89<br />\
    <img src="styles/legend/Agostoacumulado_56_8.png" /> 119533.33<br />\
    <img src="styles/legend/Agostoacumulado_56_9.png" /> 122284.78<br />\
    <img src="styles/legend/Agostoacumulado_56_10.png" /> 125036.23<br />\
    <img src="styles/legend/Agostoacumulado_56_11.png" /> 127787.68<br />\
    <img src="styles/legend/Agostoacumulado_56_12.png" /> 130539.13<br />\
    <img src="styles/legend/Agostoacumulado_56_13.png" /> 133290.58<br />\
    <img src="styles/legend/Agostoacumulado_56_14.png" /> 136042.03<br />\
    <img src="styles/legend/Agostoacumulado_56_15.png" /> 138793.48<br />\
    <img src="styles/legend/Agostoacumulado_56_16.png" /> 141544.93<br />\
    <img src="styles/legend/Agostoacumulado_56_17.png" /> 144296.38<br />'
        });var format_Julioacumulado_57 = new ol.format.GeoJSON();
var features_Julioacumulado_57 = format_Julioacumulado_57.readFeatures(json_Julioacumulado_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Julioacumulado_57 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Julioacumulado_57.addFeatures(features_Julioacumulado_57);var lyr_Julioacumulado_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Julioacumulado_57, 
                style: style_Julioacumulado_57,
    title: 'Julio - acumulado<br />\
    <img src="styles/legend/Julioacumulado_57_0.png" /> 59152.01<br />\
    <img src="styles/legend/Julioacumulado_57_1.png" /> 61580.13<br />\
    <img src="styles/legend/Julioacumulado_57_2.png" /> 64008.26<br />\
    <img src="styles/legend/Julioacumulado_57_3.png" /> 66436.39<br />\
    <img src="styles/legend/Julioacumulado_57_4.png" /> 68864.51<br />\
    <img src="styles/legend/Julioacumulado_57_5.png" /> 71292.64<br />\
    <img src="styles/legend/Julioacumulado_57_6.png" /> 73720.77<br />\
    <img src="styles/legend/Julioacumulado_57_7.png" /> 76148.89<br />\
    <img src="styles/legend/Julioacumulado_57_8.png" /> 78577.02<br />\
    <img src="styles/legend/Julioacumulado_57_9.png" /> 81005.15<br />\
    <img src="styles/legend/Julioacumulado_57_10.png" /> 83433.27<br />\
    <img src="styles/legend/Julioacumulado_57_11.png" /> 85861.40<br />\
    <img src="styles/legend/Julioacumulado_57_12.png" /> 88289.53<br />\
    <img src="styles/legend/Julioacumulado_57_13.png" /> 90717.65<br />\
    <img src="styles/legend/Julioacumulado_57_14.png" /> 93145.78<br />\
    <img src="styles/legend/Julioacumulado_57_15.png" /> 95573.91<br />\
    <img src="styles/legend/Julioacumulado_57_16.png" /> 98002.03<br />\
    <img src="styles/legend/Julioacumulado_57_17.png" /> 100430.16<br />\
    <img src="styles/legend/Julioacumulado_57_18.png" /> 102858.29<br />\
    <img src="styles/legend/Julioacumulado_57_19.png" /> 105286.41<br />'
        });var format_Junioacumulado_58 = new ol.format.GeoJSON();
var features_Junioacumulado_58 = format_Junioacumulado_58.readFeatures(json_Junioacumulado_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junioacumulado_58 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Junioacumulado_58.addFeatures(features_Junioacumulado_58);var lyr_Junioacumulado_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Junioacumulado_58, 
                style: style_Junioacumulado_58,
    title: 'Junio - acumulado<br />\
    <img src="styles/legend/Junioacumulado_58_0.png" /> 70615.96<br />\
    <img src="styles/legend/Junioacumulado_58_1.png" /> 72979.28<br />\
    <img src="styles/legend/Junioacumulado_58_2.png" /> 75342.60<br />\
    <img src="styles/legend/Junioacumulado_58_3.png" /> 77705.92<br />\
    <img src="styles/legend/Junioacumulado_58_4.png" /> 80069.24<br />\
    <img src="styles/legend/Junioacumulado_58_5.png" /> 82432.56<br />\
    <img src="styles/legend/Junioacumulado_58_6.png" /> 84795.88<br />\
    <img src="styles/legend/Junioacumulado_58_7.png" /> 87159.20<br />\
    <img src="styles/legend/Junioacumulado_58_8.png" /> 89522.52<br />\
    <img src="styles/legend/Junioacumulado_58_9.png" /> 91885.84<br />\
    <img src="styles/legend/Junioacumulado_58_10.png" /> 94249.16<br />\
    <img src="styles/legend/Junioacumulado_58_11.png" /> 96612.48<br />\
    <img src="styles/legend/Junioacumulado_58_12.png" /> 98975.80<br />\
    <img src="styles/legend/Junioacumulado_58_13.png" /> 101339.12<br />\
    <img src="styles/legend/Junioacumulado_58_14.png" /> 103702.44<br />\
    <img src="styles/legend/Junioacumulado_58_15.png" /> 106065.76<br />\
    <img src="styles/legend/Junioacumulado_58_16.png" /> 108429.08<br />\
    <img src="styles/legend/Junioacumulado_58_17.png" /> 110792.40<br />'
        });var format_Mayoacumulado_59 = new ol.format.GeoJSON();
var features_Mayoacumulado_59 = format_Mayoacumulado_59.readFeatures(json_Mayoacumulado_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayoacumulado_59 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mayoacumulado_59.addFeatures(features_Mayoacumulado_59);var lyr_Mayoacumulado_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayoacumulado_59, 
                style: style_Mayoacumulado_59,
    title: 'Mayo - acumulado<br />\
    <img src="styles/legend/Mayoacumulado_59_0.png" /> 52790.91<br />\
    <img src="styles/legend/Mayoacumulado_59_1.png" /> 54143.50<br />\
    <img src="styles/legend/Mayoacumulado_59_2.png" /> 55496.08<br />\
    <img src="styles/legend/Mayoacumulado_59_3.png" /> 56848.67<br />\
    <img src="styles/legend/Mayoacumulado_59_4.png" /> 58201.26<br />\
    <img src="styles/legend/Mayoacumulado_59_5.png" /> 59553.84<br />\
    <img src="styles/legend/Mayoacumulado_59_6.png" /> 60906.43<br />\
    <img src="styles/legend/Mayoacumulado_59_7.png" /> 62259.01<br />\
    <img src="styles/legend/Mayoacumulado_59_8.png" /> 63611.60<br />\
    <img src="styles/legend/Mayoacumulado_59_9.png" /> 64964.18<br />\
    <img src="styles/legend/Mayoacumulado_59_10.png" /> 66316.77<br />\
    <img src="styles/legend/Mayoacumulado_59_11.png" /> 67669.35<br />\
    <img src="styles/legend/Mayoacumulado_59_12.png" /> 69021.94<br />\
    <img src="styles/legend/Mayoacumulado_59_13.png" /> 70374.52<br />\
    <img src="styles/legend/Mayoacumulado_59_14.png" /> 71727.11<br />\
    <img src="styles/legend/Mayoacumulado_59_15.png" /> 73079.69<br />\
    <img src="styles/legend/Mayoacumulado_59_16.png" /> 74432.28<br />\
    <img src="styles/legend/Mayoacumulado_59_17.png" /> 75784.86<br />\
    <img src="styles/legend/Mayoacumulado_59_18.png" /> 77137.45<br />\
    <img src="styles/legend/Mayoacumulado_59_19.png" /> 78490.03<br />\
    <img src="styles/legend/Mayoacumulado_59_20.png" /> 79842.62<br />\
    <img src="styles/legend/Mayoacumulado_59_21.png" /> 81195.20<br />\
    <img src="styles/legend/Mayoacumulado_59_22.png" /> 82547.79<br />\
    <img src="styles/legend/Mayoacumulado_59_23.png" /> 83900.37<br />\
    <img src="styles/legend/Mayoacumulado_59_24.png" /> 85252.96<br />\
    <img src="styles/legend/Mayoacumulado_59_25.png" /> 86605.55<br />'
        });var format_Abrilacumulado_60 = new ol.format.GeoJSON();
var features_Abrilacumulado_60 = format_Abrilacumulado_60.readFeatures(json_Abrilacumulado_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abrilacumulado_60 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Abrilacumulado_60.addFeatures(features_Abrilacumulado_60);var lyr_Abrilacumulado_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abrilacumulado_60, 
                style: style_Abrilacumulado_60,
    title: 'Abril - acumulado<br />\
    <img src="styles/legend/Abrilacumulado_60_0.png" /> 99870.47<br />\
    <img src="styles/legend/Abrilacumulado_60_1.png" /> 102529.18<br />\
    <img src="styles/legend/Abrilacumulado_60_2.png" /> 105187.89<br />\
    <img src="styles/legend/Abrilacumulado_60_3.png" /> 107846.60<br />\
    <img src="styles/legend/Abrilacumulado_60_4.png" /> 110505.31<br />\
    <img src="styles/legend/Abrilacumulado_60_5.png" /> 113164.02<br />\
    <img src="styles/legend/Abrilacumulado_60_6.png" /> 115822.72<br />\
    <img src="styles/legend/Abrilacumulado_60_7.png" /> 118481.43<br />\
    <img src="styles/legend/Abrilacumulado_60_8.png" /> 121140.14<br />\
    <img src="styles/legend/Abrilacumulado_60_9.png" /> 123798.85<br />\
    <img src="styles/legend/Abrilacumulado_60_10.png" /> 126457.56<br />\
    <img src="styles/legend/Abrilacumulado_60_11.png" /> 129116.27<br />\
    <img src="styles/legend/Abrilacumulado_60_12.png" /> 131774.98<br />\
    <img src="styles/legend/Abrilacumulado_60_13.png" /> 134433.69<br />\
    <img src="styles/legend/Abrilacumulado_60_14.png" /> 137092.40<br />\
    <img src="styles/legend/Abrilacumulado_60_15.png" /> 139751.11<br />\
    <img src="styles/legend/Abrilacumulado_60_16.png" /> 142409.82<br />\
    <img src="styles/legend/Abrilacumulado_60_17.png" /> 145068.53<br />\
    <img src="styles/legend/Abrilacumulado_60_18.png" /> 147727.24<br />\
    <img src="styles/legend/Abrilacumulado_60_19.png" /> 150385.95<br />\
    <img src="styles/legend/Abrilacumulado_60_20.png" /> 153044.66<br />\
    <img src="styles/legend/Abrilacumulado_60_21.png" /> 155703.37<br />\
    <img src="styles/legend/Abrilacumulado_60_22.png" /> 158362.08<br />\
    <img src="styles/legend/Abrilacumulado_60_23.png" /> 161020.79<br />\
    <img src="styles/legend/Abrilacumulado_60_24.png" /> 163679.50<br />\
    <img src="styles/legend/Abrilacumulado_60_25.png" /> 166338.21<br />\
    <img src="styles/legend/Abrilacumulado_60_26.png" /> 168996.92<br />\
    <img src="styles/legend/Abrilacumulado_60_27.png" /> 171655.63<br />'
        });var format_Marzoacumulado_61 = new ol.format.GeoJSON();
var features_Marzoacumulado_61 = format_Marzoacumulado_61.readFeatures(json_Marzoacumulado_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marzoacumulado_61 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Marzoacumulado_61.addFeatures(features_Marzoacumulado_61);var lyr_Marzoacumulado_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marzoacumulado_61, 
                style: style_Marzoacumulado_61,
    title: 'Marzo - acumulado<br />\
    <img src="styles/legend/Marzoacumulado_61_0.png" /> 53141.22<br />\
    <img src="styles/legend/Marzoacumulado_61_1.png" /> 54950.14<br />\
    <img src="styles/legend/Marzoacumulado_61_2.png" /> 56759.05<br />\
    <img src="styles/legend/Marzoacumulado_61_3.png" /> 58567.96<br />\
    <img src="styles/legend/Marzoacumulado_61_4.png" /> 60376.88<br />\
    <img src="styles/legend/Marzoacumulado_61_5.png" /> 62185.79<br />\
    <img src="styles/legend/Marzoacumulado_61_6.png" /> 63994.71<br />\
    <img src="styles/legend/Marzoacumulado_61_7.png" /> 65803.62<br />\
    <img src="styles/legend/Marzoacumulado_61_8.png" /> 67612.54<br />\
    <img src="styles/legend/Marzoacumulado_61_9.png" /> 69421.45<br />\
    <img src="styles/legend/Marzoacumulado_61_10.png" /> 71230.37<br />\
    <img src="styles/legend/Marzoacumulado_61_11.png" /> 73039.28<br />\
    <img src="styles/legend/Marzoacumulado_61_12.png" /> 74848.20<br />\
    <img src="styles/legend/Marzoacumulado_61_13.png" /> 76657.11<br />\
    <img src="styles/legend/Marzoacumulado_61_14.png" /> 78466.03<br />\
    <img src="styles/legend/Marzoacumulado_61_15.png" /> 80274.94<br />\
    <img src="styles/legend/Marzoacumulado_61_16.png" /> 82083.85<br />\
    <img src="styles/legend/Marzoacumulado_61_17.png" /> 83892.77<br />\
    <img src="styles/legend/Marzoacumulado_61_18.png" /> 85701.68<br />\
    <img src="styles/legend/Marzoacumulado_61_19.png" /> 87510.60<br />\
    <img src="styles/legend/Marzoacumulado_61_20.png" /> 89319.51<br />\
    <img src="styles/legend/Marzoacumulado_61_21.png" /> 91128.43<br />\
    <img src="styles/legend/Marzoacumulado_61_22.png" /> 92937.34<br />\
    <img src="styles/legend/Marzoacumulado_61_23.png" /> 94746.26<br />\
    <img src="styles/legend/Marzoacumulado_61_24.png" /> 96555.17<br />\
    <img src="styles/legend/Marzoacumulado_61_25.png" /> 98364.09<br />\
    <img src="styles/legend/Marzoacumulado_61_26.png" /> 100173.01<br />\
    <img src="styles/legend/Marzoacumulado_61_27.png" /> 101981.92<br />\
    <img src="styles/legend/Marzoacumulado_61_28.png" /> 103790.83<br />'
        });var format_Febreroacumulado_62 = new ol.format.GeoJSON();
var features_Febreroacumulado_62 = format_Febreroacumulado_62.readFeatures(json_Febreroacumulado_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Febreroacumulado_62 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Febreroacumulado_62.addFeatures(features_Febreroacumulado_62);var lyr_Febreroacumulado_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Febreroacumulado_62, 
                style: style_Febreroacumulado_62,
    title: 'Febrero - acumulado<br />\
    <img src="styles/legend/Febreroacumulado_62_0.png" /> 101018.68<br />\
    <img src="styles/legend/Febreroacumulado_62_1.png" /> 103779.25<br />\
    <img src="styles/legend/Febreroacumulado_62_2.png" /> 106539.82<br />\
    <img src="styles/legend/Febreroacumulado_62_3.png" /> 109300.40<br />\
    <img src="styles/legend/Febreroacumulado_62_4.png" /> 112060.97<br />\
    <img src="styles/legend/Febreroacumulado_62_5.png" /> 114821.54<br />\
    <img src="styles/legend/Febreroacumulado_62_6.png" /> 117582.12<br />\
    <img src="styles/legend/Febreroacumulado_62_7.png" /> 120342.69<br />\
    <img src="styles/legend/Febreroacumulado_62_8.png" /> 123103.26<br />\
    <img src="styles/legend/Febreroacumulado_62_9.png" /> 125863.84<br />\
    <img src="styles/legend/Febreroacumulado_62_10.png" /> 128624.41<br />\
    <img src="styles/legend/Febreroacumulado_62_11.png" /> 131384.98<br />\
    <img src="styles/legend/Febreroacumulado_62_12.png" /> 134145.55<br />\
    <img src="styles/legend/Febreroacumulado_62_13.png" /> 136906.13<br />\
    <img src="styles/legend/Febreroacumulado_62_14.png" /> 139666.70<br />\
    <img src="styles/legend/Febreroacumulado_62_15.png" /> 142427.27<br />\
    <img src="styles/legend/Febreroacumulado_62_16.png" /> 145187.85<br />\
    <img src="styles/legend/Febreroacumulado_62_17.png" /> 147948.42<br />\
    <img src="styles/legend/Febreroacumulado_62_18.png" /> 150708.99<br />\
    <img src="styles/legend/Febreroacumulado_62_19.png" /> 153469.57<br />\
    <img src="styles/legend/Febreroacumulado_62_20.png" /> 156230.14<br />\
    <img src="styles/legend/Febreroacumulado_62_21.png" /> 158990.71<br />\
    <img src="styles/legend/Febreroacumulado_62_22.png" /> 161751.29<br />\
    <img src="styles/legend/Febreroacumulado_62_23.png" /> 164511.86<br />\
    <img src="styles/legend/Febreroacumulado_62_24.png" /> 167272.43<br />\
    <img src="styles/legend/Febreroacumulado_62_25.png" /> 170033.01<br />\
    <img src="styles/legend/Febreroacumulado_62_26.png" /> 172793.58<br />\
    <img src="styles/legend/Febreroacumulado_62_27.png" /> 175554.15<br />\
    <img src="styles/legend/Febreroacumulado_62_28.png" /> 178314.72<br />\
    <img src="styles/legend/Febreroacumulado_62_29.png" /> 181075.30<br />\
    <img src="styles/legend/Febreroacumulado_62_30.png" /> 183835.87<br />\
    <img src="styles/legend/Febreroacumulado_62_31.png" /> 186596.44<br />\
    <img src="styles/legend/Febreroacumulado_62_32.png" /> 189357.02<br />'
        });var format_Eneroacumulado_63 = new ol.format.GeoJSON();
var features_Eneroacumulado_63 = format_Eneroacumulado_63.readFeatures(json_Eneroacumulado_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eneroacumulado_63 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Eneroacumulado_63.addFeatures(features_Eneroacumulado_63);var lyr_Eneroacumulado_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eneroacumulado_63, 
                style: style_Eneroacumulado_63,
    title: 'Enero - acumulado<br />\
    <img src="styles/legend/Eneroacumulado_63_0.png" /> 183223.94<br />\
    <img src="styles/legend/Eneroacumulado_63_1.png" /> 187992.07<br />\
    <img src="styles/legend/Eneroacumulado_63_2.png" /> 192760.20<br />\
    <img src="styles/legend/Eneroacumulado_63_3.png" /> 197528.33<br />\
    <img src="styles/legend/Eneroacumulado_63_4.png" /> 202296.46<br />\
    <img src="styles/legend/Eneroacumulado_63_5.png" /> 207064.59<br />\
    <img src="styles/legend/Eneroacumulado_63_6.png" /> 211832.72<br />\
    <img src="styles/legend/Eneroacumulado_63_7.png" /> 216600.85<br />\
    <img src="styles/legend/Eneroacumulado_63_8.png" /> 221368.98<br />\
    <img src="styles/legend/Eneroacumulado_63_9.png" /> 226137.11<br />\
    <img src="styles/legend/Eneroacumulado_63_10.png" /> 230905.25<br />\
    <img src="styles/legend/Eneroacumulado_63_11.png" /> 235673.38<br />\
    <img src="styles/legend/Eneroacumulado_63_12.png" /> 240441.51<br />\
    <img src="styles/legend/Eneroacumulado_63_13.png" /> 245209.64<br />\
    <img src="styles/legend/Eneroacumulado_63_14.png" /> 249977.77<br />\
    <img src="styles/legend/Eneroacumulado_63_15.png" /> 254745.90<br />\
    <img src="styles/legend/Eneroacumulado_63_16.png" /> 259514.03<br />\
    <img src="styles/legend/Eneroacumulado_63_17.png" /> 264282.16<br />\
    <img src="styles/legend/Eneroacumulado_63_18.png" /> 269050.29<br />\
    <img src="styles/legend/Eneroacumulado_63_19.png" /> 273818.42<br />\
    <img src="styles/legend/Eneroacumulado_63_20.png" /> 278586.55<br />\
    <img src="styles/legend/Eneroacumulado_63_21.png" /> 283354.68<br />\
    <img src="styles/legend/Eneroacumulado_63_22.png" /> 288122.81<br />\
    <img src="styles/legend/Eneroacumulado_63_23.png" /> 292890.94<br />\
    <img src="styles/legend/Eneroacumulado_63_24.png" /> 297659.07<br />\
    <img src="styles/legend/Eneroacumulado_63_25.png" /> 302427.20<br />\
    <img src="styles/legend/Eneroacumulado_63_26.png" /> 307195.33<br />\
    <img src="styles/legend/Eneroacumulado_63_27.png" /> 311963.46<br />'
        });var format_Diciembrepromedio_64 = new ol.format.GeoJSON();
var features_Diciembrepromedio_64 = format_Diciembrepromedio_64.readFeatures(json_Diciembrepromedio_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diciembrepromedio_64 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diciembrepromedio_64.addFeatures(features_Diciembrepromedio_64);var lyr_Diciembrepromedio_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diciembrepromedio_64, 
                style: style_Diciembrepromedio_64,
    title: 'Diciembre - promedio<br />\
    <img src="styles/legend/Diciembrepromedio_64_0.png" /> 532.22<br />\
    <img src="styles/legend/Diciembrepromedio_64_1.png" /> 542.30<br />\
    <img src="styles/legend/Diciembrepromedio_64_2.png" /> 552.38<br />\
    <img src="styles/legend/Diciembrepromedio_64_3.png" /> 562.46<br />\
    <img src="styles/legend/Diciembrepromedio_64_4.png" /> 572.54<br />\
    <img src="styles/legend/Diciembrepromedio_64_5.png" /> 582.62<br />\
    <img src="styles/legend/Diciembrepromedio_64_6.png" /> 592.70<br />\
    <img src="styles/legend/Diciembrepromedio_64_7.png" /> 602.78<br />\
    <img src="styles/legend/Diciembrepromedio_64_8.png" /> 612.86<br />\
    <img src="styles/legend/Diciembrepromedio_64_9.png" /> 622.94<br />\
    <img src="styles/legend/Diciembrepromedio_64_10.png" /> 633.02<br />\
    <img src="styles/legend/Diciembrepromedio_64_11.png" /> 643.10<br />\
    <img src="styles/legend/Diciembrepromedio_64_12.png" /> 653.18<br />\
    <img src="styles/legend/Diciembrepromedio_64_13.png" /> 663.26<br />\
    <img src="styles/legend/Diciembrepromedio_64_14.png" /> 673.34<br />\
    <img src="styles/legend/Diciembrepromedio_64_15.png" /> 683.42<br />\
    <img src="styles/legend/Diciembrepromedio_64_16.png" /> 693.50<br />\
    <img src="styles/legend/Diciembrepromedio_64_17.png" /> 703.58<br />\
    <img src="styles/legend/Diciembrepromedio_64_18.png" /> 713.66<br />\
    <img src="styles/legend/Diciembrepromedio_64_19.png" /> 723.74<br />\
    <img src="styles/legend/Diciembrepromedio_64_20.png" /> 733.82<br />\
    <img src="styles/legend/Diciembrepromedio_64_21.png" /> 743.90<br />\
    <img src="styles/legend/Diciembrepromedio_64_22.png" /> 753.98<br />\
    <img src="styles/legend/Diciembrepromedio_64_23.png" /> 764.06<br />\
    <img src="styles/legend/Diciembrepromedio_64_24.png" /> 774.14<br />'
        });var format_Noviembrepromedio_65 = new ol.format.GeoJSON();
var features_Noviembrepromedio_65 = format_Noviembrepromedio_65.readFeatures(json_Noviembrepromedio_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noviembrepromedio_65 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noviembrepromedio_65.addFeatures(features_Noviembrepromedio_65);var lyr_Noviembrepromedio_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noviembrepromedio_65, 
                style: style_Noviembrepromedio_65,
    title: 'Noviembre - promedio<br />\
    <img src="styles/legend/Noviembrepromedio_65_0.png" /> 489.06<br />\
    <img src="styles/legend/Noviembrepromedio_65_1.png" /> 497.63<br />\
    <img src="styles/legend/Noviembrepromedio_65_2.png" /> 506.20<br />\
    <img src="styles/legend/Noviembrepromedio_65_3.png" /> 514.77<br />\
    <img src="styles/legend/Noviembrepromedio_65_4.png" /> 523.34<br />\
    <img src="styles/legend/Noviembrepromedio_65_5.png" /> 531.91<br />\
    <img src="styles/legend/Noviembrepromedio_65_6.png" /> 540.48<br />\
    <img src="styles/legend/Noviembrepromedio_65_7.png" /> 549.05<br />\
    <img src="styles/legend/Noviembrepromedio_65_8.png" /> 557.62<br />\
    <img src="styles/legend/Noviembrepromedio_65_9.png" /> 566.19<br />\
    <img src="styles/legend/Noviembrepromedio_65_10.png" /> 574.75<br />\
    <img src="styles/legend/Noviembrepromedio_65_11.png" /> 583.32<br />\
    <img src="styles/legend/Noviembrepromedio_65_12.png" /> 591.89<br />\
    <img src="styles/legend/Noviembrepromedio_65_13.png" /> 600.46<br />\
    <img src="styles/legend/Noviembrepromedio_65_14.png" /> 609.03<br />\
    <img src="styles/legend/Noviembrepromedio_65_15.png" /> 617.60<br />\
    <img src="styles/legend/Noviembrepromedio_65_16.png" /> 626.17<br />\
    <img src="styles/legend/Noviembrepromedio_65_17.png" /> 634.74<br />\
    <img src="styles/legend/Noviembrepromedio_65_18.png" /> 643.31<br />\
    <img src="styles/legend/Noviembrepromedio_65_19.png" /> 651.87<br />\
    <img src="styles/legend/Noviembrepromedio_65_20.png" /> 660.44<br />\
    <img src="styles/legend/Noviembrepromedio_65_21.png" /> 669.01<br />\
    <img src="styles/legend/Noviembrepromedio_65_22.png" /> 677.58<br />\
    <img src="styles/legend/Noviembrepromedio_65_23.png" /> 686.15<br />\
    <img src="styles/legend/Noviembrepromedio_65_24.png" /> 694.72<br />\
    <img src="styles/legend/Noviembrepromedio_65_25.png" /> 703.29<br />\
    <img src="styles/legend/Noviembrepromedio_65_26.png" /> 711.86<br />\
    <img src="styles/legend/Noviembrepromedio_65_27.png" /> 720.43<br />\
    <img src="styles/legend/Noviembrepromedio_65_28.png" /> 729.00<br />\
    <img src="styles/legend/Noviembrepromedio_65_29.png" /> 737.56<br />'
        });var format_Octubrepromedio_66 = new ol.format.GeoJSON();
var features_Octubrepromedio_66 = format_Octubrepromedio_66.readFeatures(json_Octubrepromedio_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Octubrepromedio_66 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Octubrepromedio_66.addFeatures(features_Octubrepromedio_66);var lyr_Octubrepromedio_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Octubrepromedio_66, 
                style: style_Octubrepromedio_66,
    title: 'Octubre - promedio<br />\
    <img src="styles/legend/Octubrepromedio_66_0.png" /> 311.56<br />\
    <img src="styles/legend/Octubrepromedio_66_1.png" /> 323.69<br />\
    <img src="styles/legend/Octubrepromedio_66_2.png" /> 335.83<br />\
    <img src="styles/legend/Octubrepromedio_66_3.png" /> 347.97<br />\
    <img src="styles/legend/Octubrepromedio_66_4.png" /> 360.11<br />\
    <img src="styles/legend/Octubrepromedio_66_5.png" /> 372.25<br />\
    <img src="styles/legend/Octubrepromedio_66_6.png" /> 384.39<br />\
    <img src="styles/legend/Octubrepromedio_66_7.png" /> 396.53<br />\
    <img src="styles/legend/Octubrepromedio_66_8.png" /> 408.67<br />\
    <img src="styles/legend/Octubrepromedio_66_9.png" /> 420.81<br />\
    <img src="styles/legend/Octubrepromedio_66_10.png" /> 432.95<br />\
    <img src="styles/legend/Octubrepromedio_66_11.png" /> 445.09<br />\
    <img src="styles/legend/Octubrepromedio_66_12.png" /> 457.23<br />\
    <img src="styles/legend/Octubrepromedio_66_13.png" /> 469.37<br />\
    <img src="styles/legend/Octubrepromedio_66_14.png" /> 481.51<br />\
    <img src="styles/legend/Octubrepromedio_66_15.png" /> 493.65<br />\
    <img src="styles/legend/Octubrepromedio_66_16.png" /> 505.79<br />\
    <img src="styles/legend/Octubrepromedio_66_17.png" /> 517.93<br />\
    <img src="styles/legend/Octubrepromedio_66_18.png" /> 530.07<br />\
    <img src="styles/legend/Octubrepromedio_66_19.png" /> 542.21<br />\
    <img src="styles/legend/Octubrepromedio_66_20.png" /> 554.35<br />\
    <img src="styles/legend/Octubrepromedio_66_21.png" /> 566.49<br />\
    <img src="styles/legend/Octubrepromedio_66_22.png" /> 578.62<br />\
    <img src="styles/legend/Octubrepromedio_66_23.png" /> 590.76<br />\
    <img src="styles/legend/Octubrepromedio_66_24.png" /> 602.90<br />\
    <img src="styles/legend/Octubrepromedio_66_25.png" /> 615.04<br />\
    <img src="styles/legend/Octubrepromedio_66_26.png" /> 627.18<br />\
    <img src="styles/legend/Octubrepromedio_66_27.png" /> 639.32<br />\
    <img src="styles/legend/Octubrepromedio_66_28.png" /> 651.46<br />\
    <img src="styles/legend/Octubrepromedio_66_29.png" /> 663.60<br />\
    <img src="styles/legend/Octubrepromedio_66_30.png" /> 675.74<br />\
    <img src="styles/legend/Octubrepromedio_66_31.png" /> 687.88<br />'
        });var format_Septiembrepromedio_67 = new ol.format.GeoJSON();
var features_Septiembrepromedio_67 = format_Septiembrepromedio_67.readFeatures(json_Septiembrepromedio_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Septiembrepromedio_67 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Septiembrepromedio_67.addFeatures(features_Septiembrepromedio_67);var lyr_Septiembrepromedio_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Septiembrepromedio_67, 
                style: style_Septiembrepromedio_67,
    title: 'Septiembre - promedio<br />\
    <img src="styles/legend/Septiembrepromedio_67_0.png" /> 337.15<br />\
    <img src="styles/legend/Septiembrepromedio_67_1.png" /> 345.91<br />\
    <img src="styles/legend/Septiembrepromedio_67_2.png" /> 354.67<br />\
    <img src="styles/legend/Septiembrepromedio_67_3.png" /> 363.42<br />\
    <img src="styles/legend/Septiembrepromedio_67_4.png" /> 372.18<br />\
    <img src="styles/legend/Septiembrepromedio_67_5.png" /> 380.94<br />\
    <img src="styles/legend/Septiembrepromedio_67_6.png" /> 389.70<br />\
    <img src="styles/legend/Septiembrepromedio_67_7.png" /> 398.46<br />\
    <img src="styles/legend/Septiembrepromedio_67_8.png" /> 407.22<br />\
    <img src="styles/legend/Septiembrepromedio_67_9.png" /> 415.98<br />\
    <img src="styles/legend/Septiembrepromedio_67_10.png" /> 424.74<br />\
    <img src="styles/legend/Septiembrepromedio_67_11.png" /> 433.50<br />\
    <img src="styles/legend/Septiembrepromedio_67_12.png" /> 442.25<br />\
    <img src="styles/legend/Septiembrepromedio_67_13.png" /> 451.01<br />\
    <img src="styles/legend/Septiembrepromedio_67_14.png" /> 459.77<br />\
    <img src="styles/legend/Septiembrepromedio_67_15.png" /> 468.53<br />\
    <img src="styles/legend/Septiembrepromedio_67_16.png" /> 477.29<br />\
    <img src="styles/legend/Septiembrepromedio_67_17.png" /> 486.05<br />\
    <img src="styles/legend/Septiembrepromedio_67_18.png" /> 494.81<br />\
    <img src="styles/legend/Septiembrepromedio_67_19.png" /> 503.57<br />\
    <img src="styles/legend/Septiembrepromedio_67_20.png" /> 512.33<br />\
    <img src="styles/legend/Septiembrepromedio_67_21.png" /> 521.08<br />\
    <img src="styles/legend/Septiembrepromedio_67_22.png" /> 529.84<br />\
    <img src="styles/legend/Septiembrepromedio_67_23.png" /> 538.60<br />\
    <img src="styles/legend/Septiembrepromedio_67_24.png" /> 547.36<br />\
    <img src="styles/legend/Septiembrepromedio_67_25.png" /> 556.12<br />\
    <img src="styles/legend/Septiembrepromedio_67_26.png" /> 564.88<br />\
    <img src="styles/legend/Septiembrepromedio_67_27.png" /> 573.64<br />\
    <img src="styles/legend/Septiembrepromedio_67_28.png" /> 582.40<br />\
    <img src="styles/legend/Septiembrepromedio_67_29.png" /> 591.16<br />\
    <img src="styles/legend/Septiembrepromedio_67_30.png" /> 599.91<br />\
    <img src="styles/legend/Septiembrepromedio_67_31.png" /> 608.67<br />'
        });var format_Agostopromedio_68 = new ol.format.GeoJSON();
var features_Agostopromedio_68 = format_Agostopromedio_68.readFeatures(json_Agostopromedio_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agostopromedio_68 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Agostopromedio_68.addFeatures(features_Agostopromedio_68);var lyr_Agostopromedio_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agostopromedio_68, 
                style: style_Agostopromedio_68,
    title: 'Agosto - promedio<br />\
    <img src="styles/legend/Agostopromedio_68_0.png" /> 305.71<br />\
    <img src="styles/legend/Agostopromedio_68_1.png" /> 314.33<br />\
    <img src="styles/legend/Agostopromedio_68_2.png" /> 322.96<br />\
    <img src="styles/legend/Agostopromedio_68_3.png" /> 331.58<br />\
    <img src="styles/legend/Agostopromedio_68_4.png" /> 340.21<br />\
    <img src="styles/legend/Agostopromedio_68_5.png" /> 348.83<br />\
    <img src="styles/legend/Agostopromedio_68_6.png" /> 357.46<br />\
    <img src="styles/legend/Agostopromedio_68_7.png" /> 366.08<br />\
    <img src="styles/legend/Agostopromedio_68_8.png" /> 374.71<br />\
    <img src="styles/legend/Agostopromedio_68_9.png" /> 383.33<br />\
    <img src="styles/legend/Agostopromedio_68_10.png" /> 391.96<br />\
    <img src="styles/legend/Agostopromedio_68_11.png" /> 400.58<br />\
    <img src="styles/legend/Agostopromedio_68_12.png" /> 409.21<br />\
    <img src="styles/legend/Agostopromedio_68_13.png" /> 417.83<br />\
    <img src="styles/legend/Agostopromedio_68_14.png" /> 426.46<br />\
    <img src="styles/legend/Agostopromedio_68_15.png" /> 435.08<br />\
    <img src="styles/legend/Agostopromedio_68_16.png" /> 443.71<br />\
    <img src="styles/legend/Agostopromedio_68_17.png" /> 452.33<br />'
        });var format_Juliopromedio_69 = new ol.format.GeoJSON();
var features_Juliopromedio_69 = format_Juliopromedio_69.readFeatures(json_Juliopromedio_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juliopromedio_69 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Juliopromedio_69.addFeatures(features_Juliopromedio_69);var lyr_Juliopromedio_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juliopromedio_69, 
                style: style_Juliopromedio_69,
    title: 'Julio - promedio<br />\
    <img src="styles/legend/Juliopromedio_69_0.png" /> 219.68<br />\
    <img src="styles/legend/Juliopromedio_69_1.png" /> 227.75<br />\
    <img src="styles/legend/Juliopromedio_69_2.png" /> 235.82<br />\
    <img src="styles/legend/Juliopromedio_69_3.png" /> 243.89<br />\
    <img src="styles/legend/Juliopromedio_69_4.png" /> 251.95<br />\
    <img src="styles/legend/Juliopromedio_69_5.png" /> 260.02<br />\
    <img src="styles/legend/Juliopromedio_69_6.png" /> 268.09<br />\
    <img src="styles/legend/Juliopromedio_69_7.png" /> 276.16<br />\
    <img src="styles/legend/Juliopromedio_69_8.png" /> 284.22<br />\
    <img src="styles/legend/Juliopromedio_69_9.png" /> 292.29<br />\
    <img src="styles/legend/Juliopromedio_69_10.png" /> 300.36<br />\
    <img src="styles/legend/Juliopromedio_69_11.png" /> 308.43<br />\
    <img src="styles/legend/Juliopromedio_69_12.png" /> 316.50<br />\
    <img src="styles/legend/Juliopromedio_69_13.png" /> 324.56<br />\
    <img src="styles/legend/Juliopromedio_69_14.png" /> 332.63<br />\
    <img src="styles/legend/Juliopromedio_69_15.png" /> 340.70<br />\
    <img src="styles/legend/Juliopromedio_69_16.png" /> 348.77<br />\
    <img src="styles/legend/Juliopromedio_69_17.png" /> 356.83<br />\
    <img src="styles/legend/Juliopromedio_69_18.png" /> 364.90<br />\
    <img src="styles/legend/Juliopromedio_69_19.png" /> 372.97<br />\
    <img src="styles/legend/Juliopromedio_69_20.png" /> 381.04<br />\
    <img src="styles/legend/Juliopromedio_69_21.png" /> 389.11<br />'
        });var format_Juniopromedio_70 = new ol.format.GeoJSON();
var features_Juniopromedio_70 = format_Juniopromedio_70.readFeatures(json_Juniopromedio_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juniopromedio_70 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Juniopromedio_70.addFeatures(features_Juniopromedio_70);var lyr_Juniopromedio_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juniopromedio_70, 
                style: style_Juniopromedio_70,
    title: 'Junio - promedio<br />\
    <img src="styles/legend/Juniopromedio_70_0.png" /> 256.25<br />\
    <img src="styles/legend/Juniopromedio_70_1.png" /> 264.17<br />\
    <img src="styles/legend/Juniopromedio_70_2.png" /> 272.09<br />\
    <img src="styles/legend/Juniopromedio_70_3.png" /> 280.01<br />\
    <img src="styles/legend/Juniopromedio_70_4.png" /> 287.93<br />\
    <img src="styles/legend/Juniopromedio_70_5.png" /> 295.85<br />\
    <img src="styles/legend/Juniopromedio_70_6.png" /> 303.77<br />\
    <img src="styles/legend/Juniopromedio_70_7.png" /> 311.69<br />\
    <img src="styles/legend/Juniopromedio_70_8.png" /> 319.61<br />\
    <img src="styles/legend/Juniopromedio_70_9.png" /> 327.53<br />\
    <img src="styles/legend/Juniopromedio_70_10.png" /> 335.45<br />\
    <img src="styles/legend/Juniopromedio_70_11.png" /> 343.37<br />\
    <img src="styles/legend/Juniopromedio_70_12.png" /> 351.29<br />\
    <img src="styles/legend/Juniopromedio_70_13.png" /> 359.21<br />\
    <img src="styles/legend/Juniopromedio_70_14.png" /> 367.13<br />\
    <img src="styles/legend/Juniopromedio_70_15.png" /> 375.05<br />\
    <img src="styles/legend/Juniopromedio_70_16.png" /> 382.97<br />\
    <img src="styles/legend/Juniopromedio_70_17.png" /> 390.89<br />\
    <img src="styles/legend/Juniopromedio_70_18.png" /> 398.81<br />'
        });var format_Mayopromedio_71 = new ol.format.GeoJSON();
var features_Mayopromedio_71 = format_Mayopromedio_71.readFeatures(json_Mayopromedio_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayopromedio_71 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mayopromedio_71.addFeatures(features_Mayopromedio_71);var lyr_Mayopromedio_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayopromedio_71, 
                style: style_Mayopromedio_71,
    title: 'Mayo - promedio<br />\
    <img src="styles/legend/Mayopromedio_71_0.png" /> 287.93<br />\
    <img src="styles/legend/Mayopromedio_71_1.png" /> 295.17<br />\
    <img src="styles/legend/Mayopromedio_71_2.png" /> 302.41<br />\
    <img src="styles/legend/Mayopromedio_71_3.png" /> 309.65<br />\
    <img src="styles/legend/Mayopromedio_71_4.png" /> 316.89<br />\
    <img src="styles/legend/Mayopromedio_71_5.png" /> 324.13<br />\
    <img src="styles/legend/Mayopromedio_71_6.png" /> 331.37<br />\
    <img src="styles/legend/Mayopromedio_71_7.png" /> 338.61<br />\
    <img src="styles/legend/Mayopromedio_71_8.png" /> 345.85<br />\
    <img src="styles/legend/Mayopromedio_71_9.png" /> 353.09<br />\
    <img src="styles/legend/Mayopromedio_71_10.png" /> 360.33<br />\
    <img src="styles/legend/Mayopromedio_71_11.png" /> 367.57<br />\
    <img src="styles/legend/Mayopromedio_71_12.png" /> 374.81<br />\
    <img src="styles/legend/Mayopromedio_71_13.png" /> 382.05<br />\
    <img src="styles/legend/Mayopromedio_71_14.png" /> 389.29<br />\
    <img src="styles/legend/Mayopromedio_71_15.png" /> 396.53<br />\
    <img src="styles/legend/Mayopromedio_71_16.png" /> 403.77<br />\
    <img src="styles/legend/Mayopromedio_71_17.png" /> 411.01<br />\
    <img src="styles/legend/Mayopromedio_71_18.png" /> 418.25<br />\
    <img src="styles/legend/Mayopromedio_71_19.png" /> 425.49<br />\
    <img src="styles/legend/Mayopromedio_71_20.png" /> 432.73<br />\
    <img src="styles/legend/Mayopromedio_71_21.png" /> 439.97<br />\
    <img src="styles/legend/Mayopromedio_71_22.png" /> 447.21<br />\
    <img src="styles/legend/Mayopromedio_71_23.png" /> 454.45<br />\
    <img src="styles/legend/Mayopromedio_71_24.png" /> 461.69<br />\
    <img src="styles/legend/Mayopromedio_71_25.png" /> 468.93<br />\
    <img src="styles/legend/Mayopromedio_71_26.png" /> 476.17<br />'
        });var format_Abrilpromedio_72 = new ol.format.GeoJSON();
var features_Abrilpromedio_72 = format_Abrilpromedio_72.readFeatures(json_Abrilpromedio_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abrilpromedio_72 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Abrilpromedio_72.addFeatures(features_Abrilpromedio_72);var lyr_Abrilpromedio_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abrilpromedio_72, 
                style: style_Abrilpromedio_72,
    title: 'Abril - promedio<br />\
    <img src="styles/legend/Abrilpromedio_72_0.png" /> 319.12<br />\
    <img src="styles/legend/Abrilpromedio_72_1.png" /> 327.51<br />\
    <img src="styles/legend/Abrilpromedio_72_2.png" /> 335.91<br />\
    <img src="styles/legend/Abrilpromedio_72_3.png" /> 344.31<br />\
    <img src="styles/legend/Abrilpromedio_72_4.png" /> 352.71<br />\
    <img src="styles/legend/Abrilpromedio_72_5.png" /> 361.11<br />\
    <img src="styles/legend/Abrilpromedio_72_6.png" /> 369.51<br />\
    <img src="styles/legend/Abrilpromedio_72_7.png" /> 377.90<br />\
    <img src="styles/legend/Abrilpromedio_72_8.png" /> 386.30<br />\
    <img src="styles/legend/Abrilpromedio_72_9.png" /> 394.70<br />\
    <img src="styles/legend/Abrilpromedio_72_10.png" /> 403.10<br />\
    <img src="styles/legend/Abrilpromedio_72_11.png" /> 411.50<br />\
    <img src="styles/legend/Abrilpromedio_72_12.png" /> 419.89<br />\
    <img src="styles/legend/Abrilpromedio_72_13.png" /> 428.29<br />\
    <img src="styles/legend/Abrilpromedio_72_14.png" /> 436.69<br />\
    <img src="styles/legend/Abrilpromedio_72_15.png" /> 445.09<br />\
    <img src="styles/legend/Abrilpromedio_72_16.png" /> 453.49<br />\
    <img src="styles/legend/Abrilpromedio_72_17.png" /> 461.89<br />\
    <img src="styles/legend/Abrilpromedio_72_18.png" /> 470.28<br />\
    <img src="styles/legend/Abrilpromedio_72_19.png" /> 478.68<br />\
    <img src="styles/legend/Abrilpromedio_72_20.png" /> 487.08<br />\
    <img src="styles/legend/Abrilpromedio_72_21.png" /> 495.48<br />\
    <img src="styles/legend/Abrilpromedio_72_22.png" /> 503.88<br />\
    <img src="styles/legend/Abrilpromedio_72_23.png" /> 512.27<br />\
    <img src="styles/legend/Abrilpromedio_72_24.png" /> 520.67<br />\
    <img src="styles/legend/Abrilpromedio_72_25.png" /> 529.07<br />\
    <img src="styles/legend/Abrilpromedio_72_26.png" /> 537.47<br />\
    <img src="styles/legend/Abrilpromedio_72_27.png" /> 545.87<br />\
    <img src="styles/legend/Abrilpromedio_72_28.png" /> 554.27<br />'
        });var format_Marzopromedio_73 = new ol.format.GeoJSON();
var features_Marzopromedio_73 = format_Marzopromedio_73.readFeatures(json_Marzopromedio_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marzopromedio_73 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Marzopromedio_73.addFeatures(features_Marzopromedio_73);var lyr_Marzopromedio_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marzopromedio_73, 
                style: style_Marzopromedio_73,
    title: 'Marzo - promedio<br />\
    <img src="styles/legend/Marzopromedio_73_0.png" /> 340.64<br />\
    <img src="styles/legend/Marzopromedio_73_1.png" /> 352.24<br />\
    <img src="styles/legend/Marzopromedio_73_2.png" /> 363.84<br />\
    <img src="styles/legend/Marzopromedio_73_3.png" /> 375.43<br />\
    <img src="styles/legend/Marzopromedio_73_4.png" /> 387.03<br />\
    <img src="styles/legend/Marzopromedio_73_5.png" /> 398.62<br />\
    <img src="styles/legend/Marzopromedio_73_6.png" /> 410.22<br />\
    <img src="styles/legend/Marzopromedio_73_7.png" /> 421.81<br />\
    <img src="styles/legend/Marzopromedio_73_8.png" /> 433.41<br />\
    <img src="styles/legend/Marzopromedio_73_9.png" /> 445.01<br />\
    <img src="styles/legend/Marzopromedio_73_10.png" /> 456.60<br />\
    <img src="styles/legend/Marzopromedio_73_11.png" /> 468.20<br />\
    <img src="styles/legend/Marzopromedio_73_12.png" /> 479.79<br />\
    <img src="styles/legend/Marzopromedio_73_13.png" /> 491.39<br />\
    <img src="styles/legend/Marzopromedio_73_14.png" /> 502.98<br />\
    <img src="styles/legend/Marzopromedio_73_15.png" /> 514.58<br />\
    <img src="styles/legend/Marzopromedio_73_16.png" /> 526.17<br />\
    <img src="styles/legend/Marzopromedio_73_17.png" /> 537.77<br />\
    <img src="styles/legend/Marzopromedio_73_18.png" /> 549.36<br />\
    <img src="styles/legend/Marzopromedio_73_19.png" /> 560.96<br />\
    <img src="styles/legend/Marzopromedio_73_20.png" /> 572.56<br />\
    <img src="styles/legend/Marzopromedio_73_21.png" /> 584.15<br />\
    <img src="styles/legend/Marzopromedio_73_22.png" /> 595.75<br />\
    <img src="styles/legend/Marzopromedio_73_23.png" /> 607.34<br />\
    <img src="styles/legend/Marzopromedio_73_24.png" /> 618.94<br />\
    <img src="styles/legend/Marzopromedio_73_25.png" /> 630.53<br />\
    <img src="styles/legend/Marzopromedio_73_26.png" /> 642.13<br />\
    <img src="styles/legend/Marzopromedio_73_27.png" /> 653.73<br />\
    <img src="styles/legend/Marzopromedio_73_28.png" /> 665.32<br />'
        });var format_Febreropromedio_74 = new ol.format.GeoJSON();
var features_Febreropromedio_74 = format_Febreropromedio_74.readFeatures(json_Febreropromedio_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Febreropromedio_74 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Febreropromedio_74.addFeatures(features_Febreropromedio_74);var lyr_Febreropromedio_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Febreropromedio_74, 
                style: style_Febreropromedio_74,
    title: 'Febrero - promedio<br />\
    <img src="styles/legend/Febreropromedio_74_0.png" /> 388.53<br />\
    <img src="styles/legend/Febreropromedio_74_1.png" /> 399.15<br />\
    <img src="styles/legend/Febreropromedio_74_2.png" /> 409.76<br />\
    <img src="styles/legend/Febreropromedio_74_3.png" /> 420.38<br />\
    <img src="styles/legend/Febreropromedio_74_4.png" /> 431.00<br />\
    <img src="styles/legend/Febreropromedio_74_5.png" /> 441.62<br />\
    <img src="styles/legend/Febreropromedio_74_6.png" /> 452.23<br />\
    <img src="styles/legend/Febreropromedio_74_7.png" /> 462.85<br />\
    <img src="styles/legend/Febreropromedio_74_8.png" /> 473.47<br />\
    <img src="styles/legend/Febreropromedio_74_9.png" /> 484.09<br />\
    <img src="styles/legend/Febreropromedio_74_10.png" /> 494.70<br />\
    <img src="styles/legend/Febreropromedio_74_11.png" /> 505.32<br />\
    <img src="styles/legend/Febreropromedio_74_12.png" /> 515.94<br />\
    <img src="styles/legend/Febreropromedio_74_13.png" /> 526.56<br />\
    <img src="styles/legend/Febreropromedio_74_14.png" /> 537.17<br />\
    <img src="styles/legend/Febreropromedio_74_15.png" /> 547.79<br />\
    <img src="styles/legend/Febreropromedio_74_16.png" /> 558.41<br />\
    <img src="styles/legend/Febreropromedio_74_17.png" /> 569.03<br />\
    <img src="styles/legend/Febreropromedio_74_18.png" /> 579.65<br />\
    <img src="styles/legend/Febreropromedio_74_19.png" /> 590.26<br />\
    <img src="styles/legend/Febreropromedio_74_20.png" /> 600.88<br />\
    <img src="styles/legend/Febreropromedio_74_21.png" /> 611.50<br />\
    <img src="styles/legend/Febreropromedio_74_22.png" /> 622.12<br />\
    <img src="styles/legend/Febreropromedio_74_23.png" /> 632.73<br />\
    <img src="styles/legend/Febreropromedio_74_24.png" /> 643.35<br />\
    <img src="styles/legend/Febreropromedio_74_25.png" /> 653.97<br />\
    <img src="styles/legend/Febreropromedio_74_26.png" /> 664.59<br />\
    <img src="styles/legend/Febreropromedio_74_27.png" /> 675.20<br />\
    <img src="styles/legend/Febreropromedio_74_28.png" /> 685.82<br />\
    <img src="styles/legend/Febreropromedio_74_29.png" /> 696.44<br />\
    <img src="styles/legend/Febreropromedio_74_30.png" /> 707.06<br />\
    <img src="styles/legend/Febreropromedio_74_31.png" /> 717.67<br />\
    <img src="styles/legend/Febreropromedio_74_32.png" /> 728.29<br />'
        });var format_Eneropromedio_75 = new ol.format.GeoJSON();
var features_Eneropromedio_75 = format_Eneropromedio_75.readFeatures(json_Eneropromedio_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eneropromedio_75 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Eneropromedio_75.addFeatures(features_Eneropromedio_75);var lyr_Eneropromedio_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eneropromedio_75, 
                style: style_Eneropromedio_75,
    title: 'Enero - promedio<br />\
    <img src="styles/legend/Eneropromedio_75_0.png" /> 461.28<br />\
    <img src="styles/legend/Eneropromedio_75_1.png" /> 473.34<br />\
    <img src="styles/legend/Eneropromedio_75_2.png" /> 485.41<br />\
    <img src="styles/legend/Eneropromedio_75_3.png" /> 497.47<br />\
    <img src="styles/legend/Eneropromedio_75_4.png" /> 509.54<br />\
    <img src="styles/legend/Eneropromedio_75_5.png" /> 521.60<br />\
    <img src="styles/legend/Eneropromedio_75_6.png" /> 533.66<br />\
    <img src="styles/legend/Eneropromedio_75_7.png" /> 545.73<br />\
    <img src="styles/legend/Eneropromedio_75_8.png" /> 557.79<br />\
    <img src="styles/legend/Eneropromedio_75_9.png" /> 569.85<br />\
    <img src="styles/legend/Eneropromedio_75_10.png" /> 581.92<br />\
    <img src="styles/legend/Eneropromedio_75_11.png" /> 593.98<br />\
    <img src="styles/legend/Eneropromedio_75_12.png" /> 606.04<br />\
    <img src="styles/legend/Eneropromedio_75_13.png" /> 618.11<br />\
    <img src="styles/legend/Eneropromedio_75_14.png" /> 630.17<br />\
    <img src="styles/legend/Eneropromedio_75_15.png" /> 642.24<br />\
    <img src="styles/legend/Eneropromedio_75_16.png" /> 654.30<br />\
    <img src="styles/legend/Eneropromedio_75_17.png" /> 666.36<br />\
    <img src="styles/legend/Eneropromedio_75_18.png" /> 678.43<br />\
    <img src="styles/legend/Eneropromedio_75_19.png" /> 690.49<br />\
    <img src="styles/legend/Eneropromedio_75_20.png" /> 702.55<br />\
    <img src="styles/legend/Eneropromedio_75_21.png" /> 714.62<br />\
    <img src="styles/legend/Eneropromedio_75_22.png" /> 726.68<br />\
    <img src="styles/legend/Eneropromedio_75_23.png" /> 738.74<br />\
    <img src="styles/legend/Eneropromedio_75_24.png" /> 750.81<br />\
    <img src="styles/legend/Eneropromedio_75_25.png" /> 762.87<br />\
    <img src="styles/legend/Eneropromedio_75_26.png" /> 774.94<br />\
    <img src="styles/legend/Eneropromedio_75_27.png" /> 787.00<br />'
        });var format_Diciembremximo_76 = new ol.format.GeoJSON();
var features_Diciembremximo_76 = format_Diciembremximo_76.readFeatures(json_Diciembremximo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diciembremximo_76 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diciembremximo_76.addFeatures(features_Diciembremximo_76);var lyr_Diciembremximo_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diciembremximo_76, 
                style: style_Diciembremximo_76,
    title: 'Diciembre - máximo<br />\
    <img src="styles/legend/Diciembremximo_76_0.png" /> 1110.61<br />\
    <img src="styles/legend/Diciembremximo_76_1.png" /> 1117.21<br />\
    <img src="styles/legend/Diciembremximo_76_2.png" /> 1123.80<br />\
    <img src="styles/legend/Diciembremximo_76_3.png" /> 1130.39<br />\
    <img src="styles/legend/Diciembremximo_76_4.png" /> 1136.99<br />\
    <img src="styles/legend/Diciembremximo_76_5.png" /> 1143.58<br />\
    <img src="styles/legend/Diciembremximo_76_6.png" /> 1150.18<br />\
    <img src="styles/legend/Diciembremximo_76_7.png" /> 1156.77<br />\
    <img src="styles/legend/Diciembremximo_76_8.png" /> 1163.37<br />\
    <img src="styles/legend/Diciembremximo_76_9.png" /> 1169.96<br />\
    <img src="styles/legend/Diciembremximo_76_10.png" /> 1176.55<br />\
    <img src="styles/legend/Diciembremximo_76_11.png" /> 1183.15<br />\
    <img src="styles/legend/Diciembremximo_76_12.png" /> 1189.74<br />\
    <img src="styles/legend/Diciembremximo_76_13.png" /> 1196.34<br />\
    <img src="styles/legend/Diciembremximo_76_14.png" /> 1202.93<br />\
    <img src="styles/legend/Diciembremximo_76_15.png" /> 1209.52<br />\
    <img src="styles/legend/Diciembremximo_76_16.png" /> 1216.12<br />\
    <img src="styles/legend/Diciembremximo_76_17.png" /> 1222.71<br />\
    <img src="styles/legend/Diciembremximo_76_18.png" /> 1229.31<br />\
    <img src="styles/legend/Diciembremximo_76_19.png" /> 1235.90<br />\
    <img src="styles/legend/Diciembremximo_76_20.png" /> 1242.50<br />\
    <img src="styles/legend/Diciembremximo_76_21.png" /> 1249.09<br />\
    <img src="styles/legend/Diciembremximo_76_22.png" /> 1255.68<br />\
    <img src="styles/legend/Diciembremximo_76_23.png" /> 1262.28<br />\
    <img src="styles/legend/Diciembremximo_76_24.png" /> 1268.87<br />\
    <img src="styles/legend/Diciembremximo_76_25.png" /> 1275.47<br />\
    <img src="styles/legend/Diciembremximo_76_26.png" /> 1282.06<br />\
    <img src="styles/legend/Diciembremximo_76_27.png" /> 1288.65<br />\
    <img src="styles/legend/Diciembremximo_76_28.png" /> 1295.25<br />\
    <img src="styles/legend/Diciembremximo_76_29.png" /> 1301.84<br />\
    <img src="styles/legend/Diciembremximo_76_30.png" /> 1308.44<br />'
        });var format_Noviembremximo_77 = new ol.format.GeoJSON();
var features_Noviembremximo_77 = format_Noviembremximo_77.readFeatures(json_Noviembremximo_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noviembremximo_77 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Noviembremximo_77.addFeatures(features_Noviembremximo_77);var lyr_Noviembremximo_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Noviembremximo_77, 
                style: style_Noviembremximo_77,
    title: 'Noviembre - máximo<br />\
    <img src="styles/legend/Noviembremximo_77_0.png" /> 1105.93<br />\
    <img src="styles/legend/Noviembremximo_77_1.png" /> 1112.07<br />\
    <img src="styles/legend/Noviembremximo_77_2.png" /> 1118.21<br />\
    <img src="styles/legend/Noviembremximo_77_3.png" /> 1124.35<br />\
    <img src="styles/legend/Noviembremximo_77_4.png" /> 1130.49<br />\
    <img src="styles/legend/Noviembremximo_77_5.png" /> 1136.63<br />\
    <img src="styles/legend/Noviembremximo_77_6.png" /> 1142.77<br />\
    <img src="styles/legend/Noviembremximo_77_7.png" /> 1148.91<br />\
    <img src="styles/legend/Noviembremximo_77_8.png" /> 1155.05<br />\
    <img src="styles/legend/Noviembremximo_77_9.png" /> 1161.19<br />\
    <img src="styles/legend/Noviembremximo_77_10.png" /> 1167.33<br />\
    <img src="styles/legend/Noviembremximo_77_11.png" /> 1173.47<br />\
    <img src="styles/legend/Noviembremximo_77_12.png" /> 1179.61<br />\
    <img src="styles/legend/Noviembremximo_77_13.png" /> 1185.75<br />\
    <img src="styles/legend/Noviembremximo_77_14.png" /> 1191.89<br />\
    <img src="styles/legend/Noviembremximo_77_15.png" /> 1198.03<br />\
    <img src="styles/legend/Noviembremximo_77_16.png" /> 1204.17<br />\
    <img src="styles/legend/Noviembremximo_77_17.png" /> 1210.31<br />\
    <img src="styles/legend/Noviembremximo_77_18.png" /> 1216.45<br />\
    <img src="styles/legend/Noviembremximo_77_19.png" /> 1222.59<br />\
    <img src="styles/legend/Noviembremximo_77_20.png" /> 1228.73<br />\
    <img src="styles/legend/Noviembremximo_77_21.png" /> 1234.87<br />\
    <img src="styles/legend/Noviembremximo_77_22.png" /> 1241.01<br />\
    <img src="styles/legend/Noviembremximo_77_23.png" /> 1247.15<br />\
    <img src="styles/legend/Noviembremximo_77_24.png" /> 1253.29<br />\
    <img src="styles/legend/Noviembremximo_77_25.png" /> 1259.43<br />\
    <img src="styles/legend/Noviembremximo_77_26.png" /> 1265.57<br />\
    <img src="styles/legend/Noviembremximo_77_27.png" /> 1271.71<br />\
    <img src="styles/legend/Noviembremximo_77_28.png" /> 1277.85<br />\
    <img src="styles/legend/Noviembremximo_77_29.png" /> 1283.99<br />'
        });var format_Octubremximo_78 = new ol.format.GeoJSON();
var features_Octubremximo_78 = format_Octubremximo_78.readFeatures(json_Octubremximo_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Octubremximo_78 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Octubremximo_78.addFeatures(features_Octubremximo_78);var lyr_Octubremximo_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Octubremximo_78, 
                style: style_Octubremximo_78,
    title: 'Octubre - máximo<br />\
    <img src="styles/legend/Octubremximo_78_0.png" /> 982.13<br />\
    <img src="styles/legend/Octubremximo_78_1.png" /> 989.72<br />\
    <img src="styles/legend/Octubremximo_78_2.png" /> 997.30<br />\
    <img src="styles/legend/Octubremximo_78_3.png" /> 1004.89<br />\
    <img src="styles/legend/Octubremximo_78_4.png" /> 1012.48<br />\
    <img src="styles/legend/Octubremximo_78_5.png" /> 1020.07<br />\
    <img src="styles/legend/Octubremximo_78_6.png" /> 1027.66<br />\
    <img src="styles/legend/Octubremximo_78_7.png" /> 1035.24<br />\
    <img src="styles/legend/Octubremximo_78_8.png" /> 1042.83<br />\
    <img src="styles/legend/Octubremximo_78_9.png" /> 1050.42<br />\
    <img src="styles/legend/Octubremximo_78_10.png" /> 1058.01<br />\
    <img src="styles/legend/Octubremximo_78_11.png" /> 1065.60<br />\
    <img src="styles/legend/Octubremximo_78_12.png" /> 1073.19<br />\
    <img src="styles/legend/Octubremximo_78_13.png" /> 1080.77<br />\
    <img src="styles/legend/Octubremximo_78_14.png" /> 1088.36<br />\
    <img src="styles/legend/Octubremximo_78_15.png" /> 1095.95<br />\
    <img src="styles/legend/Octubremximo_78_16.png" /> 1103.54<br />\
    <img src="styles/legend/Octubremximo_78_17.png" /> 1111.13<br />\
    <img src="styles/legend/Octubremximo_78_18.png" /> 1118.71<br />\
    <img src="styles/legend/Octubremximo_78_19.png" /> 1126.30<br />\
    <img src="styles/legend/Octubremximo_78_20.png" /> 1133.89<br />\
    <img src="styles/legend/Octubremximo_78_21.png" /> 1141.48<br />\
    <img src="styles/legend/Octubremximo_78_22.png" /> 1149.07<br />\
    <img src="styles/legend/Octubremximo_78_23.png" /> 1156.66<br />\
    <img src="styles/legend/Octubremximo_78_24.png" /> 1164.24<br />\
    <img src="styles/legend/Octubremximo_78_25.png" /> 1171.83<br />\
    <img src="styles/legend/Octubremximo_78_26.png" /> 1179.42<br />\
    <img src="styles/legend/Octubremximo_78_27.png" /> 1187.01<br />\
    <img src="styles/legend/Octubremximo_78_28.png" /> 1194.60<br />\
    <img src="styles/legend/Octubremximo_78_29.png" /> 1202.19<br />'
        });var format_Septiembremximo_79 = new ol.format.GeoJSON();
var features_Septiembremximo_79 = format_Septiembremximo_79.readFeatures(json_Septiembremximo_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Septiembremximo_79 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Septiembremximo_79.addFeatures(features_Septiembremximo_79);var lyr_Septiembremximo_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Septiembremximo_79, 
                style: style_Septiembremximo_79,
    title: 'Septiembre - máximo<br />\
    <img src="styles/legend/Septiembremximo_79_0.png" /> 892.53<br />\
    <img src="styles/legend/Septiembremximo_79_1.png" /> 901.15<br />\
    <img src="styles/legend/Septiembremximo_79_2.png" /> 909.77<br />\
    <img src="styles/legend/Septiembremximo_79_3.png" /> 918.39<br />\
    <img src="styles/legend/Septiembremximo_79_4.png" /> 927.01<br />\
    <img src="styles/legend/Septiembremximo_79_5.png" /> 935.63<br />\
    <img src="styles/legend/Septiembremximo_79_6.png" /> 944.25<br />\
    <img src="styles/legend/Septiembremximo_79_7.png" /> 952.87<br />\
    <img src="styles/legend/Septiembremximo_79_8.png" /> 961.49<br />\
    <img src="styles/legend/Septiembremximo_79_9.png" /> 970.11<br />\
    <img src="styles/legend/Septiembremximo_79_10.png" /> 978.73<br />\
    <img src="styles/legend/Septiembremximo_79_11.png" /> 987.35<br />\
    <img src="styles/legend/Septiembremximo_79_12.png" /> 995.97<br />\
    <img src="styles/legend/Septiembremximo_79_13.png" /> 1004.59<br />\
    <img src="styles/legend/Septiembremximo_79_14.png" /> 1013.21<br />\
    <img src="styles/legend/Septiembremximo_79_15.png" /> 1021.83<br />\
    <img src="styles/legend/Septiembremximo_79_16.png" /> 1030.45<br />\
    <img src="styles/legend/Septiembremximo_79_17.png" /> 1039.07<br />\
    <img src="styles/legend/Septiembremximo_79_18.png" /> 1047.69<br />\
    <img src="styles/legend/Septiembremximo_79_19.png" /> 1056.31<br />\
    <img src="styles/legend/Septiembremximo_79_20.png" /> 1064.93<br />\
    <img src="styles/legend/Septiembremximo_79_21.png" /> 1073.55<br />\
    <img src="styles/legend/Septiembremximo_79_22.png" /> 1082.17<br />\
    <img src="styles/legend/Septiembremximo_79_23.png" /> 1090.79<br />\
    <img src="styles/legend/Septiembremximo_79_24.png" /> 1099.41<br />\
    <img src="styles/legend/Septiembremximo_79_25.png" /> 1108.02<br />'
        });var format_Agostomximo_80 = new ol.format.GeoJSON();
var features_Agostomximo_80 = format_Agostomximo_80.readFeatures(json_Agostomximo_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agostomximo_80 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Agostomximo_80.addFeatures(features_Agostomximo_80);var lyr_Agostomximo_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agostomximo_80, 
                style: style_Agostomximo_80,
    title: 'Agosto - máximo<br />\
    <img src="styles/legend/Agostomximo_80_0.png" /> 709.43<br />\
    <img src="styles/legend/Agostomximo_80_1.png" /> 718.15<br />\
    <img src="styles/legend/Agostomximo_80_2.png" /> 726.86<br />\
    <img src="styles/legend/Agostomximo_80_3.png" /> 735.58<br />\
    <img src="styles/legend/Agostomximo_80_4.png" /> 744.30<br />\
    <img src="styles/legend/Agostomximo_80_5.png" /> 753.01<br />\
    <img src="styles/legend/Agostomximo_80_6.png" /> 761.73<br />\
    <img src="styles/legend/Agostomximo_80_7.png" /> 770.45<br />\
    <img src="styles/legend/Agostomximo_80_8.png" /> 779.16<br />\
    <img src="styles/legend/Agostomximo_80_9.png" /> 787.88<br />\
    <img src="styles/legend/Agostomximo_80_10.png" /> 796.60<br />\
    <img src="styles/legend/Agostomximo_80_11.png" /> 805.32<br />\
    <img src="styles/legend/Agostomximo_80_12.png" /> 814.03<br />\
    <img src="styles/legend/Agostomximo_80_13.png" /> 822.75<br />\
    <img src="styles/legend/Agostomximo_80_14.png" /> 831.47<br />\
    <img src="styles/legend/Agostomximo_80_15.png" /> 840.18<br />\
    <img src="styles/legend/Agostomximo_80_16.png" /> 848.90<br />\
    <img src="styles/legend/Agostomximo_80_17.png" /> 857.62<br />\
    <img src="styles/legend/Agostomximo_80_18.png" /> 866.33<br />\
    <img src="styles/legend/Agostomximo_80_19.png" /> 875.05<br />\
    <img src="styles/legend/Agostomximo_80_20.png" /> 883.77<br />\
    <img src="styles/legend/Agostomximo_80_21.png" /> 892.48<br />\
    <img src="styles/legend/Agostomximo_80_22.png" /> 901.20<br />\
    <img src="styles/legend/Agostomximo_80_23.png" /> 909.92<br />\
    <img src="styles/legend/Agostomximo_80_24.png" /> 918.63<br />'
        });var format_Juliomximo_81 = new ol.format.GeoJSON();
var features_Juliomximo_81 = format_Juliomximo_81.readFeatures(json_Juliomximo_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juliomximo_81 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Juliomximo_81.addFeatures(features_Juliomximo_81);var lyr_Juliomximo_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juliomximo_81, 
                style: style_Juliomximo_81,
    title: 'Julio - máximo<br />\
    <img src="styles/legend/Juliomximo_81_0.png" /> 553.60<br />\
    <img src="styles/legend/Juliomximo_81_1.png" /> 561.19<br />\
    <img src="styles/legend/Juliomximo_81_2.png" /> 568.78<br />\
    <img src="styles/legend/Juliomximo_81_3.png" /> 576.38<br />\
    <img src="styles/legend/Juliomximo_81_4.png" /> 583.97<br />\
    <img src="styles/legend/Juliomximo_81_5.png" /> 591.57<br />\
    <img src="styles/legend/Juliomximo_81_6.png" /> 599.16<br />\
    <img src="styles/legend/Juliomximo_81_7.png" /> 606.75<br />\
    <img src="styles/legend/Juliomximo_81_8.png" /> 614.35<br />\
    <img src="styles/legend/Juliomximo_81_9.png" /> 621.94<br />\
    <img src="styles/legend/Juliomximo_81_10.png" /> 629.54<br />\
    <img src="styles/legend/Juliomximo_81_11.png" /> 637.13<br />\
    <img src="styles/legend/Juliomximo_81_12.png" /> 644.72<br />\
    <img src="styles/legend/Juliomximo_81_13.png" /> 652.32<br />\
    <img src="styles/legend/Juliomximo_81_14.png" /> 659.91<br />\
    <img src="styles/legend/Juliomximo_81_15.png" /> 667.51<br />\
    <img src="styles/legend/Juliomximo_81_16.png" /> 675.11<br />\
    <img src="styles/legend/Juliomximo_81_17.png" /> 682.70<br />\
    <img src="styles/legend/Juliomximo_81_18.png" /> 690.29<br />\
    <img src="styles/legend/Juliomximo_81_19.png" /> 697.88<br />\
    <img src="styles/legend/Juliomximo_81_20.png" /> 705.48<br />\
    <img src="styles/legend/Juliomximo_81_21.png" /> 713.07<br />\
    <img src="styles/legend/Juliomximo_81_22.png" /> 720.67<br />\
    <img src="styles/legend/Juliomximo_81_23.png" /> 728.26<br />'
        });var format_Juniomximo_82 = new ol.format.GeoJSON();
var features_Juniomximo_82 = format_Juniomximo_82.readFeatures(json_Juniomximo_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juniomximo_82 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Juniomximo_82.addFeatures(features_Juniomximo_82);var lyr_Juniomximo_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juniomximo_82, 
                style: style_Juniomximo_82,
    title: 'Junio - máximo<br />\
    <img src="styles/legend/Juniomximo_82_0.png" /> 512.81<br />\
    <img src="styles/legend/Juniomximo_82_1.png" /> 519.82<br />\
    <img src="styles/legend/Juniomximo_82_2.png" /> 526.83<br />\
    <img src="styles/legend/Juniomximo_82_3.png" /> 533.84<br />\
    <img src="styles/legend/Juniomximo_82_4.png" /> 540.85<br />\
    <img src="styles/legend/Juniomximo_82_5.png" /> 547.86<br />\
    <img src="styles/legend/Juniomximo_82_6.png" /> 554.87<br />\
    <img src="styles/legend/Juniomximo_82_7.png" /> 561.88<br />\
    <img src="styles/legend/Juniomximo_82_8.png" /> 568.89<br />\
    <img src="styles/legend/Juniomximo_82_9.png" /> 575.90<br />\
    <img src="styles/legend/Juniomximo_82_10.png" /> 582.90<br />\
    <img src="styles/legend/Juniomximo_82_11.png" /> 589.91<br />\
    <img src="styles/legend/Juniomximo_82_12.png" /> 596.92<br />\
    <img src="styles/legend/Juniomximo_82_13.png" /> 603.93<br />\
    <img src="styles/legend/Juniomximo_82_14.png" /> 610.94<br />\
    <img src="styles/legend/Juniomximo_82_15.png" /> 617.95<br />\
    <img src="styles/legend/Juniomximo_82_16.png" /> 624.96<br />\
    <img src="styles/legend/Juniomximo_82_17.png" /> 631.97<br />\
    <img src="styles/legend/Juniomximo_82_18.png" /> 638.98<br />\
    <img src="styles/legend/Juniomximo_82_19.png" /> 645.99<br />\
    <img src="styles/legend/Juniomximo_82_20.png" /> 653.01<br />\
    <img src="styles/legend/Juniomximo_82_21.png" /> 660.01<br />\
    <img src="styles/legend/Juniomximo_82_22.png" /> 667.02<br />\
    <img src="styles/legend/Juniomximo_82_23.png" /> 674.03<br />'
        });var format_Mayomximo_83 = new ol.format.GeoJSON();
var features_Mayomximo_83 = format_Mayomximo_83.readFeatures(json_Mayomximo_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mayomximo_83 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mayomximo_83.addFeatures(features_Mayomximo_83);var lyr_Mayomximo_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayomximo_83, 
                style: style_Mayomximo_83,
    title: 'Mayo - máximo<br />\
    <img src="styles/legend/Mayomximo_83_0.png" /> 637.38<br />\
    <img src="styles/legend/Mayomximo_83_1.png" /> 644.88<br />\
    <img src="styles/legend/Mayomximo_83_2.png" /> 652.38<br />\
    <img src="styles/legend/Mayomximo_83_3.png" /> 659.87<br />\
    <img src="styles/legend/Mayomximo_83_4.png" /> 667.37<br />\
    <img src="styles/legend/Mayomximo_83_5.png" /> 674.86<br />\
    <img src="styles/legend/Mayomximo_83_6.png" /> 682.36<br />\
    <img src="styles/legend/Mayomximo_83_7.png" /> 689.86<br />\
    <img src="styles/legend/Mayomximo_83_8.png" /> 697.35<br />\
    <img src="styles/legend/Mayomximo_83_9.png" /> 704.85<br />\
    <img src="styles/legend/Mayomximo_83_10.png" /> 712.35<br />\
    <img src="styles/legend/Mayomximo_83_11.png" /> 719.84<br />\
    <img src="styles/legend/Mayomximo_83_12.png" /> 727.34<br />\
    <img src="styles/legend/Mayomximo_83_13.png" /> 734.83<br />\
    <img src="styles/legend/Mayomximo_83_14.png" /> 742.33<br />\
    <img src="styles/legend/Mayomximo_83_15.png" /> 749.83<br />\
    <img src="styles/legend/Mayomximo_83_16.png" /> 757.32<br />\
    <img src="styles/legend/Mayomximo_83_17.png" /> 764.82<br />\
    <img src="styles/legend/Mayomximo_83_18.png" /> 772.31<br />\
    <img src="styles/legend/Mayomximo_83_19.png" /> 779.81<br />\
    <img src="styles/legend/Mayomximo_83_20.png" /> 787.31<br />\
    <img src="styles/legend/Mayomximo_83_21.png" /> 794.80<br />\
    <img src="styles/legend/Mayomximo_83_22.png" /> 802.30<br />\
    <img src="styles/legend/Mayomximo_83_23.png" /> 809.79<br />'
        });var format_Abrilmximo_84 = new ol.format.GeoJSON();
var features_Abrilmximo_84 = format_Abrilmximo_84.readFeatures(json_Abrilmximo_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abrilmximo_84 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Abrilmximo_84.addFeatures(features_Abrilmximo_84);var lyr_Abrilmximo_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abrilmximo_84, 
                style: style_Abrilmximo_84,
    title: 'Abril - máximo<br />\
    <img src="styles/legend/Abrilmximo_84_0.png" /> 789.01<br />\
    <img src="styles/legend/Abrilmximo_84_1.png" /> 797.77<br />\
    <img src="styles/legend/Abrilmximo_84_2.png" /> 806.53<br />\
    <img src="styles/legend/Abrilmximo_84_3.png" /> 815.29<br />\
    <img src="styles/legend/Abrilmximo_84_4.png" /> 824.05<br />\
    <img src="styles/legend/Abrilmximo_84_5.png" /> 832.80<br />\
    <img src="styles/legend/Abrilmximo_84_6.png" /> 841.56<br />\
    <img src="styles/legend/Abrilmximo_84_7.png" /> 850.32<br />\
    <img src="styles/legend/Abrilmximo_84_8.png" /> 859.08<br />\
    <img src="styles/legend/Abrilmximo_84_9.png" /> 867.84<br />\
    <img src="styles/legend/Abrilmximo_84_10.png" /> 876.60<br />\
    <img src="styles/legend/Abrilmximo_84_11.png" /> 885.36<br />\
    <img src="styles/legend/Abrilmximo_84_12.png" /> 894.12<br />\
    <img src="styles/legend/Abrilmximo_84_13.png" /> 902.88<br />\
    <img src="styles/legend/Abrilmximo_84_14.png" /> 911.64<br />\
    <img src="styles/legend/Abrilmximo_84_15.png" /> 920.39<br />\
    <img src="styles/legend/Abrilmximo_84_16.png" /> 929.15<br />\
    <img src="styles/legend/Abrilmximo_84_17.png" /> 937.91<br />\
    <img src="styles/legend/Abrilmximo_84_18.png" /> 946.67<br />\
    <img src="styles/legend/Abrilmximo_84_19.png" /> 955.43<br />\
    <img src="styles/legend/Abrilmximo_84_20.png" /> 964.19<br />\
    <img src="styles/legend/Abrilmximo_84_21.png" /> 972.95<br />\
    <img src="styles/legend/Abrilmximo_84_22.png" /> 981.71<br />\
    <img src="styles/legend/Abrilmximo_84_23.png" /> 990.47<br />'
        });var format_Marzomximo_85 = new ol.format.GeoJSON();
var features_Marzomximo_85 = format_Marzomximo_85.readFeatures(json_Marzomximo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marzomximo_85 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Marzomximo_85.addFeatures(features_Marzomximo_85);var lyr_Marzomximo_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marzomximo_85, 
                style: style_Marzomximo_85,
    title: 'Marzo - máximo<br />\
    <img src="styles/legend/Marzomximo_85_0.png" /> 948.77<br />\
    <img src="styles/legend/Marzomximo_85_1.png" /> 960.19<br />\
    <img src="styles/legend/Marzomximo_85_2.png" /> 971.62<br />\
    <img src="styles/legend/Marzomximo_85_3.png" /> 983.04<br />\
    <img src="styles/legend/Marzomximo_85_4.png" /> 994.47<br />\
    <img src="styles/legend/Marzomximo_85_5.png" /> 1005.90<br />\
    <img src="styles/legend/Marzomximo_85_6.png" /> 1017.32<br />\
    <img src="styles/legend/Marzomximo_85_7.png" /> 1028.75<br />\
    <img src="styles/legend/Marzomximo_85_8.png" /> 1040.18<br />\
    <img src="styles/legend/Marzomximo_85_9.png" /> 1051.60<br />\
    <img src="styles/legend/Marzomximo_85_10.png" /> 1063.03<br />\
    <img src="styles/legend/Marzomximo_85_11.png" /> 1074.45<br />\
    <img src="styles/legend/Marzomximo_85_12.png" /> 1085.88<br />\
    <img src="styles/legend/Marzomximo_85_13.png" /> 1097.31<br />\
    <img src="styles/legend/Marzomximo_85_14.png" /> 1108.73<br />\
    <img src="styles/legend/Marzomximo_85_15.png" /> 1120.16<br />\
    <img src="styles/legend/Marzomximo_85_16.png" /> 1131.59<br />\
    <img src="styles/legend/Marzomximo_85_17.png" /> 1143.01<br />\
    <img src="styles/legend/Marzomximo_85_18.png" /> 1154.44<br />'
        });var format_Febreromximo_86 = new ol.format.GeoJSON();
var features_Febreromximo_86 = format_Febreromximo_86.readFeatures(json_Febreromximo_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Febreromximo_86 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Febreromximo_86.addFeatures(features_Febreromximo_86);var lyr_Febreromximo_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Febreromximo_86, 
                style: style_Febreromximo_86,
    title: 'Febrero - máximo<br />\
    <img src="styles/legend/Febreromximo_86_0.png" /> 1050.80<br />\
    <img src="styles/legend/Febreromximo_86_1.png" /> 1057.92<br />\
    <img src="styles/legend/Febreromximo_86_2.png" /> 1065.05<br />\
    <img src="styles/legend/Febreromximo_86_3.png" /> 1072.17<br />\
    <img src="styles/legend/Febreromximo_86_4.png" /> 1079.29<br />\
    <img src="styles/legend/Febreromximo_86_5.png" /> 1086.42<br />\
    <img src="styles/legend/Febreromximo_86_6.png" /> 1093.54<br />\
    <img src="styles/legend/Febreromximo_86_7.png" /> 1100.67<br />\
    <img src="styles/legend/Febreromximo_86_8.png" /> 1107.79<br />\
    <img src="styles/legend/Febreromximo_86_9.png" /> 1114.91<br />\
    <img src="styles/legend/Febreromximo_86_10.png" /> 1122.04<br />\
    <img src="styles/legend/Febreromximo_86_11.png" /> 1129.16<br />\
    <img src="styles/legend/Febreromximo_86_12.png" /> 1136.28<br />\
    <img src="styles/legend/Febreromximo_86_13.png" /> 1143.41<br />\
    <img src="styles/legend/Febreromximo_86_14.png" /> 1150.53<br />\
    <img src="styles/legend/Febreromximo_86_15.png" /> 1157.66<br />\
    <img src="styles/legend/Febreromximo_86_16.png" /> 1164.78<br />\
    <img src="styles/legend/Febreromximo_86_17.png" /> 1171.90<br />\
    <img src="styles/legend/Febreromximo_86_18.png" /> 1179.03<br />\
    <img src="styles/legend/Febreromximo_86_19.png" /> 1186.15<br />\
    <img src="styles/legend/Febreromximo_86_20.png" /> 1193.28<br />\
    <img src="styles/legend/Febreromximo_86_21.png" /> 1200.40<br />\
    <img src="styles/legend/Febreromximo_86_22.png" /> 1207.52<br />\
    <img src="styles/legend/Febreromximo_86_23.png" /> 1214.65<br />\
    <img src="styles/legend/Febreromximo_86_24.png" /> 1221.77<br />\
    <img src="styles/legend/Febreromximo_86_25.png" /> 1228.90<br />\
    <img src="styles/legend/Febreromximo_86_26.png" /> 1236.02<br />\
    <img src="styles/legend/Febreromximo_86_27.png" /> 1243.14<br />\
    <img src="styles/legend/Febreromximo_86_28.png" /> 1250.27<br />'
        });var format_Eneromximo_87 = new ol.format.GeoJSON();
var features_Eneromximo_87 = format_Eneromximo_87.readFeatures(json_Eneromximo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eneromximo_87 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Eneromximo_87.addFeatures(features_Eneromximo_87);var lyr_Eneromximo_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eneromximo_87, 
                style: style_Eneromximo_87,
    title: 'Enero - máximo<br />\
    <img src="styles/legend/Eneromximo_87_0.png" /> 1104.98<br />\
    <img src="styles/legend/Eneromximo_87_1.png" /> 1112.18<br />\
    <img src="styles/legend/Eneromximo_87_2.png" /> 1119.37<br />\
    <img src="styles/legend/Eneromximo_87_3.png" /> 1126.57<br />\
    <img src="styles/legend/Eneromximo_87_4.png" /> 1133.77<br />\
    <img src="styles/legend/Eneromximo_87_5.png" /> 1140.96<br />\
    <img src="styles/legend/Eneromximo_87_6.png" /> 1148.16<br />\
    <img src="styles/legend/Eneromximo_87_7.png" /> 1155.36<br />\
    <img src="styles/legend/Eneromximo_87_8.png" /> 1162.55<br />\
    <img src="styles/legend/Eneromximo_87_9.png" /> 1169.75<br />\
    <img src="styles/legend/Eneromximo_87_10.png" /> 1176.95<br />\
    <img src="styles/legend/Eneromximo_87_11.png" /> 1184.14<br />\
    <img src="styles/legend/Eneromximo_87_12.png" /> 1191.34<br />\
    <img src="styles/legend/Eneromximo_87_13.png" /> 1198.53<br />\
    <img src="styles/legend/Eneromximo_87_14.png" /> 1205.73<br />\
    <img src="styles/legend/Eneromximo_87_15.png" /> 1212.93<br />\
    <img src="styles/legend/Eneromximo_87_16.png" /> 1220.12<br />\
    <img src="styles/legend/Eneromximo_87_17.png" /> 1227.32<br />\
    <img src="styles/legend/Eneromximo_87_18.png" /> 1234.52<br />\
    <img src="styles/legend/Eneromximo_87_19.png" /> 1241.71<br />\
    <img src="styles/legend/Eneromximo_87_20.png" /> 1248.91<br />\
    <img src="styles/legend/Eneromximo_87_21.png" /> 1256.11<br />\
    <img src="styles/legend/Eneromximo_87_22.png" /> 1263.30<br />\
    <img src="styles/legend/Eneromximo_87_23.png" /> 1270.50<br />\
    <img src="styles/legend/Eneromximo_87_24.png" /> 1277.70<br />\
    <img src="styles/legend/Eneromximo_87_25.png" /> 1284.89<br />\
    <img src="styles/legend/Eneromximo_87_26.png" /> 1292.09<br />\
    <img src="styles/legend/Eneromximo_87_27.png" /> 1299.28<br />'
        });var format_ParquesProvinciales_88 = new ol.format.GeoJSON();
var features_ParquesProvinciales_88 = format_ParquesProvinciales_88.readFeatures(json_ParquesProvinciales_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesProvinciales_88 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParquesProvinciales_88.addFeatures(features_ParquesProvinciales_88);var lyr_ParquesProvinciales_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParquesProvinciales_88, 
                style: style_ParquesProvinciales_88,
                title: '<img src="styles/legend/ParquesProvinciales_88.png" /> Parques Provinciales'
            });var format_Cursosdeagua_89 = new ol.format.GeoJSON();
var features_Cursosdeagua_89 = format_Cursosdeagua_89.readFeatures(json_Cursosdeagua_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cursosdeagua_89 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cursosdeagua_89.addFeatures(features_Cursosdeagua_89);var lyr_Cursosdeagua_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cursosdeagua_89, 
                style: style_Cursosdeagua_89,
                title: '<img src="styles/legend/Cursosdeagua_89.png" /> Cursos de agua'
            });var format_Cuerposdeagua_90 = new ol.format.GeoJSON();
var features_Cuerposdeagua_90 = format_Cuerposdeagua_90.readFeatures(json_Cuerposdeagua_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerposdeagua_90 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cuerposdeagua_90.addFeatures(features_Cuerposdeagua_90);var lyr_Cuerposdeagua_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerposdeagua_90, 
                style: style_Cuerposdeagua_90,
                title: '<img src="styles/legend/Cuerposdeagua_90.png" /> Cuerpos de agua'
            });var format_Pequeosaprovechamientoshidroelctricos_91 = new ol.format.GeoJSON();
var features_Pequeosaprovechamientoshidroelctricos_91 = format_Pequeosaprovechamientoshidroelctricos_91.readFeatures(json_Pequeosaprovechamientoshidroelctricos_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pequeosaprovechamientoshidroelctricos_91 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pequeosaprovechamientoshidroelctricos_91.addFeatures(features_Pequeosaprovechamientoshidroelctricos_91);var lyr_Pequeosaprovechamientoshidroelctricos_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pequeosaprovechamientoshidroelctricos_91, 
                style: style_Pequeosaprovechamientoshidroelctricos_91,
                title: '<img src="styles/legend/Pequeosaprovechamientoshidroelctricos_91.png" /> Pequeños aprovechamientos hidroeléctricos'
            });var format_Lneasdemediatensin_92 = new ol.format.GeoJSON();
var features_Lneasdemediatensin_92 = format_Lneasdemediatensin_92.readFeatures(json_Lneasdemediatensin_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasdemediatensin_92 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasdemediatensin_92.addFeatures(features_Lneasdemediatensin_92);var lyr_Lneasdemediatensin_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasdemediatensin_92, 
                style: style_Lneasdemediatensin_92,
                title: '<img src="styles/legend/Lneasdemediatensin_92.png" /> Líneas de media tensión'
            });var format_Lneasdealtatensin_93 = new ol.format.GeoJSON();
var features_Lneasdealtatensin_93 = format_Lneasdealtatensin_93.readFeatures(json_Lneasdealtatensin_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasdealtatensin_93 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasdealtatensin_93.addFeatures(features_Lneasdealtatensin_93);var lyr_Lneasdealtatensin_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasdealtatensin_93, 
                style: style_Lneasdealtatensin_93,
                title: '<img src="styles/legend/Lneasdealtatensin_93.png" /> Líneas de alta tensión'
            });var format_Centralesdegeneracin_94 = new ol.format.GeoJSON();
var features_Centralesdegeneracin_94 = format_Centralesdegeneracin_94.readFeatures(json_Centralesdegeneracin_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centralesdegeneracin_94 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centralesdegeneracin_94.addFeatures(features_Centralesdegeneracin_94);var lyr_Centralesdegeneracin_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centralesdegeneracin_94, 
                style: style_Centralesdegeneracin_94,
                title: '<img src="styles/legend/Centralesdegeneracin_94.png" /> Centrales de generación'
            });var format_Estacionestransformadoras_95 = new ol.format.GeoJSON();
var features_Estacionestransformadoras_95 = format_Estacionestransformadoras_95.readFeatures(json_Estacionestransformadoras_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacionestransformadoras_95 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Estacionestransformadoras_95.addFeatures(features_Estacionestransformadoras_95);var lyr_Estacionestransformadoras_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacionestransformadoras_95, 
                style: style_Estacionestransformadoras_95,
                title: '<img src="styles/legend/Estacionestransformadoras_95.png" /> Estaciones transformadoras'
            });var format_Redferroviaria_96 = new ol.format.GeoJSON();
var features_Redferroviaria_96 = format_Redferroviaria_96.readFeatures(json_Redferroviaria_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redferroviaria_96 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Redferroviaria_96.addFeatures(features_Redferroviaria_96);var lyr_Redferroviaria_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redferroviaria_96, 
                style: style_Redferroviaria_96,
                title: '<img src="styles/legend/Redferroviaria_96.png" /> Red ferroviaria'
            });var format_Redvial_97 = new ol.format.GeoJSON();
var features_Redvial_97 = format_Redvial_97.readFeatures(json_Redvial_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvial_97 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Redvial_97.addFeatures(features_Redvial_97);var lyr_Redvial_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvial_97, 
                style: style_Redvial_97,
                title: '<img src="styles/legend/Redvial_97.png" /> Red vial'
            });var format_Estacionesdeserviciodecombustibles_98 = new ol.format.GeoJSON();
var features_Estacionesdeserviciodecombustibles_98 = format_Estacionesdeserviciodecombustibles_98.readFeatures(json_Estacionesdeserviciodecombustibles_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacionesdeserviciodecombustibles_98 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Estacionesdeserviciodecombustibles_98.addFeatures(features_Estacionesdeserviciodecombustibles_98);var lyr_Estacionesdeserviciodecombustibles_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacionesdeserviciodecombustibles_98, 
                style: style_Estacionesdeserviciodecombustibles_98,
                title: '<img src="styles/legend/Estacionesdeserviciodecombustibles_98.png" /> Estaciones de servicio de combustibles'
            });var format_Infraestructuradetransporte_99 = new ol.format.GeoJSON();
var features_Infraestructuradetransporte_99 = format_Infraestructuradetransporte_99.readFeatures(json_Infraestructuradetransporte_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuradetransporte_99 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Infraestructuradetransporte_99.addFeatures(features_Infraestructuradetransporte_99);var lyr_Infraestructuradetransporte_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructuradetransporte_99, 
                style: style_Infraestructuradetransporte_99,
                title: '<img src="styles/legend/Infraestructuradetransporte_99.png" /> Infraestructura de transporte'
            });var format_Yacimientosdehidrocarburos_100 = new ol.format.GeoJSON();
var features_Yacimientosdehidrocarburos_100 = format_Yacimientosdehidrocarburos_100.readFeatures(json_Yacimientosdehidrocarburos_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yacimientosdehidrocarburos_100 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Yacimientosdehidrocarburos_100.addFeatures(features_Yacimientosdehidrocarburos_100);var lyr_Yacimientosdehidrocarburos_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yacimientosdehidrocarburos_100, 
                style: style_Yacimientosdehidrocarburos_100,
                title: '<img src="styles/legend/Yacimientosdehidrocarburos_100.png" /> Yacimientos de hidrocarburos'
            });var format_Pozosdehidrocarburos_101 = new ol.format.GeoJSON();
var features_Pozosdehidrocarburos_101 = format_Pozosdehidrocarburos_101.readFeatures(json_Pozosdehidrocarburos_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozosdehidrocarburos_101 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pozosdehidrocarburos_101.addFeatures(features_Pozosdehidrocarburos_101);var lyr_Pozosdehidrocarburos_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pozosdehidrocarburos_101, 
                style: style_Pozosdehidrocarburos_101,
                title: '<img src="styles/legend/Pozosdehidrocarburos_101.png" /> Pozos de hidrocarburos'
            });var format_Mataderos_102 = new ol.format.GeoJSON();
var features_Mataderos_102 = format_Mataderos_102.readFeatures(json_Mataderos_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mataderos_102 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mataderos_102.addFeatures(features_Mataderos_102);var lyr_Mataderos_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mataderos_102, 
                style: style_Mataderos_102,
                title: '<img src="styles/legend/Mataderos_102.png" /> Mataderos'
            });var format_Conserveras_103 = new ol.format.GeoJSON();
var features_Conserveras_103 = format_Conserveras_103.readFeatures(json_Conserveras_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conserveras_103 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Conserveras_103.addFeatures(features_Conserveras_103);var lyr_Conserveras_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conserveras_103, 
                style: style_Conserveras_103,
                title: '<img src="styles/legend/Conserveras_103.png" /> Conserveras'
            });var format_Bodegas_104 = new ol.format.GeoJSON();
var features_Bodegas_104 = format_Bodegas_104.readFeatures(json_Bodegas_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodegas_104 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bodegas_104.addFeatures(features_Bodegas_104);var lyr_Bodegas_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bodegas_104, 
                style: style_Bodegas_104,
                title: '<img src="styles/legend/Bodegas_104.png" /> Bodegas'
            });var format_Aserraderos_105 = new ol.format.GeoJSON();
var features_Aserraderos_105 = format_Aserraderos_105.readFeatures(json_Aserraderos_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aserraderos_105 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Aserraderos_105.addFeatures(features_Aserraderos_105);var lyr_Aserraderos_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aserraderos_105, 
                style: style_Aserraderos_105,
                title: '<img src="styles/legend/Aserraderos_105.png" /> Aserraderos'
            });var format_Aceiteras_106 = new ol.format.GeoJSON();
var features_Aceiteras_106 = format_Aceiteras_106.readFeatures(json_Aceiteras_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aceiteras_106 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Aceiteras_106.addFeatures(features_Aceiteras_106);var lyr_Aceiteras_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aceiteras_106, 
                style: style_Aceiteras_106,
                title: '<img src="styles/legend/Aceiteras_106.png" /> Aceiteras'
            });

//lyr_DepartamentosdeMendoza_0.setVisible(true);lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.setVisible(true);lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.setVisible(true);lyr_Aserrnvirutaestoconescostaneros_3.setVisible(true);lyr_EnergadePlantacionesforestales_4.setVisible(true);lyr_BiomasadePlantacionesforestales_5.setVisible(true);lyr_Energadebiomasaderestosdealimentospapelycartn_6.setVisible(true);lyr_BiomasadeRestosdealimentospapelycartn_7.setVisible(true);lyr_Energiadeguanodeplantasdefaenaavcola_8.setVisible(true);lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9.setVisible(true);lyr_Energiadeefluenteslquidosdeplantasdefaena_10.setVisible(true);lyr_EnergiaEstiercolOvinobovinoporcino_11.setVisible(true);lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.setVisible(true);lyr_Guanodeplantasdefaenaavcola_13.setVisible(true);lyr_Biomasahmedadeplantasdefaenaavcola_14.setVisible(true);lyr_Efluenteslquidosdeplantasdefaenaavcola_15.setVisible(true);lyr_EstircolOvinobovinoporcino_16.setVisible(true);lyr_BiomasalquidaOvinobovinoporcino_17.setVisible(true);lyr_EnergiaOrujoAceituna_18.setVisible(true);lyr_EnergiaOrujoUva_19.setVisible(true);lyr_EnergiaConservasTomate_20.setVisible(true);lyr_EnergiaConservasPera_21.setVisible(true);lyr_EnergiaConservasDurazno_22.setVisible(true);lyr_OrujoAceituna_23.setVisible(true);lyr_OrujoUva_24.setVisible(true);lyr_ConservasTomate_25.setVisible(true);lyr_ConservasPera_26.setVisible(true);lyr_ConservasDurazno_27.setVisible(true);lyr_EnergiaAlmendro_28.setVisible(true);lyr_EnergiaMembrillo_29.setVisible(true);lyr_EnergiaCerezo_30.setVisible(true);lyr_EnergiaNogal_31.setVisible(true);lyr_EnergiaDamasco_32.setVisible(true);lyr_EnergiaManzano_33.setVisible(true);lyr_EnergiaPeral_34.setVisible(true);lyr_EnergiaOlivo_35.setVisible(true);lyr_EnergiaDuraznero_36.setVisible(true);lyr_EnergiaCiruelo_37.setVisible(true);lyr_EnergiaVidespaldero_38.setVisible(true);lyr_EnergiaVidparral_39.setVisible(true);lyr_BiomasaAlmendro_40.setVisible(true);lyr_BiomasaMembrillo_41.setVisible(true);lyr_BiomasaCerezo_42.setVisible(true);lyr_BiomasaNogal_43.setVisible(true);lyr_BiomasaDamasco_44.setVisible(true);lyr_BiomasaManzano_45.setVisible(true);lyr_BiomasaPeral_46.setVisible(true);lyr_BiomasaOlivo_47.setVisible(true);lyr_BiomasaDuraznero_48.setVisible(true);lyr_BiomasaCiruelo_49.setVisible(true);lyr_BiomasaVidespaldero_50.setVisible(true);lyr_BiomasaVidparral_51.setVisible(true);lyr_Diciembreacumulado_52.setVisible(true);lyr_Noviembreacumulado_53.setVisible(true);lyr_Octubreacumulado_54.setVisible(true);lyr_Septiembreacumulado_55.setVisible(true);lyr_Agostoacumulado_56.setVisible(true);lyr_Julioacumulado_57.setVisible(true);lyr_Junioacumulado_58.setVisible(true);lyr_Mayoacumulado_59.setVisible(true);lyr_Abrilacumulado_60.setVisible(true);lyr_Marzoacumulado_61.setVisible(true);lyr_Febreroacumulado_62.setVisible(true);lyr_Eneroacumulado_63.setVisible(true);lyr_Diciembrepromedio_64.setVisible(true);lyr_Noviembrepromedio_65.setVisible(true);lyr_Octubrepromedio_66.setVisible(true);lyr_Septiembrepromedio_67.setVisible(true);lyr_Agostopromedio_68.setVisible(true);lyr_Juliopromedio_69.setVisible(true);lyr_Juniopromedio_70.setVisible(true);lyr_Mayopromedio_71.setVisible(true);lyr_Abrilpromedio_72.setVisible(true);lyr_Marzopromedio_73.setVisible(true);lyr_Febreropromedio_74.setVisible(true);lyr_Eneropromedio_75.setVisible(true);lyr_Diciembremximo_76.setVisible(true);lyr_Noviembremximo_77.setVisible(true);lyr_Octubremximo_78.setVisible(true);lyr_Septiembremximo_79.setVisible(true);lyr_Agostomximo_80.setVisible(true);lyr_Juliomximo_81.setVisible(true);lyr_Juniomximo_82.setVisible(true);lyr_Mayomximo_83.setVisible(true);lyr_Abrilmximo_84.setVisible(true);lyr_Marzomximo_85.setVisible(true);lyr_Febreromximo_86.setVisible(true);lyr_Eneromximo_87.setVisible(true);lyr_ParquesProvinciales_88.setVisible(true);lyr_Cursosdeagua_89.setVisible(true);lyr_Cuerposdeagua_90.setVisible(true);lyr_Pequeosaprovechamientoshidroelctricos_91.setVisible(true);lyr_Lneasdemediatensin_92.setVisible(true);lyr_Lneasdealtatensin_93.setVisible(true);lyr_Centralesdegeneracin_94.setVisible(true);lyr_Estacionestransformadoras_95.setVisible(true);lyr_Redferroviaria_96.setVisible(true);lyr_Redvial_97.setVisible(true);lyr_Estacionesdeserviciodecombustibles_98.setVisible(true);lyr_Infraestructuradetransporte_99.setVisible(true);lyr_Yacimientosdehidrocarburos_100.setVisible(true);lyr_Pozosdehidrocarburos_101.setVisible(true);lyr_Mataderos_102.setVisible(true);lyr_Conserveras_103.setVisible(true);lyr_Bodegas_104.setVisible(true);lyr_Aserraderos_105.setVisible(true);lyr_Aceiteras_106.setVisible(true);
var layersList = [lyr_DepartamentosdeMendoza_0,lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1,lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2,lyr_Aserrnvirutaestoconescostaneros_3,lyr_EnergadePlantacionesforestales_4,lyr_BiomasadePlantacionesforestales_5,lyr_Energadebiomasaderestosdealimentospapelycartn_6,lyr_BiomasadeRestosdealimentospapelycartn_7,lyr_Energiadeguanodeplantasdefaenaavcola_8,lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9,lyr_Energiadeefluenteslquidosdeplantasdefaena_10,lyr_EnergiaEstiercolOvinobovinoporcino_11,lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12,lyr_Guanodeplantasdefaenaavcola_13,lyr_Biomasahmedadeplantasdefaenaavcola_14,lyr_Efluenteslquidosdeplantasdefaenaavcola_15,lyr_EstircolOvinobovinoporcino_16,lyr_BiomasalquidaOvinobovinoporcino_17,lyr_EnergiaOrujoAceituna_18,lyr_EnergiaOrujoUva_19,lyr_EnergiaConservasTomate_20,lyr_EnergiaConservasPera_21,lyr_EnergiaConservasDurazno_22,lyr_OrujoAceituna_23,lyr_OrujoUva_24,lyr_ConservasTomate_25,lyr_ConservasPera_26,lyr_ConservasDurazno_27,lyr_EnergiaAlmendro_28,lyr_EnergiaMembrillo_29,lyr_EnergiaCerezo_30,lyr_EnergiaNogal_31,lyr_EnergiaDamasco_32,lyr_EnergiaManzano_33,lyr_EnergiaPeral_34,lyr_EnergiaOlivo_35,lyr_EnergiaDuraznero_36,lyr_EnergiaCiruelo_37,lyr_EnergiaVidespaldero_38,lyr_EnergiaVidparral_39,lyr_BiomasaAlmendro_40,lyr_BiomasaMembrillo_41,lyr_BiomasaCerezo_42,lyr_BiomasaNogal_43,lyr_BiomasaDamasco_44,lyr_BiomasaManzano_45,lyr_BiomasaPeral_46,lyr_BiomasaOlivo_47,lyr_BiomasaDuraznero_48,lyr_BiomasaCiruelo_49,lyr_BiomasaVidespaldero_50,lyr_BiomasaVidparral_51,lyr_Diciembreacumulado_52,lyr_Noviembreacumulado_53,lyr_Octubreacumulado_54,lyr_Septiembreacumulado_55,lyr_Agostoacumulado_56,lyr_Julioacumulado_57,lyr_Junioacumulado_58,lyr_Mayoacumulado_59,lyr_Abrilacumulado_60,lyr_Marzoacumulado_61,lyr_Febreroacumulado_62,lyr_Eneroacumulado_63,lyr_Diciembrepromedio_64,lyr_Noviembrepromedio_65,lyr_Octubrepromedio_66,lyr_Septiembrepromedio_67,lyr_Agostopromedio_68,lyr_Juliopromedio_69,lyr_Juniopromedio_70,lyr_Mayopromedio_71,lyr_Abrilpromedio_72,lyr_Marzopromedio_73,lyr_Febreropromedio_74,lyr_Eneropromedio_75,lyr_Diciembremximo_76,lyr_Noviembremximo_77,lyr_Octubremximo_78,lyr_Septiembremximo_79,lyr_Agostomximo_80,lyr_Juliomximo_81,lyr_Juniomximo_82,lyr_Mayomximo_83,lyr_Abrilmximo_84,lyr_Marzomximo_85,lyr_Febreromximo_86,lyr_Eneromximo_87,lyr_ParquesProvinciales_88,lyr_Cursosdeagua_89,lyr_Cuerposdeagua_90,lyr_Pequeosaprovechamientoshidroelctricos_91,lyr_Lneasdemediatensin_92,lyr_Lneasdealtatensin_93,lyr_Centralesdegeneracin_94,lyr_Estacionestransformadoras_95,lyr_Redferroviaria_96,lyr_Redvial_97,lyr_Estacionesdeserviciodecombustibles_98,lyr_Infraestructuradetransporte_99,lyr_Yacimientosdehidrocarburos_100,lyr_Pozosdehidrocarburos_101,lyr_Mataderos_102,lyr_Conserveras_103,lyr_Bodegas_104,lyr_Aserraderos_105,lyr_Aceiteras_106];
lyr_DepartamentosdeMendoza_0.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', });
lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.set('fieldAliases', {'id': 'id', 'Deptos': 'Deptos', 'Regiones': 'Regiones', 'Biomasa di': 'Biomasa di', 'Energ CD': 'Energ CD', 'Energ Gasi': 'Energ Gasi', });
lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.set('fieldAliases', {'id': 'id', 'Deptos': 'Deptos', 'Regiones': 'Regiones', 'Biomasa di': 'Biomasa di', 'Energ CD': 'Energ CD', 'Energ Gasi': 'Energ Gasi', });
lyr_Aserrnvirutaestoconescostaneros_3.set('fieldAliases', {'id': 'id', 'Deptos': 'Deptos', 'Regiones': 'Regiones', 'Biomasa di': 'Biomasa di', 'Energ CD': 'Energ CD', 'Energ Gasi': 'Energ Gasi', });
lyr_EnergadePlantacionesforestales_4.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Regin': 'Regin', 'Biomasa': 'Biomasa', 'Energa': 'Energa', });
lyr_BiomasadePlantacionesforestales_5.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Regin': 'Regin', 'Biomasa': 'Biomasa', 'Energa': 'Energa', });
lyr_Energadebiomasaderestosdealimentospapelycartn_6.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', });
lyr_BiomasadeRestosdealimentospapelycartn_7.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', });
lyr_Energiadeguanodeplantasdefaenaavcola_8.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', 'Potencia54': 'Potencia54', 'Potencia55': 'Potencia55', 'Potencia56': 'Potencia56', 'Potencia57': 'Potencia57', 'Potencia58': 'Potencia58', 'Potencia59': 'Potencia59', 'Potencia60': 'Potencia60', 'Potencia61': 'Potencia61', 'Potencia62': 'Potencia62', 'Potencia63': 'Potencia63', 'Potencia64': 'Potencia64', });
lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', 'Potencia54': 'Potencia54', 'Potencia55': 'Potencia55', 'Potencia56': 'Potencia56', 'Potencia57': 'Potencia57', 'Potencia58': 'Potencia58', 'Potencia59': 'Potencia59', 'Potencia60': 'Potencia60', 'Potencia61': 'Potencia61', 'Potencia62': 'Potencia62', 'Potencia63': 'Potencia63', 'Potencia64': 'Potencia64', });
lyr_Energiadeefluenteslquidosdeplantasdefaena_10.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', 'Potencia54': 'Potencia54', 'Potencia55': 'Potencia55', 'Potencia56': 'Potencia56', 'Potencia57': 'Potencia57', 'Potencia58': 'Potencia58', 'Potencia59': 'Potencia59', 'Potencia60': 'Potencia60', 'Potencia61': 'Potencia61', 'Potencia62': 'Potencia62', 'Potencia63': 'Potencia63', 'Potencia64': 'Potencia64', });
lyr_EnergiaEstiercolOvinobovinoporcino_11.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', 'Potencia54': 'Potencia54', 'Potencia55': 'Potencia55', 'Potencia56': 'Potencia56', 'Potencia57': 'Potencia57', 'Potencia58': 'Potencia58', 'Potencia59': 'Potencia59', 'Potencia60': 'Potencia60', 'Potencia61': 'Potencia61', 'Potencia62': 'Potencia62', 'Potencia63': 'Potencia63', 'Potencia64': 'Potencia64', });
lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', 'Potencia54': 'Potencia54', 'Potencia55': 'Potencia55', 'Potencia56': 'Potencia56', 'Potencia57': 'Potencia57', 'Potencia58': 'Potencia58', 'Potencia59': 'Potencia59', 'Potencia60': 'Potencia60', 'Potencia61': 'Potencia61', 'Potencia62': 'Potencia62', 'Potencia63': 'Potencia63', 'Potencia64': 'Potencia64', });
lyr_Guanodeplantasdefaenaavcola_13.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', 'Disponib54': 'Disponib54', 'Disponib55': 'Disponib55', 'Disponib56': 'Disponib56', 'Disponib57': 'Disponib57', 'Disponib58': 'Disponib58', 'Disponib59': 'Disponib59', 'Disponib60': 'Disponib60', 'Disponib61': 'Disponib61', 'Disponib62': 'Disponib62', 'Disponib63': 'Disponib63', 'Disponib64': 'Disponib64', });
lyr_Biomasahmedadeplantasdefaenaavcola_14.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', 'Disponib54': 'Disponib54', 'Disponib55': 'Disponib55', 'Disponib56': 'Disponib56', 'Disponib57': 'Disponib57', 'Disponib58': 'Disponib58', 'Disponib59': 'Disponib59', 'Disponib60': 'Disponib60', 'Disponib61': 'Disponib61', 'Disponib62': 'Disponib62', 'Disponib63': 'Disponib63', 'Disponib64': 'Disponib64', });
lyr_Efluenteslquidosdeplantasdefaenaavcola_15.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', 'Disponib54': 'Disponib54', 'Disponib55': 'Disponib55', 'Disponib56': 'Disponib56', 'Disponib57': 'Disponib57', 'Disponib58': 'Disponib58', 'Disponib59': 'Disponib59', 'Disponib60': 'Disponib60', 'Disponib61': 'Disponib61', 'Disponib62': 'Disponib62', 'Disponib63': 'Disponib63', 'Disponib64': 'Disponib64', });
lyr_EstircolOvinobovinoporcino_16.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', 'Disponib54': 'Disponib54', 'Disponib55': 'Disponib55', 'Disponib56': 'Disponib56', 'Disponib57': 'Disponib57', 'Disponib58': 'Disponib58', 'Disponib59': 'Disponib59', 'Disponib60': 'Disponib60', 'Disponib61': 'Disponib61', 'Disponib62': 'Disponib62', 'Disponib63': 'Disponib63', 'Disponib64': 'Disponib64', });
lyr_BiomasalquidaOvinobovinoporcino_17.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', 'Disponib54': 'Disponib54', 'Disponib55': 'Disponib55', 'Disponib56': 'Disponib56', 'Disponib57': 'Disponib57', 'Disponib58': 'Disponib58', 'Disponib59': 'Disponib59', 'Disponib60': 'Disponib60', 'Disponib61': 'Disponib61', 'Disponib62': 'Disponib62', 'Disponib63': 'Disponib63', 'Disponib64': 'Disponib64', });
lyr_EnergiaOrujoAceituna_18.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', });
lyr_EnergiaOrujoUva_19.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', });
lyr_EnergiaConservasTomate_20.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', });
lyr_EnergiaConservasPera_21.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', });
lyr_EnergiaConservasDurazno_22.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', });
lyr_OrujoAceituna_23.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', });
lyr_OrujoUva_24.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', });
lyr_ConservasTomate_25.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', });
lyr_ConservasPera_26.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', });
lyr_ConservasDurazno_27.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', });
lyr_EnergiaAlmendro_28.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaMembrillo_29.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaCerezo_30.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaNogal_31.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaDamasco_32.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaManzano_33.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaPeral_34.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaOlivo_35.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaDuraznero_36.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaCiruelo_37.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaVidespaldero_38.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_EnergiaVidparral_39.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Potencial': 'Potencial', 'Potencia_1': 'Potencia_1', 'Potencia_2': 'Potencia_2', 'Potencia_3': 'Potencia_3', 'Potencia_4': 'Potencia_4', 'Potencia_5': 'Potencia_5', 'Potencia_6': 'Potencia_6', 'Potencia_7': 'Potencia_7', 'Potencia_8': 'Potencia_8', 'Potencia_9': 'Potencia_9', 'Potencia10': 'Potencia10', 'Potencia11': 'Potencia11', 'Potencia12': 'Potencia12', 'Potencia13': 'Potencia13', 'Potencia14': 'Potencia14', 'Potencia15': 'Potencia15', 'Potencia16': 'Potencia16', 'Potencia17': 'Potencia17', 'Potencia18': 'Potencia18', 'Potencia19': 'Potencia19', 'Potencia20': 'Potencia20', 'Potencia21': 'Potencia21', 'Potencia22': 'Potencia22', 'Potencia23': 'Potencia23', 'Potencia24': 'Potencia24', 'Potencia25': 'Potencia25', 'Potencia26': 'Potencia26', 'Potencia27': 'Potencia27', 'Potencia28': 'Potencia28', 'Potencia29': 'Potencia29', 'Potencia30': 'Potencia30', 'Potencia31': 'Potencia31', 'Potencia32': 'Potencia32', 'Potencia33': 'Potencia33', 'Potencia34': 'Potencia34', 'Potencia35': 'Potencia35', 'Potencia36': 'Potencia36', 'Potencia37': 'Potencia37', 'Potencia38': 'Potencia38', 'Potencia39': 'Potencia39', 'Potencia40': 'Potencia40', 'Potencia41': 'Potencia41', 'Potencia42': 'Potencia42', 'Potencia43': 'Potencia43', 'Potencia44': 'Potencia44', 'Potencia45': 'Potencia45', 'Potencia46': 'Potencia46', 'Potencia47': 'Potencia47', 'Potencia48': 'Potencia48', 'Potencia49': 'Potencia49', 'Potencia50': 'Potencia50', 'Potencia51': 'Potencia51', 'Potencia52': 'Potencia52', 'Potencia53': 'Potencia53', });
lyr_BiomasaAlmendro_40.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Regin': 'Regin', 'Sup': 'Sup', 'Biomasa': 'Biomasa', });
lyr_BiomasaMembrillo_41.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaCerezo_42.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaNogal_43.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaDamasco_44.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaManzano_45.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaPeral_46.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaOlivo_47.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaDuraznero_48.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaCiruelo_49.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaVidespaldero_50.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_BiomasaVidparral_51.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'Act_Econ_p': 'Act_Econ_p', 'Concentr_e': 'Concentr_e', 'Regin': 'Regin', 'PBG_10': 'PBG_10', 'Pob_10': 'Pob_10', 'Empleo_10': 'Empleo_10', 'Cond_Viv_1': 'Cond_Viv_1', 'Acc_Viv_10': 'Acc_Viv_10', 'NBI_10': 'NBI_10', 'Equidad': 'Equidad', 'Polit_13': 'Polit_13', 'Zon_Dip13': 'Zon_Dip13', 'Zon_Dip2': 'Zon_Dip2', 'Sup': 'Sup', 'Disponibil': 'Disponibil', 'Disponib_1': 'Disponib_1', 'Disponib_2': 'Disponib_2', 'Disponib_3': 'Disponib_3', 'Disponib_4': 'Disponib_4', 'Disponib_5': 'Disponib_5', 'Disponib_6': 'Disponib_6', 'Disponib_7': 'Disponib_7', 'Disponib_8': 'Disponib_8', 'Disponib_9': 'Disponib_9', 'Disponib10': 'Disponib10', 'Disponib11': 'Disponib11', 'Disponib12': 'Disponib12', 'Disponib13': 'Disponib13', 'Disponib14': 'Disponib14', 'Disponib15': 'Disponib15', 'Disponib16': 'Disponib16', 'Disponib17': 'Disponib17', 'Disponib18': 'Disponib18', 'Disponib19': 'Disponib19', 'Disponib20': 'Disponib20', 'Disponib21': 'Disponib21', 'Disponib22': 'Disponib22', 'Disponib23': 'Disponib23', 'Disponib24': 'Disponib24', 'Disponib25': 'Disponib25', 'Disponib26': 'Disponib26', 'Disponib27': 'Disponib27', 'Disponib28': 'Disponib28', 'Disponib29': 'Disponib29', 'Disponib30': 'Disponib30', 'Disponib31': 'Disponib31', 'Disponib32': 'Disponib32', 'Disponib33': 'Disponib33', 'Disponib34': 'Disponib34', 'Disponib35': 'Disponib35', 'Disponib36': 'Disponib36', 'Disponib37': 'Disponib37', 'Disponib38': 'Disponib38', 'Disponib39': 'Disponib39', 'Disponib40': 'Disponib40', 'Disponib41': 'Disponib41', 'Disponib42': 'Disponib42', 'Disponib43': 'Disponib43', 'Disponib44': 'Disponib44', 'Disponib45': 'Disponib45', 'Disponib46': 'Disponib46', 'Disponib47': 'Disponib47', 'Disponib48': 'Disponib48', 'Disponib49': 'Disponib49', 'Disponib50': 'Disponib50', 'Disponib51': 'Disponib51', 'Disponib52': 'Disponib52', 'Disponib53': 'Disponib53', });
lyr_Diciembreacumulado_52.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Noviembreacumulado_53.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Octubreacumulado_54.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Septiembreacumulado_55.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Agostoacumulado_56.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Julioacumulado_57.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Junioacumulado_58.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Mayoacumulado_59.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Abrilacumulado_60.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Marzoacumulado_61.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Febreroacumulado_62.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Eneroacumulado_63.set('fieldAliases', {'id': 'id', 'index': 'index', 'acumulado_': 'acumulado_', 'acumulad_1': 'acumulad_1', 'label': 'label', });
lyr_Diciembrepromedio_64.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Noviembrepromedio_65.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Octubrepromedio_66.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Septiembrepromedio_67.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Agostopromedio_68.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Juliopromedio_69.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Juniopromedio_70.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Mayopromedio_71.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Abrilpromedio_72.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Marzopromedio_73.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Febreropromedio_74.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Eneropromedio_75.set('fieldAliases', {'id': 'id', 'index': 'index', 'prom_min': 'prom_min', 'prom_max': 'prom_max', 'label': 'label', });
lyr_Diciembremximo_76.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Noviembremximo_77.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Octubremximo_78.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Septiembremximo_79.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Agostomximo_80.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Juliomximo_81.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Juniomximo_82.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Mayomximo_83.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Abrilmximo_84.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Marzomximo_85.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Febreromximo_86.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_Eneromximo_87.set('fieldAliases', {'id': 'id', 'index': 'index', 'maximo_min': 'maximo_min', 'maximo_max': 'maximo_max', 'label': 'label', });
lyr_ParquesProvinciales_88.set('fieldAliases', {'CATEGORIA': 'CATEGORIA', 'NOMBRE': 'NOMBRE', 'PROVINCIA': 'PROVINCIA', 'SUPERFICIE': 'SUPERFICIE', 'GEOJSON': 'GEOJSON', });
lyr_Cursosdeagua_89.set('fieldAliases', {'id': 'id', });
lyr_Cuerposdeagua_90.set('fieldAliases', {'id': 'id', 'Cuerpos Mz': 'Cuerpos Mz', });
lyr_Pequeosaprovechamientoshidroelctricos_91.set('fieldAliases', {'NOMBRE_CEN': 'NOMBRE_CEN', 'EMPRESA': 'EMPRESA', 'GRUPO_EMPR': 'GRUPO_EMPR', 'TIPO_CENTR': 'TIPO_CENTR', 'POTENCIA_I': 'POTENCIA_I', 'CARACTERIS': 'CARACTERIS', 'LOCALIDAD': 'LOCALIDAD', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'GEOJSON': 'GEOJSON', });
lyr_Lneasdemediatensin_92.set('fieldAliases', {'TENSION': 'TENSION', 'GEOJSON': 'GEOJSON', });
lyr_Lneasdealtatensin_93.set('fieldAliases', {'id': 'id', });
lyr_Centralesdegeneracin_94.set('fieldAliases', {'NOMBRE_CEN': 'NOMBRE_CEN', 'EMPRESA': 'EMPRESA', 'GRUPO_EMPR': 'GRUPO_EMPR', 'TIPO_CENTR': 'TIPO_CENTR', 'POTENCIA_I': 'POTENCIA_I', 'CARACTERIS': 'CARACTERIS', 'LOCALIDAD': 'LOCALIDAD', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'FUENTE': 'FUENTE', 'GEOJSON': 'GEOJSON', });
lyr_Estacionestransformadoras_95.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'ID': 'ID', 'PROPIEDAD': 'PROPIEDAD', 'CONCESION': 'CONCESION', 'POTENCIA_I': 'POTENCIA_I', 'FECHA_PUES': 'FECHA_PUES', 'TENSION_EN': 'TENSION_EN', 'TENSION_SA': 'TENSION_SA', 'GEOJSON': 'GEOJSON', });
lyr_Redferroviaria_96.set('fieldAliases', {'id': 'id', });
lyr_Redvial_97.set('fieldAliases', {'id': 'id', });
lyr_Estacionesdeserviciodecombustibles_98.set('fieldAliases', {'ID1104': 'ID1104', 'RAZON_SOCI': 'RAZON_SOCI', 'CUIT': 'CUIT', 'DOMICILIO': 'DOMICILIO', 'LOCALIDAD': 'LOCALIDAD', 'PROVINCIA': 'PROVINCIA', 'DESCRIPCIO': 'DESCRIPCIO', 'TIPO_BOCA': 'TIPO_BOCA', 'GEOJSON': 'GEOJSON', });
lyr_Infraestructuradetransporte_99.set('fieldAliases', {'id': 'id', });
lyr_Yacimientosdehidrocarburos_100.set('fieldAliases', {'IDYA': 'IDYA', 'AREAYACIMI': 'AREAYACIMI', 'EMPRESA_IN': 'EMPRESA_IN', 'IDEMPRESA_': 'IDEMPRESA_', 'EMPRESA_OP': 'EMPRESA_OP', 'IDEMPRE_01': 'IDEMPRE_01', 'GEOJSON': 'GEOJSON', });
lyr_Pozosdehidrocarburos_101.set('fieldAliases', {'id': 'id', });
lyr_Mataderos_102.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'placepageUri': 'placepageUri', });
lyr_Conserveras_103.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bodegas_104.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'placepageUri': 'placepageUri', });
lyr_Aserraderos_105.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'placepageUri': 'placepageUri', });
lyr_Aceiteras_106.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'placepageUri': 'placepageUri', });
lyr_DepartamentosdeMendoza_0.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', });
lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.set('fieldImages', {'id': 'TextEdit', 'Deptos': 'TextEdit', 'Regiones': 'TextEdit', 'Biomasa di': 'TextEdit', 'Energ CD': 'TextEdit', 'Energ Gasi': 'TextEdit', });
lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.set('fieldImages', {'id': 'TextEdit', 'Deptos': 'TextEdit', 'Regiones': 'TextEdit', 'Biomasa di': 'TextEdit', 'Energ CD': 'TextEdit', 'Energ Gasi': 'TextEdit', });
lyr_Aserrnvirutaestoconescostaneros_3.set('fieldImages', {'id': 'TextEdit', 'Deptos': 'TextEdit', 'Regiones': 'TextEdit', 'Biomasa di': 'TextEdit', 'Energ CD': 'TextEdit', 'Energ Gasi': 'TextEdit', });
lyr_EnergadePlantacionesforestales_4.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Regin': 'TextEdit', 'Biomasa': 'TextEdit', 'Energa': 'TextEdit', });
lyr_BiomasadePlantacionesforestales_5.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Regin': 'TextEdit', 'Biomasa': 'TextEdit', 'Energa': 'TextEdit', });
lyr_Energadebiomasaderestosdealimentospapelycartn_6.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', });
lyr_BiomasadeRestosdealimentospapelycartn_7.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', });
lyr_Energiadeguanodeplantasdefaenaavcola_8.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', 'Potencia54': 'TextEdit', 'Potencia55': 'TextEdit', 'Potencia56': 'TextEdit', 'Potencia57': 'TextEdit', 'Potencia58': 'TextEdit', 'Potencia59': 'TextEdit', 'Potencia60': 'TextEdit', 'Potencia61': 'TextEdit', 'Potencia62': 'TextEdit', 'Potencia63': 'TextEdit', 'Potencia64': 'TextEdit', });
lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', 'Potencia54': 'TextEdit', 'Potencia55': 'TextEdit', 'Potencia56': 'TextEdit', 'Potencia57': 'TextEdit', 'Potencia58': 'TextEdit', 'Potencia59': 'TextEdit', 'Potencia60': 'TextEdit', 'Potencia61': 'TextEdit', 'Potencia62': 'TextEdit', 'Potencia63': 'TextEdit', 'Potencia64': 'TextEdit', });
lyr_Energiadeefluenteslquidosdeplantasdefaena_10.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', 'Potencia54': 'TextEdit', 'Potencia55': 'TextEdit', 'Potencia56': 'TextEdit', 'Potencia57': 'TextEdit', 'Potencia58': 'TextEdit', 'Potencia59': 'TextEdit', 'Potencia60': 'TextEdit', 'Potencia61': 'TextEdit', 'Potencia62': 'TextEdit', 'Potencia63': 'TextEdit', 'Potencia64': 'TextEdit', });
lyr_EnergiaEstiercolOvinobovinoporcino_11.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', 'Potencia54': 'TextEdit', 'Potencia55': 'TextEdit', 'Potencia56': 'TextEdit', 'Potencia57': 'TextEdit', 'Potencia58': 'TextEdit', 'Potencia59': 'TextEdit', 'Potencia60': 'TextEdit', 'Potencia61': 'TextEdit', 'Potencia62': 'TextEdit', 'Potencia63': 'TextEdit', 'Potencia64': 'TextEdit', });
lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', 'Potencia54': 'TextEdit', 'Potencia55': 'TextEdit', 'Potencia56': 'TextEdit', 'Potencia57': 'TextEdit', 'Potencia58': 'TextEdit', 'Potencia59': 'TextEdit', 'Potencia60': 'TextEdit', 'Potencia61': 'TextEdit', 'Potencia62': 'TextEdit', 'Potencia63': 'TextEdit', 'Potencia64': 'TextEdit', });
lyr_Guanodeplantasdefaenaavcola_13.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', 'Disponib54': 'TextEdit', 'Disponib55': 'TextEdit', 'Disponib56': 'TextEdit', 'Disponib57': 'TextEdit', 'Disponib58': 'TextEdit', 'Disponib59': 'TextEdit', 'Disponib60': 'TextEdit', 'Disponib61': 'TextEdit', 'Disponib62': 'TextEdit', 'Disponib63': 'TextEdit', 'Disponib64': 'TextEdit', });
lyr_Biomasahmedadeplantasdefaenaavcola_14.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', 'Disponib54': 'TextEdit', 'Disponib55': 'TextEdit', 'Disponib56': 'TextEdit', 'Disponib57': 'TextEdit', 'Disponib58': 'TextEdit', 'Disponib59': 'TextEdit', 'Disponib60': 'TextEdit', 'Disponib61': 'TextEdit', 'Disponib62': 'TextEdit', 'Disponib63': 'TextEdit', 'Disponib64': 'TextEdit', });
lyr_Efluenteslquidosdeplantasdefaenaavcola_15.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', 'Disponib54': 'TextEdit', 'Disponib55': 'TextEdit', 'Disponib56': 'TextEdit', 'Disponib57': 'TextEdit', 'Disponib58': 'TextEdit', 'Disponib59': 'TextEdit', 'Disponib60': 'TextEdit', 'Disponib61': 'TextEdit', 'Disponib62': 'TextEdit', 'Disponib63': 'TextEdit', 'Disponib64': 'TextEdit', });
lyr_EstircolOvinobovinoporcino_16.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', 'Disponib54': 'TextEdit', 'Disponib55': 'TextEdit', 'Disponib56': 'TextEdit', 'Disponib57': 'TextEdit', 'Disponib58': 'TextEdit', 'Disponib59': 'TextEdit', 'Disponib60': 'TextEdit', 'Disponib61': 'TextEdit', 'Disponib62': 'TextEdit', 'Disponib63': 'TextEdit', 'Disponib64': 'TextEdit', });
lyr_BiomasalquidaOvinobovinoporcino_17.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', 'Disponib54': 'TextEdit', 'Disponib55': 'TextEdit', 'Disponib56': 'TextEdit', 'Disponib57': 'TextEdit', 'Disponib58': 'TextEdit', 'Disponib59': 'TextEdit', 'Disponib60': 'TextEdit', 'Disponib61': 'TextEdit', 'Disponib62': 'TextEdit', 'Disponib63': 'TextEdit', 'Disponib64': 'TextEdit', });
lyr_EnergiaOrujoAceituna_18.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', });
lyr_EnergiaOrujoUva_19.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', });
lyr_EnergiaConservasTomate_20.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', });
lyr_EnergiaConservasPera_21.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', });
lyr_EnergiaConservasDurazno_22.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', });
lyr_OrujoAceituna_23.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', });
lyr_OrujoUva_24.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', });
lyr_ConservasTomate_25.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', });
lyr_ConservasPera_26.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', });
lyr_ConservasDurazno_27.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', });
lyr_EnergiaAlmendro_28.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaMembrillo_29.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaCerezo_30.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaNogal_31.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaDamasco_32.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaManzano_33.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaPeral_34.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaOlivo_35.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaDuraznero_36.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaCiruelo_37.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaVidespaldero_38.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_EnergiaVidparral_39.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Potencial': 'TextEdit', 'Potencia_1': 'TextEdit', 'Potencia_2': 'TextEdit', 'Potencia_3': 'TextEdit', 'Potencia_4': 'TextEdit', 'Potencia_5': 'TextEdit', 'Potencia_6': 'TextEdit', 'Potencia_7': 'TextEdit', 'Potencia_8': 'TextEdit', 'Potencia_9': 'TextEdit', 'Potencia10': 'TextEdit', 'Potencia11': 'TextEdit', 'Potencia12': 'TextEdit', 'Potencia13': 'TextEdit', 'Potencia14': 'TextEdit', 'Potencia15': 'TextEdit', 'Potencia16': 'TextEdit', 'Potencia17': 'TextEdit', 'Potencia18': 'TextEdit', 'Potencia19': 'TextEdit', 'Potencia20': 'TextEdit', 'Potencia21': 'TextEdit', 'Potencia22': 'TextEdit', 'Potencia23': 'TextEdit', 'Potencia24': 'TextEdit', 'Potencia25': 'TextEdit', 'Potencia26': 'TextEdit', 'Potencia27': 'TextEdit', 'Potencia28': 'TextEdit', 'Potencia29': 'TextEdit', 'Potencia30': 'TextEdit', 'Potencia31': 'TextEdit', 'Potencia32': 'TextEdit', 'Potencia33': 'TextEdit', 'Potencia34': 'TextEdit', 'Potencia35': 'TextEdit', 'Potencia36': 'TextEdit', 'Potencia37': 'TextEdit', 'Potencia38': 'TextEdit', 'Potencia39': 'TextEdit', 'Potencia40': 'TextEdit', 'Potencia41': 'TextEdit', 'Potencia42': 'TextEdit', 'Potencia43': 'TextEdit', 'Potencia44': 'TextEdit', 'Potencia45': 'TextEdit', 'Potencia46': 'TextEdit', 'Potencia47': 'TextEdit', 'Potencia48': 'TextEdit', 'Potencia49': 'TextEdit', 'Potencia50': 'TextEdit', 'Potencia51': 'TextEdit', 'Potencia52': 'TextEdit', 'Potencia53': 'TextEdit', });
lyr_BiomasaAlmendro_40.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Regin': 'TextEdit', 'Sup': 'TextEdit', 'Biomasa': 'TextEdit', });
lyr_BiomasaMembrillo_41.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaCerezo_42.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaNogal_43.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaDamasco_44.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaManzano_45.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaPeral_46.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaOlivo_47.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaDuraznero_48.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaCiruelo_49.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaVidespaldero_50.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_BiomasaVidparral_51.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'Act_Econ_p': 'TextEdit', 'Concentr_e': 'TextEdit', 'Regin': 'TextEdit', 'PBG_10': 'TextEdit', 'Pob_10': 'TextEdit', 'Empleo_10': 'TextEdit', 'Cond_Viv_1': 'TextEdit', 'Acc_Viv_10': 'TextEdit', 'NBI_10': 'TextEdit', 'Equidad': 'TextEdit', 'Polit_13': 'TextEdit', 'Zon_Dip13': 'TextEdit', 'Zon_Dip2': 'TextEdit', 'Sup': 'TextEdit', 'Disponibil': 'TextEdit', 'Disponib_1': 'TextEdit', 'Disponib_2': 'TextEdit', 'Disponib_3': 'TextEdit', 'Disponib_4': 'TextEdit', 'Disponib_5': 'TextEdit', 'Disponib_6': 'TextEdit', 'Disponib_7': 'TextEdit', 'Disponib_8': 'TextEdit', 'Disponib_9': 'TextEdit', 'Disponib10': 'TextEdit', 'Disponib11': 'TextEdit', 'Disponib12': 'TextEdit', 'Disponib13': 'TextEdit', 'Disponib14': 'TextEdit', 'Disponib15': 'TextEdit', 'Disponib16': 'TextEdit', 'Disponib17': 'TextEdit', 'Disponib18': 'TextEdit', 'Disponib19': 'TextEdit', 'Disponib20': 'TextEdit', 'Disponib21': 'TextEdit', 'Disponib22': 'TextEdit', 'Disponib23': 'TextEdit', 'Disponib24': 'TextEdit', 'Disponib25': 'TextEdit', 'Disponib26': 'TextEdit', 'Disponib27': 'TextEdit', 'Disponib28': 'TextEdit', 'Disponib29': 'TextEdit', 'Disponib30': 'TextEdit', 'Disponib31': 'TextEdit', 'Disponib32': 'TextEdit', 'Disponib33': 'TextEdit', 'Disponib34': 'TextEdit', 'Disponib35': 'TextEdit', 'Disponib36': 'TextEdit', 'Disponib37': 'TextEdit', 'Disponib38': 'TextEdit', 'Disponib39': 'TextEdit', 'Disponib40': 'TextEdit', 'Disponib41': 'TextEdit', 'Disponib42': 'TextEdit', 'Disponib43': 'TextEdit', 'Disponib44': 'TextEdit', 'Disponib45': 'TextEdit', 'Disponib46': 'TextEdit', 'Disponib47': 'TextEdit', 'Disponib48': 'TextEdit', 'Disponib49': 'TextEdit', 'Disponib50': 'TextEdit', 'Disponib51': 'TextEdit', 'Disponib52': 'TextEdit', 'Disponib53': 'TextEdit', });
lyr_Diciembreacumulado_52.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Noviembreacumulado_53.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Octubreacumulado_54.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Septiembreacumulado_55.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Agostoacumulado_56.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Julioacumulado_57.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Junioacumulado_58.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Mayoacumulado_59.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Abrilacumulado_60.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Marzoacumulado_61.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Febreroacumulado_62.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Eneroacumulado_63.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'acumulado_': 'TextEdit', 'acumulad_1': 'TextEdit', 'label': 'TextEdit', });
lyr_Diciembrepromedio_64.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Noviembrepromedio_65.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Octubrepromedio_66.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Septiembrepromedio_67.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Agostopromedio_68.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Juliopromedio_69.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Juniopromedio_70.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Mayopromedio_71.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Abrilpromedio_72.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Marzopromedio_73.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Febreropromedio_74.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Eneropromedio_75.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'prom_min': 'TextEdit', 'prom_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Diciembremximo_76.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Noviembremximo_77.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Octubremximo_78.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Septiembremximo_79.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Agostomximo_80.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Juliomximo_81.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Juniomximo_82.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Mayomximo_83.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Abrilmximo_84.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Marzomximo_85.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Febreromximo_86.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Eneromximo_87.set('fieldImages', {'id': 'TextEdit', 'index': 'TextEdit', 'maximo_min': 'TextEdit', 'maximo_max': 'TextEdit', 'label': 'TextEdit', });
lyr_ParquesProvinciales_88.set('fieldImages', {'CATEGORIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Cursosdeagua_89.set('fieldImages', {'id': 'TextEdit', });
lyr_Cuerposdeagua_90.set('fieldImages', {'id': 'TextEdit', 'Cuerpos Mz': 'TextEdit', });
lyr_Pequeosaprovechamientoshidroelctricos_91.set('fieldImages', {'NOMBRE_CEN': 'TextEdit', 'EMPRESA': 'TextEdit', 'GRUPO_EMPR': 'TextEdit', 'TIPO_CENTR': 'TextEdit', 'POTENCIA_I': 'TextEdit', 'CARACTERIS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Lneasdemediatensin_92.set('fieldImages', {'TENSION': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Lneasdealtatensin_93.set('fieldImages', {'id': 'TextEdit', });
lyr_Centralesdegeneracin_94.set('fieldImages', {'NOMBRE_CEN': 'TextEdit', 'EMPRESA': 'TextEdit', 'GRUPO_EMPR': 'TextEdit', 'TIPO_CENTR': 'TextEdit', 'POTENCIA_I': 'TextEdit', 'CARACTERIS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Estacionestransformadoras_95.set('fieldImages', {'NOMBRE': 'TextEdit', 'ID': 'TextEdit', 'PROPIEDAD': 'TextEdit', 'CONCESION': 'TextEdit', 'POTENCIA_I': 'TextEdit', 'FECHA_PUES': 'TextEdit', 'TENSION_EN': 'TextEdit', 'TENSION_SA': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Redferroviaria_96.set('fieldImages', {'id': 'TextEdit', });
lyr_Redvial_97.set('fieldImages', {'id': 'TextEdit', });
lyr_Estacionesdeserviciodecombustibles_98.set('fieldImages', {'ID1104': 'TextEdit', 'RAZON_SOCI': 'TextEdit', 'CUIT': 'TextEdit', 'DOMICILIO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'TIPO_BOCA': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Infraestructuradetransporte_99.set('fieldImages', {'id': 'TextEdit', });
lyr_Yacimientosdehidrocarburos_100.set('fieldImages', {'IDYA': 'TextEdit', 'AREAYACIMI': 'TextEdit', 'EMPRESA_IN': 'TextEdit', 'IDEMPRESA_': 'TextEdit', 'EMPRESA_OP': 'TextEdit', 'IDEMPRE_01': 'TextEdit', 'GEOJSON': 'TextEdit', });
lyr_Pozosdehidrocarburos_101.set('fieldImages', {'id': 'TextEdit', });
lyr_Mataderos_102.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'placepageUri': 'TextEdit', });
lyr_Conserveras_103.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Bodegas_104.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'placepageUri': 'TextEdit', });
lyr_Aserraderos_105.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'placepageUri': 'TextEdit', });
lyr_Aceiteras_106.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'placepageUri': 'TextEdit', });
lyr_DepartamentosdeMendoza_0.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'SAG': 'no label', });
lyr_Energaporcombustindirectadeaserrnvirutaestoconescostaneros_1.set('fieldLabels', {'id': 'no label', 'Deptos': 'no label', 'Regiones': 'no label', 'Biomasa di': 'no label', 'Energ CD': 'no label', 'Energ Gasi': 'no label', });
lyr_Energaporgasificacindeaserrnvirutaestoconescostaneros_2.set('fieldLabels', {'id': 'no label', 'Deptos': 'no label', 'Regiones': 'no label', 'Biomasa di': 'no label', 'Energ CD': 'no label', 'Energ Gasi': 'no label', });
lyr_Aserrnvirutaestoconescostaneros_3.set('fieldLabels', {'id': 'no label', 'Deptos': 'no label', 'Regiones': 'no label', 'Biomasa di': 'no label', 'Energ CD': 'no label', 'Energ Gasi': 'no label', });
lyr_EnergadePlantacionesforestales_4.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Regin': 'no label', 'Biomasa': 'no label', 'Energa': 'no label', });
lyr_BiomasadePlantacionesforestales_5.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Regin': 'no label', 'Biomasa': 'no label', 'Energa': 'no label', });
lyr_Energadebiomasaderestosdealimentospapelycartn_6.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', });
lyr_BiomasadeRestosdealimentospapelycartn_7.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', });
lyr_Energiadeguanodeplantasdefaenaavcola_8.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', 'Potencia54': 'no label', 'Potencia55': 'no label', 'Potencia56': 'no label', 'Potencia57': 'no label', 'Potencia58': 'no label', 'Potencia59': 'no label', 'Potencia60': 'no label', 'Potencia61': 'no label', 'Potencia62': 'no label', 'Potencia63': 'no label', 'Potencia64': 'no label', });
lyr_Energiadebiomasahmedadeplantasdefaenaavcola_9.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', 'Potencia54': 'no label', 'Potencia55': 'no label', 'Potencia56': 'no label', 'Potencia57': 'no label', 'Potencia58': 'no label', 'Potencia59': 'no label', 'Potencia60': 'no label', 'Potencia61': 'no label', 'Potencia62': 'no label', 'Potencia63': 'no label', 'Potencia64': 'no label', });
lyr_Energiadeefluenteslquidosdeplantasdefaena_10.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', 'Potencia54': 'no label', 'Potencia55': 'no label', 'Potencia56': 'no label', 'Potencia57': 'no label', 'Potencia58': 'no label', 'Potencia59': 'no label', 'Potencia60': 'no label', 'Potencia61': 'no label', 'Potencia62': 'no label', 'Potencia63': 'no label', 'Potencia64': 'no label', });
lyr_EnergiaEstiercolOvinobovinoporcino_11.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', 'Potencia54': 'no label', 'Potencia55': 'no label', 'Potencia56': 'no label', 'Potencia57': 'no label', 'Potencia58': 'no label', 'Potencia59': 'no label', 'Potencia60': 'no label', 'Potencia61': 'no label', 'Potencia62': 'no label', 'Potencia63': 'no label', 'Potencia64': 'no label', });
lyr_EnergiadeefluenteslquidosdemataderosOvinobovinoporcino_12.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', 'Potencia54': 'no label', 'Potencia55': 'no label', 'Potencia56': 'no label', 'Potencia57': 'no label', 'Potencia58': 'no label', 'Potencia59': 'no label', 'Potencia60': 'no label', 'Potencia61': 'no label', 'Potencia62': 'no label', 'Potencia63': 'no label', 'Potencia64': 'no label', });
lyr_Guanodeplantasdefaenaavcola_13.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', 'Disponib54': 'no label', 'Disponib55': 'no label', 'Disponib56': 'no label', 'Disponib57': 'no label', 'Disponib58': 'no label', 'Disponib59': 'no label', 'Disponib60': 'no label', 'Disponib61': 'no label', 'Disponib62': 'no label', 'Disponib63': 'no label', 'Disponib64': 'no label', });
lyr_Biomasahmedadeplantasdefaenaavcola_14.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', 'Disponib54': 'no label', 'Disponib55': 'no label', 'Disponib56': 'no label', 'Disponib57': 'no label', 'Disponib58': 'no label', 'Disponib59': 'no label', 'Disponib60': 'no label', 'Disponib61': 'no label', 'Disponib62': 'no label', 'Disponib63': 'no label', 'Disponib64': 'no label', });
lyr_Efluenteslquidosdeplantasdefaenaavcola_15.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', 'Disponib54': 'no label', 'Disponib55': 'no label', 'Disponib56': 'no label', 'Disponib57': 'no label', 'Disponib58': 'no label', 'Disponib59': 'no label', 'Disponib60': 'no label', 'Disponib61': 'no label', 'Disponib62': 'no label', 'Disponib63': 'no label', 'Disponib64': 'no label', });
lyr_EstircolOvinobovinoporcino_16.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', 'Disponib54': 'no label', 'Disponib55': 'no label', 'Disponib56': 'no label', 'Disponib57': 'no label', 'Disponib58': 'no label', 'Disponib59': 'no label', 'Disponib60': 'no label', 'Disponib61': 'no label', 'Disponib62': 'no label', 'Disponib63': 'no label', 'Disponib64': 'no label', });
lyr_BiomasalquidaOvinobovinoporcino_17.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', 'Disponib54': 'no label', 'Disponib55': 'no label', 'Disponib56': 'no label', 'Disponib57': 'no label', 'Disponib58': 'no label', 'Disponib59': 'no label', 'Disponib60': 'no label', 'Disponib61': 'no label', 'Disponib62': 'no label', 'Disponib63': 'no label', 'Disponib64': 'no label', });
lyr_EnergiaOrujoAceituna_18.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', });
lyr_EnergiaOrujoUva_19.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', });
lyr_EnergiaConservasTomate_20.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', });
lyr_EnergiaConservasPera_21.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', });
lyr_EnergiaConservasDurazno_22.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', });
lyr_OrujoAceituna_23.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', });
lyr_OrujoUva_24.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', });
lyr_ConservasTomate_25.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', });
lyr_ConservasPera_26.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', });
lyr_ConservasDurazno_27.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', });
lyr_EnergiaAlmendro_28.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaMembrillo_29.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaCerezo_30.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaNogal_31.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaDamasco_32.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaManzano_33.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaPeral_34.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaOlivo_35.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaDuraznero_36.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaCiruelo_37.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaVidespaldero_38.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_EnergiaVidparral_39.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Potencial': 'no label', 'Potencia_1': 'no label', 'Potencia_2': 'no label', 'Potencia_3': 'no label', 'Potencia_4': 'no label', 'Potencia_5': 'no label', 'Potencia_6': 'no label', 'Potencia_7': 'no label', 'Potencia_8': 'no label', 'Potencia_9': 'no label', 'Potencia10': 'no label', 'Potencia11': 'no label', 'Potencia12': 'no label', 'Potencia13': 'no label', 'Potencia14': 'no label', 'Potencia15': 'no label', 'Potencia16': 'no label', 'Potencia17': 'no label', 'Potencia18': 'no label', 'Potencia19': 'no label', 'Potencia20': 'no label', 'Potencia21': 'no label', 'Potencia22': 'no label', 'Potencia23': 'no label', 'Potencia24': 'no label', 'Potencia25': 'no label', 'Potencia26': 'no label', 'Potencia27': 'no label', 'Potencia28': 'no label', 'Potencia29': 'no label', 'Potencia30': 'no label', 'Potencia31': 'no label', 'Potencia32': 'no label', 'Potencia33': 'no label', 'Potencia34': 'no label', 'Potencia35': 'no label', 'Potencia36': 'no label', 'Potencia37': 'no label', 'Potencia38': 'no label', 'Potencia39': 'no label', 'Potencia40': 'no label', 'Potencia41': 'no label', 'Potencia42': 'no label', 'Potencia43': 'no label', 'Potencia44': 'no label', 'Potencia45': 'no label', 'Potencia46': 'no label', 'Potencia47': 'no label', 'Potencia48': 'no label', 'Potencia49': 'no label', 'Potencia50': 'no label', 'Potencia51': 'no label', 'Potencia52': 'no label', 'Potencia53': 'no label', });
lyr_BiomasaAlmendro_40.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Regin': 'no label', 'Sup': 'no label', 'Biomasa': 'no label', });
lyr_BiomasaMembrillo_41.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaCerezo_42.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaNogal_43.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaDamasco_44.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaManzano_45.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaPeral_46.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaOlivo_47.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaDuraznero_48.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaCiruelo_49.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaVidespaldero_50.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_BiomasaVidparral_51.set('fieldLabels', {'DEPARTAMEN': 'no label', 'Act_Econ_p': 'no label', 'Concentr_e': 'no label', 'Regin': 'no label', 'PBG_10': 'no label', 'Pob_10': 'no label', 'Empleo_10': 'no label', 'Cond_Viv_1': 'no label', 'Acc_Viv_10': 'no label', 'NBI_10': 'no label', 'Equidad': 'no label', 'Polit_13': 'no label', 'Zon_Dip13': 'no label', 'Zon_Dip2': 'no label', 'Sup': 'no label', 'Disponibil': 'no label', 'Disponib_1': 'no label', 'Disponib_2': 'no label', 'Disponib_3': 'no label', 'Disponib_4': 'no label', 'Disponib_5': 'no label', 'Disponib_6': 'no label', 'Disponib_7': 'no label', 'Disponib_8': 'no label', 'Disponib_9': 'no label', 'Disponib10': 'no label', 'Disponib11': 'no label', 'Disponib12': 'no label', 'Disponib13': 'no label', 'Disponib14': 'no label', 'Disponib15': 'no label', 'Disponib16': 'no label', 'Disponib17': 'no label', 'Disponib18': 'no label', 'Disponib19': 'no label', 'Disponib20': 'no label', 'Disponib21': 'no label', 'Disponib22': 'no label', 'Disponib23': 'no label', 'Disponib24': 'no label', 'Disponib25': 'no label', 'Disponib26': 'no label', 'Disponib27': 'no label', 'Disponib28': 'no label', 'Disponib29': 'no label', 'Disponib30': 'no label', 'Disponib31': 'no label', 'Disponib32': 'no label', 'Disponib33': 'no label', 'Disponib34': 'no label', 'Disponib35': 'no label', 'Disponib36': 'no label', 'Disponib37': 'no label', 'Disponib38': 'no label', 'Disponib39': 'no label', 'Disponib40': 'no label', 'Disponib41': 'no label', 'Disponib42': 'no label', 'Disponib43': 'no label', 'Disponib44': 'no label', 'Disponib45': 'no label', 'Disponib46': 'no label', 'Disponib47': 'no label', 'Disponib48': 'no label', 'Disponib49': 'no label', 'Disponib50': 'no label', 'Disponib51': 'no label', 'Disponib52': 'no label', 'Disponib53': 'no label', });
lyr_Diciembreacumulado_52.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Noviembreacumulado_53.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Octubreacumulado_54.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Septiembreacumulado_55.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Agostoacumulado_56.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Julioacumulado_57.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Junioacumulado_58.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Mayoacumulado_59.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Abrilacumulado_60.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Marzoacumulado_61.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Febreroacumulado_62.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Eneroacumulado_63.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'acumulado_': 'no label', 'acumulad_1': 'no label', 'label': 'no label', });
lyr_Diciembrepromedio_64.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Noviembrepromedio_65.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Octubrepromedio_66.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Septiembrepromedio_67.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Agostopromedio_68.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Juliopromedio_69.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Juniopromedio_70.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Mayopromedio_71.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Abrilpromedio_72.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Marzopromedio_73.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Febreropromedio_74.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Eneropromedio_75.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'prom_min': 'no label', 'prom_max': 'no label', 'label': 'no label', });
lyr_Diciembremximo_76.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Noviembremximo_77.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Octubremximo_78.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Septiembremximo_79.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Agostomximo_80.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Juliomximo_81.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Juniomximo_82.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Mayomximo_83.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Abrilmximo_84.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Marzomximo_85.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Febreromximo_86.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_Eneromximo_87.set('fieldLabels', {'id': 'no label', 'index': 'no label', 'maximo_min': 'no label', 'maximo_max': 'no label', 'label': 'no label', });
lyr_ParquesProvinciales_88.set('fieldLabels', {'CATEGORIA': 'no label', 'NOMBRE': 'no label', 'PROVINCIA': 'no label', 'SUPERFICIE': 'no label', 'GEOJSON': 'no label', });
lyr_Cursosdeagua_89.set('fieldLabels', {'id': 'no label', });
lyr_Cuerposdeagua_90.set('fieldLabels', {'id': 'no label', 'Cuerpos Mz': 'no label', });
lyr_Pequeosaprovechamientoshidroelctricos_91.set('fieldLabels', {'NOMBRE_CEN': 'no label', 'EMPRESA': 'no label', 'GRUPO_EMPR': 'no label', 'TIPO_CENTR': 'no label', 'POTENCIA_I': 'no label', 'CARACTERIS': 'no label', 'LOCALIDAD': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'GEOJSON': 'no label', });
lyr_Lneasdemediatensin_92.set('fieldLabels', {'TENSION': 'no label', 'GEOJSON': 'no label', });
lyr_Lneasdealtatensin_93.set('fieldLabels', {'id': 'no label', });
lyr_Centralesdegeneracin_94.set('fieldLabels', {'NOMBRE_CEN': 'no label', 'EMPRESA': 'no label', 'GRUPO_EMPR': 'no label', 'TIPO_CENTR': 'no label', 'POTENCIA_I': 'no label', 'CARACTERIS': 'no label', 'LOCALIDAD': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'FUENTE': 'no label', 'GEOJSON': 'no label', });
lyr_Estacionestransformadoras_95.set('fieldLabels', {'NOMBRE': 'no label', 'ID': 'no label', 'PROPIEDAD': 'no label', 'CONCESION': 'no label', 'POTENCIA_I': 'no label', 'FECHA_PUES': 'no label', 'TENSION_EN': 'no label', 'TENSION_SA': 'no label', 'GEOJSON': 'no label', });
lyr_Redferroviaria_96.set('fieldLabels', {'id': 'no label', });
lyr_Redvial_97.set('fieldLabels', {'id': 'no label', });
lyr_Estacionesdeserviciodecombustibles_98.set('fieldLabels', {'ID1104': 'no label', 'RAZON_SOCI': 'no label', 'CUIT': 'no label', 'DOMICILIO': 'no label', 'LOCALIDAD': 'no label', 'PROVINCIA': 'no label', 'DESCRIPCIO': 'no label', 'TIPO_BOCA': 'no label', 'GEOJSON': 'no label', });
lyr_Infraestructuradetransporte_99.set('fieldLabels', {'id': 'no label', });
lyr_Yacimientosdehidrocarburos_100.set('fieldLabels', {'IDYA': 'no label', 'AREAYACIMI': 'no label', 'EMPRESA_IN': 'no label', 'IDEMPRESA_': 'no label', 'EMPRESA_OP': 'no label', 'IDEMPRE_01': 'no label', 'GEOJSON': 'no label', });
lyr_Pozosdehidrocarburos_101.set('fieldLabels', {'id': 'no label', });
lyr_Mataderos_102.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'placepageUri': 'no label', });
lyr_Conserveras_103.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bodegas_104.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'placepageUri': 'no label', });
lyr_Aserraderos_105.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'placepageUri': 'no label', });
lyr_Aceiteras_106.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'placepageUri': 'no label', });
lyr_Aceiteras_106.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});