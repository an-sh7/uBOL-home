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

// ruleset: pol-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"nav.navbar\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"html, html > body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body [class]\",\"action\":[\"style\",\"filter: none !important;\"]}"],["{\"selector\":\".c-content__adv\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".adv\",\"action\":[\"style\",\"height: 1px !important; width: 1px !important;\"]}","{\"selector\":\"body > #page > .main-page-content > .navbar-fixed-top\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body > #page\",\"action\":[\"style\",\"margin-top: 137px !important;\"]}"],["{\"selector\":\"#free_player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body > font[color=\\\"green\\\"]:last-of-type\",\"action\":[\"style\",\"color: transparent !important;\"]}"],["{\"selector\":\"#content-container2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#leftCol2\",\"action\":[\"style\",\"top: 51px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"pointer-events: auto!important;\"]}"],["{\"selector\":\"html.pum-open [aria-hidden]\",\"action\":[\"style\",\"padding-right: 0 !important;\"]}","{\"selector\":\"html.pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".container-fluid > .row-fluid > #jm-header-mod.span3\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".latestnews\",\"action\":[\"style\",\"-moz-column-count: 3; -moz-column-gap: 20px; -webkit-column-count: 3; -webkit-column-gap: 20px; column-count: 3 ;column-gap: 20px;\"]}"],["{\"selector\":\"#td-outer-wrap > .td-header-wrap\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".paralax-image\",\"action\":[\"style\",\"height: 100px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"body > .menu-belt + .paralax-image\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#primary-sidebar\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\".article__side__stickblock\",\"action\":[\"style\",\"position: absolute !important; left: -3000px!important;\"]}","{\"selector\":\".article__textbox\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0px !important;\"]}"],["{\"selector\":\"article.newsletter-block\",\"action\":[\"style\",\"filter: none !important; max-height: none !important; user-select: auto !important; border-top: none !important;\"]}"],["{\"selector\":\"#nitro-block\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#bannerDBB\",\"action\":[\"style\",\"height: 10px !important;\"]}"],["{\"selector\":\".wall-bg[style^=\\\"background-image:\\\"]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".js\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#kolumnaSrodkowa\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#obiekt\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background:#121212 !important;\"]}"],["{\"selector\":\"#playerControls .playIcon\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"div#top\",\"action\":[\"style\",\"height: 37px !important;\"]}"],["{\"selector\":\".page\",\"action\":[\"style\",\"background: #dbdbdb !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin: 0 !important; margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#kFinal\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.variant-mobile div[style=\\\"color: #A9A9A9; text-align:center;font-size:11px;\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"body:not(#bd):not([style*=\\\"background-image:\\\"])\",\"action\":[\"style\",\"background-image:none !important;\"]}","{\"selector\":\"body:not(#bd):not([style*=\\\"background-image:\\\"])\",\"action\":[\"style\",\"background-image:none!important;\"]}"],["{\"selector\":\"body[class]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".mfp-arrow-right\",\"action\":[\"style\",\"right: -90px !important;\"]}","{\"selector\":\"body:not(variant-mobile).skin-green .user-login\",\"action\":[\"style\",\"color:#88ae04 !important;\"]}","{\"selector\":\"div[class*=\\\"tag-\\\"].home-section > .span-8\",\"action\":[\"style\",\"width: 100% !important; margin-right: 15px !important;\"]}"],["{\"selector\":\"body > *\",\"action\":[\"style\",\"filter: blur(0px) !important;\"]}"],["{\"selector\":\"[id=\\\"gh-gb\\\"][tabindex=\\\"-1\\\"][class=\\\"gh-banner-active gh-gb-shadow\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\"[id=\\\"gh\\\"][role=\\\"banner\\\"]\",\"action\":[\"style\",\"margin: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".ws__wrapper\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"body[class]:not(.rodo)\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".webpart-wrap-HeaderMobile.has-promo\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}"],["{\"selector\":\"#layout\",\"action\":[\"style\",\"margin-top: 5px !important;\"]}"],["{\"selector\":\"[class^=\\\"common-header common-header--\\\"]\",\"action\":[\"style\",\"top: 0px !important\"]}","{\"selector\":\"body[class*=\\\"_ad-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"header[class^=\\\"sc-\\\"]\",\"action\":[\"style\",\"transform: unset !important\"]}"],["{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#content .brief-list-items .brief-placeholder-list\",\"action\":[\"style\",\"height: 320px\"]}"],["{\"selector\":\"#mainApp #sitebar, #mainApp #sitebar form\",\"action\":[\"style\",\"width: 100% !important; max-width: 100% !important\"]}"],["{\"selector\":\"#sg-iframe\",\"action\":[\"style\",\"filter: blur(0px) !important\"]}"],["{\"selector\":\"#game\",\"action\":[\"style\",\"visibility: visible !important; position: static !important; left: 0 !important;\"]}","{\"selector\":\"#swf\",\"action\":[\"style\",\"visibility: visible !important; position: static !important; left: 0 !important;\"]}"],["{\"selector\":\"#googleAdsCont\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".hidewhennotclicked\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".showwhennotclicked\",\"action\":[\"style\",\"display: none !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 2px !important; width: 1px !important;\"]}"],["{\"selector\":\"#content-container\",\"action\":[\"style\",\"background: none !important; padding-top: 0px !important;\"]}"],["{\"selector\":\":not(.onnetwork-banner) > .placeholder:not(.onnetwork-banner)\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".mediafarm\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".gallery-embed-list-images\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#mvideo\",\"action\":[\"style\",\"z-index: 1 !important;\"]}"],["{\"selector\":\".partnership-header-banner\",\"action\":[\"style\",\"height: 80px !important;\"]}"],["{\"selector\":\".advertising-billboard\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".td-header-style-7 .td-header-sp-logo img\",\"action\":[\"style\",\"top:-32px !important; height:100% !important; width:auto !important;\"]}"],["{\"selector\":\"#gkBg\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"#gkTopBar\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".pub_300x250\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body > [class]:not(.settings--user)\",\"action\":[\"style\",\"filter: none!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important; position: unset!important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible!important; position: unset!important;\"]}"],["{\"selector\":\"body > [class]:not(.settings--user):not(.article__textbox)\",\"action\":[\"style\",\"filter: none!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: visible!important; position: unset!important;\"]}"],["{\"selector\":\"body > #page\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"padding-top: 64px !important;\"]}"],["{\"selector\":\".miniSlot\",\"action\":[\"style\",\"min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\".logoS\",\"action\":[\"style\",\"width: 275px; padding: 11px 0 0 5px; height: 74px; float: left;\"]}"],["{\"selector\":\".jeg_navbar.jeg_stickybar\",\"action\":[\"style\",\"height: 35px !important;\"]}"],["{\"selector\":\".index_bg_top\",\"action\":[\"style\",\"top: auto !important;\"]}"],["{\"selector\":\"#main-nav1\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\".kode-header-absolute\",\"action\":[\"style\",\"top: 0 !important;\"]}"],["{\"selector\":\".article__placement\",\"action\":[\"style\",\"position: absolute !important; left: -100000px !important; top: -1000px !important;\"]}"],["{\"selector\":\"body[style^=\\\"background:\\\"]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#fgame\",\"action\":[\"style\",\"width: 850px !important; height: 600px !important;\"]}"],["{\"selector\":\"#prvAliasFrame2\",\"action\":[\"style\",\"height:calc(100vh - 10px) !important;\"]}"],["{\"selector\":\"html[class].wppas-model-open\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\".forumsTabLinks.tabLinks\",\"action\":[\"style\",\"top: 60px !important;\"]}"],["{\"selector\":\"a[href^=\\\"https://www.purepc.pl/redir.php\\\"]\",\"action\":[\"style\",\"height: 0 !important; position: absolute !important;\"]}","{\"selector\":\"html > body\",\"action\":[\"style\",\"background-image: none!important; background-color: #d5d5d5!important;\"]}","{\"selector\":\"html > body\",\"action\":[\"style\",\"background: #d5d5d5 !important;\"]}"],["{\"selector\":\"#pojemnik-strony\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".sgpb-overflow-hidden, sgpb-overflow-hidden-body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".adsbox.ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".advert_box > div > .tablebg\",\"action\":[\"style\",\"height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\".playstation.wall-bg\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"#page_margins\",\"action\":[\"style\",\"position: relative !important; margin: 0px auto 0px auto !important; max-width: 980px !important; background-color:white !important; padding: 0px 0px 0px 20px !important\"]}"],["{\"selector\":\"#main_header\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#advSong\",\"action\":[\"style\",\"visibility: hidden !important\"]}","{\"selector\":\".teledysk\",\"action\":[\"style\",\"flex: 0 0 100% !important; max-width: 100% !important;\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".widget\",\"action\":[\"style\",\"margin: 10px -15px 0 0 !important;\"]}","{\"selector\":\"section.container\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".pub_300x250.pub_300x250m.text-ad.textAd.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".infoCloud\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#page-wrapper > .page\",\"action\":[\"style\",\"padding: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"body > [class]\",\"action\":[\"style\",\"filter: none!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#root\",\"action\":[\"style\",\"filter: none!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: visible !important;\"]}","{\"selector\":\"html, html > body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#main-list\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".page-screening-layer\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#dyingLinksBox > .dying-links:first-child ~ .dying-links:last-child\",\"action\":[\"style\",\"display:list-item !important;\"]}","{\"selector\":\"#dyingLinksBox > .dying-links:first-child ~ .dying-links[style=\\\"display: list-item;\\\"] ~ .dying-links\",\"action\":[\"style\",\"display: none !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height: 170px !important;\"]}"],["{\"selector\":\"#thePage\",\"action\":[\"style\",\"position: relative; margin: 0px auto 0px auto; max-width: 980px; background-color:white; padding: 0px 0px 0px 20px;\"]}"],["{\"selector\":\"#iframe-container\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#playerVidzer\",\"action\":[\"style\",\"display: block !important;\"]}"]];

