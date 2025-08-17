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

function rand_number(n)
{
	var x;
	x=Math.round(Math.random()*100);
	x%=n;
	return x;
}

function gRubVisiblePath(rubID)
{
	if (rs[rubID].rubVisible==1) 
	{		
		return rs[rubID].getPath(); 
	}
	else 
	{
		return gRubVisiblePath(rs[rubID].rubParent);
	}
}

function loadNbReaction(idZone, idDoc)
{
	var XHR = new XHRConnection();		
	XHR.setRefreshArea('zoneCible'+idZone);
	XHR.sendAndLoad(getNbReaction(idDoc), "GET");
}

function addDocLinksToSpan(xml, spanID)
{
	var span = document.getElementById(spanID);				
	arts = xml.getElementsByTagName('article');
	for (i=0; i<arts.length;i++)
	{
		art = arts.item(i);
		var isFree = art.getAttribute('free');
		var titleArt = art.childNodes[0].firstChild.nodeValue;
		var url = art.childNodes[1].firstChild.nodeValue;
		var newLink = document.createElement('a'); 
		newLink.className = "texteRouge_tresPetitGras";
		span.appendChild(newLink); 
		var text = document.createTextNode(titleArt);
		newLink.appendChild(text);
		newLink.href=url;		
		text = document.createTextNode("\xA0");
		span.appendChild(text);
		if (isFree!="1")	
		{
			var img = document.createElement('img');		
			img.src= monLibeBlanc;
			span.appendChild(img); 	
			text = document.createTextNode("\xA0");
			span.appendChild(text);			
		}		
		var img = document.createElement('img');		
		img.src= redBullet;
		span.appendChild(img); 
		span.appendChild(document.createTextNode("\xA0"));
	}
}

function addDocLinksToSpanNoir(xml, spanID)
{
	var span = document.getElementById(spanID);				
	arts = xml.getElementsByTagName('article');
	for (i=0; i<arts.length;i++)
	{
		art = arts.item(i);
		var isFree = art.getAttribute('free');
		var titleArt = art.childNodes[0].firstChild.nodeValue;
		var url = art.childNodes[1].firstChild.nodeValue;
		var newLink = document.createElement('a'); 
		newLink.className = "texteNoir_petitGras";
		span.appendChild(newLink); 
		var text = document.createTextNode(titleArt);
		newLink.appendChild(text);
		newLink.href=url;		
		text = document.createTextNode("\xA0");
		span.appendChild(text);
		if (isFree!="1")	
		{
			var img = document.createElement('img');		
			img.src= monLibeBlanc;
			span.appendChild(img); 	
			text = document.createTextNode("\xA0");
			span.appendChild(text);			
		}		
		var img = document.createElement('img');		
		img.src= redBullet;
		span.appendChild(img); 
		span.appendChild(document.createTextNode("\xA0"));
	}
}


function _addDocLinkToList(art, lstArts)
{
	var isFree = art.getAttribute('free');
	var titleArt = art.childNodes[0].firstChild.nodeValue;
	var url = art.childNodes[1].firstChild.nodeValue;
	var newLi = document.createElement('li'); 
	lstArts.appendChild(newLi); 
	var newLink = document.createElement('a'); 
	newLi.appendChild(newLink); 

	//var newDiv = document.createElement('div'); 	
	var text = document.createTextNode(titleArt);
	newLink.appendChild(text);
	//newLink.appendChild(newDiv);
	newLink.href=url;
	if (isFree!="1")	
	{
		var text = document.createTextNode("\xA0");
		newLi.appendChild(text);
		var img = document.createElement('img');		
		img.src= monLibeGris;
		newLi.appendChild(img); 				
	}
}

function  addDocLinksToDoubleList(xml, listes) 
{
	var l1 = document.getElementById(listes[0]);
	var l2 = document.getElementById(listes[1]);
	var arts = xml.getElementsByTagName('article');
	for (i=0; i<arts.length;i++)
	{
		art = arts.item(i);
		if (i%2==0)
			_addDocLinkToList(art, l1);
		else
			_addDocLinkToList(art, l2);
	}
}

