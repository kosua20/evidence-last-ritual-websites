var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function banner()
{
	var img = new Array();
	img[0]='<a target="_blank" href="https://web.archive.org/web/20061031204050/http://liberation.1001reves.com"><img width="109" height="87" src="https://web.archive.org/web/20061031204050/http://www.liberation.fr/img/pub/pub_style.gif"/></a>';
	//img[0]='<a target="_blank" href="https://web.archive.org/web/20061031204050/http://rencontres.liberation.fr/?source=100x100xjuillet2006"><img width="109" height="87" src="https://web.archive.org/web/20061031204050/http://www.liberation.fr/img/pub/pub_rencontre.gif"/></a>';
	//img[1]='<a target="_blank" href="https://web.archive.org/web/20061031204050/http://www.liberation.fr/bd/index.php?origine=libe&pp=1"><img width="109" height="87" src="https://web.archive.org/web/20061031204050/http://www.liberation.fr/img/pub/pub_bd.gif"/></a>';
	var n=rand_number(img.length); 
	document.write(img[n]);
}

var sas_masterflag = 1;
var sas_tmstp=Math.round(Math.random()*10000000000);

function SmartAdServer(sas_pageid,sas_formatid,sas_target) {
 if (sas_masterflag==1) {sas_masterflag=0;sas_master='M';} else {sas_master='S';};
 document.write('<SCR'+'IPT SRC="https://web.archive.org/web/20061031204050/http://www.smartadserver.com/call/pubj/' + sas_pageid + '/' + sas_formatid + '/'+sas_master + '/' + sas_tmstp + '/' + escape(sas_target) + '?"></SCR'+'IPT>');
}

function SmartAdServer_iframe(sas_pageid,sas_formatid,sas_target,sas_w,sas_h) {
 if (sas_masterflag==1) {sas_masterflag=0;sas_master='M';} else {sas_master='S';};
 document.write('<IFRAME SRC="https://web.archive.org/web/20061031204050/http://www.smartadserver.com/call/pubif/' + sas_pageid + '/' + sas_formatid + '/'+sas_master + '/' + sas_tmstp + '/' + escape(sas_target) + '?" width=' + sas_w + ' height=' + sas_h + ' marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no>');
 document.write('<scr'+'ipt language=Javascr'+'ipt>\ndocument.write\(\'<SCR\'+\'IPT SRC="https://web.archive.org/web/20061031204050/http://www.smartadserver.com/call/pubj/' + sas_pageid + '/' + sas_formatid + '/'+sas_master + '/' + sas_tmstp + '/' + escape(sas_target) + '?"></SCR\'+\'IPT>\'\)\;\n</scr'+'ipt>');
 document.write('</IFRAME>');
}


if(navigator.userAgent.toLowerCase().indexOf("aol")==-1){sas_target_value='aolien=0';} else {sas_target_value='aolien=1';};

/*
function loadDocPub(context)
{
	if (context==null || context.length==0)
	{
		context = "liberation_fr_defaut";
	}
	var url = "https://web.archive.org/web/20061031204050/http://cmhtml.fr.overture.com/d/search/p/standard/eu/js/ctxt/rlb/?mkt=fr&adultFilter=clean&maxCount=3&Partner=liberation_js_fr_ctxt_articles&outputCharEnc=UTF-8&accountFilters=liberation_fr&urlFilters=liberation_fr&termFilters=liberation_fr&ctxtId=" + context + "&cb=" + (new Date()).getTime();
	include(url);
}

function loadSearchPub(mot)
{
	var url = "https://web.archive.org/web/20061031204050/http://xml.fr.overture.com/d/search/p/standard/eu/js/rlb/?mkt=fr&adultFilter=clean&maxCount=3&Partner=liberation_js_fr_searchbox_interne&outputCharEnc=utf8&accountFilters=liberation_fr&Keywords="+mot+"&cb=" + (new Date()).getTime(); 
	include(url);
}


function writeDocPub()
{
	loadDocPub(rObj.getObjProp(curRubId,"pubContext"));
	if( zSr != null ) 
	{
		var k;
		for( k=6; zSr.length > k; k += 6 ) 
		{
			document.write('<p><a href="'+zSr[k+2]+'" target="_blank" class="texteNoir_petitGras" title="'+escapeDoubleQuotes(zSr[k] + ' - ' + zSr[k+4])+'">'+zSr[k+3]+'</a><br/>' );
			document.write('<a href="'+zSr[k+2]+'" target="_blank" class="texteRouge_petit" title="'+escapeDoubleQuotes(zSr[k] + ' - ' + zSr[k+4])+'">' + zSr[k+4] + '</a><br/>');
			document.write('<a href="'+zSr[k+2]+'" target="_blank" class="texte_petit" title="'+escapeDoubleQuotes(zSr[k] + ' - ' + zSr[k+4])+'">' + zSr[k] + '</a></p>' );
		}
	}
}


function loadHPPub(context)
{
	if (context==null || context.length==0)
	{
		context = "liberation_fr_defaut";
	}
	var url = "https://web.archive.org/web/20061031204050/http://cmhtml.fr.overture.com/d/search/p/standard/eu/js/flat/ctxt/ls/?ctxtId=" + context + "&NGrp=4&NKw=3&Pg=1&Partner=liberation_js_fr_ctxtls_libe&keywordCharEnc=UTF-8&outputCharEnc=UTF-8";
	include(url);
}


function writeHPPub()
{
	loadHPPub(rObj.getObjProp(curRubId,"pubContext"));
	for (var i=0; i<mapkey.length; i++) 
	{
		var keywords= mapkey[i].keywords.split(", ");
		document.write("<div style=\"padding-top: 4px;\" class=\"texteNoir_gras\">"+mapkey[i].title+"</div>");
		document.write("<ul  class=\"noire_inline\">");
		for (var j=0; j<keywords.length; j++) 
		{
			//ici on met l?url de la page de r?sultat pr?te ? prendre le keyword
			url = getHotSpotURL(escape(keywords[j]));
		    document.write("<li>&nbsp;<a href=\""+url+"\" class=\"texteNoir_petit\">"+keywords[j]+"</a>&nbsp;&nbsp</li>");
		}
		document.write("</ul>");
	}
}
*/


function getMediaScrollHeight(mediaId){
	var target = document.getElementById(mediaId);
	var scrollMediaHeight = 135;
	if ((target.offsetHeight > 0) && (target.offsetHeight < scrollMediaHeight)){
		scrollMediaHeight=target.offsetHeight;
	}else{
		target.style.overflow="auto";
	}
	target.style.height = scrollMediaHeight+ "px";
}

}
/*
     FILE ARCHIVED ON 20:40:50 Oct 31, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:03:00 Jul 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.956
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.028
  esindex: 0.016
  cdx.remote: 25.915
  LoadShardBlock: 352.688 (3)
  PetaboxLoader3.resolve: 238.014 (3)
  PetaboxLoader3.datanode: 161.462 (4)
  load_resource: 77.534
*/