const hostnamesMap = new Map([["gorzowianin.com",0],["interaktywnie.com",[1,2]],["mazury.com",[1,2]],["abczdrowie.pl",[1,2]],["allani.pl",[1,2]],["autokrata.pl",[1,2]],["autokult.pl",[1,2]],["biztok.pl",[1,2]],["dzieci.pl",[1,2]],["easygo.pl",[1,2]],["echirurgia.pl",[1,2]],["fotoblogia.pl",[1,2]],["gadzetomania.pl",[1,2]],["hotmoney.pl",[1,2]],["inwestycje.pl",[1,2]],["jejswiat.pl",[1,2]],["kafeteria.pl",[1,2]],["kantory.pl",[1,2]],["kazimierzdolny.pl",[1,2]],["komediowo.pl",[1,2]],["komorkomania.pl",[1,2]],["mojeauto.pl",[1,2]],["mojeosiedle.pl",[1,2]],["money.pl",[1,2,9]],["nasygnale.pl",[1,2]],["niewiarygodne.pl",[1,2]],["nocowanie.pl",[1,2]],["odkrywcy.pl",[1,2]],["parenting.pl",[1,2]],["pudelek.pl",[1,2,60]],["pytamy.pl",[1,2]],["sfora.pl",[1,2]],["snobka.pl",[1,2]],["tlen.pl",[1,2]],["totalmoney.pl",[1,2]],["wakacje.pl",[1,2]],["wawalove.pl",[1,2]],["wp.pl",[1,2]],["kafeteria.tv",[1,2]],["pudelek.tv",[1,2]],["wp.tv",[1,2]],["open.fm",[2,9]],["o2.pl",[2,9,60,61]],["magazyn.wp.pl",[2,8,9,60,92,93]],["szczecinek.com",3],["lowicz24.eu",3],["iotwock.info",3],["zambrow.org",3],["brodnica-cbr.pl",3],["ciechanowinaczej.pl",3],["ddb24.pl",3],["e-wyszogrod.pl",3],["egarwolin.pl",3],["egorzow.pl",3],["golub-cgd.pl",3],["ibialoleka.pl",3],["ibielsk.pl",3],["ikampinos.pl",3],["imokotow.pl",3],["infosiedlce.pl",3],["ipragapoludnie.pl",3],["itvpiaseczno.pl",3],["izoliborz.pl",3],["kurierpodlaski.pl",3],["lipno-cli.pl",3],["nolesnica.pl",3],["ototorun.pl",3],["zycie.pila.pl",3],["rypin-cry.pl",3],["twojradom.pl",3],["wabrzezno-cwa.pl",3],["wio.waw.pl",3],["weszlo.com",4],["zalukaj.com",5],["zarabiam.com",6],["dvbtmap.eu",7],["ewybory.eu",8],["dobreprogramy.pl",[9,33]],["it-manuals.info",10],["powiatowa.info",11],["cartests.net",12],["eku24.net",13],["elblag.net",14],["lowcygier.pl",14],["ezg24.net",15],["24pr.pl",16],["portal.abczdrowie.pl",17],["alefunny.pl",18],["antyweb.pl",19],["auto-swiat.pl",20],["businessinsider.com.pl",20],["komputerswiat.pl",[20,48]],["noizz.pl",20],["onet.pl",[20,64]],["pclab.pl",[20,65]],["plejada.pl",20],["vod.pl",[20,89]],["benchmark.pl",21],["bezprawnik.pl",22],["booklips.pl",23],["cda.pl",[24,25]],["chillizet.pl",26],["chojnow.pl",27],["ciekawostkihistoryczne.pl",28],["www.4clubbers.com.pl",29],["euro.com.pl",30],["cryptonews.pl",31],["czasbajki.pl",32],["forum.dobreprogramy.pl",34],["www.dobreprogramy.pl",35],["dziwnekomiksy.pl",36],["ebay.pl",37],["f5.pl",38],["fpiec.pl",38],["filmweb.pl",39],["gosc.pl",40],["www.grymel.pl",41],["interia.pl",[42,43]],["pomponik.pl",43],["mamdziecko.interia.pl",44],["poczta.interia.pl",45],["www.interia.pl",46],["jeja.pl",47],["kresy.pl",49],["kurnik.pl",50],["lubimyczytac.pl",51],["meczyki.pl",52],["mgsm.pl",53],["milionkobiet.pl",54],["motobanda.pl",55],["motomi.pl",56],["national-geographic.pl",57],["ndie.pl",58],["nslowo.pl",59],["so-magazyn.pl",60],["film.wp.pl",60],["finanse.wp.pl",60],["gwiazdy.wp.pl",60],["kobieta.wp.pl",60],["ksiazki.wp.pl",60],["moto.wp.pl",60],["opinie.wp.pl",60],["sportowefakty.wp.pl",60],["tech.wp.pl",60],["teleshow.wp.pl",60],["wiadomosci.wp.pl",60],["poczta.o2.pl",62],["poczta.wp.pl",62],["ogrodinfo.pl",63],["petronews.pl",66],["pilkanozna.pl",67],["podkarpackahistoria.pl",68],["pogonsportnet.pl",69],["poradnikzdrowie.pl",70],["portel.pl",71],["gry-online.poszkole.pl",72],["prv.pl",73],["przegladpiaseczynski.pl",74],["www.ps4forum.pl",75],["purepc.pl",76],["radom24.pl",77],["repairlab.pl",78],["scypion.pl",79],["webcamera.pl",79],["se.pl",80],["senda.pl",81],["spidersweb.pl",82],["strabag-pfs.pl",83],["tabletowo.pl",84],["tekstowo.pl",85],["tko.pl",86],["tv-wschod.pl",87],["twojogrodek.pl",88],["waw4free.pl",88],["w-poblizu.pl",90],["wirtualnygarwolin.pl",91],["www.wp.pl",94],["wprost.pl",95],["wykop.pl",96],["ziemiadebicka.pl",97],["www.poloniainfo.se",98],["alltube.tv",99],["efilmy.tv",100]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["www.wp.pl",[1]],["spolka.cda.pl",[25]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