function  addDocLinksToList(xml, ulID) 
{
	var lstArts = document.getElementById(ulID);				
	arts = xml.getElementsByTagName('article');
	for (i=0; i<arts.length;i++)
	{
		art = arts.item(i);
		var docID = art.getAttribute('id');
		_addDocLinkToList(art, lstArts);
	}
}

function  addDocLinksToListWithoutCurrent(xml, ulID) 
{
	var lstArts = document.getElementById(ulID);				
	arts = xml.getElementsByTagName('article');
	if (arts.length>0){
		for (i=0; i<arts.length && i<MAX_LINKS;i++)
		{
			art = arts.item(i);
			var docID = art.getAttribute('id');
			if (docID!=curDocId)
			{
				_addDocLinkToList(art, lstArts);
			}
		}
	}else{
		
		var divLstArt = document.getElementById("div"+ulID);	
		divLstArt.style.display = 'none';
	}
}

function isToday(date)
{
	var today = new Date();
	return (today.getYear()==date.getYear() && today.getMonth()==date.getMonth() && today.getDate() == date.getDate());
}



function getHHMM(date)
{
	var h = date.getHours();
	var m = date.getMinutes();
	
	var res = "";
	if (h < 10) res += "0";
	res += h + ":";
	if (m < 10) res += "0";	
	res += m;		
	return res;
}



function loadNews(news, contentId)
{
	var newsContent = document.getElementById(contentId);
	var lstNews = news.getElementsByTagName('item');
	for (var i=0; i<lstNews.length; i++)
	{
		var titleNode = lstNews[i].getElementsByTagName("title")[0];
		var urlNode = lstNews[i].getElementsByTagName("link")[0];	
		var dateStrNode = lstNews[i].getElementsByTagName("pubDate")[0];
		if (   titleNode.childNodes.length > 0
			&& urlNode.childNodes.length > 0
			&& dateStrNode.childNodes.length > 0)
		{			
			var title = titleNode.childNodes[0].nodeValue;
			var url = urlNode.childNodes[0].nodeValue;	
			var dateStr = dateStrNode.childNodes[0].nodeValue;
			var dateNews = new Date(dateStr);
			/*if (isToday(dateNews))
			{*/
				var time = getHHMM(dateNews);
				var newsElt = document.createElement("div");
				newsElt.className = "interligneDepeches";
				var dateElt = document.createElement("span");
				dateElt.className = "texteRouge_petit";
				dateElt.appendChild(document.createTextNode(time));
				newsElt.appendChild(dateElt);	
				var titleElt = document.createElement("span");	
				titleElt.className = "texteNoir_petitGras";
				titleElt.appendChild(document.createTextNode(" "));
				
				var linkElt = document.createElement("a");
				linkElt.className = "texteNoir_petitGras";
				linkElt.href = url;
				linkElt.appendChild(document.createTextNode(title));
				titleElt.appendChild(linkElt);
				
				newsElt.appendChild(dateElt);	
				newsElt.appendChild(titleElt);
				newsContent.appendChild(newsElt);
			/*}*/
		}		
	}
}
function loadNewsAFP()
{
	var XHR = new XHRConnection();
	XHR.setXMLObject(XHR.createXMLObject());
	XHR.setOtherParameters("newsAFP");
	XHR.loadXML(getListeDepechesAFP(), _loadNewsAFP);
}

