/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#whitetop\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".n_ListHeader\",\"action\":[\"style\",\"margin-top: 5px !important\"]}"],["{\"selector\":\"#ad-top-banner-placeholder\",\"action\":[\"style\",\"min-height: 0px !important\"]}"],["{\"selector\":\".modal-container.open\",\"action\":[\"style\",\"padding-top: unset !important\"]}","{\"selector\":\".site-wrapper[data-state=\\\"panorama\\\"]\",\"action\":[\"style\",\"padding-top: 70px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-left: 0 !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\".custom-background\",\"action\":[\"style\",\"background-image: none !important\"]}"],["{\"selector\":\".paywall-wrapper\",\"action\":[\"style\",\"top: unset !important\"]}"],["{\"selector\":\".paywall\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\".article-container > .row > .col-12.col-xl-8\",\"action\":[\"style\",\"width: 98.1% !important; max-width: none !important; flex: none !important\"]}"],["{\"selector\":\".product-list-row .description\",\"action\":[\"style\",\"position: static !important; word-break: break-word !important\"]}"],["{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"#paywall\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".paywall-box\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".article\",\"action\":[\"style\",\"padding-bottom: 10px !important\"]}"],["{\"selector\":\".background-ad\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".promotion\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\"#wrapper > #leaderboard > div\",\"action\":[\"style\",\"display: block !important\"]}"],["{\"selector\":\".auto_expandable\",\"action\":[\"style\",\"margin-top: 21px !important\"]}"],["{\"selector\":\"#topbanner\",\"action\":[\"style\",\"height: 1px !important\"]}"],["{\"selector\":\".container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\".main-header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\".padded.limit--tight.limit\",\"action\":[\"style\",\"padding-top: 15px !important\"]}","{\"selector\":\"div.padded--no-bottom.padded--less.padded.limit\",\"action\":[\"style\",\"padding-top: 5px !important\"]}"],["{\"selector\":\".tag-page\",\"action\":[\"style\",\"margin:0!important;padding:0!important\"]}","{\"selector\":\"html.height-calculated.nyheter[lang^=\\\"n\\\"] .article-footer\",\"action\":[\"style\",\"margin:0!important\"]}","{\"selector\":\"html.height-calculated.nyheter[lang^=\\\"n\\\"] .time\",\"action\":[\"style\",\"margin-bottom:0!important;padding-bottom:0!important;margin-top:0!important\"]}"],["{\"selector\":\"#aid-overlay\",\"action\":[\"style\",\"background: none !important; height: 0px !important; min-height: unset !important\"]}","{\"selector\":\"amedia-incentive\",\"action\":[\"style\",\"top: 1600px !important\"]}","{\"selector\":\"amedia-include[src*=\\\"/incentive/\\\"]\",\"action\":[\"style\",\"border: 10px !important; border-color: #CD5C5C !important; border-style: solid !important\"]}"],["{\"selector\":\".aid-background-blur\",\"action\":[\"style\",\"filter: none !important\"]}"],["{\"selector\":\".container-newsfeed + section .c-teaser__image\",\"action\":[\"style\",\"max-height: none !important\"]}","{\"selector\":\".container-newsfeed + section .o-grid__col:not(.u-size-onethird-medium):not([data-ga-action=\\\"1\\\"])\",\"action\":[\"style\",\"height: 200px !important\"]}"],["{\"selector\":\".article-content\",\"action\":[\"style\",\"padding:0\"]}"],["{\"selector\":\"body[style^=\\\"padding\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important\"]}"],["{\"selector\":\".article-text-preview\",\"action\":[\"style\",\"-webkit-text-fill-color: black !important\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"margin: 0 !important\"]}"],["{\"selector\":\"#googlead-toppbanner\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".rightColumn\",\"action\":[\"style\",\"margin-top: 10px !important\"]}"],["{\"selector\":\".title > h1.tittel\",\"action\":[\"style\",\"padding-top:0!important\"]}"],["{\"selector\":\".teaser\",\"action\":[\"style\",\"mask-image: none !important\"]}"],["{\"selector\":\".faded-content\",\"action\":[\"style\",\"max-height: none !important\"]}"],["{\"selector\":\".paywall-fade-out\",\"action\":[\"style\",\"overflow-y: unset !important\"]}","{\"selector\":\".paywall-login\",\"action\":[\"style\",\"margin-top: 30px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".t3-header\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".article-top header\",\"action\":[\"style\",\"padding-top:0!important;margin:0!important\"]}","{\"selector\":\".content-marketing-ribbon\",\"action\":[\"style\",\"margin-top: 20px !important\"]}"],["{\"selector\":\":is(.container--break, .content-extra__recommended-news)\",\"action\":[\"style\",\"padding:0!important;margin:0!important\"]}"],["{\"selector\":\"main\",\"action\":[\"style\",\"min-height: unset !important\"]}","{\"selector\":\"section > section:first-of-type + section:last-of-type:has([class*=\\\"  \\\"])\",\"action\":[\"style\",\"width: 100% !important; max-width: 675px !important\"]}","{\"selector\":\"section[class^=\\\"GreatCanvas__smallArticles-\\\"]\",\"action\":[\"style\",\"width: 100% !important\"]}","{\"selector\":\"section[hidden] + section\",\"action\":[\"style\",\"column-count: 3 !important; width: 100% !important\"]}"],["{\"selector\":\".td-main-content-wrap\",\"action\":[\"style\",\"padding-top:0!important\"]}"],["{\"selector\":\".page-container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"]];

