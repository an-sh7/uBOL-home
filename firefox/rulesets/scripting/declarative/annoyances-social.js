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

// ruleset: annoyances-social

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".toolbar_facebook + div.toolbar_spacing\",\"action\":[\"style\",\"opacity: 0 !important;\"]}","{\"selector\":\".toolbar_facebook\",\"action\":[\"style\",\"opacity: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".uhead_share\",\"action\":[\"style\",\"visibility: collapse!important;\"]}"],["{\"selector\":\".share\",\"action\":[\"style\",\"opacity: 0 !important; pointer-events: none !important;\"]}"],["{\"selector\":\".onp-sl-content\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#under-embed > .shoring > li\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".postrow > span.facebooklikepage + div[style^=\\\"border-bottom:1px solid #aaa;padding-top:10px;\\\"]\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}"],["{\"selector\":\".SocialTools > ul\",\"action\":[\"style\",\"background: #FFF !important;\"]}"],["{\"selector\":\".row > .col-xs-3 > .btn[ng-click^=\\\"shareOn\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#js-sign-in-box[style=\\\"display: block;\\\"] ~ .modal-backdrop\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible !important; padding-right: 0 !important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:visible!important;\"]}"],["{\"selector\":\".news-item__share\",\"action\":[\"style\",\"height: 30px!important;\"]}"],["{\"selector\":\".SocialMediaShareButton\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"#social-bar\",\"action\":[\"style\",\"min-height: 10px !important;\"]}"],["{\"selector\":\"#view_info_layer div.size\",\"action\":[\"style\",\"right: 120px !important;\"]}"],["{\"selector\":\"html > body.jconfirm-noscroll\",\"action\":[\"style\",\"overflow:visible!important;\"]}"],["{\"selector\":\".articla_acc\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\".article-body .tweet_quote > a\",\"action\":[\"style\",\"cursor: auto !important; background-color: transparent !important; color: #000 !important;\"]}"],["{\"selector\":\".header-social-shares\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#download > .steps > #step-claim\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".leftsocial > .toiwidgets_social > span:not(.comment-slider)\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"body.social-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".shareSocialArticle-wrap\",\"action\":[\"style\",\"visibility: hidden;\"]}"],["{\"selector\":\".page-share\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".utility > .share-tool + .tools\",\"action\":[\"style\",\"margin-top: 0px !important; padding-top: 0px !important; border-top: none !important;\"]}"],["{\"selector\":\".social-nav\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".b-socials__container\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\".SnsBtn\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px !important; width: 1px !important;\"]}"],["{\"selector\":\".topsns > .ico\",\"action\":[\"style\",\"margin-left: calc(100% - 76px) !important;\"]}"],["{\"selector\":\".share_buttons\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".social-tools\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".onp-locker-call\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".simplebtn\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".social-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".share-btns\",\"action\":[\"style\",\"left: -4000px !important;\"]}"],["{\"selector\":\"div[class][data-locker-id]\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#article .function .area .size\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"body[style=\\\"padding-right: 17px;\\\"]\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}","{\"selector\":\"html.uk-modal-page\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".c-social-buttons\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"html.mobile .post > div[class=\\\"entry\\\"]\",\"action\":[\"style\",\"padding-top: 10px!important;\"]}"],["{\"selector\":\".mts-cl-overlap-mode > .mts-cl-blur-area\",\"action\":[\"style\",\"filter: none!important;\"]}"],["{\"selector\":\".article-share\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".body.modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#nativendo-article\",\"action\":[\"style\",\"opacity: 1!important;\"]}"],["{\"selector\":\".btn-shares\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"html.sgpb-disable-page-scrolling\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\"#share-menu-btn\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".article_view .article_header .article-header-btns .btn-font-sizing\",\"action\":[\"style\",\"right: 5px !important;\"]}"],["{\"selector\":\".socialbar\",\"action\":[\"style\",\"visibility:hidden!important;\"]}"],["{\"selector\":\".item-content__content\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".e3_refresh_button\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".TsocBar-button\",\"action\":[\"style\",\"float:none!important;\"]}"],["{\"selector\":\".single-article-actions\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#social_share\",\"action\":[\"style\",\"height: 250px!important;\"]}"],["{\"selector\":\".blurry\",\"action\":[\"style\",\"filter: none !important;\"]}"],["{\"selector\":\".horizontal-sns-bar\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#related-post\",\"action\":[\"style\",\"margin-top: 30px !important;\"]}"],["{\"selector\":\"div[class^=\\\"sns-share-\\\"] > a[onclick^=\\\"socialAct\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".meta-wrap > .sns\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".main_column > div#facebook_wrap\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\".main_column > div#twitter_wrap\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".view-prev-btn\",\"action\":[\"style\",\"margin-right: 0px !important;\"]}"],["{\"selector\":\"li.sBtn_reply\",\"action\":[\"style\",\"float: initial!important; display: inline-block!important;\"]}"],["{\"selector\":\".viewHead > .optionIcon\",\"action\":[\"style\",\"width: 93px !important;\"]}"],["{\"selector\":\"body > div[class]:empty\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body > div[class]:empty + div[class]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#floatingSns\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".wrap_share\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\".social-likes\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".share\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"html.pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".onp-sl-content > [data-lock-id^=\\\"onpLock\\\"]\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".social-buttons\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"div[class][data-locker-id]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".onet_ustPlugin_addthis > .box1\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".onet_ustPlugin_addthis > .box2\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"html.dc-modal-is-locked > body.dc-layout--modal-active[style=\\\"padding-right: 17px;\\\"]\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}"],["{\"selector\":\"body.desktop .article-contact-footer > .article-contact-first::after\",\"action\":[\"style\",\"content: \\\"Podziel się tym artykułem:\\\"!important; position: absolute!important; background: #ebebeb!important; color: #ebebeb!important;\"]}"],["{\"selector\":\".podzielSieZeZnajomymi > #divLikeMaly ~ *\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".podzielSieZeZnajomymi > .podzielSieIkony > .fbLikeBox ~ *\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".wiadomoscSocial > #divLikeMaly ~ *\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".wiadomoscSocialBig > .fbLikeBox ~ *\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"html > body.scrollingDisabled\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".b-post__social_holder_wrapper\",\"action\":[\"style\",\"height: 50px!important;\"]}"],["{\"selector\":\".social-sharing\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".c-share\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".socialite\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".like_blockRight\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"#root\",\"action\":[\"style\",\"filter: none!important;\"]}","{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"div.panel-share-networks\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".nd-article-tag__wrapper\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important; margin-right: 0 !important;\"]}"],["{\"selector\":\"#social-wrapper\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body > div\",\"action\":[\"style\",\"filter: none !important;\"]}"],["{\"selector\":\"div[class^=\\\"social-sharer_\\\"]:not([data-scroll=\\\"comment-block\\\"])\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"]];

const hostnamesMap = new Map([["123moviesgo.ac",1],["2kmovie.cc",1],["ev01.cc",1],["flixhd.cc",1],["zoechip.cc",1],["1movieshd.com",1],["divicast.com",1],["freemoviesfull.com",1],["ummagurau.com",1],["zoechip.com",1],["bflix.gg",1],["putlocker.gy",1],["fmovies.hn",1],["animesuge.io",1],["yesmovies.mn",1],["primewire.mx",1],["123moviestv.net",1],["6movies.net",1],["cineb.net",1],["movie4kto.net",1],["musichq.net",1],["showboxmovies.net",1],["solarmovie.pe",1],["123moviesto.pw",1],["cineb.rs",1],["myflixerhd.ru",1],["dopebox.se",1],["sflix.se",1],["tinyzonetv.se",1],["ev01.sx",1],["gomovies.sx",1],["himovies.sx",1],["dopebox.to",1],["ev01.to",1],["f2movies.to",1],["fmoviesz.to",1],["moviesjoyhd.to",1],["myflixer.to",1],["myflixertv.to",1],["myflixerz.to",1],["sflix.to",1],["tinyzonetv.to",1],["123movieshd.top",1],["pressplay.top",1],["attacker.tv",1],["movies2watch.tv",1],["moviestowatch.tv",1],["theflixer.tv",1],["123-movies.vc",1],["seriestv.watch",1],["fmovies.app",2],["indirimdemarket.com",2],["thegreatdaily.com",2],["hardreset.info",2],["forum.autoua.net",2],["turboserial.net",2],["1track.ru",2],["mt.360tv.ru",2],["catalogmineralov.ru",2],["dooralei.ru",2],["newkaliningrad.ru",2],["rusvesna.su",2],["galka.if.ua",2],["pravda.if.ua",2],["dynamo.kiev.ua",2],["okino.ua",2],["lvnews.org.ua",2],["tenews.org.ua",2],["omgubuntu.co.uk",2],["meming.world",2],["protect-link.biz",3],["easypdf.com",3],["smaker.pl",[3,87,88]],["pornreactor.cc",4],["reactor.cc",4],["letemps.ch",5],["activationkeys.co",6],["androidride.com",6],["boxcracked.com",6],["c4crack.com",6],["chserialkey.com",6],["ckfile.com",6],["crack4us.com",6],["cracksmod.com",6],["cracxsoftwares.com",6],["creativefabrica.com",6],["downloadmockup.com",6],["f4freesoftware.com",6],["freeappstorepc.com",6],["fullpcsoftz.com",6],["idmcrackpatch.com",6],["latestcracked.com",6],["pcwarezbox.com",6],["profullcrack.com",6],["psdfreebies.com",[6,39]],["realhax.com",6],["sajidpc.com",6],["serialkeypro.com",6],["shehrozpc.com",6],["soft7star.com",6],["activationkey.net",6],["designervn.net",6],["hackstore.net",6],["hentairon.net",6],["softwarespro.net",6],["warezcrack.net",[6,79]],["activatorproductkey.org",6],["megawarez.org",6],["procrackerz.org",6],["workingkeys.org",6],["agrimpasa.com",7],["autonaminuty.org",7],["bizua.org",7],["alohatube.com",8],["androidiani.com",9],["ardahanhaberi.com",10],["artstation.com",11],["bankbazaar.com",12],["bomb01.com",13],["bostonglobe.com",14],["calciomercato.com",15],["dailywire.com",16],["datpiff.com",17],["donga.com",18],["esenyurthaberleri.com",19],["etnews.com",20],["focusme.com",21],["forbes.com",22],["foreignpolicy.com",23],["fxhome.com",24],["gadgetsnow.com",25],["gagadget.com",26],["gamesradar.com",27],["gmanetwork.com",28],["hankyung.com",29],["us.hola.com",30],["ixbt.com",31],["jagongoding.com",32],["siberkalem.com",32],["jiji.com",33],["kartal24.com",34],["namobilu.com",35],["m.newspim.com",36],["onlinemschool.com",37],["politico.com",38],["ringside24.com",40],["rocketnews24.com",41],["solidsoftwaretools.com",42],["m.starnewskorea.com",43],["superiorwallpapers.com",44],["theverge.com",45],["tokyohive.com",46],["trickswire.com",47],["tuasaude.com",48],["twgreatdaily.com",49],["virtualnights.com",50],["westkentuckystar.com",51],["wrestling-online.com",52],["yaya0506.com",53],["zinggadget.com",54],["m.news.zum.com",55],["bildderfrau.de",56],["freundin.de",57],["playnation.de",58],["t-online.de",59],["thelocal.fr",60],["hkust.edu.hk",61],["noklapja.hu",62],["bunshun.jp",63],["magazine.aruhi-corp.co.jp",64],["oricon.co.jp",65],["getnavi.jp",66],["city.tochigi.lg.jp",67],["samsungsvc.co.kr",68],["m.tf.co.kr",69],["thebell.co.kr",70],["firstonetv.live",[71,72]],["firstonetv.net",71],["123moviestv.me",73],["gendai.media",74],["m.media.daum.net",75],["m.sports.media.daum.net",75],["liga.net",76],["marianne.net",77],["ukrhealth.net",78],["fd.nl",80],["3dmodelshare.org",81],["3dzip.org",81],["cgtips.org",81],["auto-swiat.pl",82],["deccoria.pl",83],["fakt.pl",84],["rynek-kolejowy.pl",85],["rynek-lotniczy.pl",86],["rynekinfrastruktury.pl",86],["transport-publiczny.pl",86],["times.zt.ua",87],["hdrezka.re",89],["cosmo.ru",90],["drive2.ru",91],["hi-blog.ru",92],["top-radio.ru",93],["tourister.ru",94],["vgorodekirove.ru",95],["simplywall.st",96],["kodiak.top",97],["bim.com.tr",98],["posta.com.tr",99],["spigen.com.tr",100],["einthusan.tv",101],["4mama.ua",102],["xsport.ua",103]]);

const entitiesMap = new Map([["alldebrid",0],["fmovies",1],["fmoviesto",1],["hdtoday",1],["moviesjoy",1],["soap2day",1],["swatchseries",1]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
