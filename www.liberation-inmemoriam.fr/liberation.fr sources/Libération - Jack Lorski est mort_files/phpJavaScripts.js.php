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


var redBullet = "/_looks/liberation/images/red_bullet.gif";
var monLibeGris = "/_looks/liberation/images/mon_libe_ede9e6.gif";
var monLibeBlanc = "/_looks/liberation/images/mon_libe_FFFFFF.gif";

function getPATH_SCRIPT()
{
	return "/_looks/liberation/scripts/";
}
function getCssPATH(){
	return "/_looks/liberation/css/liberation.css";
}
function getDocTitlesURL()
{
	return "/php/AjaxRequest/getDocTitles.php";
}
function getPopupUrl()
{
	return "/php/popup.php";
}
function getDocsFromAuthorURL()
{
	return "/php/AjaxRequest/getDocsSameAuthor.php";
}
function getDocsFromThemeURL()
{
	return "/php/AjaxRequest/getDocsSameTheme.php";
}
function getDocsInFolderURL()
{
	return "/php/AjaxRequest/getDocsInFolder.php";
}

function getArticlesPlusCommentesURL()
{
	return "/php/AjaxRequest/getArticlesPlusCommentes.php";
}

function getArticlesPlusForwardesURL()
{
	return "/php/AjaxRequest/getArticlesPlusForwardes.php";
}

function getSendToFriendURL(){
	return "/php/sendToFriend.php";
}

function getWriteToAuthorURL(){
	return "/php/writeToAuthor.php";
}

function getSendReactionURL(){
	return "/php/sendReaction.php";
}

function getAFPURL(nomFichier){
	return "/afp//"+nomFichier;
}

function getURLLibeFree(){
	return "https://web.archive.org/web/20061031204301/http://www.liberation.fr";
}

function getHotSpotURL(keywords){
	var fullDate = new Date();
	var year=fullDate.getFullYear();
    var month=fullDate.getMonth()+1;
    month= (month > 9) ? month: '0'+month;
    var date=fullDate.getDate();
	var hour= (fullDate.getHours() > 9) ? fullDate.getHours(): '0'+fullDate.getHours();
	var min= (fullDate.getMinutes() > 9) ? fullDate.getMinutes() : '0'+fullDate.getMinutes();
	var dizaineMin = String(min).substring(0,1);
	return "/php/pages/pageHotspot.php?Keywords="+keywords+"&date="+year+month+date+hour+dizaineMin;
}

function getListeDepechesAFP(format){
	//return "/php/AjaxRequest/getListeDepechesAFP.php?format="+format;
	return "/php/AjaxRequest/tunnelListeDepechesAFP.php?format="+format;
}

function getNbReaction(idDoc){
	return "/php/AjaxRequest/getNbReaction.php?id="+idDoc;
}

function validRecherche() {
	if (self.document.searchFormHeader.recherche.value=='') {
			alert("Vous n'avez pas saisi de recherche"); 
	} else {
		if(self.document.searchFormHeader.select.selectedIndex == "0")
		{
			//self.document.searchFormHeader.recherche.value = self.document.searchFormHeader.recherche.value.replace(' ','+');
		}
		self.document.searchFormHeader.submit();
	}
}
function validRechercheArchives() {
	if (self.document.searchArchives.recherche.value=='') {
			alert("Vous n'avez pas saisi de recherche"); 
	} else {
		self.document.searchArchives.submit();
	}
}

	


}
/*
     FILE ARCHIVED ON 20:43:01 Oct 31, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:02:59 Jul 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.725
  exclusion.robots: 0.042
  exclusion.robots.policy: 0.026
  esindex: 0.011
  cdx.remote: 21.178
  LoadShardBlock: 358.649 (3)
  PetaboxLoader3.resolve: 305.935 (3)
  PetaboxLoader3.datanode: 142.74 (4)
  load_resource: 111.895
*/