function _loadNewsAFP(news, contentId)
{
	var newsContent = document.getElementById(contentId);
	var lstNews = news.getElementsByTagName('depeche');

	for (var i=0; i<lstNews.length; i++)
	{
	
		var titleNode = lstNews[i].getElementsByTagName("content")[0];
		var dateStrNode = lstNews[i].getElementsByTagName("date")[0];
		var timeStrNode = lstNews[i].getElementsByTagName("time")[0];
		
		var fileStrNode = lstNews[i].getElementsByTagName("url")[0];

		var url = rObj.gHomeAFPUrl()+"/index.FR.php#"+fileStrNode.childNodes[0].nodeValue;
		
		var title = titleNode.childNodes[0].nodeValue;
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

			var newsElt = document.createElement("div");
			newsElt.className = "interligneDepeches";
			var dateElt = document.createElement("span");
			dateElt.className = "texteRouge_petit";
			dateElt.appendChild(document.createTextNode(hours+":"+minutes));
			newsElt.appendChild(dateElt);	

			var titleElt = document.createElement("span");	
			titleElt.className = "texteNoir_petitGras";
			titleElt.appendChild(document.createTextNode(" "));

			var linkElt = document.createElement("a");
			linkElt.className = "texteNoir_petitGras";
			linkElt.href = url;
			linkElt.appendChild(document.createTextNode(" "+title ));
			titleElt.appendChild(linkElt);
				
			newsElt.appendChild(dateElt);	
			newsElt.appendChild(titleElt);
			newsContent.appendChild(newsElt);
		}
	}	
}


function loadNewsREUTERS()
{
	var XHR = new XHRConnection();
	XHR.setXMLObject(XHR.createXMLObject());
	XHR.setOtherParameters("newsREUTERS");
	XHR.loadXML(rObj.gRssReutersUrl(), loadNews);
}

function include(fichier)
{
  try
  {
    SCRIPT = document.createElement("script");
    SCRIPT.type = "text/javascript";
    SCRIPT.src  = fichier;
    HEAD = document.getElementsByTagName("head");
    HEAD[0].appendChild(SCRIPT);
  }
  catch(e)
  {
    document.write('$lt;script type="text/javascript" src="' + fichier + '"><\/script>');
  }
}

