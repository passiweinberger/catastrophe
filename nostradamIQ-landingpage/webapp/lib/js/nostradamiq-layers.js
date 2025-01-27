/* 
    LEGENED //nostradamiq.org/webapp
    var layerId = l.I,
    name = l.N,
    dataType = l.T,
    geoDataSrc = l.G,
    geoLayers = l.L,
    source = l.S,
    sourceUrl = l.U,
    zoom = l.Z,
    markerImg = l.MI,
    markerLabel = l.ML,
    markerColor = l.MC,
    markerScale = l.MS,
    markerMod = l.M,
    largeLayer = l.H,
    newLayer = l.NL,
    timeline = l.C,
    proxy = l.P;
    3D only = l.TRD,
    Leaflet only = l.TWD,
    no Features = l.X;
    TODO: convert to KML to geojson
    TODO: convertingfunction
    TODO: auth_token
*/
/* 
    LEGENED http://climateviewer.net/
    var layerId = l.I,
    format = l.F,
    geoDataSrc = l.G,
    geoLayers = l.L,
    source = l.S,
    sourceUrl = l.U,
    zoom = l.Z,
    markerImg = l.MI,
    markerLabel = l.ML,
    markerScale = l.MS,
    markerMod = l.M,
    largeLayer = l.H,
    newLayer = l.NL,
    timeline = l.C,
    proxy = l.P;
    3D only = l.TRD,
    Leaflet only = l.TWD,
    no Features = l.X;
    
*/
var layers2 = {
    I: 'Climate-Viewer',
    Live: {
        N: "Alerts",  icon: "warning sign",
        Disasters: {
            N: "Disasters", icon: "warning", '>': [
                {
                    I: "pdc_integrated_active_hazards",
                    T: 'kml',
                    P: true,
                    G: "http://ags.pdc.org/arcgis/services/global_public/pdc_integrated_active_hazards/MapServer/KmlServer?Composite=false&LayerIDs=0%2C1%2C2",
                    S: "PDC's global active hazards mapservice. Data are dynamically updated in real-time. The Pacific Disaster Center's (PDC) Integrated Active Hazards Map Service includes PDC integrated hazards. This Map Service is offered in KML, WMS and WFS formats.",
                    U: "http://www.pdc.org/mde/services.jsp",
                    N: "PDC Integrated Active Hazards "
                }
            ]
        },
        Earthquake: {
            N: "Earthquake", icon: "rss", '>': [
                {
                    I: "usgs-all-hour",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - All Earthquakes (Last Hour)"
                },
                //{ I: "usgs-big-today", T: 'geojson', ML: "usgs-eq", MI: "/img/icons/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Today)"},
                {
                    I: "usgs-45-today",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M4.5+ Earthquakes (Today)"
                },
                {
                    I: "usgs-25-today",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M2.5+ Earthquakes (Today)"
                },
                {
                    I: "usgs-all-today",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - All Earthquakes (Today)"
                },
                //{ I: "usgs-big-7day", T: 'geojson', ML: "usgs-eq", MI: "/img/icons/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Week)"},
                {
                    I: "usgs-45-7day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M4.5+ Earthquakes (Last Week)"
                },
                {
                    I: "usgs-25-7day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M2.5+ Earthquakes (Last Week)"
                },
                {
                    I: "usgs-all-7day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - All Earthquakes (Last Week)"
                },
                //{ I: "usgs-big-30day", T: 'geojson', ML: "usgs-eq", MI: "/img/icons/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Month)"},
                {
                    I: "usgs-45-30day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M4.5+ Earthquakes (Last Month)"
                },
                {
                    I: "usgs-25-30day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - M2.5+ Earthquakes (Last Month)"
                },
                {
                    I: "usgs-all-30day",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "USGS - All Earthquakes (Last Month)"
                },
                {
                    I: "EarthquakesNT",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/EarthquakesNT/MapServer",
                    S: "©2015 Esri, Earthquake data for the last 90 days from the USGS. In addition to web-based maps and html pages, USGS provides several alternative ways to obtain real-time earthquake lists. Earthquake information is extracted from a merged catalog of earthquakes located by the USGS and contributing networks. Earthquakes will be broadcast within a few minutes for California events, and within 30-minutes for worldwide events",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "USGS - M3.0+ Earthquakes (Past 90 Days)"
                },
                {
                    I: "Earthquakes",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Earthquakes/MapServer",
                    S: "©2015 Esri, Earthquake data for the last 90 days from the USGS. In addition to web-based maps and html pages, USGS provides several alternative ways to obtain real-time earthquake lists. Earthquake information is extracted from a merged catalog of earthquakes located by the USGS and contributing networks. Earthquakes will be broadcast within a few minutes for California events, and within 30-minutes for worldwide events",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "USGS - All Earthquakes (Past 90 Days)"
                },
                {
                    I: "kml-emsc",
                    T: 'kml',
                    P: true,
                    G: "http://www.emsc-csem.org/Earthquake/Map/earth/kml.php",
                    S: "Centre Sismologique Euro-Méditerranéen (CSEM) Euro-Med earthquakes",
                    U: "http://www.emsc-csem.org/",
                    N: "Euro-Med Earthquakes - CSEM/EMSC"
                },
                {
                    P: true,
                    I: "kml-buoy",
                    T: 'kml',
                    G: "http://www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner",
                    S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center",
                    U: "http://www.ndbc.noaa.gov/",
                    N: "NOAA Buoys"
                }
            ]
        },
        Volcano: {
            N: "Volcano", icon: "warning sign", '>': [
                {
                    I: "kml-volcano",
                    P: true,
                    M: true,
                    MI: '/img/icons/volcano.png',
                    T: 'kml',
                    G: "http://www.volcano.si.edu/news/WeeklyVolcanoGE-Reports.kmz",
                    S: "Smithsonian Institute National Museum of History, Global Volcanism Program: Latest Volcanic Activity",
                    U: "http://www.volcano.si.edu/",
                    N: "Weekly Activity and Eruptions"
                },
                {
                    I: "gvp-volcanos",
                    T: 'geojson',
                    G: "/layers/geojson/gvp-volcanos-cv3d.geojson",
                    MI: "/img/icons/volcano.png",
                    S: "Smithsonian Institute National Museum of History, Global Volcanism Program",
                    U: "http://www.volcano.si.edu/",
                    N: "Global Vocanoes"
                }
            ]
        },
        Fire: {
            N: "Fire", icon: "fire", '>': [
                {
                    I: "MODIS_Thermal",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/MODIS_Thermal/MapServer",
                    S: "MODIS Global Fires is a product of NASA’s Earth Observing System Data and Information System (EOSDIS), part of NASA's Earth Science Data. EOSDIS integrates remote sensing and GIS technologies to deliver global MODIS hotspot/fire locations to natural resource managers and other stakeholders around the World.<br><br>MODIS stands for MODerate Resolution Imaging Spectroradiometer. The MODIS instrument is on board NASA’s Earth Observing System (EOS) Terra (EOS AM) and Aqua (EOS PM) satellites. The orbit of the Terra satellite goes from north to south across the equator in the morning and Aqua passes south to north over the equator in the afternoon resulting in global coverage every 1 to 2 days. The EOS satellites have a ±55 degree scanning pattern and orbit at 705 km with a 2,330 km swath width.<br><br>It takes approximately 2 – 4 hours after satellite overpass for MODIS Rapid Response to process the data, and for the Fire Information for Resource Management System (FIRMS) to update the website. Occasionally, hardware errors mean that it takes longer the 2-4 hours to process the data. Additional information on the MODIS system status can be found at MODIS Rapid Response. ",
                    U: "http://earthdata.nasa.gov/data/near-real-time-data/data/instrument/modis",
                    N: "Fire Dectection - NASA MODIS"
                },
                {
                    I: "kml-usda-fire",
                    Z: true,
                    T: 'kml',
                    P: true,
                    G: "http://activefiremaps.fs.fed.us/data/kml/conus.kmz",
                    S: "US Department of Agriculture (USDA) Forest Service Remote Sensing Applications Center, Active Fire Mapping Program",
                    U: "http://activefiremaps.fs.fed.us/",
                    N: "Active Fire Mapping Program - USDA"
                },
                {
                    I: "kml-noaa-fire",
                    T: 'kml',
                    P: true,
                    G: "http://www.ospo.noaa.gov/data/land/fire/fire.kml",
                    S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product",
                    U: "http://www.ospo.noaa.gov/Products/land/hms.html",
                    N: "Fires Dectection - NOAA HMS"
                },
                {
                    I: "kml-noaa-smoke",
                    T: 'kml',
                    P: true,
                    G: "http://www.ospo.noaa.gov/data/land/fire/smoke.kml",
                    S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product",
                    U: "http://www.ospo.noaa.gov/Products/land/hms.html",
                    N: "Smoke Dectectiond - NOAA HMS"
                },
                {
                    I: "ndgd-smoke-forecast",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NDGD_SmokeForecast/MapServer",
                    S: "The National Digital Guidance Database (NDGD) is a sister to the National Digital Forecast Database (NDFD). Information in NDGD may be used by NWS forecasters as guidance in preparing official NWS forecasts in NDFD. The experimental/guidance NDGD data is not an official NWS forecast product.<br><br>Smoke Forecast is the projected visible smoke from the Continental United States for 48 hours in 1 hour incriments. This data is updated every 24 hours by NWS ",
                    U: "http://www.nws.noaa.gov/ndgd/",
                    N: "Smoke Forecast - NDGD"
                },
                {
                    I: "nowcoast-wet-thunderstorm-fire",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_natlcenters_meteoceanhydro_outlooks_time/MapServer",
                    L: "7,11",
                    S: "This nowCOAST time-enabled map service provides maps of the latest NOAA/NWS Outlooks for Severe Thunderstorms (Convective Outlooks) and Critical Fire Weather for both Dry and Non-Dry Thunderstorms. These outlooks are issued by the NOAA/NWS/NCEP Storm Prediction Center (SPC) in Norman, Oklahoma. The colors used on the maps to indicate the locations and risk level of severe thunderstorms and critical fire weather conditions are the same as (or very close to) those used on SPC's outlook maps. To ensure the latest information is displayed, the maps of these outlooks are updated in this nowCOAST map service every half hour, but the underlying outlooks produced by SPC are usually issued only at 0100, 0600, 1300, 1630, 1730, and 2000 UTC However, amendments or more frequent updates will be issued as necessary.",
                    U: "http://www.nws.noaa.gov/ndgd/",
                    N: "Thunderstorm Critical Fire Weather Outlook"
                }
            ]
        },
        FEMA: {
            N: "FEMA", icon: "emergency", '>': [
                {
                    I: "wms-femad",
                    T: 'wms',
                    G: "http://gis.fema.gov/SOAP//FEMA/DECs/MapServer/WMSServer",
                    L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25",
                    S: "Federal Emergency Management Agency (FEMA)",
                    U: "http://gis.fema.gov/DataFeeds.html",
                    N: "FEMA Current Disaster Declarations"
                },
                {
                    I: "wms-femah",
                    T: 'wms',
                    G: "http://gis.fema.gov/SOAP//FEMA/HistoricalDesignations/MapServer/WMSServer",
                    L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25",
                    S: "Federal Emergency Management Agency (FEMA)",
                    U: "http://gis.fema.gov/DataFeeds.html",
                    N: "FEMA Historical Disaster Declarations"
                },
                {
                    I: "wms-femar",
                    T: 'wms',
                    G: "http://gis.fema.gov/SOAP//FEMA/RegHQs/MapServer/WMSServer",
                    L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25",
                    S: "Federal Emergency Management Agency (FEMA)",
                    U: "http://gis.fema.gov/DataFeeds.html",
                    N: "FEMA Regions and Field Offices"
                },
                {
                    I: "wms-femae",
                    T: 'wms',
                    G: "http://gis.fema.gov/SOAP//FEMA/EvacRoutes/MapServer/WMSServer",
                    L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25",
                    S: "Federal Emergency Management Agency (FEMA)",
                    U: "http://gis.fema.gov/DataFeeds.html",
                    N: "FEMA Hurricane Evacuation Routes"
                }
            ]
        },
        Report: {
            N: "CV Reports", icon: "bullhorn", '>': [
                {
                    I: "cvr01",
                    T: 'geojson',
                    M: true,
                    MS: "2",
                    G: "/layers/geojson/cvreports-cv3d.geojson",
                    MI: "/img/cv3d-red.png",
                    S: "Climate Viewer Reports",
                    U: "https://climateviewer.crowdmap.com/",
                    N: "CV Reports - 2011 - 2015"
                }
            ]
        }
    },
    weather: {
        N: "Weather", icon: "sun",
        alerts: {
            N: "Weather Alerts", icon: "lightning", '>': [
                {
                    I: "NOAA_storm_reports",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NOAA_storm_reports/MapServer",
                    S: "This map contains continuously updated US tornado reports, wind storm reports and hail storm reports. You can click on each to receive information about the specific location and read a short description about the issue. Each layer is generated hourly from data provided by NOAA’s National Weather Service Storm Prediction Center.",
                    U: "http://www.spc.noaa.gov/climo/reports",
                    N: "Storm Reports - NOAA"
                },
                {
                    I: "NOAA_short_term_warnings",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NOAA_short_term_warnings/MapServer",
                    S: "This service contains continuously updated US weather warnings. You can click on each to receive information about the specific location and read a short description about the issue. Each layer is generated hourly from data provided by NOAA’s National Weather Service Storm Prediction Center.",
                    U: "http://www.spc.noaa.gov/climo/reports",
                    N: "Short-term Warnings - NOAA"
                },
                {
                    I: "Weather_Warnings_Watches_Advisories_Statements",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Weather_Warnings_Watches_Advisories_Statements/MapServer",
                    S: "Weather Watches, Warnings, Advisories, and Statements are products of the National Weather Service (NWS). We automatically check these products for updates every 5 minutes from the NWS Public Alerts. The NWS XML Feed is parsed using the Aggregated Live Feeds methodology to take the returned information and serve the data through ArcGIS Server as a map service. ",
                    U: "http://alerts.weather.gov/",
                    N: "Warnings, Watches, Advisories - NOAA"
                },

                {
                    I: "nowcoast_wwa_meteoceanhydro_longduration_hazards_time",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer",
                    S: "This nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WATCHES, WARNINGS, ADVISORIES, and STATEMENTS for long-duration hazardous weather, marine weather, hydrological, oceanographic, wildfire, air quality, and ecological conditions which may or are presently affecting inland, coastal, and maritime areas. A few examples include Gale Watch, Gale Warning, High Surf Advisory, High Wind Watch, Areal Flood Warning, Coastal Flood Watch, Winter Storm Warning, Wind Chill Advisory, Frost Advisory, Tropical Storm Watch, Red Flag Warning, Air Stagnation Warning, and Beach Hazards Statement. (A complete list is given in the Background Information section below.) The coverage areas of these products are usually defined by county or sub-county boundaries. The colors used to identify the different watches, advisories, warnings, and statements are the same colors used by the NWS on their map at weather.gov. The NWS products for long-duration hazardous conditions are updated in the nowCOAST map service approximately every 10 minutes.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "Watches &amp; Warnings for Long-Duration Hazards"
                },
                {
                    I: "nowcoast_wwa_meteoceanhydro_shortduration_hazards_warnings_time",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_warnings_time/MapServer",
                    S: "The nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WARNINGS for short-duration hazards for inland, coastal, and maritime areas which are in progress, imminent, or has a very high probability of occurring. These hazards include severe thunderstorms (damaging winds, large hail), tornadoes, waterspouts, flash floods, and extreme winds associated with major land-falling hurricanes. Specifically, the layer includes the following warnings: Special Marine Warnings (winds of 34 knots, 3/4 inch diameter hail, waterspouts), Severe Thunderstorm Warnings (winds of 58 MPH or greater, large hail of 1 inch or greater in diameter), Tornado Warnings, Flash Flood Warnings, and Extreme Wind Warnings (sustained surface winds of 115 MPH or greater during major [Category 3 or higher]land-falling hurricane within one hour). The colors used to identify the different warnings are the same colors used by the NWS on their map at weather.gov. The map is updated in the nowCOAST map service every minute.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "Warnings for Short-Duration Hazards"
                },
                {
                    I: "nowcoast_wwa_meteoceanhydro_shortduration_hazards_watches_time",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer",
                    S: "This nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WATCHES for the following short-duration hazardous weather and hydrological events which may affect inland and coastal areas: severe thunderstorms (surface winds of 58 MPH (93 KM/H, 50 knots) or greater, large hail of 1 inch (2.5 cm) or greater in diameter, tornadoes, and flash floods. A watch indicates that the risk of hazardous weather or hydrologic event has increased significantly, but its occurrence, location, and/or timing is still uncertain. The geographic areas covered by Severe Thunderstorm, Tornado, and Flash Flood Watches are usually indicated by county or subdivided-county boundaries. The colors used to identify the different watches are the same colors used by the NWS on their map at weather.gov. The NWS watches are updated in the nowCOAST map service approximately every 10 minutes.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "Watches for Short-Duration Hazards"
                },
                {
                    X: true,
                    I: "nowcoast-thunderstorm-outlook",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_natlcenters_meteoceanhydro_outlooks_time/MapServer",
                    L: "3,7,11",
                    S: "This nowCOAST time-enabled map service provides maps of the latest NOAA/NWS Outlooks for Severe Thunderstorms (Convective Outlooks) and Critical Fire Weather for both Dry and Non-Dry Thunderstorms. These outlooks are issued by the NOAA/NWS/NCEP Storm Prediction Center (SPC) in Norman, Oklahoma. The colors used on the maps to indicate the locations and risk level of severe thunderstorms and critical fire weather conditions are the same as (or very close to) those used on SPC's outlook maps. To ensure the latest information is displayed, the maps of these outlooks are updated in this nowCOAST map service every half hour, but the underlying outlooks produced by SPC are usually issued only at 0100, 0600, 1300, 1630, 1730, and 2000 UTC However, amendments or more frequent updates will be issued as necessary.",
                    U: "http://www.nws.noaa.gov/ndgd/",
                    N: "NOAA NWS NCEP Severe Thunderstorm Outlooks"
                },
                {
                    X: true,
                    I: "nowcoast_sat_meteo_emulated_imagery_lightningstrikedensity_goes_time",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer",
                    S: "This nowCOAST time-enabled map service provides maps of experimental lightning strike density data from the NOAA/National Weather Service/NCEP's Ocean Prediction Center (OPC) which emulate (simulate) data from the future NOAA GOES-R Global Lightning Mapper (GLM). The purpose of this experimental product is to provide mariners and others with enhanced &ldquo;awareness of developing and transitory thunderstorm activity, to give users the ability to determine whether a cloud system is producing lightning and if that activity is increasing or decreasing...&rdquo; Lightning Strike Density, as opposed to display of individual strikes, highlights the location of lightning cores and trends of increasing and decreasing activity. The maps depict the density of lightning strikes during a 15 minute time period at an 8 km x 8 km spatial resolution. The lightning strike density maps cover the geographic area from 25 degrees South to 80 degrees North latitude and from 110 degrees East to 0 degrees West longitude. The map units are number of strikes per square km per minute multiplied by a scaling factor of 10^3. The strike density is color coded using a color scheme which allows the data to be easily seen when overlaid on GOES imagery and to distinguish values at low density values. The maps are updated on nowCOAST approximately every 15 minutes. The latest data depicted on the maps are approximately 12 minutes old (or older). The OPC lightning strike density product is still experimental and may not always be available. Given the spatial resolution and latency of the data, the data should NOT be used to activite your lightning safety plans. Always follow the safety rule: when you first hear thunder or see lightning in your area, activate your emergency plan. If outdoors, immediately seek shelter in a substantial building or a fully enclosed metal vehicle such as a car, truck or a van. Do not resume activities until 30 minutes after the last observed lightning or thunder.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "Lightning Strike Density - GOES-R"
                },
                {
                    P: true,
                    I: "kml-nwshlog",
                    T: 'kml',
                    M: true,
                    MI: "/img/icons/lightning_bolt.png",
                    G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsHourlyStormLogs.kml",
                    S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)",
                    U: "http://wdssii.nssl.noaa.gov/",
                    N: "NOAA/NWS Hourly Storm Log"
                },
                {
                    P: true,
                    I: "kml-nwsdlog",
                    T: 'kml',
                    M: true,
                    MI: "/img/icons/lightning_bolt.png",
                    G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsDailyStormLogs.kml",
                    S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)",
                    U: "http://wdssii.nssl.noaa.gov/",
                    N: "NOAA/NWS Daily Storm Log"
                }
            ]
        },
        radar: {
            N: "Weather Radar", icon: "feed", '>': [
                {
                    X: true,
                    I: "mesonet-nexrad",
                    T: 'wms',
                    G: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi",
                    L: "nexrad_base_reflect",
                    S: "Iowa State University of Science and Technology MESONET",
                    U: "http://mesonet.agron.iastate.edu/ogc/",
                    N: "NEXRAD Radar - Base Reflectivity"
                },
                {
                    X: true,
                    I: "nowcoast_radar_meteo_imagery_nexrad_time",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer",
                    S: "This nowCOAST time-enabled map service provides maps of NOAA/National Weather Service RIDGE2 mosaics of base reflectivity images across the Continental United States (CONUS) as well as Puerto Rico, Hawaii, Guam and Alaska with a 2 kilometer (1.25 mile) horizontal resolution. The mosaics are compiled by combining regional base reflectivity radar data obtained from 158 Weather Surveillance Radar 1988 Doppler (WSR-88D) also known as NEXt-generation RADar (NEXRAD) sites across the country operated by the NWS and the Dept. of Defense and also from data from Terminal Doppler Weather Radars (TDWR) at major airports. The colors on the map represent the strength of the energy reflected back toward the radar. The reflected intensities (echoes) are measured in dBZ (decibels of z). The color scale is very similar to the one used by the NWS RIDGE2 map viewer. The radar data itself is updated by the NWS every 10 minutes during non-precipitation mode, but every 4-6 minutes during precipitation mode. To ensure nowCOAST is displaying the most recent data possible, the latest mosaics are downloaded every 5 minutes. For more detailed information about the update schedule, see:",
                    U: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer",
                    N: "NEXRAD Radar - RIDGE2 mosaics"
                },
                {
                    I: "radar_coverage_230km",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/geo/radar_coverage/MapServer",
                    L: "0",
                    S: "National Climatic Data Center, NESDIS, NOAA, U.S. Department of Commerce",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "Maximum Radar Ranges (230 km)"
                },
                {
                    I: "radar_coverage_4k",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/geo/radar_coverage/MapServer",
                    L: "1",
                    S: "National Climatic Data Center, NESDIS, NOAA, U.S. Department of Commerce",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "Radar Coverage 4,000 ft Above Ground"
                },
                {
                    I: "radar_coverage_6k",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/geo/radar_coverage/MapServer",
                    L: "2",
                    S: "National Climatic Data Center, NESDIS, NOAA, U.S. Department of Commerce",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "Radar Coverage 6,000 ft Above Ground"
                },
                {
                    I: "radar_coverage_10k",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/geo/radar_coverage/MapServer",
                    L: "3",
                    S: "National Climatic Data Center, NESDIS, NOAA, U.S. Department of Commerce",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "Radar Coverage 10,000 ft Above Ground"
                },
                {
                    I: "radar_coverage_max",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/geo/radar_coverage/MapServer",
                    L: "4",
                    S: "National Climatic Data Center, NESDIS, NOAA, U.S. Department of Commerce",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "Maximum Radar Coverage"
                }
            ]
        },
        ra: {
            N: "Radar Animations", TRD: true, icon: "film", '>': [
                {
                    P: true,
                    I: "kml-nexradcgl",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/centgrtlakes_N0R_loop.kml",
                    S: "Central Great Lakes - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "Central Great Lakes"
                },
                {
                    P: true,
                    I: "kml-nexradne",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/northeast_N0R_loop.kml",
                    S: "North East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "North East"
                },
                {
                    P: true,
                    I: "kml-nexradnr",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/northrockies_N0R_loop.kml",
                    S: "North Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "North Rockies"
                },
                {
                    P: true,
                    I: "kml-nexradpnw",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/pacnorthwest_N0R_loop.kml",
                    S: "Pacific North West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "Pacific North West"
                },
                {
                    P: true,
                    I: "kml-nexradpsw",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/pacsouthwest_N0R_loop.kml",
                    S: "Pacific South West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "Pacific South West"
                },
                {
                    P: true,
                    I: "kml-nexradse",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/southeast_N0R_loop.kml",
                    S: "South East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "South East"
                },
                {
                    P: true,
                    I: "kml-nexradsmv",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/southmissvly_N0R_loop.kml",
                    S: "South Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "South Mississippi Valley"
                },
                {
                    P: true,
                    I: "kml-nexradsp",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/southplains_N0R_loop.kml",
                    S: "South Plains - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "South Plains"
                },
                {
                    P: true,
                    I: "kml-nexradsr",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/southrockies_N0R_loop.kml",
                    S: "South Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "South Rockies"
                },
                {
                    P: true,
                    I: "kml-nexradumv",
                    Z: true,
                    T: 'kml',
                    G: "http://radar.weather.gov/ridge/kml/animation/sectors/uppermissvly_N0R_loop.kml",
                    S: "Upper Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation",
                    U: "http://radar.weather.gov/ridge/",
                    N: "Upper Mississippi Valley"
                }
            ]
        },
        surface: {
            N: "Surface Observations", icon: "location arrow", '>': [
                {
                    I: "nws_wfo_conus",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NOAA_METAR_current_wind_speed_direction/MapServer",
                    S: "The National Oceanic and Atmospheric Administration (NOAA) provided METARs (The acronym roughly translates from French as Aviation Routine Weather Report) typically come from airports or permanent weather observation stations. Reports are generated once an hour or half an hour, but if conditions change significantly, a report known as a special (SPECI) may be issued. Some METARs are encoded by automated airport weather stations located at airports, military bases, and other sites. Some locations still use augmented observations, which are recorded by digital sensors, encoded via software, and then reviewed by certified weather observers or forecasters prior to being transmitted. Observations may also be taken by trained observers or forecasters who manually observe and encode their observations prior to transmission.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Wind Speed &amp; Direction - NOAA METAR"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_weather",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "1",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Surface Weather Observation Stations"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_ocean",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "4",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Ocean/Estuary/Lake Observation Stations"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_river",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "7",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "River Observation Stations"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_water",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "10",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Water Quality Observation Stations"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_air",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "13",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Air Quality Observation Stations"
                },
                {
                    I: "obs_meteoceanhydro_insitu_pts_geolinks_radiosonde",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteoceanhydro_insitu_pts_geolinks/MapServer",
                    L: "16",
                    S: "Maps depicting locations of surface weather, oceanographic, river, water quality, and air quality observing stations, gages, and other types of observing platforms in the USA. These includes but not limited to observations from airports (ASOS, AWOS), coastal stations (C-MAN, NWLON, PORTS, NERRS), oil rigs, state mesonets, state air quality stations, state water quality stations, fixed buoys, drifting buoys, USGS river gages, weather stations, and water quality stations, voluntary observing ships, regional ocean observing systems and other networks (e.g. RAWS, Climate Reference Network) along with hyperlinks to web pages posting recent data from these observing platforms. It also provides maps of upper-air observations from radiosonde stations and hyperlinks to web pages posting recent data from these sounding stations.",
                    U: "http://www.ncdc.noaa.gov/oa/wdc/metar/",
                    N: "Upper-Air Radiosonde (Atmospheric Soundings)"
                },
                {
                    I: "obs_meteocean_insitu_sfc_time",
                    T: 'arcgis-layer',
                    G: "http://new.nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteocean_insitu_sfc_time/MapServer",
                    S: "This nowCOAST time-enabled map service provides map depicting the latest surface weather and marine weather observations at observing sites using the international station model. The station model is method for representing information collected at an observing station using symbols and numbers. The station model depicts current weather conditions, cloud cover, wind speed, wind direction, visibility, air temperature, dew point temperature, sea surface water temperature, significant wave height, air pressure adjusted to mean sea level, and the change in air pressure over the last 3 hours. The circle in the model is centered over the latitude and longitude coordinates of the station. The total cloud cover is expressed as a fraction of cloud covering the sky and is indicated by the amount of circle filled in. (Cloud cover is not presently displayed due to a problem with the source data. Present weather information is also not available for display at this time.) Wind speed and direction are represented by a wind barb whose line extends from the cover cloud circle towards the direction from which the wind is blowing. The short lines or flags coming off the end of the long line are called barbs. The barb indicates the wind speed in knots. Each normal barb represents 10 knots, while short barbs indicate 5 knots. A flag represents 50 knots. If there is no wind barb depicted, an outer circle around the cloud cover symbol indicates calm winds. The map of observations are updated in the nowCOAST map service approximately every 10 minutes. However, since the reporting frequency varies by network or station, the observation at a particular station may have not updated and may not update until after the next hour.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "METAR Observations"
                }
            ]
        },
        rain: {
            N: "Precipitation", icon: "umbrella", ">": [
                {
                    I: "usdroughtoutlook",
                    T: 'arcgis-layer',
                    G: "http://gis.ncdc.noaa.gov/arcgis/rest/services/nidis/usdroughtoutlook/MapServer",
                    S: "Climate Prediction Center (CPC)",
                    U: "http://www.cpc.ncep.noaa.gov/",
                    N: "US Drought Outlook"
                },
                {
                    P: true,
                    I: "kml-usdrought",
                    T: 'kml',
                    G: "http://torka.unl.edu:8080/dm/data/kml/current/usdm_current.kmz",
                    S: "University of Nebraska-Lincoln, US. Drought Monitor",
                    U: "http://droughtmonitor.unl.edu/",
                    N: "US. Drought Monitor"
                },
                {
                    I: "AHPS-StreamGauge",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/StreamGauge/MapServer",
                    S: "NOAA Advanced Hydrologic Prediction Service (AHPS). Stream Gauge is a product of National Oceanic and Atmospheric Administration (NOAA). This gives us readings of stream gauges around the US, which depict the current water level in the measured areas.",
                    U: "http://water.weather.gov/ahps/",
                    N: "USGS - All Earthquakes (Past 90 Days)"
                },

                {
                    P: true,
                    I: "kml-usshour",
                    T: 'kml',
                    G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF6hr_f00-f06_latest.kml",
                    S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)",
                    U: "http://www.wpc.ncep.noaa.gov/",
                    N: "US. 6-hour Forecast"
                },
                {
                    P: true,
                    I: "kml-usstfhour",
                    T: 'kml',
                    G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF24hr_Day1_main.kml",
                    S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)",
                    U: "http://www.wpc.ncep.noaa.gov/",
                    N: "US. 24-hour Forecast"
                },
                {
                    P: true,
                    I: "kml-ussfd",
                    T: 'kml',
                    G: "http://www.wpc.ncep.noaa.gov/kml/qpf/QPF120hr_Day1-5_latest.kml",
                    S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)",
                    U: "http://www.wpc.ncep.noaa.gov/",
                    N: "US. 5-day Forecast"
                },
                {
                    P: true,
                    I: "kml-ussfdflood",
                    T: 'kml',
                    G: "http://www.wpc.ncep.noaa.gov/kml/fop/fop.kml",
                    S: "NOAA National Weather Service, Weather Prediction Center, 5-Day Significant River Flood Outlook",
                    U: "http://www.wpc.ncep.noaa.gov/",
                    N: "US. Significant Flood Risk"
                },
                {
                    P: true,
                    H: true,
                    I: "kml-usfloods",
                    T: 'kml',
                    G: "http://water.weather.gov/ahps/worldfiles/ahps_national_fcst.kmz",
                    S: "NOAA National Weather Service, River Observations",
                    U: "http://water.weather.gov/ahps/",
                    N: "US. River Flood Levels"
                },
                {
                    P: true,
                    I: "kml-trmmgf",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_hydro_model_b.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html",
                    N: "Global Flood Forecast"
                },
                {
                    P: true,
                    I: "kml-trmmgff",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_G5_extended_hydro_model.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html",
                    N: "5-day Flood Forecast"
                },
                {
                    P: true,
                    I: "kml-trmmthr",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_3hr.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "3-hour Accumulated Rainfall"
                },
                {
                    P: true,
                    I: "kml-trmmtfhr",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_24hr_b.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "24-hour Accumulated Rainfall"
                },
                {
                    P: true,
                    I: "kml-trmmsthr",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_72hr_b.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "72-hour Accumulated Rainfall"
                },
                {
                    P: true,
                    I: "kml-trmmosehr",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_168hr_b.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "168-hour Accumulated Rainfall"
                },
                {
                    P: true,
                    I: "kml-trmmav",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_average.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "30-day Average Rainfall"
                },
                {
                    P: true,
                    I: "kml-trmman",
                    T: 'kml',
                    G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_anomaly.kml",
                    S: "NASA Tropical Rainfall Measuring Mission (TRMM)",
                    U: "http://trmm.gsfc.nasa.gov/",
                    N: "30-day Anomaly Rainfall"
                },
                {
                    P: true,
                    I: "kml-eumetod",
                    T: 'kml',
                    G: "http://oiswww.eumetsat.int/IPPS/html/GE/MET0D_VP-MPE.kml",
                    S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat 0 degree Multi-Sensor Precipitation Estimate (MPE) ",
                    U: "http://www.eumetsat.int/website/home/Data/Products/index.html",
                    N: "Meteosat METOD"
                },
                {
                    P: true,
                    I: "kml-euiodc",
                    T: 'kml',
                    G: "http://oiswww.eumetsat.int/IPPS/html/GE/IODC_VP-MPE.kml",
                    S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat IODC Multi-Sensor Precipitation Estimate (MPE) ",
                    U: "http://www.eumetsat.int/website/home/Data/Products/index.html",
                    N: "Meteosat IODC"
                },
                {
                    P: true,
                    I: "kml-usdanrcs",
                    T: 'kml',
                    G: "http://www.wcc.nrcs.usda.gov/ftpref/data/water/wcs/earth/snotelwithoutlabels.kmz",
                    S: "USDA Natural ReSs Conservation Service (NRCS)",
                    U: "http://www.wcc.nrcs.usda.gov/",
                    N: "SNOTEL Snowfall Monitors"
                },
                {
                    P: true,
                    I: "kml-nohrsc",
                    T: 'kml',
                    G: "http://www.nohrsc.noaa.gov/snow_model/GE/latest_nohrsc_nsm.kmz",
                    S: "National Weather Service, National Operational Hydrologic Remote Sensing Center (NOHRSC)",
                    U: "http://www.nohrsc.noaa.gov/",
                    N: "NOHRSC Snowfall Monitors"
                }
            ]
        },
        canes: {
            N: "Tropical Cyclones", icon: "cloud", '>': [
                {
                    I: "hc_nc_observed_track",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "8",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Observed Track"
                },
                {
                    I: "hc_nc_observed_positions",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "7",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Observed Positions"
                },
                {
                    I: "hc_nc_forecast_track",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "4",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Forecast Track"
                },
                {
                    I: "hc_nc_forecast_positions",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "3",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Forecast Positions"
                },
                {
                    I: "hc_nc_error_cone",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "5",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Cone of Error"
                },
                {
                    I: "hc_nc_coast_watch_warn",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "2",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Watches and Warnings"
                },
                {
                    I: "hc_nc_surface_winds",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
                    L: "9",
                    S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "nowCOAST Observed Surface Wind Swath"
                },
                {
                    I: "hc_observed_track",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "3",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Observed Track"
                },
                {
                    I: "hc_past_position",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "1",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Past Positions"
                },
                {
                    I: "hc_forecast_track",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "2",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Forecast Track"
                },
                {
                    I: "hc_forecast_position",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "0",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Forecast Positions"
                },
                {
                    I: "hc_error_cone",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "4",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Cone of Error"
                },
                {
                    I: "hc_warn_watch",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    L: "5",
                    S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.",
                    U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer",
                    N: "NOAA/USNO Watches and Warnings"
                },
                {
                    I: "hc_historic_tracks",
                    T: 'arcgis-layer',
                    G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Recent/MapServer",
                    S: "Past Positions and Observed Track are products of the National Hurricane Center (NHC). We automatically check these products for updates every 15 minutes from the NHC GIS Data page.",
                    U: "http://www.nhc.noaa.gov/gis/",
                    N: "Past Hurricane Tracks"
                },
                {
                    P: true,
                    I: "kml-hurrgdacs",
                    T: 'kml',
                    G: "http://www.gdacs.org/xml/gdacs.kml",
                    S: " Global Disaster Alert and Coordination System (GDACS)",
                    U: "http://www.gdacs.org/",
                    N: "Hurricane Tracker (GDACS)"
                }
            ]
        }
    },
    satellites: {
        N: "Satellites", icon: "photo",
        sat: {
            N: "Satellite Imagery", icon: "globe", '>': [
                {
                    I: "nowcoast_sat_meteo_imagery_goes_time_im",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_imagery_goes_time/MapServer",
                    L: "1,2,3",
                    S: "This nowCOAST time-enabled map service provides maps depicting visible, infrared, and water vapor imagery composited from NOAA/NESDIS GOES-EAST and GOES-WEST. The horizontal resolutions of the IR, visible, and water vapor composite images are approximately 1km, 4km, and 4km, respectively. The visible and IR imagery depict the location of clouds. The water vapor imagery indicates the amount of water vapor contained in the mid to upper levels of the troposphere. The darker grays indicate drier air while the brighter grays/whites indicates more saturated air. The GOES composite imagers are updated in the nowCOAST map service every 30 minutes. ",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "GOES E+W - Visible"
                },
                {
                    I: "nowcoast_sat_meteo_imagery_goes_time_wv",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_imagery_goes_time/MapServer",
                    L: "4,5,6,7",
                    S: "This nowCOAST time-enabled map service provides maps depicting visible, infrared, and water vapor imagery composited from NOAA/NESDIS GOES-EAST and GOES-WEST. The horizontal resolutions of the IR, visible, and water vapor composite images are approximately 1km, 4km, and 4km, respectively. The visible and IR imagery depict the location of clouds. The water vapor imagery indicates the amount of water vapor contained in the mid to upper levels of the troposphere. The darker grays indicate drier air while the brighter grays/whites indicates more saturated air. The GOES composite imagers are updated in the nowCOAST map service every 30 minutes. ",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "GOES E+W - Water Vapor"
                },
                {
                    I: "nowcoast_sat_meteo_imagery_goes_time_ir",
                    T: 'arcgis-layer',
                    G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_imagery_goes_time/MapServer",
                    L: "8,9,10,11",
                    S: "This nowCOAST time-enabled map service provides maps depicting visible, infrared, and water vapor imagery composited from NOAA/NESDIS GOES-EAST and GOES-WEST. The horizontal resolutions of the IR, visible, and water vapor composite images are approximately 1km, 4km, and 4km, respectively. The visible and IR imagery depict the location of clouds. The water vapor imagery indicates the amount of water vapor contained in the mid to upper levels of the troposphere. The darker grays indicate drier air while the brighter grays/whites indicates more saturated air. The GOES composite imagers are updated in the nowCOAST map service every 30 minutes. ",
                    U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule",
                    N: "GOES E+W - Longwave Infrared"
                },

                {
                    I: "MODIS_Terra_CorrectedReflectance_TrueColor",
                    T: 'nasa-gibs',
                    S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Corrected Reflectance (True Color)"
                },
                {
                    I: "MODIS_Terra_CorrectedReflectance_Bands721",
                    T: 'nasa-gibs',
                    S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Corrected Reflectance (Bands 7-2-1)"
                },
                {
                    I: "MODIS_Terra_CorrectedReflectance_Bands367",
                    T: 'nasa-gibs',
                    S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Corrected Reflectance (Bands 3-6-7)"
                },
                {
                    I: "MODIS_Terra_SurfaceReflectance_Bands121",
                    T: 'nasa-gibs',
                    S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Land Surface Reflectance (Bands 1-2-1)"
                },
                {
                    P: true,
                    I: "kml-usnmsir",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/3rdparty/weather/clouds/USN-multisat-ir-CVDB.kmz",
                    S: "Image S: US. Naval Research Laboratory, Marine Meteorology Division. Google Earth overlay by Jim Lee",
                    U: "http://www.nrlmry.navy.mil/archdat/global/stitched/ir/",
                    N: "Infrared Clouds - NRL"
                }
            ]
        },
        satAnimation: {
            N: "Satellite Animations", icon: "film", '>': [
                {
                    P: true,
                    C: true,
                    I: "sat15",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.natl.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North Atlantic - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat16",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.epac.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North East Pacific - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat17",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.wpac.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North West Pacific - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat18",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.indo.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "Indian Ocean - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat19",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.ausf.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "Western Australia - Total Precipitable Water"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat09",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaiceir.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "East North Atlantic Region - Infrared"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat10",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicewv.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North Atlantic Region - Water Vapor"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat11",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwir.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North Pacific Region - Infrared"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat12",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwwv.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "North Pacific Region - Water Vapor"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat13",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicsir.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "South Pacific Region - Infrared"
                },
                {
                    P: true,
                    H: true,
                    C: true,
                    I: "sat14",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicswv.tiles.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "South Pacific Region - Water Vapor"
                }
            ]
        }
    },
    pollution: {
        N: "Pollution", icon: "life ring",
        fossilfuel: {
            N: "Fossil Fuel", icon: "recycle sign", '>': [
                {
                    H: true,
                    T: 'geojson',
                    MS: 3,
                    MI: '/img/icons/oil_well.png',
                    I: "p07",
                    G: "/layers/geojson/Fracking-Chemical-Reports-cv3d.geojson",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>SkyTruth released a database on the chemicals used during the process of hydraulic fracturing, or “fracking,” at oil and gas wells across the United States. These data (which took a heckuva lot of work for us to compile) are being made freely available to the public for research and analysis. We're doing this in the hope that this information will facilitate credible research on this nationally significant issue, and will promote discussion about effective public disclosure. </p>",
                    U: "http://blog.skytruth.org/2012/11/skytruth-releases-fracking-chemical.html",
                    N: "Fracking America"
                },
                {
                    C: true,
                    Z: true,
                    I: "nrdc-drinking-water-impacts",
                    T: 'geojson',
                    G: "/layers/geojson/nrdc-drinking-impacts-2011-cv3d.geojson",
                    MI: "/img/icons/poison.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>National Resource Defense Council (NRDC) List of Suspected Drinking Water Impacts (2011)",
                    U: "http://www.fractracker.org/downloads/nrdc-list-of-suspected-drinking-water-impacts-2011/",
                    N: "NRDC Drinking Water Impacts 2011"
                },
                {
                    I: "coal-power-now",
                    Z: true,
                    T: 'geojson',
                    MS: 3,
                    MI: '/img/icons/smoke-red.png',
                    G: "/layers/geojson/Contaminated-Coal-Waste-NRDC-current-factories-cv3d.geojson",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Natural Resource Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than four hundred forty existing coal-fired power plants in 47 states produced over 126 million tons of coal waste in 2005, contaminated by over 91 thousand tons of toxic metals. This table lists totals by state, ranked by total coal waste per state.",
                    U: "http://www.nrdc.org/energy/coalwaste",
                    N: "Coal Power Plants (current)"
                },
                {
                    I: "coal-power-future",
                    Z: true,
                    T: 'geojson',
                    MS: 3,
                    MI: '/img/icons/smoke-grey.png',
                    G: "/layers/geojson/Contaminated-Coal-Waste-NRDC-future-factories-cv3d.geojson",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Natural Resource Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than eighty new coal-fired power plants have been proposed around the country. If built, the plants will annually produce nearly 18 million tons of coal ash, contaminated by over 18 thousand tons of toxic metals. Over the course of their operating lives, these new power plants will produce approximately one billion tons of coal ash, with a million tons of toxic metals.",
                    U: "http://www.nrdc.org/energy/coalwaste",
                    N: "Coal Power Plants (future)"
                },
                {
                    I: "coal-ash",
                    Z: true,
                    T: 'geojson',
                    MS: 3,
                    MI: '/img/icons/mryuk.png',
                    G: "/layers/geojson/Coal-Ash-Ponds-cv3d.geojson",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Natural Resource Defense Council (NRDC) “The horror is unimaginable.  A community suffering severe health effects, with more than a thousand resIents blaming coal ash contamination for causing their sickness, including grisly birth defects in their children.”",
                    U: "http://switchboard.nrdc.org/blogs/rperks/coal_ash_wreaking_havoc_on_hea.html",
                    N: "Coal Ash in Ponds"
                },
                {
                    I: "us-shale-gas",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/Shale-Gas-Basins-CV3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/rezn8d/",
                    N: "Shale Gas Basins"
                },
                {
                    H: true,
                    I: "etzel-fracking",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/cavern-field-Etzel-Germany-CV3D.kmz",
                    S: "Provided by Anonymous Climate Viewer",
                    U: "http://www.bi-lebensqualität.de/",
                    N: "Fracking Cavern Field, Etzel, Germany"
                },
                {
                    I: "methane-release",
                    T: 'geojson',
                    G: "/layers/geojson/drilling-methane-release-cv3d.geojson",
                    MS: "6",
                    MI: "/img/icons/firedept.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/2014/04/01/haarp-lucy-sky-diamonds/",
                    N: "Drilling Wells and Methane Release"
                },
                {
                    I: "fracking-alaska",
                    Z: true,
                    T: 'geojson',
                    G: "/layers/geojson/fracking-alaska-cv3d.geojson",
                    MS: "6",
                    MI: "/img/icons/oil_well.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Gas Hydrate Prospecting Using Well Cuttings and Mud-Gas Geochemistry from 35 Wells, North Slope, Alaska.</p>",
                    U: "http://pubs.usgs.gov/sir/2011/5195/sir2011-5195_text.pdf",
                    N: "Fracking Alaska"
                },
                {
                    I: "oil-spills",
                    T: 'geojson',
                    G: "/layers/geojson/black-tides-oil-spills-cv3d.geojson",
                    MI: "/img/icons/oil-well.png",
                    S: "David Tryse's Google Earth files",
                    U: "http://earth.tryse.net/",
                    N: "Black Tides: Worst Oil Spills in History"
                }
            ]
        },
        nuclear: {
            N: "Nuclear", icon: "recycle sign", '>': [
                {
                    I: "bw-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-bw-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-red.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Boiling Water Reactors"
                },
                {
                    I: "pw-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-pw-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-green.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Pressurized Water Reactors"
                },
                {
                    I: "phw-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-phw-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-dkblue.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Pressurized Heavy Water Reactors"
                },
                {
                    I: "lwg-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-lwg-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-yellow.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Light Water Graphite Reactors"
                },
                {
                    I: "gc-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-gc-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-blue.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Gas Cooled Reactors"
                },
                {
                    I: "other-reactor",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-other-reactor-cv3d.geojson",
                    MI: "/img/icons/nuke-purple.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Other Reactors"
                },
                {
                    H: true,
                    I: "nuke-war",
                    T: 'geojson',
                    G: "/layers/geojson/nuclear-test-explosions-cv3d.geojson",
                    MI: "/img/icons/nuke-boom.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='https://productforums.google.com/d/msg/gec-history-illustrated-moderated/DncXs6kPWXM/uM26F3CDq18J'>Wm. Robert Johnston and Lyle McElhaney</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "Nuclear Test Explosions"
                },
                {
                    I: "radioactive-topten",
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Ten-Most-Radioactive-Locations-On-Earth-CV3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/2013/11/24/10-most-radioactive-places-on-earth/",
                    N: "Ten Most Radioactive Places on Earth"
                },
                {
                    I: "hibakusha",
                    T: 'geojson',
                    G: "/layers/geojson/hibakusha-worldwide-cv3d.geojson",
                    MI: "/img/icons/nuke.png",
                    S: "Dr. Alex Rosen, Hibakusa 'explosion-affected people' Worldwide",
                    U: "http://www.ippnw-students.org/Japan/hibakushamap.html",
                    N: "50 Nuclear Nightmares (Hibakusha Worldwide)"
                },
                {
                    I: "tmi-meltdown",
                    Z: true,
                    T: 'geojson',
                    G: "/layers/geojson/three-mile-island-meltdown-cv3d.geojson",
                    MI: "/img/icons/nuke.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "1979 Three Mile Island Meltdown"
                },
                {
                    I: "tmi-fallout",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Three-Mile-Island-meltdown-cv3d.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "1979 Three Mile Island Fallout"
                },
                {
                    I: "chernobyl-meltdown",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Chernobyl-meltdown-Climate-Viewer-3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "1986 Chernobyl Meltdown"
                },
                {
                    I: "chernobyl-fallout-fallout",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Chernobyl-meltdown-fallout-Climate-Viewer-3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "1986 Chernobyl Fallout"
                },
                {
                    I: "fukushima-meltdown",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-Climate-Viewer-3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "2011 Fukushima-Daiichi Meltdown"
                },
                {
                    I: "fukushima-fallout",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-fallout-Climate-Viewer-3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/nuclear-reactor-map/",
                    N: "2011 Fukushima-Daiichi Fallout"
                },
                {
                    P: true,
                    I: "fuku-tsunami",
                    Z: true,
                    T: 'kml',
                    G: "http://nctr.pmel.noaa.gov/honshu20110311/honshu_tsunami_2011-03-11.kmz",
                    S: "NOAA Center for Tsunami Research, Maximum amplitude plot for Google Earth (KMZ)",
                    U: "http://nctr.pmel.noaa.gov/honshu20110311/index.html",
                    N: "2011 Fukushima Tsunami Wave Height"
                },
                {
                    C: true,
                    I: "honeywell-uf6",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/pollution/nuclear/Honeywell-Uranium-Hexafluoride-Release-10-27-2014-CV3D.kmz",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Radiation Release 10-27-2014",
                    U: "http://climateviewer.com/2014/10/27/metropolis-get-nuked-last-night-2/",
                    N: "2014 Honeywell UF6 Processing Facility Radiation Release"
                }
            ]
        },
        toxicrelease: {
            N: "Toxic Release", H: true, icon: "warning sign", '>': [
                {
                    I: "epa-tri",
                    H: true,
                    T: 'geojson',
                    MI: '/img/icons/mryuk.png',
                    G: "/layers/geojson/EPA-TRI-2011-cv3d.geojson",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>2011 data, US Environmental Protection Agency (EPA) .KML file, converted to GeoJSON by Jim Lee",
                    U: "http://www.epa.gov/enviro/facts/tri/index.html",
                    N: "EPA Toxic Release Inventory (TRI) USA"
                }
            ]
        },
        toxicwaste: {
            N: "U.S. EPA Superfund Sites", icon: "recycle sign", H: true, '>': [
                {
                    H: true,
                    Z: true,
                    I: "epa01",
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_01.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 1 - ME NH VT MA RI CT"
                },
                {
                    H: true,
                    I: "epa02",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_02.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 2 - NY NJ PR VI"
                },
                {
                    H: true,
                    I: "epa03",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_03.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 3 - PA DE DC MD VA WV"
                },
                {
                    H: true,
                    I: "epa04",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_04.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 4 - KY TN NC SC MS AL GA FL"
                },
                {
                    H: true,
                    I: "epa05",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_05.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 5 - MN WI IL MI IN OH"
                },
                {
                    H: true,
                    I: "epa06",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_06.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 6 - NM TX OK AR LA"
                },
                {
                    H: true,
                    I: "epa07",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_07.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 7 - NE KS IA MO"
                },
                {
                    H: true,
                    I: "epa08",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_08.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 8 - MT ND WY SD UT CO"
                },
                {
                    H: true,
                    I: "epa09",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_09.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 9 - CA NV AZ HI"
                },
                {
                    H: true,
                    I: "epa10",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/pollution/superfund/region_10.kmz",
                    S: "EPA Superfund",
                    U: "http://www.epa.gov/superfund/index.htm",
                    N: "Region 10 - WA OR I AK"
                }
            ]
        },
        geoengineering: {
            N: "Weather Control", icon: "plane", '>': [
                //{ I: "p04", T: 'kml', G: "/layers/kml/pollution/ETC-Group-Geoengineering-CV3D.kmz", S: "ETC Group Excel to Google Fusion Table by Jim Lee", U: "https://www.google.com/fusiontables/data?docI=1NecyRN7xjFg6TA1YnRjPrEiYtoUKV2sWJ259GjY#rows:I=1", N: "Geoengineering Projects (ETC Group)"},
                {
                    I: "p01",
                    T: 'geojson',
                    G: "/layers/geojson/weather-modification-association-projects-cv3d.geojson",
                    MI: '/img/icons/rainy.png',
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/geoengineering/",
                    N: "Weather Modification Association Projects"
                },
                {
                    I: "p02",
                    T: 'geojson',
                    G: "/layers/geojson/noaa-weather-modification-projects-2012-cv3d.geojson",
                    MI: '/img/icons/rainy.png',
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/geoengineering/",
                    N: "NOAA 2012 Reported Activities (partial)"
                },
                {
                    I: "p03",
                    T: 'geojson',
                    G: "/layers/geojson/ucar-eol-field-projects-cv3d.geojson",
                    MI: '/img/icons/eol.gif',
                    S: "National Center for Atmospheric Research (NCAR)/Earth Observing Laboratory (EOL)",
                    U: "https://www.eol.ucar.edu/all-field-projects-and-deployments",
                    N: "UCAR Earth Observing Lab Field Projects"
                }
            ]
        }
    },
    other: {
        N: "Other", icon: "student",
        electromagnetic: {
            N: "Atmospheric Sensors", icon: "rocket", '>': [
                {
                    I: "star-wars",
                    T: 'geojson',
                    G: "/layers/geojson/star-wars-radar-cv3d.geojson",
                    MI: '/img/icons/radar-black.png',
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/haarp/",
                    N: "Missile Defense Radars (Star Wars)"
                },
                {
                    I: "sky-heaters",
                    T: 'geojson',
                    G: "/layers/geojson/ionospheric-heaters-cv3d.geojson",
                    MI: '/img/icons/radar-red.png',
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/haarp/",
                    N: "Ionospheric Heaters"
                },
                {
                    I: "haarp",
                    Z: true,
                    T: 'geojson',
                    G: "/layers/geojson/haarp-cv3d.geojson",
                    MI: '/img/icons/radar-ltblue.png',
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/haarp/",
                    N: "High-Frequency Active Auroral Research Project"
                },
                {
                    I: "superdarn",
                    T: 'geojson',
                    G: "/layers/geojson/superdarn-cv3d.geojson",
                    MI: '/img/icons/radar-yellow.png',
                    S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br>The Super Dual Auroral Radar Network (SuperDARN) is an international radar network for studying the upper atmosphere and ionosphere, comprising eleven radars in the northern hemisphere and seven in the southern hemisphere that operate in the High Frequency (HF) bands between 8 and 22 MHz. The radars measure the Doppler velocity of plasma density irregularities in the ionosphere.<br><br>In their standard operating mode each radar scans through 16 beams of azimuthal separation 3.24°, with a total scan time of 1 min. Each beam is divided into 75 range gates of length 45 km, and so in each full scan the radars each cover 52° in azimuth and over 3000 km in range, an area of over 4×106 km².<br><br>SuperDARN began in 1983, when the first radar installation was constructed in Labrador, Canada. Source: <a href="http://en.wikipedia.org/wiki/Super_Dual_Auroral_Radar_Network" target="_blank">Wikipedia</a><br><a href="http://superdarn.jhuapl.edu/" target="_blank">John&#39;s Hopkins Applied Physics Lab</a><br><a href="http://sd-software.ece.vt.edu/tiki/tiki-print.php?page=VT%20SuperDARN%20Home" target="_blank">Virginia Tech SuperDARN</a><br><a href="http://cedarweb.hao.ucar.edu/wiki/index.php/Documents:Ground_Based_Instruments#B_-_Coherent_Ionospheric_Radars_.28.7E29.29" target="_blank">CEDAR: Ground Based Instruments</a><br><a href="http://articles.adsabs.harvard.edu//full/1995SSRv...71..761G/0000761.000.html" target="_blank">SuperDARN - A Global View of the Dynamics of High-Latitude Convection</a></p>',
                    U: "http://superdarn.ece.vt.edu/tiki-index.php",
                    N: "Super Dual Auroral Radar Network (SuperDARN)"
                },
                {
                    I: "digisonde",
                    T: 'geojson',
                    G: "/layers/geojson/digisonde-cv3d.geojson",
                    MI: '/img/icons/digisonde.png',
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br><a href='http://umlcar.uml.edu/stationlist.html'>Station List</a><br><br>Lowell Digisonde International manufactures and markets the Digisonde-Portable-Sounder-4D (DPS4D), the latest model in the DIGISONDE® series of advanced ionosondes built in Lowell since 1969. The Digisonde is an ionospheric radar that uses high-frequency radio waves for the remote sensing of the ionosphere, the ionosonde technology pioneered by Sir Edward Appleton in the late 1920s. DIGISONDE stands for “Digitally Integrating Goniometric IonoSONDE”. The DPS4D is the only commercially available ionosonde system that measures all parameters of the ionospherically reflected HF radio signals, and automatically calculates the local ionospheric electron density profile in real time.</p><img alt='Digisonde Network Map' src='http://www.digisonde.com/images/homepage-map.jpg' /><br><br>",
                    U: "http://www.digisonde.com/",
                    N: "DIGISONDE® Ionosonde Network"
                },
                {
                    I: "elf-vlf",
                    T: 'geojson',
                    G: "/layers/geojson/elf-vlf-cv3d.geojson",
                    MI: "/img/icons/rf-warning.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Alpha RSDN-20, Beta Time Signal, LORAN-C, AWESOME VLF Network, Ground Wave Emergency Network (GWEN), and ELF transmission facilities.",
                    U: "http://climateviewer.com/haarp/",
                    N: "ELF and VLF Transmitters"
                },
                {
                    I: "elf-vlf-ref",
                    T: 'geojson',
                    G: "/layers/geojson/elf-vlf-antennas-cv3d.geojson",
                    MI: "/img/icons/antenna.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Visual reference (Antennas) for the Alpha RSDN-20, Beta Time Signal, LORAN-C, AWESOME VLF Network, Ground Wave Emergency Network (GWEN), and ELF transmission facilities.",
                    U: "http://climateviewer.com/haarp/",
                    N: "ELF and VLF Visual Reference"
                },
                {
                    I: "directed-energy",
                    T: 'geojson',
                    G: "/layers/geojson/xfiles-cv3d.geojson",
                    MI: "/img/icons/laser.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/rezn8d/",
                    N: "Lasers and Directed-Energy"
                },
                {
                    I: "nexrad",
                    T: 'geojson',
                    G: "/layers/geojson/radar-nexrad-cv3d.geojson",
                    MI: "/img/icons/doppler-green.png",
                    S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br><a href="http://radar.weather.gov/">radar.weather.gov</a><br><a href="http://www.roc.noaa.gov/WSR88D/About.aspx">WSR-88D Specifications</a><br><br>In 1988, the NEXRAD Agencies established the WSR-88D (Weather Surveillance Radar - 1988 Doppler) Radar Operations Center (ROC) in Norman, Oklahoma. The ROC employees come from the National Weather Service, Air Force, Navy, FAA, and support contractors. The ROC provides centralized meteorological, software, maintenance, and engineering support for all WSR-88D systems. WSR-88D systems will be modified and enhanced during their operational life to meet changing requirements, technology advances, and improved understanding of the application of these systems to real-time weather operations. The ROC also operates WSR-88D test systems for the development of hardware and software upgrades to enhance maintenance, operation, and provide new functionality.<br><br></p>',
                    U: "http://www.roc.noaa.gov/WSR88D/Program/NetworkSites.aspx",
                    N: "NEXRAD Doppler Radar Stations"
                },
                {
                    I: "sigmet",
                    T: 'geojson',
                    G: "/layers/geojson/radar-sigmet-cv3d.geojson",
                    MI: "/img/icons/doppler-green.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br><p>The Canadian weather radar network consists of 31 weather radars spanning Canada's most populated regions. Their primary purpose is the early detection of precipitation, its motion and the threat it poses to life and property. Each has a range of 256 km (159 mi) in radius around the site to detect reflectivity, and a range of 128 km (80 mi) for detecting velocity patterns (Doppler effect).</p>",
                    U: "http://weather.gc.ca/radar/index_e.html",
                    N: "Canadian Sigmet Doppler Radar Stations"
                },
                {
                    I: "tdwr",
                    T: 'geojson',
                    G: "/layers/geojson/radar-tdwr-cv3d.geojson",
                    MI: "/img/icons/doppler-yellow.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>The Terminal Doppler Weather Radar (TDWR) network is a Doppler weather radar system used primarily for the detection of hazardous wind shear conditions, precipitation, and winds aloft on and near major airports situated in climates with great exposure to thunderstorms in the United States. NCEI archives the derived products (called Level III), which are in the same data format as Next Generation Weather Radar (NEXRAD) Level III. NCEI does not archive the base data (called Level II).",
                    U: "https://www.ncdc.noaa.gov/data-access/radar-data/tdwr",
                    N: "Terminal Doppler Weather Radar (TDWR) Stations"
                },
                {
                    I: "jss",
                    T: 'geojson',
                    G: "/layers/geojson/radar-jss-cv3d.geojson",
                    MI: "/img/icons/doppler-red.png",
                    S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br>The JSS is a joint United States Air Force and Federal Aviation Administration system for the atmospheric air defense of North America. It replaced the Semi Automatic Ground Environment (SAGE) system in 1983.<br><br>The JSS consists of long range surveillance radars, primarily operated and maintained by the Federal Aviation Administration (FAA), but providing communication and radar data to both FAA and United States Air Force control centers.</p><h3>Air Route Surveillance Radar (ARSR)</h3><p>FAA equipment is a primarily a mixture of Long Range Air Route Surveillance Radars (ARSR) of various types, although some use legacy AN/FPS radars. They are co-located with UHF ground-air-ground (G/A/G) transmitter/receiver (GATR) facilities at many locations. Fourteen sites have VHF radios as well. The GATR facility provides radio access to fighters and Airborne early warning and control (AEW&C) aircraft from the SOCCs. The JSS has been enhanced under the FAA/Air Force Radar Replacement Program with 44 ARSR-4/FPS-130 radars to replace some of the many previous long-range radars. This provides common, high-performance, unattended radars. The ARSR-4/FPS-130 is a 3-D long range radar with an effective detection range of some 250 miles and has been fully integrated with JSS at all joint use sites.<br /><br />These radars are generally unattended except for periodic FAA maintenance crews which visit the sites as necessary.<br>Source: <a href="http://en.wikipedia.org/wiki/Joint_Surveillance_System">Joint Surveillance System Wikipedia</a><br><a href="https://www.fas.org/nuke/guide/usa/airdef/arsr-4.htm">ARSR-4 Reference FAS.org</a></p>',
                    U: "http://climateviewer.com/rezn8d/",
                    N: "Joint Surveillance System (JSS), FAA Long-range Radar"
                },
                {
                    I: "ioos",
                    T: 'geojson',
                    G: "/layers/geojson/radar-ioos-cv3d.geojson",
                    MI: "/img/icons/doppler-blue.png",
                    S: 'Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br><p>High frequency (HF) radar systems measure the speed and direction of ocean surface currents in near real time. Currents in the ocean are equivalent to winds in the atmosphere because they move things from one location to another. These currents carry nutrients as well as pollutants, so it is important to know the currents for ecological and economic reasons. The currents carry any floating object, which is why U.S. Coast Guard search and rescue operators use HF radar data to make critical decisions when rescuing disabled vessels and people stranded in the water.</p><p>These radars can measure currents over a large region of the coastal ocean, from a few kilometers offshore up to 200 km, and can operate under any weather conditions. They are located near the water’s edge, and need not be situated atop a high point of land.  Traditionally, crews placed current measuring devices directly into the water to retrieve current speeds.  While these direct measurement systems are still widely used as a standard reference, HF radars are the only sensors that can measure large areas at once with the detail required for the important applications described here.  Not even satellites have this capability.</p>',
                    U: "http://www.ioos.noaa.gov/hfradar/welcome.html",
                    N: "Integrated Ocean Observing System (IOOS) Radar"
                },
                {
                    I: "npn-wind-radar",
                    T: 'geojson',
                    G: "/layers/geojson/npn-wind-radar-cv3d.geojson",
                    MI: "/img/icons/radar-pink.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Wind profilers are specifically designed to measure vertical profiles of horizontal wind speed and direction from near the surface to above the tropopause. Data from this network are distributed in real-time to government and university atmospheric researchers, private meteorologists, the National Centers for Environmental Prediction, the Storm Prediction Center, all National Weather Service (NWS) Forecast Offices, and foreign agencies responsible for weather prediction.</p>",
                    U: "http://www.profiler.noaa.gov/npn/npnSiteLocationsAsText.jsp",
                    N: "NOAA Profiler Network (NPN) Wind Radar"
                },
                {
                    I: "madis-wind-radar",
                    T: 'geojson',
                    G: "/layers/geojson/madis-cap-wind-radar-cv3d.geojson",
                    MI: "/img/icons/radar-purple.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Cooperative Agency Profilers (CAP) is a cooperative venture between GSD (formerly FSL) and many participating agencies enabling GSD to; acquire profiler and RASS data in near real-time, apply GSD's data quality control algorithms, and make these value-added data available on the web and to the National Weather Service. At this time, data from approximately 100 CAP sites from over 35 different agencies from around the world are being acquired by GSD. The majority of CAP systems are 915 MHz Boundary Layer Profilers, there are also several 449 MHz and 50 MHz profilers in the CAP network.</p>",
                    U: "https://madis-data.noaa.gov/cap/",
                    N: "MADIS CAP Wind Radar"
                },
                {
                    I: "aeronet",
                    T: 'geojson',
                    G: "/layers/geojson/aeronet-cv3d.geojson",
                    MI: "/img/icons/nasa.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>The AERONET (AErosol RObotic NETwork) program is a federation of ground-based remote sensing aerosol networks established by NASA and PHOTONS (Univ. of Lille 1, CNES, and CNRS-INSU) and is greatly expanded by collaborators from national agencies, institutes, universities, individual scientists, and partners. The program provides a long-term, continuous and readily accessible public domain database of aerosol optical, microphysical and radiative properties for aerosol research and characterization, validation of satellite retrievals, and synergism with other databases. The network imposes standardization of instruments, calibration, processing and distribution.</p>",
                    U: "http://aeronet.gsfc.nasa.gov/",
                    N: "AERONET (AErosol RObotic NETwork)"
                },
                {
                    I: "bsrn",
                    T: 'geojson',
                    G: "/layers/geojson/bsrn-cv3d.geojson",
                    MI: "/img/icons/partly_cloudy.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>It is believed that the radiation budget of the Earth-atmosphere system plays a fundamental role in determining the thermal conditions and the circulation of the atmosphere and the ocean, shaping the main characteristics of the Earth's climate. The irradiances at the Earth's surface are especially important in understanding the climate processes, since the Earth's surface transforms approximately 60% of the solar radiation absorbed by the planet. These irradiances also occupy an important position in the ocean surface energy budget, ultimately influencing the major features of ocean currents.</p><p>While a small change in irradiance at the Earth's surface may cause a profound change in climate, the existing radiometric network is not capable of arriving at the required accuracy for climate research. In fact our present understanding of the radiation distribution both - horizontally and vertically - is not sufficient to understand the present climate. The simulation of the past and future climate changes, which would be induced by the change in radiation, is even more uncertain.</p><p>This was the background for the World Climate Research Programme (WCRP) Radiative Fluxes Working Group to initiate a new Baseline Surface Radiation Network (BSRN) to support the research projects of the WCRP and other scientific programs. Some years later the BSRN incorporated into the WCRP Global Energy and Water Cycle Experiment (GEWEX) Radiation Panel.</p>",
                    U: "http://www.bsrn.awi.de/",
                    N: "Baseline Surface Radiation Network (BSRN)"
                },
                {
                    I: "esrl",
                    T: 'geojson',
                    G: "/layers/geojson/esrl-cv3d.geojson",
                    MI: "/img/icons/noaa.gif",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>NOAA Earth Systems Research Lab (ESRL). ESRL was formed to pursue a broad and comprehensive understanding of the Earth system. This system comprises many physical, chemical and biological processes that need to be dynamically integrated to better predict their behavior over scales from local to global and periods of minutes to millennia.</p>",
                    U: "http://www.esrl.noaa.gov/psd/data/obs/sites/",
                    N: "Earth Systems Research Lab (ESRL) Instruments"
                },
                {
                    I: "doris",
                    T: 'geojson',
                    G: "/layers/geojson/doris-cv3d.geojson",
                    MI: "/img/icons/ids.png",
                    S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>DORIS is a Doppler satellite tracking system developped for precise orbit determination and precise ground location. It is onboard the Cryosat-2, Jason-1, Jason-2, ENVISAT and HY-2A altimetric satellites and the remote sensing satellites SPOT-4 and SPOT-5. It also flew with SPOT-2, SPOT-3 and TOPEX/POSEIDON.</p><p>IDS is an international service which provides a support, through DORIS data and products, to geodetic, geophysical, and other research and operational activities. New proposals for Analysis Centers and temporary or permanent DORIS stations are welcome.</p>",
                    U: "http://Is-doris.org/network/googleearth.html",
                    N: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)"
                },
                {
                    I: "f16",
                    T: 'geojson',
                    G: "/layers/geojson/atmospheric-observatories-cv3d.geojson",
                    MI: "/img/icons/radar-dish.png",
                    S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.",
                    U: "http://climateviewer.com/rezn8d/",
                    N: "Other Radars, Observatories, Telescope Arrays, Satellite Communications"
                }
            ]
        },
        FCC: {
            N: "FCC Database 2012 (USA)", H: true, icon: "signal", '>': [
                    {
                    H: true,
                    I: "f17",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-cell-towers-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. Cellular (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "Cell Phone Towers (USA FCC)"
                },
                {
                    H: true,
                    I: "f24",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-paging-towers-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. Paging (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "Paging Towers (USA FCC)"
                },
                {
                    H: true,
                    I: "f18",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-AM-radio-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. AM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "AM Radio (USA FCC)"
                },
                {
                    H: true,
                    I: "f19",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-FM-radio-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. FM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "FM Radio (USA FCC)"
                },
                {
                    H: true,
                    I: "f20",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-Digital-TV-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - Digital (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "Digital Television (USA FCC)"
                },
                {
                    H: true,
                    I: "f21",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-NTSC-TV-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - NTSC (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "NTSC Television (USA FCC)"
                },
                {
                    H: true,
                    I: "f22",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-LM-broadcast-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. Land Mobile - Broadcast (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "Land Mobile Broadcast (USA FCC)"
                },
                {
                    H: true,
                    I: "f23",
                    T: 'geojson',
                    G: "/layers/geojson/FCC-BRS-EBS-2012-cv3d.geojson",
                    MI: "/img/icons/radioz.png",
                    S: "Federal Communications Commission (FCC) Licensing Database Extracts. BRS/EBS (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee",
                    U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts",
                    N: "Educational Broadcast (BRS/EBS) (USA FCC)"
                }
            ]
        },
        flight: {
            N: "Flight", icon: "plane", '>': [
                {
                    I: "us_runways",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "us_runways",
                    S: "NOAA Ocean Service's nowCOAST's Map Services - Locations/Footprints of U.S. Airport Runways",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Airport Runways"
                },
                {
                    I: "artcc",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "artcc",
                    S: "NOAA Ocean Service's nowCOAST's Map Services - Air Route Traffic Control Centers - Areas of Responsibility",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "Air Route Traffic Control Center Boundaries"
                }
            ]
        },
        boats: {
            N: "Marine Traffic", icon: "anchor", '>': [
                {
                    P: true,
                    I: "kml-noaabuoy",
                    T: 'kml',
                    G: "http://www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner",
                    S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center",
                    U: "http://www.ndbc.noaa.gov/",
                    N: "NOAA Buoy Tracker"
                },
                {
                    P: true,
                    I: "kml-noaaship",
                    T: 'kml',
                    G: "http://egisws02.nos.noaa.gov/shiptracker/kml/All_Ships_CL.kmz",
                    S: "National Oceanic and Atmospheric Administration (NOAA)",
                    U: "http://egisws02.nos.noaa.gov/shiptracker/",
                    N: "NOAA Ship Tracker"
                }
            ]
        },
        geographic: {
            N: "Geographic", icon: "info sign", '>': [
                {
                    I: "pyramids",
                    T: 'kml',
                    G: "/layers/kml/3rdparty/other/Pyramids-FR-CV3D.kmz",
                    S: "based on the film &quot;Revelations of the PyramIs&quot;",
                    U: "http://www.youtube.com/watch?v=GhC6lhAD4xY",
                    N: "Pyramids of the World"
                },
                {
                    I: "world_rivers",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "world_rivers",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "World Rivers"
                },
                {
                    I: "world_lakes",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "world_lakes",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "World Lakes"
                },
                {
                    I: "great_lakes",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "great_lakes",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "World Great Lakes"
                },
                {
                    I: "rivers",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "rivers",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Rivers"
                },
                {
                    I: "lakes",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "lakes",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Lakes"
                },
                {
                    I: "watersheds",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "watersheds",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Watershed Boundaries"
                }
            ]
        },
        economic: {
            N: "Economic", icon: "money", '>': [
                {
                    I: "native-american1",
                    Z: true,
                    T: 'kml',
                    G: "/layers/kml/3rdparty/other/Indian-Lands.kmz",
                    S: "This map layer shows Indian lands of the United States. Only areas of 640 acres or more are included. Federally-administered lands within a reservation are included for continuity; these may or may not be consIered part of the reservation and are simply described with their feature type and the administrating Federal agency. This is an updated version of the December 2005 map layer.",
                    U: "http://nationalatlas.gov/atlasftp.html#indlanp",
                    N: "Native American Lands 2005"
                },
                {
                    I: "urban_areas_fill",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "urban_areas_fill",
                    S: "NOAA Ocean Service's nowCOAST's Map Services - U.S. Urban Area Boundaries (color-filled polygons)",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Urban Areas"
                },
                {
                    I: "eez",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "eez",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "U.S. Exclusive Economic Zone Boundaries"
                },
                {
                    I: "world_countries",
                    T: 'wms',
                    G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs",
                    L: "world_countries",
                    S: "NOAA Ocean Service's nowCOAST's Map Services",
                    U: "http://nowcoast.noaa.gov/help/mapservices.shtml",
                    N: "World Country Boundaries"
                }
            ]
        }
    },
    MRM: {
        N: "MyReadingMapped&trade;", icon: "marker",
        MRMSunkenShips: {
            N: "Abandoned and Sunken Ships", icon: "ship", '>': [
                {
                    P: true,
                    I: "mrm-01",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Historic-Ships-Preserved-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Historic Ships Preserved in Google Map"
                },
                {
                    P: true,
                    I: "mrm-02",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Interactive-Map-of-Ship-Graveyards.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ship Graveyards"
                },
                {
                    P: true,
                    I: "mrm-03",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Interactive-Map-of-the-Sunken-Ships-of-the-Atlantic.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Sunken Ships of the Atlantic"
                },
                {
                    P: true,
                    I: "mrm-04",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Interactive-Map-of-the-Sunken-Ships-of-the-Great-Lakes.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Sunken Ships of the Great Lakes"
                },
                {
                    P: true,
                    I: "mrm-05",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Interactive-Map-of-the-Sunken-Ships-of-the-Indian-Ocean-and-Red-Sea.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Sunken Ships of the Indian Ocean and Red Sea"
                },
                {
                    P: true,
                    I: "mrm-06",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Interactive-Map-of-the-Sunken-Ships-of-the-Pacific-Ocean.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Sunken Ships of the Pacific Ocean"
                },
                {
                    P: true,
                    I: "mrm-07",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Shipwrecks-Seen-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Shipwrecks Seen in Google Map"
                },
                {
                    P: true,
                    I: "mrm-08",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Abandoned-and-Sunken-Ships/Sunken-Ships-of-the-Mediterranean-North-Baltic-and-Black-Seas.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Sunken Ships of the Mediterranean, North Baltic, and Black Seas"
                }
            ]
        },
        MRMAncientRuins: {
            N: "Ancient Ruins", icon: "university", '>': [
                {
                    P: true,
                    I: "mrm-09",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/American-Ghost-Towns.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ghost Towns of America"
                },
                {
                    P: true,
                    I: "mrm-10",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/The-Ghost-Towns-of-Asia-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ghost Towns of Asia"
                },
                {
                    P: true,
                    I: "mrm-11",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/Interactive-Map-of-Classic-European-Castles.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Classic European Castles"
                },
                {
                    P: true,
                    I: "mrm-12",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/Interactive-Map-of-the-Ancient-and-Other-Ruins-of-Europe.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ancient and other Ruins of Europe"
                },
                {
                    P: true,
                    I: "mrm-13",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/Interactive-map-of-the-Ancient-Lost-Cities.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ancient Lost Cities"
                },
                {
                    P: true,
                    I: "mrm-14",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/Interactive-Map-of-the-Ancient-Ruins-of-Africa.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ancient Ruins of Africa"
                },
                {
                    P: true,
                    I: "mrm-15",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/InteractiveMapoftheAncientandOtherRuinsofSouthCentralAmerica.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ancient and other Ruins of South Central America"
                },
                {
                    P: true,
                    I: "mrm-16",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/The-Ruins-of-The-United-States-and-Other-Historic-Sites.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Ruins of the United States and other Historic Sites"
                },
                {
                    P: true,
                    I: "mrm-17",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Ancient-Ruins/Interactive-Map-of-Aztec-Egyptian-Inca-Mayan-and-Chinese-Pyramids.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Aztec, Egyptian, Inca, Mayan, and Chinese Pyramids"
                }
            ]
        },

        MRMArchitecture: {
            N: "Architecture", icon: "building outline", '>': [
                {
                    P: true,
                    I: "mrm-18",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Antarctic-Research-Bases-Cold-and-Desolate-Places.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Antarctic Research Bases Cold and Desolate Places"
                },
                {
                    P: true,
                    I: "mrm-19",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/CitiesoftheDeadHeavenorHell.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Cities of the Dead - Heaven or Hell"
                },
                {
                    P: true,
                    I: "mrm-20",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Google-Map-of-Bridge-Disasters.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Bridge Disasters"
                },
                {
                    P: true,
                    I: "mrm-21",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Great-Libraries-of-Knowledge.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Great Libraries of Knowledge"
                },
                {
                    P: true,
                    I: "mrm-22",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Interactive-Map-of-the-Top-10-Longest-Suspension-Bridges.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Top 10 Longest Suspension Bridges"
                },
                {
                    P: true,
                    I: "mrm-23",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Interactive-Map-of-the-Works-of-Frank-Lloyd-Wright.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Map of the Works of Frank Lloyd Wright"
                },
                {
                    P: true,
                    I: "mrm-24",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Mind-Blowing-Open-Pit-Mines.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Mind Blowing Open Pit Mines"
                },
                {
                    P: true,
                    I: "mrm-25",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/Road-and-Rail-Tunnel-prowess-found-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Road and Rail Tunnels"
                },
                {
                    P: true,
                    I: "mrm-26",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/SpaceCenters-Non-Military-Space-Launch-Sites.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Space Centers and Non-Military Launch Sites"
                },
                {
                    P: true,
                    I: "mrm-27",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-MRM-Unofficial-Guide-of-Royal-Palaces-(A-D).kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "MRM Unofficial Guide of Royal Palaces (A-D)"
                },
                {
                    P: true,
                    I: "mrm-28",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-MRM-Unofficial-Guide-to-Royal-Palaces-(E-J).kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "MRM Unofficial Guide of Royal Palaces (E-J)"
                },
                {
                    P: true,
                    I: "mrm-29",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-Oldest-Lighthouses-Aged-Protectors-of-Globalization.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "The Oldest Lighthouses Aged Protectors of Globalization"
                },
                {
                    P: true,
                    I: "mrm-30",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-Roller-Coasters-of-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "Roller Coasters"
                },
                {
                    P: true,
                    I: "mrm-31",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-World's-Best-Botanical-Gardens-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "The World's Best Botanical Gardens"
                },
                {
                    P: true,
                    I: "mrm-32",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-World's-Best-Zoos-in-Google-Map.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "The World's Best Zoos"
                },
                {
                    P: true,
                    I: "mrm-33",
                    T: 'kml',
                    G: "http://climateviewer.net/layers/kml/MyReadingMapped/Architecture/The-World's-Largest-Sports-Stadiums.kml",
                    S: "Created by George Stiller of MyReadingMapped&trade;",
                    U: "http://stilltheman2.wix.com/myreadingmapped",
                    N: "The World's Largest Sports Stadiums"
                }
            ]
        }
    },
    N: "Base Maps",
        basemaps: {
            N: "Base Maps", icon: "globe", '>': [
                {
                    I: "Bing_AERIAL_WITH_LABELS",
                    T: 'bing',
                    G: "AERIAL_WITH_LABELS",
                    S: "World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (591M down to 72k) and 2.5m SPOT Imagery (288k to 72k) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe. Recent 1m USDA NAIP imagery is available in select states of the US. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, Getmapping, AeroGRID, IGN Spain, and IGP Portugal. Additionally, imagery at different resolutions has been contributed by the GIS User Community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                    N: "Bing Maps Aerial with Labels"
                },
                {
                    I: "Bing_AERIAL",
                    T: 'bing',
                    G: "AERIAL",
                    S: "World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (591M down to 72k) and 2.5m SPOT Imagery (288k to 72k) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe. Recent 1m USDA NAIP imagery is available in select states of the US. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, Getmapping, AeroGRID, IGN Spain, and IGP Portugal. Additionally, imagery at different resolutions has been contributed by the GIS User Community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                    N: "Bing Maps Aerial"
                },
                {
                    I: "Bing_ROADS",
                    T: 'bing',
                    G: "ROADS",
                    S: "World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (591M down to 72k) and 2.5m SPOT Imagery (288k to 72k) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe. Recent 1m USDA NAIP imagery is available in select states of the US. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, Getmapping, AeroGRID, IGN Spain, and IGP Portugal. Additionally, imagery at different resolutions has been contributed by the GIS User Community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                    N: "Bing Maps Roads"
                },
                {
                    X: true,
                    I: "World_Imagery",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
                    S: "World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (591M down to 72k) and 2.5m SPOT Imagery (288k to 72k) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe. Recent 1m USDA NAIP imagery is available in select states of the US. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, Getmapping, AeroGRID, IGN Spain, and IGP Portugal. Additionally, imagery at different resolutions has been contributed by the GIS User Community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                    N: "ESRI World Imagery"
                },
                {
                    X: true,
                    I: "World_Street_Map",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
                    S: "This worldwide street map presents highway-level data for the world. Street-level data includes the United States; much of Canada; Mexico; Europe; Japan; Australia and New Zealand; India; South America and Central America; Africa; and most of the Middle East. This comprehensive street map includes highways, major roads, minor roads, one-way arrow indicators, railways, water features, administrative boundaries, cities, parks, and landmarks, overlaid on shaded relief imagery for added context. The map also includes building footprints for selected areas. Coverage is provided down to ~1:4k with ~1:1k and ~1:2k data available in select urban areas. The street map was developed by Esri using Esri basemap data, DeLorme basemap layers, U.S. Geological Survey (USGS) elevation data, Intact Forest Landscape (IFL) data for the world; HERE data for Europe, Australia and New Zealand, North America, South America and Central America, Africa, and most of the Middle East; OpenStreetMap contributors for select countries in Africa; MapmyIndia data in India; and select data from the GIS user community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
                    N: "ESRI World Street Map"
                },
                {
                    X: true,
                    I: "Ocean_Basemap",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer",
                    S: "This map is designed to be used as a base map by marine GIS professionals and as a reference map by anyone interested in ocean data. The base map includes bathymetry, marine water body names, undersea feature names, and derived depth values in meters. Land features include administrative boundaries, cities, inland waters, roads, overlaid on land cover and shaded relief imagery. The map was compiled from a variety of best available sources from several data providers, including General Bathymetric Chart of the Oceans GEBCO_08 Grid, IHO-IOC GEBCO Gazetteer of Undersea Feature Names, National Oceanic and Atmospheric Administration (NOAA), and National Geographic, DeLorme, NAVTEQ, Geonames.org, and Esri, and various other contributors. The base map currently provides coverage for the world down to a scale of ~1:577k, and coverage down to 1:72k in US coastal areas, and various other areas. Coverage down to ~ 1:9k is available limited areas based on regional hydrographic survey data. The base map was designed and developed by Esri. NOTE: Data from the GEBCO_08 grid shall not to be used for navigation or for any other purpose relating to safety at sea. The GEBCO_08 Grid is largely based on a database of ship-track soundings with interpolation between soundings guided by satellite-derived gravity data. In some areas, data from existing grids are included. The GEBCO_08 Grid does not contain detailed information in shallower water areas, information concerning the generation of the grid can be found on GEBCO's web site: http://www.gebco.net/data_and_products/gridded_bathymetry_data. The GEBCO_08 Grid is accompanied by a Source Identifier (SID) Grid which indicates which cells in the GEBCO_08 Grid are based on soundings or existing grids and which have been interpolated. The latest version of both grids and accompanying documentation is available to download, on behalf of GEBCO, from the British Oceanographic Data Centre (BODC) https://www.bodc.ac.uk/data/online_delivery/gebco. The names of the IHO (International Hydrographic Organization), IOC (intergovernmental Oceanographic Commission), GEBCO (General Bathymetric Chart of the Oceans), NERC (Natural Environment Research Council) or BODC (British Oceanographic Data Centre) may not be used in any way to imply, directly or otherwise, endorsement or support of either the Licensee or their mapping system.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer",
                    N: "ESRI Oceans"
                },
                {
                    X: true,
                    I: "World_Physical_Map",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",
                    S: "This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer",
                    N: "ESRI World Physical"
                },
                {
                    X: true,
                    I: "World_Shaded_Relief",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer",
                    S: "This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map. It is especially useful in maps that do not contain orthoimagery. The map resolution (cell size) is as follows: 30 Meters for the U.S. 90 Meters for all land areas between 60° north and 56° south latitude. 1 KM resolution above 60° north and 56° south. The shaded relief imagery was developed by Esri using GTOPO30, Shuttle Radar Topography Mission (SRTM), and National Elevation Data (NED) data from the USGS.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer",
                    N: "ESRI World Shaded Relief"
                },
                {
                    X: true,
                    I: "World_Topo_Map",
                    T: 'arcgis',
                    L: "0",
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
                    S: "This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone. The map includes administrative boundaries, cities, water features, physiographic features, parks, landmarks, highways, roads, railways, and airports overlaid on land cover and shaded relief imagery for added context. The map provides coverage for the world down to a scale of ~1:72k. Coverage is provided down to ~1:4k for the following areas: Australia and New Zealand; India; Europe; Canada; Mexico; the continental United States and Hawaii; South America and Central America; Africa; and most of the Middle East. Coverage down to ~1:1k and ~1:2k is available in select urban areas. This basemap was compiled from a variety of best available sources from several data providers, including the U.S. Geological Survey (USGS), U.S. Environmental Protection Agency (EPA), U.S. National Park Service (NPS), Food and Agriculture Organization of the United Nations (FAO), Department of Natural Resources Canada (NRCAN), GeoBase, Agriculture and Agri-Food Canada, DeLorme, HERE, Esri, OpenStreetMap contributors, and the GIS User Community.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer",
                    N: "ESRI World Topographic"
                },
                {
                    X: true,
                    I: "USA_Topo_Maps",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer",
                    S: "This map presents land cover imagery for the world and detailed topographic maps for the United States. The map includes the National Park Service (NPS) Natural Earth physical map at 1.24km per pixel for the world at small scales, i-cubed eTOPO 1:250,000-scale maps for the contiguous United States at medium scales, and National Geographic TOPO! 1:100,000 and 1:24,000-scale maps (1:250,000 and 1:63,000 in Alaska) for the United States at large scales. The TOPO! maps are seamless, scanned images of United States Geological Survey (USGS) paper topographic maps.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer",
                    N: "ESRI USA Topographic"
                },
                {
                    X: true,
                    I: "NatGeo_World_Map",
                    T: 'arcgis',
                    G: "//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",
                    S: "This map is designed to be used as a general reference map for informational and educational purposes as well as a base map by GIS professionals and other users for creating web maps and web mapping applications. The map was developed by National Geographic and Esri and reflects the distinctive National Geographic cartographic style in a multi-scale reference map of the world. The map was authored using data from a variety of leading data providers, including DeLorme, HERE, UNEP-WCMC, NASA, ESA, USGS, and others. This reference map includes administrative boundaries, cities, protected areas, highways, roads, railways, water features, buildings and landmarks, overlaid on shaded relief and land cover imagery for added context. The map currently includes global coverage down to ~1:144k scale and more detailed coverage for North America down to ~1:9k scale.",
                    U: "http://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer",
                    N: "ESRI National Geographic"
                },
                {
                    I: "bl-std",
                    T: 'base-layer',
                    G: "//stamen-tiles.a.ssl.fastly.net/toner/",
                    S: "A high contrast black and white map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
                    U: "http://maps.stamen.com/",
                    N: "Stamen Toner"
                },
                {
                    I: "bl-stl",
                    T: 'base-layer',
                    G: "//stamen-tiles.a.ssl.fastly.net/toner-lite/",
                    S: "A high contrast black and white map (light colored version). Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
                    U: "http://maps.stamen.com/",
                    N: "Stamen Toner (Light)"
                },
                {
                    I: "bl-swc",
                    T: 'base-layer',
                    G: "//stamen-tiles.a.ssl.fastly.net/watercolor/",
                    S: "Reminiscent of hand drawn maps, Stamen watercolor maps apply raster effect area washes and organic edges over a paper texture to add warm pop to any map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
                    U: "http://maps.stamen.com/",
                    N: "Stamen Watercolor"
                },
                {
                    I: "bl-osm",
                    T: 'base-layer',
                    G: "//a.tile.openstreetmap.org/",
                    S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.",
                    U: "http://www.openstreetmap.org",
                    N: "OpenStreetMap (OSM)"
                },
                {
                    I: "bl-mq",
                    T: 'base-layer',
                    G: "//otile1-s.mqcdn.com/tiles/1.0.0/osm/",
                    S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.",
                    U: "http://www.openstreetmap.org",
                    N: "MapQuest OpenStreetMap"
                }
            ]

    }
};



var layers = {
    I: 'nostradamIQ',

    Live: { N: "Live",
        Active : { N: "Active Hazards", icon: "warning", '>': [
                { I: "acitve-hazards-pdc", T: "pdc-xml", G: "http://hpxml.pdc.org/public.xml", S: "PDC Hazard Live Feed", U: "http://hpxml.pdc.org/public.xml", N: "Active Hazards"}
        ]},
        Earthquake: { N: "Earthquake", icon: "rss", '>': [
            { I: "usgs-all-hour", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Hour)"},
            { I: "usgs-big-today", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Today)"},
            { I: "usgs-45-today", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Today)"},
            { I: "usgs-25-today", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Today)"},
            { I: "usgs-all-today", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Today)"},
            { I: "usgs-big-7day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Week)"},
            { I: "usgs-45-7day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Last Week)"},
            { I: "usgs-25-7day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Last Week)"},
            { I: "usgs-all-7day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Week)"},
            { I: "usgs-big-30day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - Significant Earthquakes (Last Month)"},
            { I: "usgs-45-30day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M4.5+ Earthquakes (Last Month)"},
            { I: "usgs-25-30day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - M2.5+ Earthquakes (Last Month)"},
            { I: "usgs-all-30day", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", S: "United States Geological Society (USGS) Earthquake Hazards Program", U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php", N: "USGS - All Earthquakes (Last Month)"},
            { I: "kml-usgs-eq7da", T: 'kml', ML: "usgs-eq", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age_link.kml", S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 7 days, Colored by Age"},
            { I: "kml-usgs-eq7dd", T: 'kml', ML: "usgs-eq", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_depth_link.kml", S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 7 days, Colored by Depth"},
            { C: true, I: "kml-usgs-eq7dda", ML: "usgs-eq", T: 'kml', G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_depth_animated_link.kml",S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 7 days, Colored by Depth, ANIMATED"},
            { I: "kml-usgs-eq30da", T: 'kml', ML: "usgs-eq", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_link.kml", S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 30 days, Colored by Age"},
            { I: "kml-usgs-eq30dd", T: 'kml', ML: "usgs-eq", G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_depth_link.kml", S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 30 days, Colored by Depth"},
            { C: true, I: "kml-usgs-eq30dda", ML: "usgs-eq", T: 'kml', G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_depth_animated_link.kml", S: "USGS Earthquake Hazard Program", U: "http://earthquake.usgs.gov/", N: "USGS 30 days, Colored by Depth, ANIMATED"},
            { I: "kml-emsc", T: 'kml', P: true, ML: "usgs-eq", G: "www.emsc-csem.org/Earthquake/Map/earth/kml.php", S: "Centre Sismologique Euro-Méditerranéen (CSEM) Euro-Med earthquakes", U: "www.emsc-csem.org/", N: "Euro-Med Earthquakes - CSEM/EMSC"},
            { P: true, I: "kml-buoy", T: 'kml', G: "www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner", S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center", U: "www.ndbc.noaa.gov/", N: "NOAA Buoys"},
            { P: true, I: "landslides", T: 'kml', ML: "usgs-eq", G: "http://data.nasa.gov/api/geospatial/h9d8-neg4?method=export&format=KMZ", S: "NASA DATA PORTAL", U: "http://data.nasa.gov/Earth-Science/Global-Landslide-Catalog/h9d8-neg4", N: "Global Landslides"},
            { I: "eqs_germany_ever", Z: true, T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "/webapp/layers/geojson/eqs_germany_all_ever.geojson", S: "USGS Earthquake Search", U: "http://earthquake.usgs.gov/earthquakes/search/", N: "All Earthquakes in Germany EVER"},
            { I: "eqs_nepal_ever", Z: true, T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "/webapp/layers/geojson/eqs_nepal_all_ever.geojson", S: "USGS Earthquake Search", U: "http://earthquake.usgs.gov/earthquakes/search/", N: "All Earthquakes in Nepal EVER"},
            { I: "eqs_results_01011900_2015_6", T: 'geojson', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "/webapp/layers/geojson/nostradamIQ/eqs_results_01011900_2015_6.geojson", S: "nostradamIQ-Demo App", U: "http://github.com/nupic-communitiy/nostradamIQ/blob/master/demo_app", N: "All M6+ Earthquakes since 1900 processed by NuPIC"},
            { I: "realtime_earthquakes", T: 'kml', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "/webapp/layers/kml/places/realtime_earthquakes.kmz", S: "USGS", U: "http://earthquake.usgs.gov/", N: "Real-Time Earthquakes (KML)"},
            { I: "real_time_eqs_1.0_week_age", T: 'kml', ML: "usgs-eq", MI: "//nostradamiq.org/webapp/img/earthquakes.png", G: "/webapp/layers/kml/real_time_eqs_1.0_week_age.kml", S: "USGS", U: "http://earthquake.usgs.gov/regional/nca/virtualtour/global.php", N: "Real-Time Earthquakes (KML)2 - TEST"},
            { I: "plate-faults", T: 'kml', G: "/webapp/layers/kml/places/tectonic_faults.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/eq_faults.html", N: "US Tectonic Plate Faults"},
            { I: "tectonic-plates", T: 'kml', G: "/webapp/layers/kml/places/EarthsTectonicPlates.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/eq_faults.html", N: "World Tectonic Plate Boundaries"}
        ]},
        SeismicStations: { N: "Seismic Stations", icon: "rss", '>': [
            { I: "seismic_stations", T: 'kml', G: "/webapp/layers/kml/seismic_stations.kmz", S: "International Seismology Center", U: "www.isc.ac.uk/registries/", N: "List of All Seismic Stations world wide"},
            { I: "iris-st-active2", T: 'kml', G: "http://ds.iris.edu/gmap/_ACTIVE", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/gmap", N: "IRIS Active Stations 2"},
            { I: "iris-st-active", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_ACTIVE?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Active Stations"},
            { I: "iris-st-realtime", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_REALTIME?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS 'Real-Time' Stations"},
            { I: "iris-st-II", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/II?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS IRIS/IDA Network"},
            { I: "iris-st-gsn", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_GSN?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS _GSN Virtual Network"},
            { I: "iris-st-ta", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/TA?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Transportable Array (TA) Network Stations"},
            { I: "iris-st-anta", Z: true, T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_ANTARCTICA?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Antarctic Stations"},
            { I: "iris-st-arct", Z: true, T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_ARCTICA?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Arctic Stations"},
            { I: "iris-st-passcal", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_PASSCAL?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS PASSCAL Stations"},
            { I: "iris-st-us-all", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_US-ALL?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS All US Stations"},
            { I: "iris-st-fdsn-all", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_FDSN-ALL?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS All FDSN Member Network Stations"},
            { I: "iris-st-int-non-fdsn", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/_INT-NON_FDSN?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS International But Non-FDSN Member Networks Stations"},
            { I: "iris-st-sy", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/SY?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Synthetic Stations"},
            { I: "iris-st-em", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/EM?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Electromagnetic Studies of the Continents Stations"},
            { I: "iris-st-ci", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/CI?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Caltech Regional Seismic Network Stations"},
            { I: "iris-st-gs", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/GS?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS US Geological Survey Networks Stations"},
            { I: "iris-st-to", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/TO?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS Tectonic Observatory Stations"},
            { I: "iris-st-im", T: 'kml', G: "http://ds.iris.edu/cgi-bin/kmlstationinfo/IM?kmz=1", S: "Incorporated Research Institutions for Seismology (IRIS)", U: "http://ds.iris.edu/cgi-bin/kmlstationinfo/", N: "IRIS International Miscellaneous Stations Stations"},
        ]},
        Volcano: { N: "Volcano", icon: "warning sign", '>': [
            { I: "kml-volcano", P: true, M: true, MS: "3", T: 'kml', G: "http://volcano.si.edu/news/WeeklyVolcanoGE.kml", S: "Smithsonian Institute National Museum of History, Global Volcanism Program: Latest Volcanic Activity", U: "www.volcano.si.edu/", N: "Weekly Activity and Eruptions"},
            { I: "kml-volcano2", P: true, M: true, MS: "3", T: 'kml', G: "www.volcano.si.edu/news/WeeklyVolcanoGE-Reports.kmz", S: "Smithsonian Institute National Museum of History, Global Volcanism Program: Latest Volcanic Activity", U: "www.volcano.si.edu/", N: "Weekly Activity and Eruption Report"},
            { I: "kml-volcanos", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/GVPWorldVolcanoes-List.kmz", S: "Smithsonian Institute National Museum of History, Global Volcanism Program", U: "www.volcano.si.edu/", N: "Global Vocanoes"},
            { I: "thermal_hot_spots", T: 'kml', G: "/webapp/layers/kml/places/thermal_hot_spots.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/kmz/hotspots/hotspots.html", N: "Gloabal Thermal Hot-Spots"},
            { I: "large_igneous_provinces", T: 'kml', G: "/webapp/layers/kml/places/large_igneous_provinces.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/kmz/lip/lip.html", N: "Large Igneous Provinces (LIPs)"},
            { I: "yellowstone_volcanic_plateau", T: 'kml', Z: true, G: "/webapp/layers/kml/places/yellowstone_volcanic_plateau.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/volcanism.html", N: "Yellowstone Plateau Volcanic Field"}
        ]},
        Fire: { N: "Fire", icon: "fire", '>': [
            { I: "kml-usda-fire", Z: true, T: 'kml', P: true, G: "http://activefiremaps.fs.fed.us/data/kml/conus.kmz", S: "US Department of Agriculture (USDA) Forest Service Remote Sensing Applications Center, Active Fire Mapping Program", U: "http://activefiremaps.fs.fed.us/", N: "Active Fire Mapping Program"},
            { I: "kml-noaa-fire", T: 'kml', P: true, G: "www.ospo.noaa.gov/data/land/fire/fire.kml", S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product", U: "www.ospo.noaa.gov/Products/land/hms.html", N: "NOAA HMS Fire"},
            { I: "kml-noaa-smoke", T: 'kml', P: true, G: "www.ospo.noaa.gov/data/land/fire/smoke.kml", S: "National Oceanic and Atmospheric Administration (NOAA) Hazard Mapping System Fire and Smoke Product", U: "www.ospo.noaa.gov/Products/land/hms.html", N: "NOAA HMS Smoke"},
            { I: "kml-nasa-firms", T: 'kml', G: "htts://firms.modaps.eosdis.nasa.gov/active_fire/kml/Global_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour)"},
            { I: "kml-nasa-firms-alaska", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Alaska_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Alaska"},
            { I: "kml-nasa-firms-au-nz", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Australia_and_New_Zealand_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Australia and New Zealand"},
            { I: "kml-nasa-firms-canada", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Canada_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Canada"},
            { I: "kml-nasa-firms-central-america", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Central_America_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Central America"},
            { I: "kml-nasa-firms-europe", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Europe_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Europe"},
            { I: "kml-nasa-firms-nc-africa", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Northern_and_Central_Africa_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Northern and Central Africa"},
            { I: "kml-nasa-firms-russia-asia", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Russia_and_Asia_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Russia and Asia"},
            { I: "kml-nasa-firms-samerica", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/South_America_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) South America"},
            { I: "kml-nasa-firms-south-asia", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/South_Asia_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) South Asia"},
            { I: "kml-nasa-firms-se-asia", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/SouthEast_Asia_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) South East Asia"},
            { I: "kml-nasa-firms-south-africa", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Southern_Africa_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) Southern Africa"},
            { I: "kml-nasa-firms-usa", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/USA_contiguous_and_Hawaii_24h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (24-hour) USA"},
            { C: true, I: "kml-nasa-firmstwo", T: 'kml', G: "http://firms.modaps.eosdis.nasa.gov/active_fire/kml/Global_animated_48h.kml", S: "National Aeronautics and Space Administration (NASA) Fire Information for Resource Management System (FIRMS).", U: "http://earthdata.nasa.gov/data/near-real-time-data/firms", N: "NASA FIRMS (48-hour)"}
        ]},
        FEMA: { N: "FEMA", icon: "emergency", '>': [
                { I: "wms-femad", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/DECs/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Current Disaster Declarations"},
                { I: "wms-femah", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/HistoricalDesignations/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Historical Disaster Declarations"},
                { I: "wms-femar", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/RegHQs/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Regions and Field Offices"},
                { I: "wms-femae", T: 'wms', G: "http://gis.fema.gov/SOAP//FEMA/EvacRoutes/MapServer/WMSServer", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25", S: "Federal Emergency Management Agency (FEMA)", U: "http://gis.fema.gov/DataFeeds.html", N: "FEMA Hurricane Evacuation Routes"},
                { P: true, I: "kml-flu", T: 'kml', G: "www.google.org/flutrends/GoogleFluTrends.kmz", S: "Google Flu Trends", U: "www.google.org/flutrends/", N: "Flu Outbreaks (Google-Flu-Trends)"}
        ]},
        alerts: {  N: "Weather Alerts", icon: "lightning", '>': [
                { C: true, I: "hirad", T: 'kml', G: "http://mw1.google.com/mw-weather/current-points/twc/root.kmz", S: "Weather.com HiRAD forecast", U: "www.weather.com/", N: "Weather Forecast"},
                { P: true, I: "kml-hurrgdacs", T: 'kml', G: "http://www.gdacs.org/xml/gdacs.kml", S: " Global Disaster Alert and Coordination System (GDACS)", U: "www.gdacs.org/", N: "Hurricane Tracker (GDACS)"},
                { I: "nhc-hurricane", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", L: "NHC_TRACK_POLY,NHC_TRACK_LIN,NHC_TRACK_PT,NHC_TRACK_WWLIN,NHC_TRACK_PT_72DATE,NHC_TRACK_PT_120DATE,NHC_TRACK_PT_0NAMEDATE,NHC_TRACK_PT_MSLPLABELS,NHC_TRACK_PT_72WLBL,NHC_TRACK_PT_120WLBL,NHC_TRACK_PT_72CAT,NHC_TRACK_PT_120CAT", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - National Hurricane Center's Tropical Cyclone Track Forecast", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Hurricane and Tropical Cyclone Track Forecast"},
                { I: "nws-tstorm", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", L: "WARN_SHORT_SVR,WARN_SHORT_EWW,WARN_SHORT_TOR,WARN_SHORT_FLW,WARN_SHORT_FFW,WARN_SHORT_SMW", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - Short-Duration Storm-Based Severe Tornado, Wind, Thunderstorm, Flood, and Marine Warning Polygons", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Severe Weather Watches and Warnings"},
                { I: 'kml-nwswarn', T: 'kml', G: "http://wdssii.nssl.noaa.gov/realtime/nws_warnings.kmz", S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)", U: '//wdssii.nssl.noaa.gov/', N: "Current Storm Warnings"},
                { I: "NWS_Warnings", T:'kml', G: "/webapp/layers/kml/3rdparty/weather/NWS_Warnings.kmz", S: "NOAA", U: "www.srh.noaa.gov/gis/kml/", N: "NOAA - Current Weater Warnings"},
                { I: "nws_warnings2", T:'kml', G: "/webapp/layers/kml/3rdparty/weather/nws_warnings2.kmz", S: "NOAA", U: "www.srh.noaa.gov/gis/kml/", N: "NOAA - Current Severe Weather Watches"},
                { I: "weathertools", T:'kml', G: "/webapp/layers/kml/3rdparty/weather/weathertools.kmz", S: "Google-Earth-Blog", U: "www.gearthblog.com/kmfiles/weathertools.kmz", N: "Weather-Tools"},
                { I: "nowcoast_wwa_meteoceanhydro_longduration_hazards_time", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer", S: "This nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WATCHES, WARNINGS, ADVISORIES, and STATEMENTS for long-duration hazardous weather, marine weather, hydrological, oceanographic, wildfire, air quality, and ecological conditions which may or are presently affecting inland, coastal, and maritime areas. A few examples include Gale Watch, Gale Warning, High Surf Advisory, High Wind Watch, Areal Flood Warning, Coastal Flood Watch, Winter Storm Warning, Wind Chill Advisory, Frost Advisory, Tropical Storm Watch, Red Flag Warning, Air Stagnation Warning, and Beach Hazards Statement. (A complete list is given in the Background Information section below.) The coverage areas of these products are usually defined by county or sub-county boundaries. The colors used to identify the different watches, advisories, warnings, and statements are the same colors used by the NWS on their map at weather.gov. The NWS products for long-duration hazardous conditions are updated in the nowCOAST map service approximately every 10 minutes.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "Watches &amp; Warnings for Long-Duration Hazards"},
                { I: "nowcoast_wwa_meteoceanhydro_shortduration_hazards_warnings_time", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_warnings_time/MapServer", S: "The nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WARNINGS for short-duration hazards for inland, coastal, and maritime areas which are in progress, imminent, or has a very high probability of occurring. These hazards include severe thunderstorms (damaging winds, large hail), tornadoes, waterspouts, flash floods, and extreme winds associated with major land-falling hurricanes. Specifically, the layer includes the following warnings: Special Marine Warnings (winds of 34 knots, 3/4 inch diameter hail, waterspouts), Severe Thunderstorm Warnings (winds of 58 MPH or greater, large hail of 1 inch or greater in diameter), Tornado Warnings, Flash Flood Warnings, and Extreme Wind Warnings (sustained surface winds of 115 MPH or greater during major [Category 3 or higher]land-falling hurricane within one hour). The colors used to identify the different warnings are the same colors used by the NWS on their map at weather.gov. The map is updated in the nowCOAST map service every minute.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "Warnings for Short-Duration Hazards"},
                { I: "nowcoast_wwa_meteoceanhydro_shortduration_hazards_watches_time", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer", S: "This nowCOAST time-enabled map service provides maps depicting the geographic coverage of the latest NOAA/National Weather Service (NWS) WATCHES for the following short-duration hazardous weather and hydrological events which may affect inland and coastal areas: severe thunderstorms (surface winds of 58 MPH (93 KM/H, 50 knots) or greater, large hail of 1 inch (2.5 cm) or greater in diameter, tornadoes, and flash floods. A watch indicates that the risk of hazardous weather or hydrologic event has increased significantly, but its occurrence, location, and/or timing is still uncertain. The geographic areas covered by Severe Thunderstorm, Tornado, and Flash Flood Watches are usually indicated by county or subdivided-county boundaries. The colors used to identify the different watches are the same colors used by the NWS on their map at weather.gov. The NWS watches are updated in the nowCOAST map service approximately every 10 minutes.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "Watches for Short-Duration Hazards"},
                { I: "nowcoast-thunderstorm-outlook", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_natlcenters_meteoceanhydro_outlooks_time/MapServer", L:"3,7,11", S: "This nowCOAST time-enabled map service provides maps of the latest NOAA/NWS Outlooks for Severe Thunderstorms (Convective Outlooks) and Critical Fire Weather for both Dry and Non-Dry Thunderstorms. These outlooks are issued by the NOAA/NWS/NCEP Storm Prediction Center (SPC) in Norman, Oklahoma. The colors used on the maps to indicate the locations and risk level of severe thunderstorms and critical fire weather conditions are the same as (or very close to) those used on SPC's outlook maps. To ensure the latest information is displayed, the maps of these outlooks are updated in this nowCOAST map service every half hour, but the underlying outlooks produced by SPC are usually issued only at 0100, 0600, 1300, 1630, 1730, and 2000 UTC However, amendments or more frequent updates will be issued as necessary.", U: "http://www.nws.noaa.gov/ndgd/", N: "NOAA NWS NCEP Severe Thunderstorm Outlooks"},
                { I: "nowcoast_sat_meteo_emulated_imagery_lightningstrikedensity_goes_time", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer", S: "This nowCOAST time-enabled map service provides maps of experimental lightning strike density data from the NOAA/National Weather Service/NCEP's Ocean Prediction Center (OPC) which emulate (simulate) data from the future NOAA GOES-R Global Lightning Mapper (GLM). The purpose of this experimental product is to provide mariners and others with enhanced &ldquo;awareness of developing and transitory thunderstorm activity, to give users the ability to determine whether a cloud system is producing lightning and if that activity is increasing or decreasing...&rdquo; Lightning Strike Density, as opposed to display of individual strikes, highlights the location of lightning cores and trends of increasing and decreasing activity. The maps depict the density of lightning strikes during a 15 minute time period at an 8 km x 8 km spatial resolution. The lightning strike density maps cover the geographic area from 25 degrees South to 80 degrees North latitude and from 110 degrees East to 0 degrees West longitude. The map units are number of strikes per square km per minute multiplied by a scaling factor of 10^3. The strike density is color coded using a color scheme which allows the data to be easily seen when overlaid on GOES imagery and to distinguish values at low density values. The maps are updated on nowCOAST approximately every 15 minutes. The latest data depicted on the maps are approximately 12 minutes old (or older). The OPC lightning strike density product is still experimental and may not always be available. Given the spatial resolution and latency of the data, the data should NOT be used to activite your lightning safety plans. Always follow the safety rule: when you first hear thunder or see lightning in your area, activate your emergency plan. If outdoors, immediately seek shelter in a substantial building or a fully enclosed metal vehicle such as a car, truck or a van. Do not resume activities until 30 minutes after the last observed lightning or thunder.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "Lightning Strike Density - GOES-R"},                
                { P: true, I: "kml-nwshlog", T: 'kml', M: true, MI: "//nostradamiq.org/webapp/img/lightning_bolt.png", G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsHourlyStormLogs.kml", S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)", U: "http://wdssii.nssl.noaa.gov/", N: "NOAA/NWS Hourly Storm Log"},
                { P: true, I: "kml-nwsdlog", T: 'kml', M: true, MI: "//nostradamiq.org/webapp/img/lightning_bolt.png", G: "http://wdssii.nssl.noaa.gov/geotiff/kml/NwsDailyStormLogs.kml", S: "NOAA National Severe Storms Laboratory, Warning Decision Support System - Integrated Information (WDSS-II)", U: "http://wdssii.nssl.noaa.gov/", N: "NOAA/NWS Daily Storm Log"}
        ]},
        canes: { N: "Hurricanes", icon: "cloud", '>': [
            { I: "hc_nc_observed_track", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"8", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Observed Track"},
            { I: "hc_nc_observed_positions", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"7", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Observed Positions"},
            { I: "hc_nc_forecast_track", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"4", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Forecast Track"},
            { I: "hc_nc_forecast_positions", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"3", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Forecast Positions"},
            { I: "hc_nc_error_cone", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"5", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Cone of Error"},
            { I: "hc_nc_coast_watch_warn", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"2", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Watches and Warnings"},
            { I: "hc_nc_surface_winds", T: 'arcgis-layer', G: "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer", L:"9", S: "This nowCOAST time-enabled map service provides maps depicting the latest official NWS tropical cyclone forecast tracks and watches and warnings for all active systems in the Atlantic, Caribbean Sea, Gulf of Mexico, Eastern Pacific Ocean, and Central Pacific Ocean. The map layer displays the cyclone's present location, past locations (best track), maximum estimated sustained surface wind (MPH), wind gusts, mean sea level pressure (millibars), forecasts of the cyclone's surface positions, maximum sustained winds and gusts at 12, 24, 36, 48, 72, 96 and 120 hours, and uncertainty of the forecast track depicted as a cone. Best track information is available for all storms in the Atlantic, Caribbean Sea, Gulf of Mexico and Eastern Pacific Ocean but not for storms in the Central Pacific Ocean. The track forecasts are based on information from the NWS/National Hurricane Center (NHC) and NWS/Central Pacific Hurricane Center (CPHC) Tropical Cyclone Public Advisories. This map service is updated twice per hour in order to obtain and display the latest information from the regularly scheduled NHC tropical cyclone public advisories as well as any intermediate or special public advisories.", U: "http://new.nowcoast.noaa.gov/help/#section=updateschedule", N: "nowCOAST Observed Surface Wind Swath"},
            { I: "hc_observed_track", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "3", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Observed Track"},
            { I: "hc_past_position", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "1", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Past Positions"},
            { I: "hc_forecast_track", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "2", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Forecast Track"},
            { I: "hc_forecast_position", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "0", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Forecast Positions"},
            { I: "hc_error_cone", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "4", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Cone of Error"},
            { I: "hc_warn_watch", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", L: "5", S: "NOAA NWS National Hurricane Center (NHC), Central Pacific Hurricane Center (CPHC), Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments., Joint Typhoon Warning Center (JTWC)<br><br>This product aids in the visualization of an NHC official track forecast, the forecast points are connected by black line segments. The track line(s) are not a forecast product, however, and because there are an infinite number of ways to connect a set of forecast points, the lines should not be interpreted as representing a specific forecast for the location of a tropical cyclone in between official forecast points. It is also important to remember that tropical cyclone track forecasts are subject to error, and that the effects of a tropical cyclone can span many hundreds of miles from the center.", U: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer", N: "NOAA/USNO Watches and Warnings"},
            { I: "hc_historic_tracks", T: 'arcgis-layer', G: "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Recent/MapServer", S: "Past Positions and Observed Track are products of the National Hurricane Center (NHC). We automatically check these products for updates every 15 minutes from the NHC GIS Data page.", U: "http://www.nhc.noaa.gov/gis/", N: "Past Hurricane Tracks"},

            { P: true, I: "kml-hurrgdacs", T: 'kml', G: "http://www.gdacs.org/xml/gdacs.kml", S: " Global Disaster Alert and Coordination System (GDACS)", U: "http://www.gdacs.org/", N: "Hurricane Tracker (GDACS)"},
        ]},
        clouds: { N: "Clouds", icon: "cloud", '>': [
                { I: "kml-clouds", T: 'kml', G: "http://mw1.google.com/mw-weather/clouds/root.kmz", S: "<p>U.S. Naval Research Laboratory (NRL) Marine Meteorology Division.</p><p>Since the 1960s, the capability to view Earth's cloud patterns from space has been made possible from two main types of environmental satellites, geostationary Earth-orbiting and low Earth-orbiting satellites. At least five geostationary satellites positioned around the equator are capable of providing depictions of global weather patterns, updated every hour. From their vantage point 36,000 km above the equator, the sensors onboard geostationary satellites can't quite 'see'the very high latitudes near the north and south poles. Since their orbit flies over the high latitude regions over the north and south poles typically every 90 minutes, low Earth-orbiting satellite imagery is well-suited to complement the geostationary imagery and thereby provide total global coverage. Even so, such satellite data merging is complicated by the fact that each individual satellite observation represents a single 'snapshot' of the cloud patterns, each taken at slightly different times, whereas the underlying clouds themselves are constantly moving and evolving.</p><p>In this depiction of global clouds, these satellite data are processed to discriminate clear (transparent) and cloudy areas. For cloudy areas, the brightness is approximated based upon the cloud top temperature relative to the surface temperature, as a proxy for the height of each cloud pixel. Due their location near the Earth's surface, low level clouds such as stratocumulus and stratus (fog) clouds may be poorly represented.</p>", U: "www.nrlmry.navy.mil/", N: "Global Clouds - NRL"},
                { P: true, I: "kml-usnmsir", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/clouds/USN-multisat-ir-CVDB.kmz", S: "Image S: US. Naval Research Laboratory, Marine Meteorology Division. Google Earth overlay by Jim Lee", U: "www.nrlmry.navy.mil/archdat/global/stitched/ir/", N: "Infrared Clouds - NRL"},
                { I: "wms-goes-vis", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_GOES", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD - Visible Satellite Cloud Imagery", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "GOES Visible Satellite Cloud Imagery"},
                { I: "wms-goes-ir", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_GOES_I4", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD - Infrared Satellite Cloud Imagery", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "GOES Infrared Satellite Cloud Imagery"}
        ]},
        radar: { N: "Radar", icon: "cloud", '>': [
                { I: "mesonet-nexrad", T: 'wms', G: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", L: "nexrad_base_reflect", S: "Iowa State University of Science and Technology MESONET", U: "http://mesonet.agron.iastate.edu/ogc/", N: "NEXRAD Base Reflectivity"},
                { I: "wms-nexrad", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "RAS_RIDGE_NEXRAD", S: "NOAA Ocean Service's nowCOAST's Map Services - National Weather Service - NEXRAD Doppler Radar Mosaic for CONUS (Continental USA), Puerto Rico, Hawaii, Alaska and Guam", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "NWS RIDGE NEXRAD Radar"},
                { P: true, C: true, I: "kml-nowrada", T: 'kml', G: "http://mw1.google.com/mw-weather/radar/animation.kml", S: "Radar images on Google Earth are provided by weather.com and Weather Services International (WSI) via a product known as NOWrad. NOWrad provides a composite of 141 separate Doppler radars maintained by the U.S. National Weather Service and military. The NOWrad composite or mosaic is updated every 5-6 minutes and undergoes heavy quality-control by both specialized computer software algorithms and by human meteorologists. Most of the quality-control is performed to identify and eliminate what are called non-meteorological targets - a fancy way of referring to things that might show up on a weather radar that are not actually rain or snowfall (for instance: city buildings, mountain ranges, insects, airplanes, boats.)", U: "www.weather.com/", N: "WSI NOWrad (animation)"},
                { P: true, I: "kml-nowrad", T: 'kml', G: "http://mw1.google.com/mw-weather/radar/root.kmz", S: "Radar images on Google Earth are provIed by weather.com and Weather Services International (WSI) via a product known as NOWrad. NOWrad provIes a composite of 141 separate Doppler radars maintained by the U.S. National Weather Service and military. The NOWrad composite or mosaic is updated every 5-6 minutes and undergoes heavy quality-control by both specialized computer software algorithms and by human meteorologists. Most of the quality-control is performed to Ientify and eliminate what are called non-meteorological targets - a fancy way of referring to things that might show up on a weather radar that are not actually rain or snowfall (for instance: city buildings, mountain ranges, insects, airplanes, boats.)", U: "www.weather.com/", N: "WSI NOWrad"},
                { P: true, I: "kml-wxanalyst", T: 'kml', G: "http://wxanalyst.com/radar/WxAnalyst_NEXRAD.kmz", S: "WxAnalyst", U: "http://wxanalyst.com/radar/", N: "WxAnalyst NEXRAD"},
                { I: "f142", Z: true, T: 'kml', G: "/webapp/layers/kml/places/North-American-Doppler-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "North American Doppler Radar Stations"}
        ]},
        ra: { N: "Radar Animations", icon: "cloud", '>': [
            { P: true, I: "kml-nexradcgl", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/centgrtlakes_N0R_loop.kml", S: "Central Great Lakes - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "Central Great Lakes"},
            { P: true, I: "kml-nexradne", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/northeast_N0R_loop.kml", S: "North East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "North East"},
            { P: true, I: "kml-nexradnr", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/northrockies_N0R_loop.kml", S: "North Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "North Rockies"},
            { P: true, I: "kml-nexradpnw", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/pacnorthwest_N0R_loop.kml", S: "Pacific North West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "Pacific North West"},
            { P: true, I: "kml-nexradpsw", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/pacsouthwest_N0R_loop.kml", S: "Pacific South West - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "Pacific South West"},
            { P: true, I: "kml-nexradse", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/southeast_N0R_loop.kml", S: "South East - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "South East"},
            { P: true, I: "kml-nexradsmv", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/southmissvly_N0R_loop.kml", S: "South Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "South Mississippi Valley"},
            { P: true, I: "kml-nexradsp", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/southplains_N0R_loop.kml", S: "South Plains - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "South Plains"},
            { P: true, I: "kml-nexradsr", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/southrockies_N0R_loop.kml", S: "South Rockies - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "South Rockies"},
            { P: true, I: "kml-nexradumv", Z: true, T: 'kml', G: "http://radar.weather.gov/ridge/kml/animation/sectors/uppermissvly_N0R_loop.kml", S: "Upper Mississippi Valley - NEXRAD WSR-88D (Weather Surveillance Radar - 1988 Doppler). Latest 2 hour animation", U: "http://radar.weather.gov/ridge/", N: "Upper Mississippi Valley"}
        ]},
        surface: { N: "Surface Observations", icon: "cloud", '>': [
                { I: "metar-temp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_TEMP", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Surface Air Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Surface Air Temperature"},
                { I: "ammoniumH", T: 'kml', G: "webapp/layers/kml/places/Ammoniumhydratev2.kmz", S: "Hill - Google Earth Climate Group", U: "http://productforums.google.com/forum/?hl=en#!topic/gec-weather-climate-moderated/pi4ZJm2VNSM;context-place=forum/gec-weather-climate-moderated", N: "Ammoniumhydrate Fountains"},
                { I: "metar-dp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_DP", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Dewpoint Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Dewpoint Temperature"},
                { I: "metar-wind", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_WIND", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Wind Velocity (Speed & Direction) point observations (Knots)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Wind Speed & Direction"},
                { I: "metar-pressure", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_PRES", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Mean Sea Level Pressure point observations (millibars)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Mean Sea Level Pressure"},
                { I: "metar-vis", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_VIS", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Visibility point observations (miles)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Visibility"},
                { I: "metar-sea-temp", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MAR_SSTF", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Sea Surface Temperature point observations (degrees Fahrenheit)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Sea Surface Temperature"},
                { I: "metar-wave-height", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MAR_SWHFT", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Significant Wave Height point observations (feet)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Significant Wave Height"},
                { I: "metar-id", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "OBS_MET_ID", S: "NOAA Ocean Service's nowCOAST's Map Services - NESDIS/OSDPD & OAR/MADIS Group - Ientifier for Meteorological/Oceanographic Observing Station", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "METAR Station I"},
                { I: "WOCE_Observations", T: 'STI', G: "www.geology.sdsu.edu/kmlgeology/kmz/woce/WOCEAnnTempObsAt000m.jpg", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/kmz/woce/woce.html", N: "World Ocean Circulation Experiment (WOCE) - Observations"},
                { I: "WOCE_Temperate_by_Season", T: 'STI', G: "/webapp/layers/kml/places/WOCE_Temperate_by_Season.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/kmz/woce/woce.html", N: "World Ocean Circulation Experiment (WOCE) - Temp. by Season"},
                { I: " WOCE_Temperate_by_Depth", T: 'kml', G: "/webapp/layers/kml/places/ WOCE_Temperate_by_Depth.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/kmz/woce/woce.html", N: "World Ocean Circulation Experiment (WOCE) - Temp. by Depth"}
        ]},
        magnetic: {N: "Magnetic Field", icon: "magnet", '>' : [
                { I: "magnetic-field", T: 'kml', G: "/webapp/layers/kml/magnetic/magnetic_field.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/magnetics.html", N: "Earth Magnetic Field"},
                { I: "magnetic-field-anomalies-lg", T: 'STI', G: "www.geology.sdsu.edu/kmlgeology/kmz/magnetic_anomalies/magnetic_anomalies_lg.jpg", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/magnetics.html", N: "Earth Magnetic Field Anomalies LG"},
                { I: "magnetic-field-anomalies", T: 'STI', G: "www.geology.sdsu.edu/kmlgeology/kmz/magnetic_anomalies/magnetic_anomalies.jpg", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/magnetics.html", N: "Earth Magnetic Field Anomalies"},
                { I: "magnetic-field-declination", T: 'kml', G: "/webapp/layers/kml/magnetic/magnetic_field_declination.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/magnetics.html", N: "Earth Magnetic Field Declination"}
        ]},
        rain: { N: "Precipitation", icon: "umbrella", ">": [
                { P: true, I: "kml-usdrought", T: 'kml', G: "http://torka.unl.edu:8080/dm/data/kml/current/usdm_current.kmz", S: "University of Nebraska-Lincoln, US. Drought Monitor", U: "http://droughtmonitor.unl.edu/", N: "US. Drought Monitor"},
                { P: true, I: "kml-usshour", T: 'kml', G: "www.wpc.ncep.noaa.gov/kml/qpf/QPF6hr_f00-f06_latest.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "www.wpc.ncep.noaa.gov/", N: "US. 6-hour Forecast"},
                { P: true, I: "kml-usstfhour", T: 'kml', G: "www.wpc.ncep.noaa.gov/kml/qpf/QPF24hr_Day1_main.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "www.wpc.ncep.noaa.gov/", N: "US. 24-hour Forecast"},
                { P: true, I: "kml-ussfd", T: 'kml', G: "www.wpc.ncep.noaa.gov/kml/qpf/QPF120hr_Day1-5_latest.kml", S: "NOAA National Weather Service, Weather Prediction Center, HPC Quantitative Precipitation Forecasts (QPFs)", U: "www.wpc.ncep.noaa.gov/", N: "US. 5-day Forecast"},
                { P: true, I: "kml-ussfdflood", T: 'kml', G: "www.wpc.ncep.noaa.gov/kml/fop/fop.kml", S: "NOAA National Weather Service, Weather Prediction Center, 5-Day Significant River Flood Outlook", U: "www.wpc.ncep.noaa.gov/", N: "US. Significant Flood Risk"},
                { P: true, H: true, I: "kml-usfloods", T: 'kml', G: "http://.weather.gov/ahps/worldfiles/ahps_national_fcst.kmz", S: "NOAA National Weather Service, River Observations", U: "http://.weather.gov/ahps/", N: "US. River Flood Levels"},
                { P: true, I: "kml-trmmgf", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_hydro_model_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html", N: "Global Flood Forecast"},
                { P: true, I: "kml-trmmgff", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/trmm_google_G5_extended_hydro_model.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/publications_dir/potential_flood_hydro.html", N: "5-day Flood Forecast"},
                { P: true, I: "kml-trmmthr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_3hr.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "3-hour Accumulated Rainfall"},
                { P: true, I: "kml-trmmtfhr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_24hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "24-hour Accumulated Rainfall"},
                { P: true, I: "kml-trmmsthr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_72hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "72-hour Accumulated Rainfall"},
                { P: true, I: "kml-trmmosehr", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/3B42_rain_accumulation_168hr_b.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "168-hour Accumulated Rainfall"},
                { P: true, I: "kml-trmmav", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_average.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "30-day Average Rainfall"},
                { P: true, I: "kml-trmman", T: 'kml', G: "http://trmm.gsfc.nasa.gov/trmm_rain/Events/30_day_anomaly.kml", S: "NASA Tropical Rainfall Measuring Mission (TRMM)", U: "http://trmm.gsfc.nasa.gov/", N: "30-day Anomaly Rainfall"},
                { P: true, I: "kml-eumetod", T: 'kml', G: "http://oiswww.eumetsat.int/IPPS/html/GE/MET0D_VP-MPE.kml", S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat 0 degree Multi-Sensor Precipitation Estimate (MPE) ", U: "www.eumetsat.int/website/home/Data/Products/index.html", N: "Meteosat METOD"},
                { P: true, I: "kml-euiodc", T: 'kml', G: "http://oiswww.eumetsat.int/IPPS/html/GE/IODC_VP-MPE.kml", S: "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT) Meteosat IODC Multi-Sensor Precipitation Estimate (MPE) ", U: "www.eumetsat.int/website/home/Data/Products/index.html", N: "Meteosat IODC"},
                { P: true, I: "kml-usdanrcs", T: 'kml', G: "www.wcc.nrcs.usda.gov/ftpref/data/water/wcs/earth/snotelwithoutlabels.kmz", S: "USDA Natural ReSs Conservation Service (NRCS)", U: "www.wcc.nrcs.usda.gov/", N: "SNOTEL Snowfall Monitors"},
                { P: true, I: "kml-nohrsc", T: 'kml', G: "www.nohrsc.noaa.gov/snow_model/GE/latest_nohrsc_nsm.kmz", S: "National Weather Service, National Operational Hydrologic Remote Sensing Center (NOHRSC)", U: "www.nohrsc.noaa.gov/", N: "NOHRSC Snowfall Monitors"},
                { I: "CIMSS-TCmain", T:'kml', G: "/webapp/layers/kml/weather/CIMSS-TCmain.kmz", S: "Cooperative Institute for Meteorological Satellite Studies", U: "http://tropic.ssec.wisc.edu/tropic.php", N: "Storms and Tropical Cyclones"},
                { I: "NHC_Model_Forecasts_AutoUpdate", T:'kml', G: "/webapp/layers/kml/3rdparty/weather/NHC_Model_Forecasts_AutoUpdate.kmz", S: "NOAA", U: "www.srh.noaa.gov/gis/kml/", N: "Tropical Cyclones Forecast Model"}, 
        
        ]},
        lightning: { N: "Lightning", icon: "lightning", '>': [
                    { C: true, I: "kml-lightning", T: 'kml', G: "http://flash3.ess.washington.edu/WWLLN.kml", S: "World Wide Lightning Location Network (WWLLN) via the University of Washington", U: "http://webflash.ess.washington.edu/", N: "Lightning Strikes"},
                    { C: true, I: "ioos-7day", T: 'kml', G: "http://cordc.ucsd.edu/projects/mapping/rtv7day.kml", S: "7 day: Integrated Ocean Observing System (IOOS) HFRadar Network (HFRNet) Coastal Observing Research and Developement Center (CORDC), UC San Diego", U: "http://cordc.ucsd.edu/projects/mapping/maps/", N: "IOOS HFRadar Network (HFRNet) 7 day"}
        ]},
        ocean: { N: "Ocean Observations", icon: "wave", '>': [
                { P: true, I: "ioos-status", T: 'kml', G: "http://hfrnet.ucsd.edu/rtv/ss.php", S: "Integrated Ocean Observing System (IOOS) HFRadar Network (HFRNet) Coastal Observing Research and Developement Center (CORDC), UC San Diego", U: "http://cordc.ucsd.edu/projects/mapping/maps/", N: "IOOS HFRadar Network (HFRNet) Station Status"}
        ]},
        spaceW: { N: "Space Weather", icon: "spaceship", '>': [
                { I: "kml-aurora", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/NOAA-SWPC-POES-Auroral-Activity-CVDB.kmz", S: "NOAA Space Weather Prediction Center, ", U: "www.swpc.noaa.gov/pmap/GEpmap/", N: "Aurora Borealis and Australis Activity"},
                { I: "kml-ccmcpc", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-polar-cap-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "Polar Cap Magnetic Field Lines"},
                { I: "kml-ccmcab", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-auroral-boundary-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "Auroral (Lower) Boundary"},
                { I: "kml-ccmcfc", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-field-aligned-currents-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "Field-aligned Currents"},
                { I: "kml-ccmcnsgf", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-ns-geoelectric-field-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "North-South Geoelectric Field"},
                { I: "kml-ccmcewgf", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-ew-geoelectric-field-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "East-West Geoelectric Field"},
                { I: "kml-ccmca", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-2.5Mhz-HF-loss-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "2.5 Mhz Ionospheric HF signal loss"},
                { I: "kml-ccmcb", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-5Mhz-HF-loss-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "5 Mhz Ionospheric HF signal loss"},
                { I: "kml-ccmcc", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-10Mhz-HF-loss-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "10 Mhz Ionospheric HF signal loss"},
                { I: "kml-ccmcd", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-15Mhz-HF-loss-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "15 Mhz Ionospheric HF signal loss"},
                { I: "kml-ccmce", T: 'kml', G: "/webapp/layers/kml/3rdparty/weather/space-weather/CCMC-15Mhz-HF-loss-CVDB.kmz", S: "Community Coordinated Modeling Center (CCMC), NASA Goddard Space Flight Center", U: "http://ccmc.gsfc.nasa.gov/", N: "20 Mhz Ionospheric HF signal loss"},
                { I: "kml-ngdciono", T: 'kml', G: "http://ngdc.noaa.gov/stp/IONO/ionosonde/MIDS/catalog/mapping/ionosonde_content_realtime.kml", S: "NOAA National Geophysical Data Center, Ionosonde Physics Group", U: "http://ngdc.noaa.gov/stp/IONO/", N: "Ionosonde Plots"},
                { I: "kml-es4dtec", T: 'kml', G: "http://sol.spacenvironment.net/~ionops/kml_files/ES4D_ionops_TEC.kml", S: "Communcation Alert and Prediction Center (CAPS) / Earth Space 4D (ES4D) Ionops, Utah State University", U: "http://sol.spacenvironment.net/~ionops/", N: "Total Electron Content"},
                { C: true, I: "kml-es4dteca", T: 'kml', G: "http://sol.spacenvironment.net/~ionops/kml_files/ES4D_TEC_anim_Ionops.kml", S: "Communcation Alert and Prediction Center (CAPS) / Earth Space 4D (ES4D) Ionops, Utah State University", U: "http://sol.spacenvironment.net/~ionops/", N: "Total Electron Content (animated)"},
                { I: "impact-points-2010", T: "geojson", Z: true, G: "/webapp/layers/geojson/impact_points_2010.geojson", S: "Rajmon Impact database", U: "http://impacts.rajmon.cz/data/", N: "Impact Points 2010"}
        ]},
        Twitter: { N: "Twitter Stream Listener", icon: "twitter", '>': [
                // TODO Link to geoJSONs for various twitter streams:
                { I: "twitter-quake", T: 'geojson', G: "/webapp/layers/geojson/twitter/tweetsQuake.geojson", ML:'twitter', MI: "/webapp/img/twitter-icon.png", S:"nostradamIQ's own Twitter Listeners", U: "//nostradamiq.org/landing/resources/our_twitter_listener.html", N: "Twitter Stream containing #quake 2" },
                { I: "twitter-quake2", T: 'geojson', G: "/webapp/layers/geojson/twitter/tweetsQuake2.geojson", ML:'twitter', MI: "/webapp/img/twitter-icon.png", S:"nostradamIQ's own Twitter Listeners", U: "//nostradamiq.org/landing/resources/our_twitter_listener.html", N: "Twitter Stream containing #quake 1" },
                { I: "twitter-quake3", T: 'geojson', G: "/webapp/layers/geojson/twitter/tweetsQuake3.geojson", ML:'twitter', MI: "/webapp/img/twitter-icon.png", S:"nostradamIQ's own Twitter Listeners", U: "//nostradamiq.org/landing/resources/our_twitter_listener.html", N: "Twitter Stream containing #quake 3" },
                { I: "twitter-api-quake", T: 'geojson', G: "/webapp/layers/geojson/twitter/tweetsQuake.geojson", ML:'twitter', MI: "/webapp/img/twitter-icon.png", S:"nostradamIQ's own Twitter Listeners", U: "//nostradamiq.org/landing/resources/our_twitter_listener.html", N: "Twitter Stream containing #quake API" }
        ]},
        Report: {  N: "Climate Viewer Reports", icon: "bullhorn", '>': [
                { NL: true, I: "cvr01", T: 'kml', M: true, MS: "2", G: "/webapp/layers/kml/cv-reports/cv-reports-0415.kml", S: "Climate Viewer Reports", U: "http://climateviewer.crowdmap.com/", N: "CV Reports - 2011 - 2015"}
        ]},
    },

    Hazards: {N: "Hazard-Zones",
        pdc: { N: "Hazard-Zones by Common Evaluation", icon: "warning sign", '>': [ 
            // TODO Get a working proxy to avoid CORS // Get these to work!
            { I: "Tectonic_Plate_Boundaries", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "0", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Tectonic Plate Boundaries"},
            { I: "Volcano_Density", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "1", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Volcano Density"},
            { I: "Storm_Intensity_Zones", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "2", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Storm Intensity Zones"},
            { I: "Earthquake_Intensity_Zones", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "3", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Earthquake Intensity Zones"},
            { I: "Land", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "4", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Land"},
            { I: "Multi_Hazard_Risk_Index", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "5,6", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Multi Hazard Risk Index"},
            { I: "Vulnerability_and_Lack_of_Capacity_Index", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer/export", L: "5,7", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_hazard_zones/MapServer", N: "Vulnerability and Lack of Capacity Index"},
            { I: "BayAreaEQProbability", Z: true, T: 'kml', G: "/webapp/layers/kml/places/BayAreaEQProbability.kmz", S: "USGS", U: "http://earthquake.usgs.gov/regional/nca/virtualtour/modern.php",  N: "San Francisco Earthquake Probabilities"},
            { I: "Liquefaction_SanFrancisco", Z: true, T: 'kml', G: "/webapp/layers/kml/places/Liquefaction_SanFrancisco.kmz", S: "USGS", U: "http://earthquake.usgs.gov/regional/nca/virtualtour/modern.php",  N: "San Francisco Liquification Index"}           
        ]},
        nostradamiq: {N: "Hazard-Likelihood-Zones by nostradamIQ", icon: "warning sign", '>': [
            // HERE nostradamIQ's own evaluations: TODO
        ]},
    },

    Historical: {N: "Historical Events", icon: "clock", '>': [
                { I: "munichre-2012", T: 'kml', G: "/webapp/layers/kml/Natural-Disasters-2012-CV3D.kmz", S: "Munich Re NATCATSERVICE “Natural Catastrophes January – June 2012 World map”", U: "www.munichre.com/en/reinsurance/business/non-life/georisks/natcatservice/default.aspx", N: "Natural Catastrophes January – June 2012"},
                { I: "US_civil_war", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/events/US_civil_war.kmz", S: "Google-Maps Gallery", U: "http://maps.google.com/gallery/details?id=zcb1ceNe4gmU.k8RXpchKRzec&hl=en", N: "US Civil War"},
                { I: "College_Sexual_Assault_Investigations", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/events/College_Sexual_Assault_Investigations.kmz", S: "Google-Maps Gallery", U: "http://maps.google.com/gallery/details?id=zogHuYnuB-1k.kAnDHXNo5DGw&hl=en", N: "US College Sexual Assault Investigations"},
                { I: "American_Student_Activism_2014-15", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/events/American_Student_Activism_2014-15.kmz", S: "Google-Maps Gallery", U: "http://maps.google.com/gallery/details?id=zsBkjp9Dx1wQ.klMKyER71QNE&hl=en", N: "American Student Activism (2014-15)"},
                { I: "pdc-hist-tsunamis", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "0", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Tsunamis"},
                { I: "pdc-hist-tsunamis-cat", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "26", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Tsunami Events Categorized"},
                { I: "pdc-hist-tsunami-runups", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "1", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Tsunami Runups"},
                { I: "pdc-hist-volcanic-eruptions", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "2", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Volcano Eruptions"},
                { I: "pdc-hist-volcano-loc", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "3", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Volcano Locations"},
                { I: "pdc-hist-hist-eqs", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "4", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Earthquakes"},
                { I: "pdc-hist-avian-flu-human-cases", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "5", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Avian-Flu Human Cases"},
                { I: "pdc-hist-avian-flu-bird-cases", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "6", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Avian-Flu Bird Cases"},
                { I: "pdc-hist-storms2000", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "7", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2000"},
                { I: "pdc-hist-storms2001", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "8", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2001"},
                { I: "pdc-hist-storms2002", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "9", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2002"},
                { I: "pdc-hist-storms2003", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "10", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2003"},
                { I: "pdc-hist-storms2004", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "11", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2004"},
                { I: "pdc-hist-storms2005", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "12", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2005"},
                { I: "pdc-hist-storms2006", T: 'warcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "13", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2006"},
                { I: "pdc-hist-storms2007", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "14", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2007"},
                { I: "pdc-hist-storms2008", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "15", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2008"},
                { I: "pdc-hist-storms2009", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "16", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2009"},
                { I: "pdc-hist-storms2010", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "17", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2010"},
                { I: "pdc-hist-storms2011", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "18", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2011"},
                { I: "pdc-hist-storms2012", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "19", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2012"},
                { I: "pdc-hist-storms2013", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "20", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2013"},
                { I: "pdc-hist-storms2014", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "25", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Storms 2014"},
                { I: "pdc-hist-large-fires", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "21", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical large Fires"},
                { I: "pdc-hist-large-floods", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "22", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical large Floods"},
                { I: "pdc-hist-h1n1", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "23", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical H1N1 Affected Country"},
                { I: "pdc-hist-countries", T: 'arcgis-layer', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer/export", L: "24", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_historical_hazards/MapServer", N: "PDC Historical Countries"},
                { I: "paleogeography", T: 'kml', G: "/webapp/layers/kml/paleogeography.kmz", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/paleontology.html", N: "Paleontological View of the World"}
]},

    Satellites: { N: "Satellites",
        // TODO: Add client for all of these ftp://neoftp.sci.gsfc.nasa.gov/rgb/ as T: 'wms',
        eumetsat: { N: "EUMETSAT", icon: "cloud",
            meteosat: { N: "METEOSAT", icon: "cloud", '>': [
                { I: "eumet-airmass", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:airmass", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Airmass"},
                //{ I: "eumet-airmass_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:airmass_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Airmass 3995"},
                { I: "eumet-convection", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:convection", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Convection"},
                //{ I: "eumet-convection_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:convection_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Convection 3995"},
                { I: "eumet-dust", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:dust", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Dust"},
                //{ I: "eumet-dust_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:dust_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Dust 3995"},
                { I: "eumet-fire", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:fire", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Fire"},
                //{ I: "eumet-fire_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:fire_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Fire 3995"},
                { I: "eumet-fog", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:fog", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Fog"},
                //{ I: "eumet-fog_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:fog_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Fog 3995"},
                { I: "eumet-ash", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ash", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Ash"},
                //{ I: "eumet-ash_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ash_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Ash 3995"},
                { I: "eumet-snow", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:snow", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Snow"},
                //{ I: "eumet-snow_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:snow_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: Snow 3995"},
                { I: "eumet-eview", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:eview", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: EVIEW"},
                //{ I: "eumet-eview_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:eview_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: EVIEW 3995"},
                { I: "eumet-microphysics", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:microphysics", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: microphysics"},
                //{ I: "eumet-microphysics_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:microphysics_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: microphysics 3995"},
                { I: "eumet-natural", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:natural", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: natural"},
                //{ I: "eumet-natural_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:natural_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: natural 3995"},
                { I: "eumet-cla_hcdc", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_hcdc", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-HCDC"},
                //{ I: "eumet-cla_hcdc_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_hcdc_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-HCDC 3995"},
                { I: "eumet-cla_lcdc", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_lcdc", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-LCDC"},
                //{ I: "eumet-cla_lcdc_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_lcdc_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-LCDC 3995"},
                { I: "eumet-cla_mcdc", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_mcdc", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-MCDC"},
                //{ I: "eumet-cla_mcdc_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_mcdc_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-MCDC 3995"},
                { I: "eumet-cla_tcdc", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_tcdc", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-TCDC"},
                //{ I: "eumet-cla_tcdc_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cla_tcdc_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLA-TCDC 3995"},
                { I: "eumet-clai", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:clai", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLAI"},
                //{ I: "eumet-clai_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:clai_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLAI 3995"},
                { I: "eumet-clm", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:clm", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLM"},
                //{ I: "eumet-clm_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:clm_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CLM 3995"},
                { I: "eumet-cth", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cth", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CTH"},
                //{ I: "eumet-cth_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:cth_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: CTH 3995"},
                { I: "eumet-ir039", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ir039", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 3.9"},
                //{ I: "eumet-ir039_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ir039_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 3.9 3995"},
                { I: "eumet-ir108", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ir108", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 10.8"},
                //{ I: "eumet-ir108_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:ir108_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 10.8 3995"},
                { I: "eumet-vis006", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:vis006", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: VIS 006"},
                //{ I: "eumet-vis006_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:vis006_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: VIS 006 3995"},
                { I: "eumet-wv062", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:wv062", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: WV 062"}
                //{ I: "eumet-wv062_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "meteosat:wv062_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: WV 062 3995"} 
            ]}, 
            metopt: { N: "METOP", icon: "cloud", '>': [ 
                { I: "eumet-avhrr_ir108_ortho", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_ir108_ortho", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METOP: IR 10.8"},
                //{ I: "eumet-avhrr_ir108_ortho_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_ir108_ortho_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METOP: IR 10.8 3995"},
                { I: "eumet-avhrr_rgb124_ortho", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_rgb124_ortho", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT  METOP: RGB 10.8"},
                //{ I: "eumet-avhrr_rgb124_ortho_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_rgb124_ortho_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT  METOP: RGB 10.8 3995"},
                { I: "eumet-avhrr_vis006_ortho", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_vis006_ortho", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METOP: VIS 0.6"}
                //{ I: "eumet-avhrr_vis006_ortho_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "metop:avhrr_vis006_ortho_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METOP: VIS 0.6 3995"}
            ]}, 
            eumetraster: { N: "RASTER", icon: "cloud", '>': [  
                { I: "eumet-bkg-raster", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "bkg-raster:bkg-raster", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT BKG-RASTER: bkg-raster"}
            ]},
            meteosatir: { N: "IODC", icon: "cloud", '>': [    
                { I: "eumet-ir115", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:ir115", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 11.5"},
                //{ I: "eumet-ir115_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:ir115_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: IR 11.5 3995"},
                { I: "eumet-vis007", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:vis007", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: VIS 007"},
                //{ I: "eumet-vis007_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:vis007_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: VIS 007 3995"},  
                { I: "eumet-wv064", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:wv064", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: WV 064"}
                //{ I: "eumet-wv064_3995", T: 'wms', G: "http://eumetview.eumetsat.int:80/geoserv/ows", L: "mtp:wv064_3995", S: "EUMETSAT WMS Service", U: "http://eumetview.eumetsat.int/geoserver/wms?service=wms&version=1.3.0&request=GetCapabilities", N: "EUMETSAT METEOSAT: WV 064 3995"}
            ]}

        },

        /* TODO: RAMANI LAYERS: 

            Example: https://github.com/pabgn/ESA/blob/master/ESA/satelitelayers.json
            Layers: http://ramani.ujuizi.com/maps/index.html

        ramani: { N: "Copernicus - ESA", icon: "rocket", '>': [  
            { I: "ramani-1", T: 'STI', G: "http://eumetview.eumetsat.int:80/geoserv/ows", G:"http://a.ramani.ujuizi.com/ddl/wms?SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=CERSAT-GLO-CLIM_WIND_L4-OBS_FULL_TIME_SERIE%2Fwind_speed&STYLES=boxfill%2Frainbow&FORMAT=image%2Fpng&TRANSPARENT=true&HEIGHT=256&WIDTH=256&STYLE=boxfill%2Frainbow&SRS=EPSG%3A3857&ZINDEX=400&REUSETILES=true&TOKEN=b163d3f52ebf1cf29408464289cf5eea20cda538&PACKAGE=com.web.ramani&COLORSCALERANGE=0.0%2C15.0&ELEVATION=10&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&LOGSCALE=false&NUMCOLORBANDS=250&TIME=2012-04-01T12%3A00%3A00.000Z", S: "RAMANI API", U: "http://ramani.ujuizi.com/maps/index.html", N: "Sentinel-1: Ocean Winds (Wind Speed)"},
        ]},
        */
        satT: { N: "Satellite Imagery Terra", icon: "globe", '>': [
            { I: "ASTER_GDEM_Color_Index", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Global Digital Elevation Model"},
            { I: "MODIS_Terra_CorrectedReflectance_TrueColor", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Corrected Reflectance (True Color)"},
            { I: "MODIS_Terra_SurfaceReflectance_Bands143", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (True Color)"},
            { I: "MODIS_Terra_CorrectedReflectance_Bands721", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Corrected Reflectance (Bands 7-2-1)"},
            { I: "MODIS_Terra_SurfaceReflectance_Bands721", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (Bands 7-2-1)"},
            { I: "MODIS_Terra_CorrectedReflectance_Bands367", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Corrected Reflectance (Bands 3-6-7)"},
            { I: "MODIS_Terra_SurfaceReflectance_Bands121", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (Bands 1-2-1)"},
            { I: "MODIS_Terra_Snow_Cover", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Snow Cover"},
            { I: "MODIS_Terra_Sea_Ice", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sea Ice"},
            { I: "MODIS_Terra_Land_Surface_Temp_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Temperature (day)"},
            { I: "MODIS_Terra_Land_Surface_Temp_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Temperature (night)"},
            { I: "MODIS_Terra_Brightness_Temp_Band31_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Brightness Temperature(Band 31, day)"},
            { I: "MODIS_Terra_Brightness_Temp_Band31_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Brightness Temperature(Band 31, night)"},
            { I: "MODIS_Terra_Water_Vapor_5km_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (day)"},
            { I: "MODIS_Terra_Water_Vapor_5km_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (night)"},
            { I: "MODIS_Terra_Cloud_Top_Pressure_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Pressure (day)"},
            { I: "MODIS_Terra_Cloud_Top_Pressure_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Pressure (night)"},
            { I: "MODIS_Terra_Cloud_Top_Temp_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Temperature (day)"},
            { I: "MODIS_Terra_Cloud_Top_Temp_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Temperature (night)"},
            { I: "MODIS_Terra_Data_No_Data", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Data-No Data Mask"},
            { I: "MODIS_Terra_Aerosol", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Aerosol Optical Depth"},
            { I: "MODIS_Aqua_Chlorophyll_A", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Chlorophyll A"},        
            { I: "1571152", T: 'kml', G: "neo", S: "NEO NASA Earth Observations", U: "http://neo.sci.gsfc.nasa.gov/view.php?datasetId=MODAL2_D_AER_OD", N: "Aerosol Optical Thickness (1 day)"},
            { I: "1571293", T: 'kml', G: "neo", S: "NEO NASA Earth Observations", U: "http://neo.sci.gsfc.nasa.gov/view.php?datasetId=MODAL2_E_AER_OD", N: "Aerosol Optical Thickness (8 days)"},
            { I: "1570594", T: 'kml', G: "neo", S: "NEO NASA Earth Observations", U: "http://neo.sci.gsfc.nasa.gov/view.php?datasetId=MODAL2_M_AER_OD", N: "Aerosol Optical Thickness (1 month)"},
            { I: "sat00", T: 'kml', G: "http://ge.ssec.wisc.edu/modis/modis-google-earth/terra_latest.kml", S: "Space Science and Engineering Center, University of Wisconsin-Madison", U: "http://ge.ssec.wisc.edu/modis-today/", N: "Terra MODIS Continental USA (True Color)"},
            { I: "sat24", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/lst_stub.kmz", S: "These maps of the Earth's land surface temperature for the year 2006 were produced using data from the Moderate-resolution Imaging Spectroradiometer (MODIS), which flies onboard NASA's Terra and Aqua satellites. MODIS measures the temperature of nearly every square kilometer of the Earth’s surface roughly twice a day.<br><br>Unlike conventional observations of surface temperature, which are actually collected by thermometers two meters above the ground, MODIS precisely measures the thermal radiation emitted from the planet’s surface — whether that surface is bare ground, lakes, treetops, or rooftops. This additional detail means farmers can know the temperature of the air around their crops and the temperature of the crops themselves, which helps better estimate things like productivity and water requirements. This data also allows scientists to measure phenomena such as global warming on a planetary scale.<br><br>S: ICESS, U.C. Santa Barbara.", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/", N: "Land Surface Temperature"},
            { I: "sat20", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/lcc_stub.kmz", S: "New NASA land cover maps provide scientists with the most refined global picture ever produced of the distribution of Earth’s ecosystems and land use patterns. High-quality land cover maps aid scientists and policy makers involved in natural resource management and a range of research and global monitoring objectives.<br><br>The land cover maps were developed at Boston University in Boston, Mass., using data from the Moderate Resolution Imaging Spectroradiometer (MODIS) instrument on NASA’s Terra satellite. The maps are based on a digital database of Earth images collected between November, 2000, and October, 2001.", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/", N: "Land Cover Classification"},
            { I: "native-american2", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/other/American-Indian-Areas.kmz", S: "based on 2000 Census data", U: "http://nationalatlas.gov/atlasftp.html#indlanp", N: "American Indian Areas, Alaska Native Areas, Hawaiian Home Lands 2000"},
            { I: "sat22", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/ndvi_stub.kmz", S: "In an effort to monitor major fluctuations in vegetation and understand how they affect the environment, 20 years ago Earth scientists began using satellite remote sensors to measure and map the density of green vegetation over the Earth. The Normalized Difference Vegetation Index (NDVI) is one way of measuring these effects. The NDVI is calculated from the visible and near-infrared light reflected by vegetation. It is based on the fact that healthy vegetation absorbs most of the visible light that hits it and reflects a large portion of the near-infrared light, while unhealthy or sparse vegetation reflects more visible light and less near-infrared light.<br><br>The NDVI can be calculated using data from a number of different satellites and sensors. The particular images you see here were produced from data measured by the SeaWiFS sensor aboard the SeaStar satellite (operated by one of NASA’s commercial partners, GeoEye) and processed by NASA’s Ocean Color team.<br><br>S: The SeaWiFS Project, NASA, and GeoEye. For research and educational use only.", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/", N: "Land Vegetation Index"}
        ]},
        SatW: { N: "Satellite Imagery Water", icon: "aqua", '>': [
            { I: "MODIS_Aqua_CorrectedReflectance_TrueColor", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Corrected Reflectance (True Color)"},
            { I: "MODIS_Aqua_SurfaceReflectance_Bands143", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (True Color)"},
            { I: "MODIS_Aqua_CorrectedReflectance_Bands721", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Corrected Reflectance (Bands 7-2-1)"},
            { I: "MODIS_Aqua_SurfaceReflectance_Bands721", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (Bands 7-2-1)"},
            { I: "MODIS_Aqua_SurfaceReflectance_Bands121", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Reflectance (Bands 1-2-1)"},
            { I: "MODIS_Aqua_Snow_Cover", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Snow Cover"},
            { I: "MODIS_Aqua_Sea_Ice", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sea Ice"},
            { I: "MODIS_Aqua_Land_Surface_Temp_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Temperature (day)"},
            { I: "MODIS_Aqua_Land_Surface_Temp_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Land Surface Temperature (night)"},
            { I: "MODIS_Aqua_Brightness_Temp_Band31_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Brightness Temperature(Band 31, day)"},
            { I: "MODIS_Aqua_Brightness_Temp_Band31_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Brightness Temperature(Band 31, night)"},
            { I: "MODIS_Aqua_Water_Vapor_5km_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (day)"},
            { I: "MODIS_Aqua_Water_Vapor_5km_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (night)"},
            { I: "MODIS_Aqua_Cloud_Top_Pressure_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Pressure (day)"},
            { I: "MODIS_Aqua_Cloud_Top_Pressure_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Pressure (night)"},
            { I: "MODIS_Aqua_Cloud_Top_Temp_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Temperature (day)"},
            { I: "MODIS_Aqua_Cloud_Top_Temp_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Top Temperature (night)"},
            { I: "MODIS_Aqua_Data_No_Data", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Data-No Data Mask"},
            { I: "MODIS_Aqua_Aerosol", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Aerosol Optical Depth"},
            { I: "MODIS_Combined_Value_Added_AOD", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Terra & Aqua MODIS Combined Value-Added<br>Aerosol Optical Depth"},
            { I: "Sea_Surface_Temp_Infrared", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sea Surface Tempeture Infrared"},
            { I: "Sea_Surface_Temp_Microwave", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sea Surface Tempeture Microwave"},
            { I: "Sea_Surface_Temp_Blended", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sea Surface Tempeture Blended"},
            { I: "sat001", T: 'kml', G: "http://ge.ssec.wisc.edu/modis/modis-google-earth/aqua_latest.kml", S: "Space Science and Engineering Center, University of Wisconsin-Madison", U: "http://ge.ssec.wisc.edu/modis-today/", N: "Aqua MODIS Continental USA (True Color)"},
            { I: "MODIS_Aqua_Chlorophyll_A", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Chlorophyll A"},        
            { I: "sat21", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/chl_stub.kmz", S: "When we think about Earth’s sources of oxygen, we usually think of vast forests such as the Amazon, but about half of the oxygen we breathe comes from elsewhere: it’s produced by phytoplankton. Phytoplankton are tiny, single-celled plants that live in the ocean, and they serve as the base of the oceanic food chain. Yet as important as phytoplankton are to life on Earth, their interaction with our planet has only recently been studied on a global scale.<br><br>To convert sunlight to chemical energy, ocean plants use chlorophyll, the same chemical that gives terrestrial plants their green color. By measuring chlorophyll, NASA satellites can determine the distribution and intensity of phytoplankton in the world’s oceans. These images were produced by combining data from the SeaWiFS and MODIS sensors.<br>S: The SeaWiFS Project, MODIS, NASA, and GeoEye. For research and educational use only.", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/", N: "Ocean Chlorophyll Concentration"}
        ]},
        SatA: { N: "Satellite Imagery Air", icon: "cloud", '>': [
            { I: "AIRS_Dust_Score", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Dust Score"},
            { I: "AIRS_CO_Total_Column_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Carbon Monoxide (Total Column, Day)"},
            { I: "AIRS_CO_Total_Column_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Carbon Monoxide (Total Column, Night)"},
            { I: "AIRS_Prata_SO2_Index_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulphur Dioxide (Day, Prata Algorithm)"},
            { I: "AIRS_Prata_SO2_Index_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulphur Dioxide (Night, Prata Algorithm)"},
            { I: "AIRS_Precipitation_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Precipitation Estimate (Day)"},
            { I: "AIRS_Precipitation_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Precipitation Estimate (Night)"},
            { I: "OMI_Cloud_Pressure", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Cloud Pressure"},
            { I: "OMI_Aerosol_Index", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Aerosol Index"},
            { I: "OMI_Aerosol_Optical_Depth", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Aerosol Optical Depth"},
            { I: "OMI_Absorbing_Aerosol_Optical_Depth", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Absorbing Aerosol Optical Depth"},
            { I: "OMI_SO2_Planetary_Boundary_Layer", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (Planetary Boundary Layer)"},
            { I: "OMI_SO2_Lower_Troposphere", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (Lower Troposphere)"},
            { I: "OMI_SO2_Middle_Troposphere", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (Middle Troposphere)"},
            { I: "OMI_SO2_Upper_Troposphere_and_Stratosphere", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (Upper Troposphere and Stratosphere)"},
            { I: "MLS_CO_215hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Carbon Monoxide (CO)at 215 hPa (Day)"},
            { I: "MLS_CO_215hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Carbon Monoxide (CO)at 215 hPa (Night)"},
            { I: "MLS_H2O_46hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (H2O)at 46 hPa (Day)"},
            { I: "MLS_H2O_46hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Vapor (H2O)at 46 hPa (Night)"},
            { I: "MLS_HNO3_46hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Nitric Acid (HNO3)at 46 hPa (Day)"},
            { I: "MLS_HNO3_46hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Nitric Acid (HNO3)at 46 hPa (Night)"},
            { I: "MLS_N2O_46hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Nitrous Oxide (N2O)at 46 hPa (Day)"},
            { I: "MLS_N2O_46hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Nitrous Oxide (N2O)at 46 hPa (Night)"},
            { I: "MLS_O3_46hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Ozone (O3)at 46 hPa (Day)"},
            { I: "MLS_O3_46hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Ozone (O3)at 46 hPa (Night)"},
            { I: "MLS_SO2_147hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (SO2)at 147 hPa (Day)"},
            { I: "MLS_SO2_147hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Sulfur Dioxide (SO2)at 147 hPa (Night)"},
            { I: "MLS_Temperature_46hPa_Day", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Temperatureat 46 hPa (Day)"},
            { I: "MLS_Temperature_46hPa_Night", T: "nasa-gibs", S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Temperatureat 46 hPa (Night)"}
        ]},

        SatAnimation: { N: "Satellite Animations", icon: "globe", '>': [
            { C: true, P: true, I: "kml-agi-satellites2", T: 'kml', G: "http://adn.agi.com/SatelliteDatabase/KmlNetworkLink.aspx", S: "Analytical Graphics, Inc. (AGI)", U: "www.agi.com/resources/satdb/satdbpc.aspx", N: "Satellite Tracker"},
            { C: true, P: true, I: "kml-agi-satellites2", T: 'kml', G: "http://adn.agi.com/SatelliteDatabase/SatelliteDatabase.kmz", S: "Analytical Graphics, Inc. (AGI)", U: "www.agi.com/resources/satdb/satdbpc.aspx", N: "Satellite Tracker2"},
            { P: true, H: true, C: true, I: "sat09", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaiceir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "East North Atlantic Region - Infrared"},
            { P: true, H: true, C: true, I: "sat10", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicewv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Atlantic Region - Water Vapor"},
            { P: true, H: true, C: true, I: "sat11", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Pacific Region - Infrared"},
            { P: true, H: true, C: true, I: "sat12", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicwwv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Pacific Region - Water Vapor"},
            { P: true, H: true, C: true, I: "sat13", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicsir.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "South Pacific Region - Infrared"},
            { P: true, H: true, C: true, I: "sat14", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/mosaic/movies/kml/tiles/RT.mosaic.mosaicswv.tiles.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "South Pacific Region - Water Vapor"},
            { P: true, C: true, I: "sat15", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.natl.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North Atlantic - Total Precipitable Water"},
            { P: true, C: true, I: "sat16", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.epac.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North East Pacific - Total Precipitable Water"},
            { P: true, C: true, I: "sat17", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.wpac.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "North West Pacific - Total Precipitable Water"},
            { P: true, C: true, I: "sat18", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.indo.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "Indian Ocean - Total Precipitable Water"},
            { P: true, C: true, I: "sat19", T: 'kml', G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.ausf.kml", S: "CIMSS/SSEC University of Wisconsin-Madison", U: "http://tropic.ssec.wisc.edu/", N: "Western Australia - Total Precipitable Water"},
            { P: true, C: true, I: "nasa-bmng", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/bmng_stub.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#bmng", N: "Blue Marple Next Generation (NASA)"},
            { P: true, C: true, I: "nasa-lst", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/lst_stub.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#lst", N: "Land Surface Temperature (NASA)"},
            { P: true, C: true, I: "nasa-sst", T: 'kml', G: "http://byss.arc.nasa.gov/maps/earth/sst/sst.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#sst", N: "Sea Surface Temperature (NASA)"},
            { P: true, C: true, I: "nasa-chlorophyll", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/chl_stub.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#chlorophyll", N: "Ocean Clorophyll Concentration (NASA)"},
            { P: true, C: true, I: "nasa-ndvi", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/ndvi_stub.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#ndvi", N: "Land Vegetation Index (NASA)"},
            { P: true, C: true, I: "nasa-lcc", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/lcc_stub.kmz", S: "NASA Intelligent Robotics Lab", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/#lcc", N: "Land Cover Classification (NASA)"},
            { P: true, I: "nasa-wms-", T: 'wms', G: "http://svs.gsfc.nasa.gov/cgi-bin/wms?", L: "", S: "NASA Earth Observing WMS Imagery Service", U: "http://svs.gsfc.nasa.gov/documents/index.html", N: " (NASA WMS)"},
        ]}
    },

    Pollution: { N: "Pollution",
        toxicrelease: { N: "Toxic Release", icon: "warning sign", '>': [
            { I: "epa-tri", H: true, T: 'geojson', MI: '//nostradamiq.org/webapp/img/mryuk.png', G: "/webapp/layers/geojson/EPA-TRI-2011-cv3d.geojson", S: "2011 data, US Environmental Protection Agency (EPA) .KML file, converted to GeoJSON by Jim Lee", U: "www.epa.gov/enviro/facts/tri/index.html", N: "EPA Toxic Release Inventory (TRI) USA"}
        ]},
        Toxicwaste: { N: "Toxic Waste Clean-up", icon: "recycle sign", '>': [
            { H: true, Z: true, I: "epa01", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_01.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 1 - ME NH VT MA RI CT"},
            { H: true, I: "epa02", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_02.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 2 - NY NJ PR VI"},
            { H: true, I: "epa03", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_03.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 3 - PA DE DC MD VA WV"},
            { H: true, I: "epa04", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_04.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 4 - KY TN NC SC MS AL GA FL"},
            { H: true, I: "epa05", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_05.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 5 - MN WI IL MI IN OH"},
            { H: true, I: "epa06", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_06.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 6 - NM TX OK AR LA"},
            { H: true, I: "epa07", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_07.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 7 - NE KS IA MO"},
            { H: true, I: "epa08", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_08.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 8 - MT ND WY SD UT CO"},
            { H: true, I: "epa09", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_09.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 9 - CA NV AZ HI"},
            { H: true, I: "epa10", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/superfund/region_10.kmz", S: "EPA Superfund", U: "www.epa.gov/superfund/index.htm", N: "Region 10 - WA OR I AK"},
        ]},
        nuclear: { N: "Nuclear", icon: "recycle sign", '>': [
            { I: "bw-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-bw-reactor-cv3d.geojson", MI: "/img/icons/nuke-red.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Boiling Water Reactors"},
            { I: "pw-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-pw-reactor-cv3d.geojson", MI: "/img/icons/nuke-green.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Pressurized Water Reactors"},
            { I: "phw-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-phw-reactor-cv3d.geojson", MI: "/img/icons/nuke-dkblue.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Pressurized Heavy Water Reactors"},
            { I: "lwg-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-lwg-reactor-cv3d.geojson", MI: "/img/icons/nuke-yellow.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Light Water Graphite Reactors"},
            { I: "gc-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-gc-reactor-cv3d.geojson", MI: "/img/icons/nuke-blue.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Gas Cooled Reactors"},
            { I: "other-reactor", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-other-reactor-cv3d.geojson", MI: "/img/icons/nuke-purple.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='http://blogs.nature.com/news/2011/03/the_worlds_nuclear_reactors_as_1.html'>Declan Butler</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Other Reactors"},
            { H: true, I: "nuke-war", T: 'geojson', G: "http://climateviewer.net/layers/geojson/nuclear-test-explosions-cv3d.geojson", MI: "/img/icons/nuke-boom.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Based on the work of <a href='https://productforums.google.com/d/msg/gec-history-illustrated-moderated/DncXs6kPWXM/uM26F3CDq18J'>Wm. Robert Johnston and Lyle McElhaney</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Nuclear Test Explosions"},
            { I: "radioactive-topten", T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Ten-Most-Radioactive-Locations-On-Earth-CV3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/2013/11/24/10-most-radioactive-places-on-earth/", N: "Ten Most Radioactive Places on Earth"},
            { I: "hibakusha", T: 'geojson', G: "http://climateviewer.net/layers/geojson/hibakusha-worldwide-cv3d.geojson", MI: "/img/icons/nuke.png", S: "Dr. Alex Rosen, Hibakusa 'explosion-affected people' Worldwide", U: "http://www.ippnw-students.org/Japan/hibakushamap.html", N: "50 Nuclear Nightmares (Hibakusha Worldwide)"},
            { I: "tmi-meltdown", Z: true, T: 'geojson', G: "http://climateviewer.net/layers/geojson/three-mile-island-meltdown-cv3d.geojson", MI: "/img/icons/nuke.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1979 Three Mile Island Meltdown"},
            { I: "tmi-fallout", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Three-Mile-Island-meltdown-cv3d.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1979 Three Mile Island Fallout"},
            { I: "chernobyl-meltdown", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Chernobyl-meltdown-Climate-Viewer-3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1986 Chernobyl Meltdown"},
            { I: "chernobyl-fallout-fallout", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Chernobyl-meltdown-fallout-Climate-Viewer-3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1986 Chernobyl Fallout"},
            { I: "fukushima-meltdown", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-Climate-Viewer-3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "2011 Fukushima-Daiichi Meltdown"},
            { I: "fukushima-fallout", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-fallout-Climate-Viewer-3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "2011 Fukushima-Daiichi Fallout"},
            { P: true, I: "fuku-tsunami", Z: true, T: 'kml', G: "http://nctr.pmel.noaa.gov/honshu20110311/honshu_tsunami_2011-03-11.kmz", S: "NOAA Center for Tsunami Research, Maximum amplitude plot for Google Earth (KMZ)", U: "http://nctr.pmel.noaa.gov/honshu20110311/index.html", N: "2011 Fukushima Tsunami Wave Height"},
            { C: true, I: "honeywell-uf6", Z: true, T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/nuclear/Honeywell-Uranium-Hexafluoride-Release-10-27-2014-CV3D.kmz", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Radiation Release 10-27-2014", U: "http://climateviewer.com/2014/10/27/metropolis-get-nuked-last-night-2/", N: "2014 Honeywell UF6 Processing Facility Radiation Release"}
        ]},
        Nukewaste: { N: "Nuclear Waste", icon: "recycle sign", '>': [
            { I: "kml-topten", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Ten-Most-Radioactive-Locations-On-Earth-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Ten Most Radioactive Places on Earth"},
            { I: "hibakusha", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/nuclear/HibakushaWorldwide.kmz", S: "Dr. Alex Rosen", U: "www.ippnw-students.org/Japan/hibakushamap.html", N: "50 Nuclear Nightmares!"},
            { H: true, I: "nuke-test", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/nuclear-test-explosions-NL-Climate-Viewer-3D.kmz", S: "Jim Lee, based on the work of Wm. Robert Johnston and Lyle McElhaney", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Nuclear Test Explosions"},
            { I: "kml-tmi", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Three-Mile-Island-meltdown-ClimateViewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1979 Three Mile Island Meltdown"},
            { I: "kml-chernobyl", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Chernobyl-meltdown-Climate-Viewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1986 Chernobyl Meltdown"},
            { I: "kml-chernobyl-fallout", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Chernobyl-meltdown-fallout-Climate-Viewer-3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "1986 Chernobyl Meltdown - Cesium-137 Ground Deposition (Fallout)"},
            { I: "kml-fukushima", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-Climate-Viewer-3D.kmz", S: "Created July 4, 2013 by Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "2011 Fukushima-Daiichi Meltdown"},
            { I: "kml-fukushima-fallout", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Fukushima-Daiichi-meltdown-fallout-Climate-Viewer-3D.kmz", S: "Created July 4, 2013 by Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "2011 Fukushima-Daiichi - Cesium-137 Ground Deposition (Fallout)"},
            { P: true, I: "kml-fukutsu", Z: true, T: 'kml', G: "http://nctr.pmel.noaa.gov/honshu20110311/honshu_tsunami_2011-03-11.kmz", S: "NOAA Center for Tsunami Research, Maximum amplitude plot for Google Earth (KMZ)", U: "http://nctr.pmel.noaa.gov/honshu20110311/index.html", N: "2011 Fukushima Tsunami Wave Height"},
            { C: true, I: "honeywell-uf6", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Honeywell-Uranium-Hexafluoride-Release-10-27-2014-CV3D.kmz", S: "Did Metropolis get Nuked last night?? Radiation Release 10-27-2014", U: "http://climateviewer.com/2014/10/27/metropolis-get-nuked-last-night-2/", N: "2014 Honeywell UF6 Processing Facility Radiation Release"},
            { C: true, I: "can-npri", T: 'kml', G: "www.ec.gc.ca/inrp-npri/donnees-data/files/NPRI_E_2011.kmz", S: "2011 data, Environment Canada", U: "www.ec.gc.ca/inrp-npri/default.asp?lang=en&n=1D892B9F-1", N: "National Pollutant Release Inventory (NPRI) Canada"},
            { C: true, I: "prtr2009", T: 'kml', G: "www.cec.org/atlas/files/PRTR2009/NA_PRTR_2009_mar132012.kmz", S: "Commission for Environmental Cooperation", U: "www.cec.org/Page.asp?PageID=751&amp;SiteNodeID=1120", N: "North American Pollutant Releases and Transfers"},
            { I: "gs001", T: 'kml', G: "http://bit.ly/1oiVl4t", S: "George Stiller, My Reading Mapped", U: "http://myreadingmapped.blogspot.com/", N: "Interactive Map of Environmental Disasters"},
            { I: "eutrophication", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/Ocean-Dead-Zones-CV3D.kmz", S: "World Resources Institue: Ocean Eutrophication and Hypoxia: over-enrichment of water by nutrients such as nitrogen and phosphorus—a leading threat to water quality around the world.", U: "www.wri.org/our-work/project/eutrophication-and-hypoxia", N: "Ocean Dead Zones: Eutrophication and Hypoxia"},
            { I: "tpf02", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/CWMDS-ClimateViewer-3D.kmz", S: "James Martin Center for Nonproliferation Studies", U: "http://cns.miis.edu/multimedia/interactive_files/cw_dumping.htm", N: "Chemical Weapons Munitions Dumped at Sea"},
            { C: true, I: "kml-fukushimas", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/nuclear/radioactive_seawater/fukushima_radioactive_seawater_ASR.kmz", S: "ASR Ltd.", U: "www.asrltd.com/japan/", N: "Fukushima Cesium-137 Seawater Impact"},
            { C: true, I: "kml-fukushimad", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/nuclear/tsunami_debris/fukushima_tsunami_debris_ASR.kmz", S: "ASR Ltd.", U: "www.asrltd.com/japan/", N: "Fukushima Tsunami Debris"},
            { I: "p05", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/Bayou-Corne-LA-Sinkhole-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Bayou Corne, LA. Sinkhole"}     
        ]},
        Fossilfuel: { N: "Fossil Fuel", icon: "recycle sign", '>': [
            { H: true, T: 'geojson', MS: 3, MI: '//nostradamiq.org/webapp/img/oil_well.png', I: "p07", G: "/webapp/layers/geojson/Fracking-Chemical-Reports-cv3d.geojson", S: "Jim Lee", U: "http://blog.skytruth.org/2012/11/skytruth-releases-fracking-chemical.html", N: "Fracking America"},
            { C: true, Z: true, I: "nrdc-drinking-water-impacts", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/NRDC-drinking-water-impacts-2011-CV3D.kmz", S: "NRDC", U: "www.fractracker.org/downloads/nrdc-list-of-suspected-drinking-water-impacts-2011/", N: "NRDC Drinking Water Impacts 2011"},
            { I: "coal-power-now", Z: true, T: 'geojson', MS: 3, MI: '//nostradamiq.org/webapp/img/smoke-red.png', G: "/webapp/layers/geojson/Contaminated-Coal-Waste-NRDC-current-factories-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than four hundred forty existing coal-fired power plants in 47 states produced over 126 million tons of coal waste in 2005, contaminated by over 91 thousand tons of toxic metals. This table lists totals by state, ranked by total coal waste per state.", U: "www.nrdc.org/energy/coalwaste", N: "Coal Power Plants (current)"},
            { I: "coal-power-future", Z: true, T: 'geojson', MS: 3, MI: '//nostradamiq.org/webapp/img/smoke-grey.png', G: "/webapp/layers/geojson/Contaminated-Coal-Waste-NRDC-future-factories-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “Power plants produce about 130 million tons of contaminated waste every year, and the federal government has failed to regulate it.” Across the nation, coal-fired power plants aren’t just polluting our skies and water. Each year, they generate millions of tons of waste contaminated with toxic metals -- more than two-thirds of which is dumped into landfills, storage ponds or old mines or otherwise stored somewhere, just waiting for disaster to strike.<br><br>More than eighty new coal-fired power plants have been proposed around the country. If built, the plants will annually produce nearly 18 million tons of coal ash, contaminated by over 18 thousand tons of toxic metals. Over the course of their operating lives, these new power plants will produce approximately one billion tons of coal ash, with a million tons of toxic metals.", U: "www.nrdc.org/energy/coalwaste", N: "Coal Power Plants (future)"},
            { I: "coal-ash", Z: true, T: 'geojson', MS: 3, MI: '//nostradamiq.org/webapp/img/mryuk.png', G: "/webapp/layers/geojson/Coal-Ash-Ponds-cv3d.geojson", S: "Natural ReSs Defense Council (NRDC) “The horror is unimaginable.  A community suffering severe health effects, with more than a thousand resIents blaming coal ash contamination for causing their sickness, including grisly birth defects in their children.”", U: "http://switchboard.nrdc.org/blogs/rperks/coal_ash_wreaking_havoc_on_hea.html", N: "Coal Ash in Ponds"},
            { I: "p071", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/Shale-Gas-Basins-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Shale Gas Basins"},
            { H: true, I: "p08", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/cavern-field-Etzel-Germany-CV3D.kmz", S: "Jim Lee", U: "www.bi-lebensqualität.de/", N: "Cavern Field, Etzel, Germany"},
            { I: "p06", T: 'geojson', G: "/webapp/layers/geojson/drilling-methane-release-cv3d.geojson", MS: "6", MI: "//nostradamiq.org/webapp/img/firedept.png", S: "Created by Jim Lee", U: "http://r3zn8d.wordpress.com/2013/03/24/geoengineering-drilling-and-the-massive-methane-release-theory/", N: "Drilling Wells and Methane Release"},
            { I: "p061", Z: true, T: 'geojson', G: "/webapp/layers/geojson/fracking-alaska-cv3d.geojson", MS: "6", MI: "//nostradamiq.org/webapp/img/oil_well.png", S: "Gas Hydrate Prospecting Using Well Cuttings and Mud-Gas Geochemistry from 35 Wells, North Slope, Alaska. Created by Jim Lee", U: "http://pubs.usgs.gov/sir/2011/5195/sir2011-5195_text.pdf", N: "Fracking Alaska"},
            { I: "p09", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/Black-Tides-Oil-Spill-Disasters.kmz", S: "David Tryse's Google Earth files", U: "http://earth.tryse.net/", N: "Black Tides: Worst Oil Spills in History"}
        ]},
        Geoengineering: { N: "Geoengineering", icon: "plane", '>': [
            { I: "p04", T: 'kml', G: "/webapp/layers/kml/pollution/ETC-Group-Geoengineering-CV3D.kmz", S: "ETC Group Excel to Google Fusion Table by Jim Lee", U: "www.google.com/fusiontables/data?docI=1NecyRN7xjFg6TA1YnRjPrEiYtoUKV2sWJ259GjY#rows:I=1", N: "Geoengineering Projects (ETC Group)"},
            { I: "p01", T: 'kml', G: "/webapp/layers/kml/pollution/Weather-Modification-Association-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/geoengineering/", N: "Weather Modification Association Projects"},
            { I: "p02", Z: true, T: 'kml', G: "/webapp/layers/kml/pollution/NOAA-Reported-Weather-Modification-2012-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/geoengineering/", N: "NOAA 2012 Reported Activities (partial)"},
            { I: "p03", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/EOL-Field-Projects-CV3D.kmz", S: "National Center for Atmospheric Research (NCAR)/Earth Observing Laboratory (EOL)", U: "www.eol.ucar.edu/all-field-projects-and-deployments", N: "Earth Observing Lab Field Projects"}
        ]},
        geoengineering: { N: "Weather Control", icon: "plane", '>': [
            //{ I: "p004", T: 'kml', G: "http://climateviewer.net/layers/kml/pollution/ETC-Group-Geoengineering-CV3D.kmz", S: "ETC Group Excel to Google Fusion Table by Jim Lee", U: "https://www.google.com/fusiontables/data?docI=1NecyRN7xjFg6TA1YnRjPrEiYtoUKV2sWJ259GjY#rows:I=1", N: "Geoengineering Projects (ETC Group)"},
            { I: "p001", T: 'geojson', G: "http://climateviewer.net/layers/geojson/weather-modification-association-projects-cv3d.geojson", MI: '/img/icons/rainy.png', S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/geoengineering/", N: "Weather Modification Association Projects"},
            { I: "p002", T: 'geojson', G: "http://climateviewer.net/layers/geojson/noaa-weather-modification-projects-2012-cv3d.geojson", MI: '/img/icons/rainy.png', S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/geoengineering/", N: "NOAA 2012 Reported Activities (partial)"},
            { I: "p003", T: 'geojson', G: "http://climateviewer.net/layers/geojson/ucar-eol-field-projects-cv3d.geojson", MI: '/img/icons/eol.gif', S: "National Center for Atmospheric Research (NCAR)/Earth Observing Laboratory (EOL)", U: "https://www.eol.ucar.edu/all-field-projects-and-deployments", N: "UCAR Earth Observing Lab Field Projects"}
        ]},
        Climatechange: { N: "Climate Change", icon: "leaf", '>': [
            { P: true, C: true, I: "kml-mohc", T: 'kml', G: "http://services.google.com/earth/kmz/mohc_defra_layer.kmz", S: "The Met Office Hadley Centre has produced an animation showing a projection of global temperature levels from 2000 to 2100 using their Global Environmental Model.<br><br>Slide the time-scale bar to see the world get hotter as you move through the decades (more orange/red colours). Click on the logos to find out more about how people are already being affected by weather-related recent events, or to see predicted climate change impacts in different parts of the world between now and 2100.", U: "www.metoffice.gov.uk/climate-change/resources/hadleycentre", N: "Global Temperature Rise Model (2000 - 2100)"},
            { P: true, I: "kml-worldenergy", T: 'kml', G: "http://services.google.com/earth/kmz/energy_consumption.kmz", S: "GeoHive - Energy: consumption by type and country, 2006", U: "http://web.archive.org/web/20100222171519///www.xist.org/charts/en_cons.aspx", N: "World Energy Consumption, 2006"},
            { P: true, I: "oil-consumption", T: 'kml', G: "http://services.google.com/earth/kmz/world_oil_consumption.kmz", S: "GeoHive - Energy: oil consumption (in millions tonnes)", U: "http://web.archive.org/web/20100210162131///www.xist.org/charts/en_oilcons.aspx", N: "Oil Consumption (Millions Tonnes)"},
            { P: true, I: "disappearing-forests", T: 'kml', G: "http://services.google.com/earth/kmz/disappearing_forests.kmz", S: "GeoHive", U: "www.geohive.com/", N: "Disappearing Forests"},
            { P: true, I: "greenland-melt", T: 'kml', G: "http://nsidc.org/data/virtual_globes/NSIC_Greenland_melt.kmz", S: "National Snow and Ice Data Center (NSDIC)", U: "http://nsIc.org/", N: "Greenland Glacial Melting"},
            { P: true, I: "polar-ice-extents", T: 'kml', G: "http://nsidc.org/data/virtual_globes/seaice/NSIC_SepSeaIceExtent.kmz", S: "National Snow and Ice Data Center (NSDIC)", U: "http://nsIc.org/", N: "Polar Ice Extents"},
            { I: "greenhouse-gas", T: 'kml', G: "/webapp/layers/kml/pollution/Greenhouse-Gas-Emissions-CV3D.kmz", S: "World Resources Institute EarthTrends", U: "www.earthtrends.wri.org/", N: "Greenhouse Gas Emissions"},
            { I: "p072", T: 'kml', G: "/webapp/layers/kml/3rdparty/pollution/Geothermal-Potential-SMU.kmz", S: "Southern Methodist University, Geothermal Lab", U: "www.google.org/egs/", N: "Geothermal Potential"},
            { C: true, I: "permafrost-zonation", T: 'kml', G: "www.geo.uzh.ch/microsite/cryodata/pf_global/GlobalPermafrostZonationIndexMap.kmz", S: "Glaciology, Geomorphodynamics & Geochronology group at the Department of Geography, University of Zurich", U: "www.geo.uzh.ch/microsite/cryodata/", N: "Permafrost Zonation"},
            { I: "Rising-Sea-Level-Animation-v2.1", Z: true, T: 'kml', G: "/webapp/layers/kml/alerts/Rising-Sea-Level-Animation-v2.1.kmz", S: "BZoltan", U: "http://productforums.google.com/forum/#!topic/gec-weather-climate-moderated/_fU8MuYal6M;context-place=forum/gec-weather-climate-moderated", N: "San Francisco Rising Sea Level Animation"} 
        ]}
    },

    Places: { N: "Places",
        nuclear: { N: "Nuclear", icon: "bomb", '>': [
            { C: true, I: "ot01", cache: true, T: 'kml', G: "http://enipedia.tudelft.nl/kml/EnipediaPowerPlants.kml", S: "Enipedia", U: "http://enipedia.tudelft.nl/wiki/Main_Page", N: "World Wide Power Plants"},
            { I: "netc", T: 'kml', G: "/webapp/layers/kml/3rdparty/alerts/netc.kmz", S: "Nuclear Emergency Tracking Center", U: "www.netc.com/", N: "Nuclear Emergency Tracking Center"},
            { I: "f01", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Nuclear-Reactors-Worldwide-CV3D.kmz", S: "Jim Lee, based on the work of Declan Butler.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Operational Nuclear Reactors"},
            { I: "f02", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Nuclear-Reactors-Non-Operational-Worldwide-CV3D.kmz", S: "Jim Lee, based on the work of Declan Butler.", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Decommissioned Nuclear Reactors"},
            { I: "f03", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/Nuclear-Storage-Leaks-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Warheads, Waste, and Storage"},
            { H: true, I: "nuke-war", T: 'kml', G: "/webapp/layers/kml/pollution/nuclear/nuclear-test-explosions-NL-Climate-Viewer-3D.kmz", S: "Jim Lee, based on the work of Wm. Robert Johnston and Lyle McElhaney", U: "http://climateviewer.com/nuclear-reactor-map/", N: "Nuclear Test Explosions"}
        ]},
        Surveillance: { N: "Big Brother", icon: "bomb", '>': [
            { I: "f05", T: 'kml', G: "/webapp/layers/kml/places/NWO-Surveillance-Map-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "Government Spy Facilities"},
            { I: "f06", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/Underwater-Cables-CV3D.kmz", S: "SubmarineCableMap.com", U: "www.submarinecablemap.com/", N: "Submarine Communication Cables"},
            { I: "f07", Z: true, T: 'kml', G: "/webapp/layers/kml/places/DHS-Fusion-Centers-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "DHS Fusion Centers"},
            { I: "f08", Z: true, T: 'kml', G: "/webapp/layers/kml/places/Drones-over-USA-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/new-world-order/", N: "UAV Drones over America"},
            { I: "drones-pakistan", Z: true, T: 'kml', G: "/webapp/layers/kml/places/Pakistan-drone-strikes-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d", N: "U.S. drone strikes in Pakistan"},
            { I: "prisons", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/World-Prison-Brief-5659.kmz", S: "World Prison Brief (2010) by SergeyUA - World Prison Brief – 143 countries, 5660 places (September, 2010) Africa – 35 countries, 179 places. North America - 14 countries, 1767 places. South America – 13 countries, 191 places. Asia – 35 countries, 819 places. Australia &amp; Oceania – 7 countries, 119 places. Europe – 39 countries, 2585 places. Foto - 2513. References on website - 4586. Including WikipediA - 2223", U: "http://productforums.google.com/d/msg/gec-earth-browsing-moderated/Ey216sRE2Z0/xgt4bLhYriEJ", N: "Prisons Worldwide"},
            { I: "us-border-crisis", Z: true, T: 'kml', G: "http://bit.ly/1t02UTr", S: "Relocations of Unaccompanied Immigrant Minors", U: "http://bit.ly/ZQFYvJ", N: "Relocations of Unaccompanied Immigrant Minors 2014"},
            { I: "fema-camp", Z: true, T: 'kml', G: "/webapp/layers/kml/places/FEMA-Camps-CV3D.kmz", S: "Created by Jim Lee. I have included the FEMA camp maps as a result of much public debate on the matter. If you inspect the markers that the two map creators made, it will be hard for you to find anything that resembles a holding cage. I will verify these locations over the coming months and see if any of this has truth to it. Until then, here are the two Ss of the &quot;FEMA Camp&quot; images that are making the rounds in social media, verify it before you believe it. The creators of these two maps dI a poor job in placing markers at the least, and dI not do the proper research to locate the facilities they claim are &quot;federal holding pens&quot;.", U: "http://climateviewer.com/rezn8d", N: "FEMA Camps"},
            { I: "mh17", Z: true, T: 'kml', G: "/webapp/layers/kml/places/MH17-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Malaysian Airlines MH17 shot down by SA-11"},
            { I: "surface-to-air", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/SAM-Site-Overview-June-2013-CV3D.kmz", S: "Worldwide SAM Site Overview, updated June 2013", U: "http://geimint.blogspot.com/2008/06/worldwide-sam-site-overview.html", N: "Surface-to-Air Missiles (SAM) Worldwide"},
            { I: "russian-sam", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/Fortress-Russia-CV3D.kmz", S: "Defending Mother Russia - Bluffer’s GuIe to Fortress Russia (Part 1): Integrated Air Defence of Russia 2010", U: "http://productforums.google.com/d/msg/gec-dynamic-data-layers/K7LgrqY1d_8/pmH2BocgvR4J", N: "Russian Air Defences"}
        ]},
        Electromagnetic: { N: "Electromagnetic", icon: "signal", '>': [
            { I: "f12", T: 'kml', G: "/webapp/layers/kml/places/Star-Wars-SDI-OTH-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "Missile Defense Radars (Star Wars)"},
            { I: "f09", Z: true, T: 'kml', G: "/webapp/layers/kml/places/HAARP-HIPAS-Poker-Flat-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "HAARP, HIPAS, HLMS, and Poker Flat"},
            { I: "f10", T: 'kml', G: "/webapp/layers/kml/places/HAARP-Ionospheric-Heaters-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "Ionospheric Heaters, SuperDARN, EISCAT"},
            { I: "f11", T: 'kml', G: "/webapp/layers/kml/places/ULF-ELF-VLF-Transmitters-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/haarp/", N: "ELF and VLF Transmitters"},
            { I: "f13", T: 'kml', G: "/webapp/layers/kml/places/X-Files-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Lasers and Directed-Energy"},
            { I: "f14", Z: true, T: 'kml', G: "/webapp/layers/kml/places/North-American-Doppler-Radar-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "North American Doppler Radar Stations"},
            { I: "nws-npn", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/NOAA-NPN-MADIS-CAP-CV3D.kmz", S: "National Weather Service NOAA Profiler Network (NPN) and MADIS CAP", U: "www.profiler.noaa.gov/npn/npnSiteLocationsAsText.jsp", N: "Wind Profiler Radars"},
            { I: "aeronet", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/AERONET-CV3D.kmz", S: "NASA Goddard Space Flight Center", U: "http://aeronet.gsfc.nasa.gov/", N: "AERONET (AErosol RObotic NETwork)"},
            { I: "bsrn", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/BSRN-CV3D.kmz", S: "World Radiation Monitoring Center (WRMC)", U: "www.bsrn.awi.de/en/home/", N: "Baseline Surface Radiation Network (BSRN)"},
            { I: "esrl", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/ESRL-CV3D.kmz", S: "NOAA   Earth Systems Research Lab (ESRL)", U: "www.esrl.noaa.gov/", N: "Earth Systems Research Lab (ESRL) Instruments"},
            { I: "doris", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/DORIS-CV3D.kmz", S: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)", U: "http://Is-doris.org/network/googleearth.html", N: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)"},
            { I: "f16", T: 'kml', G: "/webapp/layers/kml/places/RF-Facilities-CV3D.kmz", S: "Jim Lee", U: "http://climateviewer.com/rezn8d/", N: "Observatories, Telescope Arrays, Satellite Communications"},
            { I: "star-wars", T: 'geojson', G: "http://climateviewer.net/layers/geojson/star-wars-radar-cv3d.geojson", MI: '/img/icons/radar-black.png', S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/haarp/", N: "Missile Defense Radars (Star Wars)"},
            { I: "sky-heaters", T: 'geojson', G: "http://climateviewer.net/layers/geojson/ionospheric-heaters-cv3d.geojson", MI: '/img/icons/radar-red.png', S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/haarp/", N: "Ionospheric Heaters"},
            { I: "haarp", Z: true, T: 'geojson', G: "http://climateviewer.net/layers/geojson/haarp-cv3d.geojson", MI: '/img/icons/radar-ltblue.png', S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/haarp/", N: "High-Frequency Active Auroral Research Project (HAARP)"},
            { I: "superdarn", T: 'geojson', G: "http://climateviewer.net/layers/geojson/superdarn-cv3d.geojson", MI: '/img/icons/radar-yellow.png', S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br>The Super Dual Auroral Radar Network (SuperDARN) is an international radar network for studying the upper atmosphere and ionosphere, comprising eleven radars in the northern hemisphere and seven in the southern hemisphere that operate in the High Frequency (HF) bands between 8 and 22 MHz. The radars measure the Doppler velocity of plasma density irregularities in the ionosphere.<br><br>In their standard operating mode each radar scans through 16 beams of azimuthal separation 3.24°, with a total scan time of 1 min. Each beam is divided into 75 range gates of length 45 km, and so in each full scan the radars each cover 52° in azimuth and over 3000 km in range, an area of over 4×106 km².<br><br>SuperDARN began in 1983, when the first radar installation was constructed in Labrador, Canada. Source: <a href="http://en.wikipedia.org/wiki/Super_Dual_Auroral_Radar_Network" target="_blank">Wikipedia</a><br><a href="http://superdarn.jhuapl.edu/" target="_blank">John&#39;s Hopkins Applied Physics Lab</a><br><a href="http://sd-software.ece.vt.edu/tiki/tiki-print.php?page=VT%20SuperDARN%20Home" target="_blank">Virginia Tech SuperDARN</a><br><a href="http://cedarweb.hao.ucar.edu/wiki/index.php/Documents:Ground_Based_Instruments#B_-_Coherent_Ionospheric_Radars_.28.7E29.29" target="_blank">CEDAR: Ground Based Instruments</a><br><a href="http://articles.adsabs.harvard.edu//full/1995SSRv...71..761G/0000761.000.html" target="_blank">SuperDARN - A Global View of the Dynamics of High-Latitude Convection</a></p>', U: "http://superdarn.ece.vt.edu/tiki-index.php", N: "Super Dual Auroral Radar Network (SuperDARN)"},
            { I: "digisonde", T: 'geojson', G: "http://climateviewer.net/layers/geojson/digisonde-cv3d.geojson", MI: '/img/icons/digisonde.png', S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br><a href='http://umlcar.uml.edu/stationlist.html'>Station List</a><br><br>Lowell Digisonde International manufactures and markets the Digisonde-Portable-Sounder-4D (DPS4D), the latest model in the DIGISONDE® series of advanced ionosondes built in Lowell since 1969. The Digisonde is an ionospheric radar that uses high-frequency radio waves for the remote sensing of the ionosphere, the ionosonde technology pioneered by Sir Edward Appleton in the late 1920s. DIGISONDE stands for “Digitally Integrating Goniometric IonoSONDE”. The DPS4D is the only commercially available ionosonde system that measures all parameters of the ionospherically reflected HF radio signals, and automatically calculates the local ionospheric electron density profile in real time.</p><img alt='Digisonde Network Map' src='http://www.digisonde.com/images/homepage-map.jpg' /><br><br>", U: "http://www.digisonde.com/", N: "DIGISONDE® Ionosonde Network"},
            { I: "elf-vlf", T: 'geojson', G: "http://climateviewer.net/layers/geojson/elf-vlf-cv3d.geojson", MI: "/img/icons/rf-warning.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Alpha RSDN-20, Beta Time Signal, LORAN-C, AWESOME VLF Network, Ground Wave Emergency Network (GWEN), and ELF transmission facilities.", U: "http://climateviewer.com/haarp/", N: "ELF and VLF Transmitters"},
            { I: "elf-vlf-ref", T: 'geojson', G: "http://climateviewer.net/layers/geojson/elf-vlf-antennas-cv3d.geojson", MI: "/img/icons/antenna.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Visual reference (Antennas) for the Alpha RSDN-20, Beta Time Signal, LORAN-C, AWESOME VLF Network, Ground Wave Emergency Network (GWEN), and ELF transmission facilities.", U: "http://climateviewer.com/haarp/", N: "ELF and VLF Visual Reference"},
            { I: "directed-energy", T: 'geojson', G: "http://climateviewer.net/layers/geojson/xfiles-cv3d.geojson", MI: "/img/icons/laser.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/rezn8d/", N: "Lasers and Directed-Energy"},
            { I: "nexrad", T: 'geojson', G: "http://climateviewer.net/layers/geojson/radar-nexrad-cv3d.geojson", MI: "/img/icons/doppler-green.png", S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br><a href="http://radar.weather.gov/">radar.weather.gov</a><br><a href="http://www.roc.noaa.gov/WSR88D/About.aspx">WSR-88D Specifications</a><br><br>In 1988, the NEXRAD Agencies established the WSR-88D (Weather Surveillance Radar - 1988 Doppler) Radar Operations Center (ROC) in Norman, Oklahoma. The ROC employees come from the National Weather Service, Air Force, Navy, FAA, and support contractors. The ROC provides centralized meteorological, software, maintenance, and engineering support for all WSR-88D systems. WSR-88D systems will be modified and enhanced during their operational life to meet changing requirements, technology advances, and improved understanding of the application of these systems to real-time weather operations. The ROC also operates WSR-88D test systems for the development of hardware and software upgrades to enhance maintenance, operation, and provide new functionality.<br><br><img src="http://climateviewer.com/gallery/WSR88DCONUS.jpg" /></p>', U: "http://www.roc.noaa.gov/WSR88D/Program/NetworkSites.aspx", N: "NEXRAD Doppler Radar Stations"},
            { I: "sigmet", T: 'geojson', G: "http://climateviewer.net/layers/geojson/radar-sigmet-cv3d.geojson", MI: "/img/icons/doppler-green.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br><p>The Canadian weather radar network consists of 31 weather radars spanning Canada's most populated regions. Their primary purpose is the early detection of precipitation, its motion and the threat it poses to life and property. Each has a range of 256 km (159 mi) in radius around the site to detect reflectivity, and a range of 128 km (80 mi) for detecting velocity patterns (Doppler effect).</p><p><img src='http://climateviewer.com/gallery/canrad.png' /></p>", U: "http://weather.gc.ca/radar/index_e.html", N: "Canadian Sigmet Doppler Radar Stations"},
            { I: "tdwr", T: 'geojson', G: "http://climateviewer.net/layers/geojson/radar-tdwr-cv3d.geojson", MI: "/img/icons/doppler-yellow.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>The Terminal Doppler Weather Radar (TDWR) network is a Doppler weather radar system used primarily for the detection of hazardous wind shear conditions, precipitation, and winds aloft on and near major airports situated in climates with great exposure to thunderstorms in the United States. NCEI archives the derived products (called Level III), which are in the same data format as Next Generation Weather Radar (NEXRAD) Level III. NCEI does not archive the base data (called Level II).", U: "https://www.ncdc.noaa.gov/data-access/radar-data/tdwr", N: "Terminal Doppler Weather Radar (TDWR) Stations"},
            { I: "jss", T: 'geojson', G: "http://climateviewer.net/layers/geojson/radar-jss-cv3d.geojson", MI: "/img/icons/doppler-red.png", S: '<p>Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br>The JSS is a joint United States Air Force and Federal Aviation Administration system for the atmospheric air defense of North America. It replaced the Semi Automatic Ground Environment (SAGE) system in 1983.<br><br>The JSS consists of long range surveillance radars, primarily operated and maintained by the Federal Aviation Administration (FAA), but providing communication and radar data to both FAA and United States Air Force control centers.</p><h3>Air Route Surveillance Radar (ARSR)</h3><p>FAA equipment is a primarily a mixture of Long Range Air Route Surveillance Radars (ARSR) of various types, although some use legacy AN/FPS radars. They are co-located with UHF ground-air-ground (G/A/G) transmitter/receiver (GATR) facilities at many locations. Fourteen sites have VHF radios as well. The GATR facility provides radio access to fighters and Airborne early warning and control (AEW&C) aircraft from the SOCCs. The JSS has been enhanced under the FAA/Air Force Radar Replacement Program with 44 ARSR-4/FPS-130 radars to replace some of the many previous long-range radars. This provides common, high-performance, unattended radars. The ARSR-4/FPS-130 is a 3-D long range radar with an effective detection range of some 250 miles and has been fully integrated with JSS at all joint use sites.<br /><br />These radars are generally unattended except for periodic FAA maintenance crews which visit the sites as necessary.<br>Source: <a href="http://en.wikipedia.org/wiki/Joint_Surveillance_System">Joint Surveillance System Wikipedia</a><br><br><a href="https://www.fas.org/nuke/guide/usa/airdef/arsr-4.htm">ARSR-4 Reference FAS.org</a><br><br><a href="http://climateviewer.com/gallery/joint_surveillance_system_doppler.jpg" target="_blank">View large photo of JSS Doppler Station</a><br><br><img src="http://climateviewer.com/gallery/arsrinst.jpg" /><img src="http://climateviewer.com/gallery/Conr-afnorth-emblem.jpg"/><br><br><img src="http://climateviewer.com/gallery/Air_Defense_Command.png"/></p>', U: "http://climateviewer.com/rezn8d/", N: "Joint Surveillance System (JSS), FAA Long-range Radar Stations"},
            { I: "ioos", T: 'geojson', G: "http://climateviewer.net/layers/geojson/radar-ioos-cv3d.geojson", MI: "/img/icons/doppler-blue.png", S: 'Created by <a href="http://climateviewer.com/rezn8d/">Jim Lee</a>.<br><p>High frequency (HF) radar systems measure the speed and direction of ocean surface currents in near real time. Currents in the ocean are equivalent to winds in the atmosphere because they move things from one location to another. These currents carry nutrients as well as pollutants, so it is important to know the currents for ecological and economic reasons. The currents carry any floating object, which is why U.S. Coast Guard search and rescue operators use HF radar data to make critical decisions when rescuing disabled vessels and people stranded in the water.</p><p>These radars can measure currents over a large region of the coastal ocean, from a few kilometers offshore up to 200 km, and can operate under any weather conditions. They are located near the water’s edge, and need not be situated atop a high point of land.  Traditionally, crews placed current measuring devices directly into the water to retrieve current speeds.  While these direct measurement systems are still widely used as a standard reference, HF radars are the only sensors that can measure large areas at once with the detail required for the important applications described here.  Not even satellites have this capability.</p><p><img src="http://climateviewer.com/gallery/hfr_anthen240.jpg" /></p>', U: "http://www.ioos.noaa.gov/hfradar/welcome.html", N: "Integrated Ocean Observing System (IOOS) Radar Stations"},
            { I: "npn-wind-radar", T: 'geojson', G: "http://climateviewer.net/layers/geojson/npn-wind-radar-cv3d.geojson", MI: "/img/icons/radar-pink.png", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Wind profilers are specifically designed to measure vertical profiles of horizontal wind speed and direction from near the surface to above the tropopause. Data from this network are distributed in real-time to government and university atmospheric researchers, private meteorologists, the National Centers for Environmental Prediction, the Storm Prediction Center, all National Weather Service (NWS) Forecast Offices, and foreign agencies responsible for weather prediction.</p>", U: "http://www.profiler.noaa.gov/npn/npnSiteLocationsAsText.jsp", N: "NOAA Profiler Network (NPN) Wind Radar"},
            { I: "madis-wind-radar", T: 'geojson', G: "http://climateviewer.net/layers/geojson/madis-cap-wind-radar-cv3d.geojson", MI: "/img/icons/radar-purple.png", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>Cooperative Agency Profilers (CAP) is a cooperative venture between GSD (formerly FSL) and many participating agencies enabling GSD to; acquire profiler and RASS data in near real-time, apply GSD's data quality control algorithms, and make these value-added data available on the web and to the National Weather Service. At this time, data from approximately 100 CAP sites from over 35 different agencies from around the world are being acquired by GSD. The majority of CAP systems are 915 MHz Boundary Layer Profilers, there are also several 449 MHz and 50 MHz profilers in the CAP network.</p>", U: "https://madis-data.noaa.gov/cap/", N: "MADIS CAP Wind Radar"},
            { I: "aeronet", T: 'geojson', G: "http://climateviewer.net/layers/geojson/aeronet-cv3d.geojson", MI: "/img/icons/nasa.png", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>The AERONET (AErosol RObotic NETwork) program is a federation of ground-based remote sensing aerosol networks established by NASA and PHOTONS (Univ. of Lille 1, CNES, and CNRS-INSU) and is greatly expanded by collaborators from national agencies, institutes, universities, individual scientists, and partners. The program provides a long-term, continuous and readily accessible public domain database of aerosol optical, microphysical and radiative properties for aerosol research and characterization, validation of satellite retrievals, and synergism with other databases. The network imposes standardization of instruments, calibration, processing and distribution.</p>", U: "http://aeronet.gsfc.nasa.gov/", N: "AERONET (AErosol RObotic NETwork)"},
            { I: "bsrn", T: 'geojson', G: "http://climateviewer.net/layers/geojson/bsrn-cv3d.geojson", MI: "/img/icons/partly_cloudy.png", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>It is believed that the radiation budget of the Earth-atmosphere system plays a fundamental role in determining the thermal conditions and the circulation of the atmosphere and the ocean, shaping the main characteristics of the Earth's climate. The irradiances at the Earth's surface are especially important in understanding the climate processes, since the Earth's surface transforms approximately 60% of the solar radiation absorbed by the planet. These irradiances also occupy an important position in the ocean surface energy budget, ultimately influencing the major features of ocean currents.</p><p>While a small change in irradiance at the Earth's surface may cause a profound change in climate, the existing radiometric network is not capable of arriving at the required accuracy for climate research. In fact our present understanding of the radiation distribution both - horizontally and vertically - is not sufficient to understand the present climate. The simulation of the past and future climate changes, which would be induced by the change in radiation, is even more uncertain.</p><p>This was the background for the World Climate Research Programme (WCRP) Radiative Fluxes Working Group to initiate a new Baseline Surface Radiation Network (BSRN) to support the research projects of the WCRP and other scientific programs. Some years later the BSRN incorporated into the WCRP Global Energy and Water Cycle Experiment (GEWEX) Radiation Panel.</p>", U: "http://www.bsrn.awi.de/", N: "Baseline Surface Radiation Network (BSRN)"},
            { I: "esrl", T: 'geojson', G: "http://climateviewer.net/layers/geojson/esrl-cv3d.geojson", MI: "/img/icons/noaa.gif", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>NOAA Earth Systems Research Lab (ESRL). ESRL was formed to pursue a broad and comprehensive understanding of the Earth system. This system comprises many physical, chemical and biological processes that need to be dynamically integrated to better predict their behavior over scales from local to global and periods of minutes to millennia.</p>", U: "http://www.esrl.noaa.gov/psd/data/obs/sites/", N: "Earth Systems Research Lab (ESRL) Instruments"},
            { I: "doris", T: 'geojson', G: "http://climateviewer.net/layers/geojson/doris-cv3d.geojson", MI: "/img/icons/ids.png", S: "<p>Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.<br>DORIS is a Doppler satellite tracking system developped for precise orbit determination and precise ground location. It is onboard the Cryosat-2, Jason-1, Jason-2, ENVISAT and HY-2A altimetric satellites and the remote sensing satellites SPOT-4 and SPOT-5. It also flew with SPOT-2, SPOT-3 and TOPEX/POSEIDON.</p><p>IDS is an international service which provides a support, through DORIS data and products, to geodetic, geophysical, and other research and operational activities. New proposals for Analysis Centers and temporary or permanent DORIS stations are welcome.</p>", U: "http://Is-doris.org/network/googleearth.html", N: "DORIS (Doppler Orbitography and Radiopositioning Integrated by Satellite)"},
            { I: "f16", T: 'geojson', G: "http://climateviewer.net/layers/geojson/atmospheric-observatories-cv3d.geojson", MI: "/img/icons/radar-dish.png", S: "Created by <a href='http://climateviewer.com/rezn8d/'>Jim Lee</a>.", U: "http://climateviewer.com/rezn8d/", N: "Other Radars, Observatories, Telescope Arrays, Satellite Communications"},
        ]},
        Fcc: { N: "FCC Broadcast Towers", icon: "signal", '>': [
            { H: true, I: "f17", T: 'geojson', G: "/webapp/layers/geojson/FCC-cell-towers-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Cellular (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Cell Phone Towers"},
            { H: true, I: "f24", T: 'geojson', G: "/webapp/layers/geojson/FCC-paging-towers-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Paging (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Paging Towers"},
            { H: true, I: "f18", T: 'geojson', G: "/webapp/layers/geojson/FCC-AM-radio-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. AM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "AM Radio"},
            { H: true, I: "f19", T: 'geojson', G: "/webapp/layers/geojson/FCC-FM-radio-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. FM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "FM Radio"},
            { H: true, I: "f20", T: 'geojson', G: "/webapp/layers/geojson/FCC-Digital-TV-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - Digital (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Digital Television"},
            { H: true, I: "f21", T: 'geojson', G: "/webapp/layers/geojson/FCC-NTSC-TV-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - NTSC (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "NTSC Television"},
            { H: true, I: "f22", T: 'geojson', G: "/webapp/layers/geojson/FCC-LM-broadcast-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Land Mobile - Broadcast (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Land Mobile Broadcast"},
            { H: true, I: "f23", T: 'geojson', G: "/webapp/layers/geojson/FCC-BRS-EBS-2012-cv3d.geojson", MS: "3", MI: "//nostradamiq.org/webapp/img/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. BRS/EBS (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524///wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Educational Broadcast (BRS/EBS)"}
            /*
            { H: true, I: "f17", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-cell-towers-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Cellular (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Cell Phone Towers (USA FCC)"},
            { H: true, I: "f24", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-paging-towers-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Paging (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Paging Towers (USA FCC)"},
            { H: true, I: "f18", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-AM-radio-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. AM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "AM Radio (USA FCC)"},
            { H: true, I: "f19", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-FM-radio-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. FM (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "FM Radio (USA FCC)"},
            { H: true, I: "f20", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-Digital-TV-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - Digital (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Digital Television (USA FCC)"},
            { H: true, I: "f21", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-NTSC-TV-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. TV - NTSC (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "NTSC Television (USA FCC)"},
            { H: true, I: "f22", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-LM-broadcast-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. Land Mobile - Broadcast (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Land Mobile Broadcast (USA FCC)"},
            { H: true, I: "f23", T: 'geojson', G: "http://climateviewer.net/layers/geojson/FCC-BRS-EBS-2012-cv3d.geojson", MI: "http://climateviewer.com/gallery/radioz.png", S: "Federal Communications Commission (FCC) Licensing Database Extracts. BRS/EBS (zip) (06-14-2012) .SHP file to GeoJSON conversion by Jim Lee", U: "http://web.archive.org/web/20140522193524/http://wireless.fcc.gov/geographic/index.htm?job=licensing_database_extracts", N: "Educational Broadcast (BRS/EBS) (USA FCC)"}
            */
        ]}
    },

    Other: { N: "Other",
        Basemaps: { N: "Base Maps", icon: "globe", '>': [
            //{ I: "timezones", T: 'kml', G: "/webapp/layers/kml/world-time-zones.kmz", S: "Community Contributed Timezones Map - Not claimed to be accurate... Time is messy!", U: "www.gelib.com/world-time-zones.htm", N: "Timezones"},
            { I: "World_Imagery", T: 'arcgis', G: "World_Imagery", S: "World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (591M down to 72k) and 2.5m SPOT Imagery (288k to 72k) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe. Recent 1m USDA NAIP imagery is available in select states of the US. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, Getmapping, AeroGRID, IGN Spain, and IGP Portugal. Additionally, imagery at different resolutions has been contributed by the GIS User Community.", U: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer", N: "ESRI World Imagery"},
            { I: "World_Street_Map", T: 'arcgis', G: "World_Street_Map", S: "This worldwide street map presents highway-level data for the world. Street-level data includes the United States; much of Canada; Mexico; Europe; Japan; Australia and New Zealand; India; South America and Central America; Africa; and most of the Middle East. This comprehensive street map includes highways, major roads, minor roads, one-way arrow indicators, railways, water features, administrative boundaries, cities, parks, and landmarks, overlaid on shaded relief imagery for added context. The map also includes building footprints for selected areas. Coverage is provided down to ~1:4k with ~1:1k and ~1:2k data available in select urban areas. The street map was developed by Esri using Esri basemap data, DeLorme basemap layers, U.S. Geological Survey (USGS) elevation data, Intact Forest Landscape (IFL) data for the world; HERE data for Europe, Australia and New Zealand, North America, South America and Central America, Africa, and most of the Middle East; OpenStreetMap contributors for select countries in Africa; MapmyIndia data in India; and select data from the GIS user community.", U: "http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer", N: "ESRI World Street Map"},
            { I: "Ocean_Basemap", T: 'arcgis', G: "Ocean_Basemap", S: "This map is designed to be used as a base map by marine GIS professionals and as a reference map by anyone interested in ocean data. The base map includes bathymetry, marine water body names, undersea feature names, and derived depth values in meters. Land features include administrative boundaries, cities, inland waters, roads, overlaid on land cover and shaded relief imagery. The map was compiled from a variety of best available sources from several data providers, including General Bathymetric Chart of the Oceans GEBCO_08 Grid, IHO-IOC GEBCO Gazetteer of Undersea Feature Names, National Oceanic and Atmospheric Administration (NOAA), and National Geographic, DeLorme, NAVTEQ, Geonames.org, and Esri, and various other contributors. The base map currently provides coverage for the world down to a scale of ~1:577k, and coverage down to 1:72k in US coastal areas, and various other areas. Coverage down to ~ 1:9k is available limited areas based on regional hydrographic survey data. The base map was designed and developed by Esri. NOTE: Data from the GEBCO_08 grid shall not to be used for navigation or for any other purpose relating to safety at sea. The GEBCO_08 Grid is largely based on a database of ship-track soundings with interpolation between soundings guided by satellite-derived gravity data. In some areas, data from existing grids are included. The GEBCO_08 Grid does not contain detailed information in shallower water areas, information concerning the generation of the grid can be found on GEBCO's web site: http://www.gebco.net/data_and_products/gridded_bathymetry_data. The GEBCO_08 Grid is accompanied by a Source Identifier (SID) Grid which indicates which cells in the GEBCO_08 Grid are based on soundings or existing grids and which have been interpolated. The latest version of both grids and accompanying documentation is available to download, on behalf of GEBCO, from the British Oceanographic Data Centre (BODC) https://www.bodc.ac.uk/data/online_delivery/gebco. The names of the IHO (International Hydrographic Organization), IOC (intergovernmental Oceanographic Commission), GEBCO (General Bathymetric Chart of the Oceans), NERC (Natural Environment Research Council) or BODC (British Oceanographic Data Centre) may not be used in any way to imply, directly or otherwise, endorsement or support of either the Licensee or their mapping system.", U: "http://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer", N: "ESRI Oceans"},
            { I: "World_Physical_Map", T: 'arcgis', G: "World_Physical_Map", S: "This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.", U: "http://server.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer", N: "ESRI World Physical"},
            { I: "World_Shaded_Relief", T: 'arcgis', G: "World_Shaded_Relief", S: "This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map. It is especially useful in maps that do not contain orthoimagery. The map resolution (cell size) is as follows: 30 Meters for the U.S. 90 Meters for all land areas between 60° north and 56° south latitude. 1 KM resolution above 60° north and 56° south. The shaded relief imagery was developed by Esri using GTOPO30, Shuttle Radar Topography Mission (SRTM), and National Elevation Data (NED) data from the USGS.", U: "http://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer", N: "ESRI World Shaded Relief"},
            { I: "World_Topo_Map", T: 'arcgis', G: "World_Topo_Map", S: "This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone. The map includes administrative boundaries, cities, water features, physiographic features, parks, landmarks, highways, roads, railways, and airports overlaid on land cover and shaded relief imagery for added context. The map provides coverage for the world down to a scale of ~1:72k. Coverage is provided down to ~1:4k for the following areas: Australia and New Zealand; India; Europe; Canada; Mexico; the continental United States and Hawaii; South America and Central America; Africa; and most of the Middle East. Coverage down to ~1:1k and ~1:2k is available in select urban areas. This basemap was compiled from a variety of best available sources from several data providers, including the U.S. Geological Survey (USGS), U.S. Environmental Protection Agency (EPA), U.S. National Park Service (NPS), Food and Agriculture Organization of the United Nations (FAO), Department of Natural Resources Canada (NRCAN), GeoBase, Agriculture and Agri-Food Canada, DeLorme, HERE, Esri, OpenStreetMap contributors, and the GIS User Community.", U: "http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer", N: "ESRI World Topographic"},
            { I: "USA_Topo_Maps", T: 'arcgis', G: "USA_Topo_Maps", S: "This map presents land cover imagery for the world and detailed topographic maps for the United States. The map includes the National Park Service (NPS) Natural Earth physical map at 1.24km per pixel for the world at small scales, i-cubed eTOPO 1:250,000-scale maps for the contiguous United States at medium scales, and National Geographic TOPO! 1:100,000 and 1:24,000-scale maps (1:250,000 and 1:63,000 in Alaska) for the United States at large scales. The TOPO! maps are seamless, scanned images of United States Geological Survey (USGS) paper topographic maps.", U: "http://server.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer", N: "ESRI USA Topographic"},
            { I: "NatGeo_World_Map", T: 'arcgis', G: "NatGeo_World_Map", S: "This map is designed to be used as a general reference map for informational and educational purposes as well as a base map by GIS professionals and other users for creating web maps and web mapping applications. The map was developed by National Geographic and Esri and reflects the distinctive National Geographic cartographic style in a multi-scale reference map of the world. The map was authored using data from a variety of leading data providers, including DeLorme, HERE, UNEP-WCMC, NASA, ESA, USGS, and others. This reference map includes administrative boundaries, cities, protected areas, highways, roads, railways, water features, buildings and landmarks, overlaid on shaded relief and land cover imagery for added context. The map currently includes global coverage down to ~1:144k scale and more detailed coverage for North America down to ~1:9k scale.", U: "http://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer", N: "ESRI National Geographic"},
            { I: "timezones", T: 'kml', G: "/webapp/layers/kml/timezones.kmz", S: "OpenLayers3 Time Map - Not claimed to be accurate... Time is messy!", U: "http://github.com/openlayers/ol3/blob/master/examples/data/kml/timezones.kml", N: "Timezones"},
            { C: true, I: "sat25", T: 'kml', G: "http://ti.arc.nasa.gov/m/project/planetary/kml/bmng_stub.kmz", S: "Everyone knows that NASA studies space; fewer people know that NASA also studies Earth. Since the agency’s creation almost 50 years ago, NASA has been a world leader in space-based studies of our home planet. Our mission has always been to explore, to discover, and to understand the world in which we live from the unique vantage point of space, and to share our newly gained perspectives with the public. That spirit of sharing remains true today as NASA operates 18 of the most advanced Earth-observing satellites ever built, helping scientists make some of the most detailed observations ever made of our world.<br><br>In celebration of the ongoing deployment of its Earth Observing System, NASA is pleased to share the newest in its series of stunning Earth images, affectionately named the “Blue Marble: Next Generation.” This new Earth imagery enhances the Blue Marble legacy by providing a detailed look at an entire year in the life of our planet. In sharing these Blue Marble images, NASA hopes the public will join with the agency in its continuing exploration of our world from the unique perspective of space.<br><br>S: The NASA Earth Observatory.", U: "http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/planetary/earth/", N: "Blue Marble: Next Generation"},
            { I: "wikimapia", T: 'kml', G: "http://wikimapia.org/ge.kml", S: "Wikimapia", U: "http://wikimapia.org/", N: "Wikimapia"},
            { I: "wikimapia2", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/wikimapia.kmz", S: "Wikimapia", U: "http://wikimapia.org/", N: "Wikimapia local"},
            { I: "science_travel", T: 'kml', G: "/webapp/layers/kml/3rdparty/science_travel.kmz", S: "Google-Maps Gallery", U: "http://maps.google.com/gallery/details?id=zLzFb8iur2u8.kLOB05af4C9Q&hl=en", N: "Highlighted sciency stuff for Travels"},
            { I: "combined_map_overlays", T: 'kml', G: "/webapp/layers/kml/3rdparty/map-overlays-for-google-earth-combined.kmz", S: "Google Maps Overlays", U: "http://ge-map-overlays.appspot.com/", N: "Google Map Overlays Combined"},
            { I: "bl-std", T: 'base-layer', G: "http://stamen-tiles.a.ssl.fastly.net/toner/", S: "A high contrast black and white map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Toner"},
            { I: "bl-stl", T: 'base-layer', G: "http://stamen-tiles.a.ssl.fastly.net/toner-lite/", S: "A high contrast black and white map (light colored version). Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Toner (Light)"},
            { I: "bl-swc", T: 'base-layer', G: "http://stamen-tiles.a.ssl.fastly.net/watercolor/", S: "Reminiscent of hand drawn maps, Stamen watercolor maps apply raster effect area washes and organic edges over a paper texture to add warm pop to any map. Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.", U: "http://maps.stamen.com/", N: "Stamen Watercolor"},
            { I: "bl-osm", T: 'base-layer', G: "http://a.tile.openstreetmap.org/", S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.", U: "www.openstreetmap.org", N: "OpenStreetMap (OSM)"},
            { I: "bl-mq", T: 'base-layer', G: "http://otile1-s.mqcdn.com/tiles/1.0.0/osm/", S: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.", U: "www.openstreetmap.org", N: "MapQuest OpenStreetMap"},
            { I: "VIIRS_CityLights_2012", T: 'nasa-gibs', S: "NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Earth at Night (NASA 2012)"},
            { I: "gmo-oms", T: 'kml', S: "Google-Maps Overlays", G: "/webapp/layers/kml/3rdparty/openstreetmap-overlays-for-google-earth-combined.kmz", U: "http://ge-map-overlays.appspot.com/", N: "Open-Street-Maps Combined (GoogleMaps-Overlay)"},
            { I: "gmo-oms-pt", T: 'kml', S: "Google-Maps Overlays", G: "/webapp/layers/kml/3rdparty/openstreetmap-public-transport-overlay-for-google-earth.kmz", U: "http://ge-map-overlays.appspot.com/", N: "Open-Street-Maps Public-Transport (GoogleMaps-Overlay)"},
            { I: "gmo-oms-gpst", T: 'kml', S: "Google-Maps Overlays", G: "/webapp/layers/kml/3rdparty/openstreetmap-gps-traces-overlay-for-google-earth.kmz", U: "http://ge-map-overlays.appspot.com/", N: "Open-Street-Maps GPS-Traces (GoogleMaps-Overlay)"},
            { I: "gmo-cm-mc", T: 'kml', S: "Google-Maps Overlays", G: "/webapp/layers/kml/3rdparty/cloudmade-midnight-commander-overlay-for-google-earth.kmz", U: "http://ge-map-overlays.appspot.com/", N: "Cloud-Made Midnight-Commander (GoogleMaps-Overlay)"},
            { I: "gmo-cm-t", T: 'kml', S: "Google-Maps Overlays", G: "/webapp/layers/kml/3rdparty/cloudmade-tourist-overlay-for-google-earth.kmz", U: "http://ge-map-overlays.appspot.com/", N: "Cloud-Made Tourist (GoogleMaps-Overlay)"},
            { I: "pdc-basemap", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap"},
            { I: "gravity-anomaly", T: 'STI', G: "www.geology.sdsu.edu/kmlgeology/kmz/gravity_grace/grace.jpg", S: "University of San Diego, Dept. of Geological Sciences", U: "www.geology.sdsu.edu/kmlgeology/gravity.html", N: "Earth Gravity Anomalies"}
        ]},
        Flight: { N: "Flight", icon: "plane", '>': [
            { P: true, C: true, I: "kml-fwi", T: 'kml', G: "http://mw1.google.com/mw-earth-vectordb/flightwise/flightwise_root.kml", S: "Flightwise", U: "http://flightwise.com/", N: "Current Flights"},
            { C: true, I: "kml-fwc", T: 'kml', G: "http://flightwise.com/kml/FlightTracker.kmz", S: "Flightwise.com", U: "http://flightwise.com/", N: "International Flights"},
            { I: "us_runways", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "us_runways", S: "NOAA Ocean Service's nowCOAST's Map Services - Locations/Footprints of U.S. Airport Runways", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Airport Runways"},
            { I: "artcc", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "artcc", S: "NOAA Ocean Service's nowCOAST's Map Services - Air Route Traffic Control Centers - Areas of Responsibility", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "Air Route Traffic Control Center Boundaries"}
        ]},
        Boats: { N: "Marine Traffic", icon: "anchor", '>': [
            { C: true, I: "kml-mt", T: 'kml', G: "www.marinetraffic.com/files/ge_marinetraffic_2.kml", S: "MarineTraffic.com", U: "www.marinetraffic.com/en/p/google-earth", N: "Marine Traffic - subscription based"},
            { P: true, I: "kml-noaabuoy", T: 'kml', G: "www.ndbc.noaa.gov/kml/marineobs_as_kml.php?sort=owner", S: "National Oceanic and Atmospheric Administration (NOAA) National Data Buoy Center", U: "www.ndbc.noaa.gov/", N: "NOAA Buoy Tracker"},
            { P: true, I: "kml-noaaship", T: 'kml', G: "http://egisws02.nos.noaa.gov/shiptracker/kml/All_Ships_CL.kmz", S: "National Oceanic and Atmospheric Administration (NOAA)", U: "http://egisws02.nos.noaa.gov/shiptracker/", N: "NOAA Ship Tracker"}
        ]},
        Geographic: { N: "Geographic", icon: "info sign", '>': [
            { C: true, I: "kml-escope", T: 'kml', G: "http://anf.ucsd.edu/cachexml/google_earth/anf_stations.kmz", S: "The University of California, San Diego - EarthScope USArray ANF (array network facility)", U: "http://anf.ucsd.edu/stations.php", N: "EarthScope USArray"},
            { I: "San_Francisco_County", H: true, Z: true, T: 'kml', G: "/webapp/layers/kml/places/San_Francisco_County.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "San Francisco Geologic Map"},
            { I: "SF_1906_FaultandShakingPhotographs", Z: true, T: 'kml', G: "/webapp/layers/kml/places/SF_1906_FaultandShakingPhotographs.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "San Francisco Earthquake 1906 Pictures"},
            { I: "UrbanAreas_ModernHistoric", Z: true, T: 'kml', G: "/webapp/layers/kml/places/UrbanAreas_ModernHistoric.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "San Francisco Urban Areas (1906 and Today)"},
            { I: "WNAmerica_MajorRuptures", Z: true, T: 'kml', G: "/webapp/layers/kml/places/WNAmerica_MajorRuptures.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "North Western American Major Faults"},
            { I: "SanAndreasBayAreaFaults", Z: true, T: 'kml', G: "/webapp/layers/kml/places/SanAndreasBayAreaFaults.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "San Andreas Faults"},
            { I: "BayAreaRuptures", Z: true, T: 'kml', G: "/webapp/layers/kml/places/BayAreaRuptures.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "San Andreas Fault Raptures"},
            { I: "all_eqs_cali_past1900to2015", Z: true, T: 'kml', G: "/webapp/layers/kml/places/all_eqs_cali_past1900to2015.kmz", S: "USGS", U: "http://geomaps.wr.usgs.gov/sfgeo/geologic/downloads.html",  N: "All Earthquakes in California Bay Area (since 1900)"},
            { I: "pyramids", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/Pyramids-FR-CV3D.kmz", S: "based on the film &quot;Revelations of the PyramIs&quot;", U: "www.youtube.com/watch?v=GhC6lhAD4xY", N: "Pyramids of the World"},
            { I: "native-american1", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/other/Indian-Lands.kmz", S: "This map layer shows Indian lands of the United States. Only areas of 640 acres or more are included. Federally-administered lands within a reservation are included for continuity; these may or may not be consIered part of the reservation and are simply described with their feature type and the administrating Federal agency. This is an updated version of the December 2005 map layer.", U: "http://nationalatlas.gov/atlasftp.html#indlanp", N: "Native American Lands 2005" },
            { I: "ley-lines", Z: true, T: "kml", G: "/webapp/layers/kml/3rdparty/other/Ley-Line-Collection-CV3D.kmz", S: "Source unknown", U: "http://en.wikipedia.org/wiki/Ley_line", N: "Ley Lines of the World" },
            { C: true, I: "kml-MODIS_Water_Mask", T: "nasa-gibs", S: "This is a static layer and does not change over time. MODIS, Terra and SRTM, NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS)", U: "http://earthdata.nasa.gov/", N: "Water Mask"},
            { I: "world_rivers", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_rivers", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Rivers"},
            { I: "world_lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Lakes"},
            { I: "great_lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "great_lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Great Lakes"},
            { I: "rivers", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "rivers", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Rivers"},
            { I: "lakes", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "lakes", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Lakes"},
            { I: "watersheds", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "watersheds", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Watershed Boundaries"},
            { I: "inet-active", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/inet_active.kmz", S: "Greg's Cable Map", U: "www.cablemap.info", N: "Unofficial Cables (All Active)"},
            { I: "inet-future", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/inet_future.kmz", S: "Greg's Cable Map", U: "www.cablemap.info", N: "Unofficial Internet Cables (All inet_future)"},
            { I: "inet-all", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/inet_all.kmz", S: "Greg's Cable Map", U: "www.cablemap.info", N: "Unofficial Internet Cables (All Active and Future)"},
            { I: "inet_all_official", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/inet_all_official.kmz", S: "Submarine Cable Map - Officially Supported", U: "www.submarinecablemap.com/", N: "Internet Cables (All Official)"},
            { I: "inet_landp_official", T: 'kml', G: "/webapp/layers/kml/3rdparty/other/inet_landp_official.kmz", S: "Submarine Cable Map - Officially Supported", U: "www.submarinecablemap.com/", N: "Internet Cable-Landingpoints (All Official)"},
            { I: "jehovas-hq", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/Watchtower-Branch-Offices-2015.kmz", S: "Jehova's Witnesses", U: "http://drive.google.com/folderview?id=0B53yKA_sylV3aWNOblgtelg0SEk&usp=sharing#list", N:"All current HQs and Branches of Jehova's Witnesses"},
            { I: "cities-at-night", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/cities-at-night.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Map of some Cities at Night"},
            { I: "ancient-greek-places", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/ancient-greek-places.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Ancient Greek Places and Sites"},
            { I: "castles-of-italy", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/castles-of-italy.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Castles of Italy"},
            { I: "most-unusual-buildings", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/most-unusual-buildings.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "100 most unusual Buildings of the World (as of 2002)"},
            { I: "solar-eclipse-paths", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/solar-eclipse-paths.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Paths of Solar Eclipses (2000-2100)"},
            { I: "megalithic_earth", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/megalithic_earth.kmz", S: "The Megalithic Portal", S: "www.megalithic.co.uk/download.php?&op=viewdownloaddetails&lid=104&ttitle=The%20Megalithic%20Portal%20meets%20Google%20Earth", N: "A lot of historic and prehistoric Sites and Places"},
            { I: "Endangered-Languages-of-Africa-and-the-Americas", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/Endangered-Languages-of-Africa-and-the-Americas.kmz", S: "The Rosetta Project", S: "http://rosettaproject.org/projects/google-earth/", N: "Endangered Languages of Africa and the Americas"},
            { I: "West-Coast-Language-Use-in-Urban-Centers", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/West-Coast-Language-Use-in-Urban-Centers.kmz", S: "The Rosetta Project", S: "http://rosettaproject.org/projects/google-earth/", N: "West Coast Language Use in Urban Centers"},
            { I: "Alan-Lomax-Global-Language-Audio-Collection", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/Alan-Lomax-Global-Language-Audio-Collection.kmz", S: "The Rosetta Project", S: "http://rosettaproject.org/projects/google-earth/", N: "Alan Lomax Global Language Audio Collection"},
            { I: "John-Peabody-Harrington-Audio-Collection", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/John-Peabody-Harrington-Audio-Collection.kmz", S: "The Rosetta Project", S: "http://rosettaproject.org/projects/google-earth/", N: "John Peabody Harrington Audio Collection"},
            { I: "bible-locations", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/bible-locations.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Locations of the Bible"},
            { I: "places-of-interest", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/places-of-interest.kmz", S: "Google Earth Community build", S: "www.gelib.com/", N: "Some Places of Interest"},
            { I: "WATERS-Data", T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/WATERS-Data.kmz", S: "US EPA", U: "http://.epa.gov/scitech/datait/tools/waters/tools/waters_kmz.cfm", N: "WATERS Water assessment data"},
            { I: "geonames-features", T: 'kml', G: "/webapp/layers/kml/3rdparty/places/geonames-features.kmz", S: "geonames.org", U: "www.geonames.org", N: "Geonames network link"},
            { I: "crimes-hist-usa", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/crimes-hist-usa.kmz", S: "Google Earth Community build", U: "www.gelib.com/", N: "Crimes and Criminals from the past 200 yrs (only USA)"},
            { I: "north-korea-uncovered", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/north-korea-uncovered.kmz", S: "Google Earth Community build", U: "www.gelib.com/", N: "North Korean Places"},
            { I: "oif_oef_casualties", Z: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/places/oif_oef_casualties.kmz", S: "The Map of the Fallen Community", U: "www.mapthefallen.org/", N: "The Map of the Fallen"},
            { I: "oldnyc.org", Z: true, T: 'kml', G: "/webapp/layers/kml/oldnyc.kmz", S: "A Picture-Map of old New York City Places", U: "www.oldnyc.org/", N: "A Picture Map of old NYC Places! (external)" },
            { I: "city_london_timeline", T: 'kml', Z: true, C: true, G: "/webapp/layers/kml/places/city_london_timeline.kmz", S: "Google Devs Example", U: "http://developers.google.com/kml/", N: "City of London Timeline"},
            { I: "farms-germany", H: true, T: 'geojson', Z: true, G: "/webapp/layers/kml/places/farms-germany.kmz", S: "Enigma.io from Government Data", U: "http://app.enigma.io/search/topics/Agriculture%2CGeo-Coded", N: "All Farms in Germany"}
        ]},
        /*
        Cities: { N: "Cities", icon: "city", '>': [
            { I:"berlin-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/berlin-3d.kmz", S: "Google Earth Community Build 3D Model of Berlin", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "Berlin in 3D"},
            { I:"frankfurt-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/frankfurt-3d.kmz", S: "Google Earth Community Build 3D Model of Frankfurt", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "Frankfurt in 3D"},
            { I:"dublin-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/dublin-3d.kmz", S: "Google Earth Community Build 3D Model of Dublin", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "Dublin in 3D"},
            { I:"hongkong-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/hongkong-3d.kmz", S: "Google Earth Community Build 3D Model of Hong-Kong", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "Hong-Kong in 3D"},
            { I:"paris-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/paris-3d.kmz", S: "Google Earth Community Build 3D Model of Paris Landmarks", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "Paris Landmarks in 3D"},
            { I:"london-3d", Z: true, T:'kml', G: "/webapp/layers/kml/3rdparty/places/london-3d.kmz", S: "Google Earth Community Build 3D Model of London", U: "www.gearthhacks.com/dlcat57/3D-Cities.htm", N: "London's Monuments in 3D"}
        ]},
        */
        Economic: { N: "Economics", icon: "money", '>': [
            { I: "global_pdc_economic", T: 'kml', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_economics/MapServer/kml/MapImage.kmz", S: "PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_economics/MapServer", N: "Global Economics Data by PDC"},
            { I: "global_population", T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/Demographics_ESRI_Population_World.kmz", S: "ESRI", U: "sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer", N: "Global World Population Data (ERSI)"},
            { I: "eez", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "eez", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Exclusive Economic Zone Boundaries"},
            { I: "urban_areas_fill", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "urban_areas_fill", S: "NOAA Ocean Service's nowCOAST's Map Services - U.S. Urban Area Boundaries (color-filled polygons)", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Urban Areas"},
            { I: "eez", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "eez", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "U.S. Exclusive Economic Zone Boundaries"},
            { I: "world_countries", T: 'wms', G: "http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", L: "world_countries", S: "NOAA Ocean Service's nowCOAST's Map Services", U: "http://nowcoast.noaa.gov/help/mapservices.shtml", N: "World Country Boundaries"},
            { I: "airports_total", P: true,  T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/airports_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Airports Total (2008)"},
            { I: "edu_expands_of_gdp", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/edu_expands_of_gdp.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Educational Expanditures (% of GDP) (2008)"},
            { I: "freshwater_withdrawal_agri", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/freshwater_withdrawal_agri.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Freshwater used for Agriculture (2008)"},
            { I: "freshwater_withdrawal_dome", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/freshwater_withdrawal_domi.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Freshwater used for Domestics (2008)"},
            { I: "freshwater_withdrawal_indu", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/freshwater_withdrawal_indu.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Freshwater used for Industry (2008)"},
            { I: "freshwater_withdrawal_perCap", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/freshwater_withdrawal_perCap.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Freshwater Withdawal per Capita (2008)"},
            { I: "freshwater_withdrawal_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/freshwater_withdrawal_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Freshwater Withdawal (2008)"},
            { I: "gas_consumption_cuM", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/gas_consumption_cuM.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Gas Consumption (cubic M) (2008)"},
            { I: "gdp_per_cap_usD", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/gdp_per_cap_usD.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "GDP per Capita (2008)"},
            { I: "inflation_2010", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2010.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2010)"},
            { I: "inflation_2009", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2009.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2009)"},
            { I: "inflation_2008", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2008.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2008)"},
            { I: "inflation_2007", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2007.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2007)"},
            { I: "inflation_2006", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2006.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2006)"},
            { I: "inflation_2005", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2005.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2005)"},
            { I: "inflation_2004", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2004.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2004)"},
            { I: "inflation_2003", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2003.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2003)"},
            { I: "inflation_2002", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2002.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2002)"},
            { I: "inflation_2001", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2001.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2001)"},
            { I: "inflation_2000", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/inflation_2000.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Inflation (2000)"},
            { I: "gini_index", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/gini_index.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "GINI-Index (2008)"},
            { I: "food_aid_donated", C: true, P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/food_aid_donated.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Food Aid Donated (Cereal)"},
            { I: "food_aid_recieved", C: true, P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/food_aid_recieved.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Food Aid Recieved (Cereal)"},
            { I: "access_to_info_2002", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/access_to_info_2002.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Access to Information: Digital Access Index (2002)"},
            { I: "heliports", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/heliports.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total # of Heliports (2008)"},
            { I: "hiv_adult_prevalence_rate", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/hiv_adult_prevalence_rate.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "HIV Adult Prevalence Rate (2008)"},
            { I: "internet_hosts", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/internet_hosts.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total # of Internet Hosts (2008)"},
            { I: "internet_users", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/internet_users.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total # of Internet Users (2008)"},
            { I: "land_usage_crops", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/land_usage_crops.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "% of Land used for Crops (2008)"},
            { I: "life_expect_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/life_expect_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Life Expectancy at Birth (2008)"},
            { I: "literacy_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/literacy_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Literacy (2008)"},
            { I: "median_age_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/median_age_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Median Age of Population (2008)"},
            { I: "military_expand_of_gdp", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/military_expand_of_gdp.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "% of GDP spend for Military (2008)"},
            { I: "mobile_phone_usage", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/mobile_phone_usage.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Mobile Phone Usage (2008)"},
            { I: "oil_consumption_bblDay", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/oil_consumption_bblDay.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Oil Consumtion (bbl/day) (2008)"},
            { I: "pop_below_pov_line", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/pop_below_pov_line.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Population below Poverty Line (2008)"},
            { I: "pop_growth_rate", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/pop_growth_rate.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Anual Population Growth Rate (2008)"},
            { I: "public_dept_of_gdp", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/public_dept_of_gdp.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "% of GDP in Public Dept (2008)"},
            { I: "roadways_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/roadways_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Roadways (km) (2008)"},
            { I: "school_life_expact", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/school_life_expact.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Expectancy for # of School years recieved (2008)"},
            { I: "total_renewable_water_resources", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/total_renewable_water_resources.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Renewable Water Resources (cubic km) (2008)"},
            { I: "tv_broadcast_stations", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/tv_broadcast_stations.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total # of TV-Broadcast Stations (2008)"},
            { I: "unemployment_rate", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/unemployment_rate.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Unemployment Rate (2008)"},
            { I: "area_sqm_total", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/area_sqm_total.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Area (Sq.Miles) (2008)"},
            { I: "area_sqm_water", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/area_sqm_water.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Area Water (Sq.Miles)  (2008)"},
            { I: "area_sqm_land", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/area_sqm_land.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Area Land (Sq.Miles)  (2008)"},
            { I: "energy_consumption_kwh", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/factbook_electricity_consumption.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Electricity Consumption (kWh) (2008)"},
            { I: "labor_force", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/labor_force.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Labor Force (2008)"},
            { I: "electricity_production_kwh", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/electricity_production.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Electricity Production (kWh) (2008)"},
            { I: "access_to_electricity", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/access_to_electricity.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Electricity Access (in % of Polpulation) (2008)"},
            { I: "electricity_consumption_perCap", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/electricity_consumption_perCap.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Electricity Consumption (per Capita) (2005)"},
            { I: "total_CO2_emission", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/total_CO2_emission.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total CO2 emissions including LULUCF/LUCF (2006"},
            { I: "total_CO2_emission", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/co2_emission_perCap_tons.kmzco2_emission_perCap_tons.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total CO2 emissions including LULUCF/LUCF per Capita (tons) (2006"},
            { I: "total_tecnically_possible_future_emission", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/total_tecnically_possible_future_emission.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "Total Tecnically Possible Future Emission (Mega-Tons) (2008)"},
            { I: "mdg_terrestial_areas_protected", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/mdg_terrestial_areas_protected.kmz", S: "CIA: Wold-Fact-Book (2008)", U: "www.kmlfactbook.org/", N: "MDG Terrestrial areas protected in % of Total Area (2007)"},       
            { I: "nasa-population", P: true, T: 'kml', G: "/webapp/layers/kml/3rdparty/humanitarian/SEDAC_POP_2000-01-01_rgb_3600x1800.KMZ", S: "National Aeronautics and Space Administration Earth Observatory(NASA-NEO)", U: "http://neo.sci.gsfc.nasa.gov/view.php?datasetId=SEDAC_POP", N: "Population Density (NASA 2000)"},
            { I: "ebola-facilities", Z: true, T: 'geojson', G: "webapp/layers/geojson/ebola_facilities_all.geojson", S: "HDX - Humanitarian Data Exchange", U: "http://data.hdx.rwlabs.org/ebola", N: "Ebola Facilities"},
            { I: "syria-border-crossings", Z: true, T: 'kml', G: "webapp/layers/kml/3rdparty/humanitarian/geonode-Syria_BorderCrossings_2015Jun11_HIU_USDoS.kml", S: "HDX - Humanitarian Data Exchange", U: "http://data.hdx.rwlabs.org/dataset/syria-border-crossings", N: "Syria Border Crossings"},
            { I: "ebola-cases-all", Z: true, T: 'geojson', G: "/webapp/layers/geojson/ebola_cases_all.geojson", S: "HDX - Humanitarian Data Exchange", U: "http://data.hdx.rwlabs.org/ebola", N: "Ebola Cases All (08/18/2015)"}
            ]},

        PDC: { N: "PDC", icon: "alarm", '>': [
            { I: "pdc-basemap-cities", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "0", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Cities"},
            { I: "pdc-basemap-major-cities", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "1", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Major Cities"},
            { I: "pdc-basemap-seaports", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "2", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Seaports"},
            { I: "pdc-basemap-airports-class", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "3", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Airports Categorized"},
            { I: "pdc-basemap-airports", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "4", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Airports"},
            { I: "pdc-basemap-nuclear-plants", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "5", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Nuclear Plants"},
            { I: "pdc-basemap-latlong", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "6", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Lat-Long"},
            { I: "pdc-basemap-roads", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "7", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Roads"},
            { I: "pdc-basemap-railroads", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "8", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Railroads"},
            { I: "pdc-basemap-railroads2", T: 'kml', G: "/webapp/layers/kml/3rdparty/pdc/pcd_basemap_8.kmz", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Railroads2"},
            { I: "pdc-basemap-rivers", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "9", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Rivers"},
            { I: "pdc-basemap-drainage-sys", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "10", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Drainage Systems"},
            { I: "pdc-basemap-det-costl", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "11", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Detailed Coastlines"},
            { I: "pdc-basemap-lakes", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "12", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Lakes"},
            { I: "pdc-basemap-count-bounds-labeled", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "13", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Country Boundaries and Labels"},
            { I: "pdc-basemap-timezones", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "14", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Timezones"},
            { I: "pdc-basemap-ad-bounds", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "15", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Administrative Boundaries"},
            { I: "pdc-basemap-pop-dens", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "16", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Population Density"},
            { I: "pdc-basemap-res-units", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "17", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Residential Units"},
            { I: "pdc-basemap-night-lights", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "18", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Night Lights"},
            { I: "pdc-basemap-topo-bathymetry", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "19", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Topography Bathymetry"},
            { I: "pdc-basemap-land-cover", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "20", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Land Cover"},
            { I: "pdc-basemap-shaded-relief", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "21", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Shaded Relief"},
            { I: "pdc-basemap-countries", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "22", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Countries"},
            { I: "pdc-basemap-maj-seaports", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "23", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Major_Seaports"},
            { I: "pdc-basemap-cat-seaports", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "26", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Seaports_Categorized"},
            { I: "pdc-basemap-nuclea-plants-cat", T: 'wms', G: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/export", L: "27", S: "Pacific Disaster Control - PDC", U: "http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer", N: "PDC Basemap Nuclear_Plants_Categorized"},
        ]
    }
    }
};