const hostnamesMap = new Map([["no.afterdawn.com",1],["mytastednk.com",2],["mytastenor.com",2],["nakenprat.com",3],["playpilot.com",4],["www.aftenposten.no",4],["tvkampen.com",5],["tvsporten.dk",5],["berlingske.dk",6],["borsen.dk",7],["bt.dk",8],["edbpriser.dk",9],["esportsmagasinet.dk",10],["information.dk",11],["journalisten.dk",12],["lydogbillede.dk",13],["lydogbilde.no",13],["mm.dk",14],["mx.dk",15],["skagensavis.dk",16],["spanienidag.es",17],["mbl.is",18],["visir.is",19],["no",20],["aasavis.no",[21,22]],["amta.no",[21,22]],["an.no",[21,22]],["ao.no",[21,22]],["auraavis.no",[21,22]],["austagderblad.no",[21,22]],["avisenagder.no",[21,22]],["ba.no",[21,22]],["bygdebladet.no",[21,22]],["bygdeposten.no",[21,22]],["dalane-tidende.no",[21,22]],["dt.no",[21,22]],["eikerbladet.no",[21,22]],["enebakkavis.no",[21,22]],["f-b.no",[21,22]],["finnmarkdagblad.no",[21,22]],["finnmarken.no",[21,22]],["firda.no",[21,22]],["firdaposten.no",[21,22]],["fremover.no",[21,22]],["gbnett.no",[21,22]],["gjengangeren.no",[21,22]],["glomdalen.no",[21,22]],["h-avis.no",[21,22]],["ha-halden.no",[21,22]],["hadeland.no",[21,22]],["hardanger-folkeblad.no",[21,22]],["helg.no",[21,22]],["iharstad.no",[21,22]],["indre.no",[21,22]],["jarlsbergavis.no",[21,22]],["jbl.no",[21,22]],["kv.no",[21,22]],["kvinnheringen.no",[21,22]],["laagendalsposten.no",[21,22]],["lierposten.no",[21,22]],["lofotposten.no",[21,22]],["lyngdalsavis.no",[21,22]],["merakerposten.no",[21,22]],["moss-avis.no",[21,22]],["nettavisen.no",[21,22]],["nidaros.no",[21,22]],["noblad.no",[21,22]],["nordhordland.no",[21,22]],["nordlys.no",[21,22]],["nt24.no",[21,22]],["oa.no",[21,22]],["oblad.no",[21,22]],["op.no",[21,22]],["ostlendingen.no",[21,22]],["oyene.no",[21,22]],["r-a.no",[21,22]],["rablad.no",[21,22]],["ranablad.no",[21,22]],["rb.no",[21,22]],["retten.no",[21,22]],["rha.no",[21,22]],["ringblad.no",[21,22]],["ringsaker-blad.no",[21,22]],["sa.no",[21,22]],["sandeavis.no",[21,22]],["sandnesposten.no",[21,22]],["sb.no",[21,22]],["smaalenene.no",[21,22]],["sognavis.no",[21,22]],["solabladet.no",[21,22]],["solungavisa.no",[21,22]],["strandbuen.no",[21,22]],["svelviksposten.no",[21,22]],["ta.no",[21,22]],["tb.no",[21,22]],["telen.no",[21,22]],["tk.no",[21,22]],["tvedestrandsposten.no",[21,22]],["varingen.no",[21,22]],["vestbyavis.no",[21,22]],["alt.no",22],["abcnyheter.no",23],["aftenbladet.no",24],["byggebolig.no",25],["canariavisen.no",26],["digi.no",27],["tu.no",27],["dn.no",28],["e24.no",29],["fagbladet.no",30],["friflyt.no",31],["jeger.no",31],["landevei.no",31],["norsk-klatring.no",31],["terrengsykkel.no",31],["utemagasinet.no",31],["h-a.no",32],["lokal-avisa.no",32],["ringsakern.no",32],["stangeavisa.no",32],["kommunal-rapport.no",33],["kondis.no",34],["samler.no",35],["seher.no",36],["sykepleien.no",37],["tek.no",38],["utrop.no",39],["vgtv.no",40]]);

const entitiesMap = new Map([["qxl",0]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