function escapeDoubleQuotes( s ) 
{
	var str = String( s );
	return str.replace( /"/g, '&quot;' );
}



function loadMenu()
{
	var menu = document.getElementById("menu");
	var r = rObj.getObjRacine();
	var childs = r.rubChilds;
	/*alert(childs.length);*/
	if (childs.length>0)
	{
		var ul = document.createElement("ul");
		ul.className = "nav";
		/*ul.style.width = '100%';*/
		menu.appendChild(ul);
		/*addMenuItem(r, ul);*/
		for (var i=0; i<childs.length; i++)
		{
			var r = rObj.getObj(childs[i]);
			var li = addMenuItem(r, ul);
			if (li!=null) {
				if(self.document.location.href.indexOf("priceMinister")==-1)
				{
					loadSubMenu(r, li);
				}
				var newSpace = document.createElement('li'); 
				var newImg = document.createElement('img'); 
				newImg.src="/_looks/liberation/images/transp.gif";
				newImg.style.width="1px";
				newImg.style.height="1px";
				newSpace.appendChild(newImg);
				newSpace.id="intervalle";
				newSpace.name="intervalle";
				ul.appendChild(newSpace); 
			}
		}
		var newLi = document.createElement('li'); 
		
		ul.appendChild(newLi); 

	}

}

function addMenuItem(r,menu,path)
{
	var newLi = null;
	if (r.rubVisible=="1")
	{
		newLi = document.createElement('li'); 
		menu.appendChild(newLi); 
		var newLink = document.createElement('a'); 
		newLi.appendChild(newLink);
		newLink.appendChild(document.createTextNode(r.rubTitle));
		if (path !=null)
			newLink.href=path;
		else
			newLink.href=r.getAbsolutePath();
	}
	return newLi;
}

function loadSubMenu(r, menu)
{
	if(r.rubChilds.length>0)
	{
		var ul = document.createElement("ul");
		ul.className = "subnav";
		menu.appendChild(ul);
		for (var i=0; i<r.rubChilds.length; i++)
		{
			var sr = rObj.getObj(r.rubChilds[i]);
			addMenuItem(sr, ul);
		}
	}
}



function subon( targetId, typePage){
	if (document.getElementById){
  		target = document.getElementById( targetId );
  		target.className = "blocon"+typePage;
  	}
  //	alert(targetId+","+target.className);
}
		
function suboff( targetId , typePage){
	if (document.getElementById){
  		target = document.getElementById( targetId );
  		target.className = "blocoff"+typePage;
  		
  	}
  
}		
function picton( targetId ){
	if (document.getElementById){
  		target = document.getElementById( targetId );
  				target.className = "on";
  			
  	}
  	//alert(targetId+","+target.className);
 }
		
function pictoff( targetId ){
 	if (document.getElementById){
  		target = document.getElementById( targetId );
  		target.className = "off";
  	}
  		//alert(targetId+","+target.className);	
  }


//active l'onglet multim?dia pass? en param?tre.
// si le type de page est vide, active l'onglet pour les HP
// si le type vaut Doc, active l'onglet pour les Documents
function turnOnMultimedia(typeMultimedia, typePage, idDoc){

	var mediaTab=new Array;
	mediaTab["son"]="";
	mediaTab["video"]="";
	mediaTab["photo"]="";
	mediaTab["diapo"]="";


   	if (mediaTab[typeMultimedia]!=undefined){
		for (var i in mediaTab)
		{
			var divMultimedia="sub"+i;
			
			if (typePage!=undefined){
				divMultimedia+=typePage;
			}
			if (idDoc!=undefined){
				divMultimedia+=idDoc;
			}
			
			 if(i==typeMultimedia){
			 	subon(divMultimedia,  typePage);
			 	picton(i);
			 }else{
			 	suboff(divMultimedia,  typePage);
			 	pictoff(i);
			 }
		}
		//return false;
   	}
   	var target = document.getElementById(typeMultimedia);
	target.Height = target.offsetHeight;

}




						 		
sfHover = function() {
	var tmp = document.getElementById("menu");
    if (tmp == null) return;
	var sfEls = tmp.getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}

function pausecomp(millis)
{
	date = new Date();
	var curDate = null;
	do { var curDate = new Date(); }
	while(curDate-date < millis);
}


if (window.attachEvent) window.attachEvent("onload", sfHover); 

function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1])
   if ((version >= 5.5) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : ""
            var imgClass = (img.className) ? "class='" + img.className + "' " : ""
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
            var imgStyle = "display:inline-block;" + img.style.cssText 
            if (img.align == "left") imgStyle = "float:left;" + imgStyle
            if (img.align == "right") imgStyle = "float:right;" + imgStyle
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
} 	

function toggleDisplayPersonnalite(divName, image){
    toggleDisplay(divName + image);
    for (var i=1; i<10; i++) {  	
    	if ((image != i) && (document.getElementById(divName + i))) {
    		toggleHide(divName + i);
    	}
    }
}	
function toggleDisplayHide(zone1,zone2,zone3){
    toggleDisplay(zone1);
    toggleHide(zone2);
    toggleHide(zone3);
}
function toggleDisplayHide2zones(zone1,zone2){
    toggleDisplay(zone1);
    toggleHide(zone2);
}
function toggleDisplay(zone){
	var lyr = document.getElementById(zone);
	if(lyr.style.display=='none'){
		lyr.style.display='inline';
	}
}

function toggleHide(zone){
	var lyr = document.getElementById(zone);
	if(lyr.style.display=='inline'){
		lyr.style.display='none';
	}
}

function FloatTopDiv(idDiv, startX, startY)
{
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	var d = document;
	function ml(id)
	{
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x;this.style.top=y;};
		el.x = startX;
		//if (verticalpos=="fromtop")
		el.y = startY;
		/*else{
		el.y = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		el.y -= startY;
		}*/
		return el;
	}
	window.stayTopLeft=function()
	{
		//if (verticalpos=="fromtop"){
		var pY = ns ? pageYOffset : document.body.scrollTop;
		ftlObj.y += (pY + startY - ftlObj.y)/8;
		/*}
		else{
		var pY = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		ftlObj.y += (pY - startY - ftlObj.y)/8;
		}*/
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("stayTopLeft()", 10);
	}
	ftlObj = ml(idDiv);
	stayTopLeft();
}

