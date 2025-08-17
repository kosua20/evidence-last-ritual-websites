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



function loadMediaHp(idRub, urlMediaDoc)
{
	var XHR = new XHRConnection();	
	XHR.setOtherParameters(idRub);	
	XHR.setRefreshArea('loadMediaVideo');
	XHR.sendAndLoad(urlMediaDoc, "GET", loadRubTitle);		
}
function loadRubTitle(xml, idRub)
{
	var div = document.getElementById("_rubTitle");
	div.innerHTML = rObj.renderStr(idRub,"1",false);
}

function loadNewsAFPHP()
{
	var XHR = new XHRConnection();
	XHR.setXMLObject(XHR.createXMLObject());
	XHR.setOtherParameters("depechesAFP");
	XHR.loadXML(getListeDepechesAFP('long'), _loadNewsAFPHP);
}

function _loadNewsAFPHP(news, contentId)
{
	var newsContent = document.getElementById(contentId);
	var lstNews = news.getElementsByTagName('depeche');

	for (var i=0; i<lstNews.length; i++)
	{
	
		var titleNode = lstNews[i].getElementsByTagName("content")[0];
		var corpusNode = lstNews[i].getElementsByTagName("corpus")[0];
		var dateStrNode = lstNews[i].getElementsByTagName("date")[0];
		var timeStrNode = lstNews[i].getElementsByTagName("time")[0];
		
		var fileStrNode = lstNews[i].getElementsByTagName("url")[0];

		var url = fileStrNode.childNodes[0].nodeValue;
		
		var title = titleNode.childNodes[0].nodeValue;
		var corpus = corpusNode.childNodes[0].nodeValue;
		var time = timeStrNode.childNodes[0].nodeValue;
		var dateStr = dateStrNode.childNodes[0].nodeValue;
		var tmpDate = dateStr.split("/");
		var year = tmpDate[0];
		var month = tmpDate[1];
		var day = tmpDate[2];
		var tmpTime = time.split(":");
		var hours = tmpTime[0];
		var minutes = tmpTime[1];

		var dateNews = new Date(Date.UTC(year, month-1, day, hours, minutes, "00"));
		hours = dateNews.getHours() > 9 ? dateNews.getHours(): '0'+dateNews.getHours();
		minutes = dateNews.getMinutes() > 9 ? dateNews.getMinutes(): '0'+dateNews.getMinutes();
		
		if ( title.length > 0 )
		{						
			var baliseA = document.createElement("a");
			baliseA.name = url;
			
			var titleElt = document.createElement("div");
			titleElt.className = "texteNoir_grosTitre";
			titleElt.appendChild(document.createTextNode(title));
			
			var corpusElt = document.createElement("div");
			corpusElt.className = "texte";
			corpusElt.width = "400";
			corpusElt.appendChild(document.createTextNode(corpus));
			
			var dateElt = document.createElement("div");
			dateElt.className = "texteGris_petit_bottom_10";
			dateElt.appendChild(document.createTextNode(date_FR(dateNews,'noTime')+" "+hours+":"+minutes));
			
			newsContent.appendChild(baliseA);
			newsContent.appendChild(titleElt);
			newsContent.appendChild(corpusElt);
			newsContent.appendChild(dateElt);
		}
	}	
}

/* 	
		Retourne une date avec nom du jour et mois en fran?ais
		le param?tre theDate est une date ? l'anglaise 2006/01/02 11:22:15
		Si le param?tre theDate est vide alors on retourne la date du jour
		Si le param?tre formatDate est vide alors on retourne la date du jour + heure
		Si le param?tre formatDate = 'noTime' alors on retourne la date du jour seule
	 */
	function date_FR(theDate, formatDate)
	{
		if (formatDate == null){
			formatDate='time';
		}
		var dateFR=theDate;
		if (theDate!=''){
			var fullDate = new Date(theDate);
		} else {
 			var fullDate = new Date();
		}
		var days=new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
		var months=new Array("janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre");
		var d=fullDate.getDate();
		if(d==1)
		{
			d=d+"er";
		}
		var y=fullDate.getFullYear();
		var dName=fullDate.getDay();
		var mName=fullDate.getMonth();
		var h= (fullDate.getHours() > 9) ? fullDate.getHours(): '0'+fullDate.getHours();
		var min= (fullDate.getMinutes() > 9) ? fullDate.getMinutes() : '0'+fullDate.getMinutes();
		
		try
		{
			dateFR = days[dName] + " " + d + " " + months[mName] + " " + y ;
			if (formatDate == 'time'){
					dateFR += " - " + h + ":" + min;
			}
		}
		catch(err)
		{
 
		} 
		return dateFR;
	}

function convertUTC(year, month, day, hours, minutes)	{
	var dateNews = new Date(Date.UTC(year, month-1, day, hours, minutes, "00"));
	hours = dateNews.getHours() > 9 ? dateNews.getHours(): '0'+dateNews.getHours();
	minutes = dateNews.getMinutes() > 9 ? dateNews.getMinutes(): '0'+dateNews.getMinutes();
	document.write( hours + ":" + minutes);
}





}
/*
     FILE ARCHIVED ON 12:50:15 Oct 25, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:03:15 Jul 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.877
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 163.348
  LoadShardBlock: 85.908 (3)
  PetaboxLoader3.datanode: 114.115 (4)
  load_resource: 239.284
  PetaboxLoader3.resolve: 131.362
*/