function showHelp(mymsg,iWidth, iHeight) {
		var left = Math.floor( (screen.width - iWidth) / 2);
		var top = Math.floor( (screen.height - iHeight) / 2);
		popupWin = window.open('', 'popupWin', 'width=' + iWidth + ',height=' + iHeight + ',top=' + top + ',left=' + left);
		popupWin.document.write('<ht'+'ml><he'+'ad><sty'+'le>body { font-family: Verdana,Arial,Helvetica;color:#000000;text-align:normal;font-size:11px;}<\/sty'+'le><\/he'+'ad><bo'+'dy><br>' + mymsg + '<br><br><center><a href="javascript:window.close()">Ok<\/a><\/center><\/bo'+'dy><\/ht'+'ml>');
		popupWin.document.close();
}

function OpenChatLogin2(a) 
{
	var url_to_open
	//Creates a new window for the chat client, the parameters are sent via URL .
	url_to_open="https://web.archive.org/web/20061029070210/http://213.186.62.134/servlet/infolet.InfoServlet?page=infolet.PHLoadPage&chatlogin="+a+"&template=/invite/default_chat.html&domain=liberation";
	window.open(url_to_open,'chat','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=no,width=640,height=505');
}

function trim(string) 
{ 
	return string.replace(/(^\s*)|(\s*$)/g,''); 
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}



function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/******************************************************************/
/* Fonctions pour HP aussi utilis?es dans DOC colonne de droite   */
/******************************************************************/

/* Fonction qui affiche la liste des documents les plus comment?s */
function loadLinksDocCommentes(id)
{
	var XHR = new XHRConnection();
	XHR.setOtherParameters("loadLinksDocCommentes"+id);
	XHR.setXMLObject(XHR.createXMLObject());
	XHR.loadXML( getArticlesPlusCommentesURL(), addDocLinksToList);
}

/* Fonction qui affiche la liste des documents les plus envoy?s */
function loadLinksDocForwardes(id)
{
	var XHR = new XHRConnection();
	XHR.setOtherParameters("loadLinksDocForwardes"+id);
	XHR.setXMLObject(XHR.createXMLObject());	
	XHR.loadXML( getArticlesPlusForwardesURL(), addDocLinksToList);
}

/* Fonction qui d?termine la hauteur du scroll pour le module multimedia */
function getHPMediaScrollHeight(mediaId){
	var target = document.getElementById(mediaId);
	var targetDiv = document.getElementById('multimedia');
	if (targetDiv.offsetWidth < 330){
		target.style.width = "306px";
	}else{
		target.style.width = "336px";
	}
	var scrollMediaHeight = 165;
	if ((target.offsetHeight > 0) && (target.offsetHeight < scrollMediaHeight)){
		scrollMediaHeight=target.offsetHeight;
	}else{
		target.style.overflow="auto";
	}
	target.style.height = scrollMediaHeight+ "px";
	
}

/********************************************************************/
/* Fin Fonctions pour HP aussi utilis?es dans DOC colonne de droite */
/********************************************************************/


function getCookieVal(offset)
{
	var endstr=document.cookie.indexOf (";", offset);
	if (endstr==-1) 
		endstr=document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function readCookie(name)
{
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen)
	{
		var j=i+alen;
		if (document.cookie.substring(i, j)==arg) 
			return getCookieVal(j);
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) 
			break;	
	}
	return null;
}

function existCookie(name)
{
	return (readCookie(name)!=null)
}


}
/*
     FILE ARCHIVED ON 07:02:10 Oct 29, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:03:02 Jul 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.963
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.024
  esindex: 0.015
  cdx.remote: 428.667
  LoadShardBlock: 562.408 (3)
  PetaboxLoader3.resolve: 454.003 (3)
  PetaboxLoader3.datanode: 362.278 (4)
  load_resource: 359.377
*/