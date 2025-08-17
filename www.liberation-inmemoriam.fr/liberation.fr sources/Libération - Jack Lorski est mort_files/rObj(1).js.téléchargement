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


var rObj = function(rubID, title, parent, visible, css, link, path, childs)
{
	this.rubID = rubID;	
	this.rubTitle = title;
	this.rubParent = parent;
	this.rubVisible = visible;
	this.rubCss = css;
	this.isLink = link;
	this.rubPath = path;
	this.rubChilds = childs;
	this.props = new Array();
}
/* Methodes d'instance */
rObj.prototype.getPath = function () { if (this.rubID == rObj.racine) return ""; else if(this.isLink==1) return this.rubPath; else return rObj.getObj(this.rubParent).getPath()+"/"+ this.rubPath;} 
rObj.prototype.getAbsolutePath = function () { if (this.rubID == rObj.racine) return getURLLibeFree()+"/"; else if(this.isLink==1) return this.rubPath; else return getURLLibeFree()+rObj.getObj(this.rubParent).getPath()+"/"+ this.rubPath+"/";} 
rObj.prototype.render = function (level, withLink) { 	
	var res = "";
	if (withLink) { res += '<a href="'+this.getPath()+'/" class="rub'+level+'Hp">';}		
	if (this.props["image"]== null || this.props["image"]=='') { res +='<div class="rub'+level+'Hp">'+this.rubTitle+'</div>';} 
	else { res += '<div class="'+this.props["image"]+' niveau'+level+'"><span class="no">'+this.rubTitle+'</span></div>';}
	if (withLink) { res += '</a>';}
	return res;
}


/* Methodes static */
rObj.rs = new Array();
rObj.gRubVisiblePath = function (rubID){if (rObj.rs[rubID].rubVisible==1) return rObj.rs[rubID].rubPath; else return rObj.gRubVisiblePath(rObj.rs[rubID].rubParent);}
rObj.gRubVisibleObj = function (rubID){if (rObj.rs[rubID].rubVisible==1) return rObj.rs[rubID]; else return rObj.gRubVisibleObj(rObj.rs[rubID].rubParent);}
rObj.addObj = function (rubID, title, parent, visible, css, link, path, childs) {rObj.rs[rubID] = new rObj(rubID, title, parent, visible, css, link, path, childs);}
rObj.getObj = function (rubID) {return rObj.rs[rubID];}
rObj.getObjProp = function (rubID,name) {return rObj.rs[rubID].props[name];}
rObj.setObjProp = function (rubID,name,value) {rObj.rs[rubID].props[name] = value;}
rObj.getFirstObjProp = function (rubID,name) { var r = rObj.getObj(rubID); var p = r.props[name]; if (rubID == rObj.racine || (p!=null && p.length >0)) return p; else return rObj.getFirstObjProp(r.rubParent,name);}
rObj.gUrlFromDir = function (dir) {for (rubID in rObj.rs) {if(rObj.rs[rubID].rubPath==dir) return rObj.rs[rubID].getPath(); } return null;};
rObj.gIDFromDir = function (dir) {for (rubID in rObj.rs) {if(rObj.rs[rubID].rubPath==dir) return rubID; } return null;};
rObj.gHomeAFPUrl = function () { return rObj.gUrlFromDir("afp"); };
rObj.gRssReutersUrl = function () { return rObj.gUrlFromDir("rss_reuters"); };
rObj.gPubBasse = function (rubID,typePage) {return rObj.getFirstObjProp(rubID,"bdBas"+typePage);}
rObj.gPubHaute = function (rubID,typePage) {return rObj.getFirstObjProp(rubID,"bdHaut"+typePage);}
rObj.gPubDroite = function (rubID,typePage) {return rObj.getFirstObjProp(rubID,"bdDroit"+typePage);}
rObj.gPubGratteCiel = function (rubID,typePage) {return rObj.getFirstObjProp(rubID,"bdGratteCiel"+typePage);}
rObj.gPubPopup = function (rubID,typePage) {return rObj.getFirstObjProp(rubID,"pubPopup"+typePage);}
rObj.getObjRacine = function() {return rObj.getObj(rObj.racine);}
rObj.render = function(rubID, level, withLink) {document.write(rObj.gRubVisibleObj(rubID).render(level, withLink));}
rObj.renderStr = function(rubID, level, withLink) {return rObj.gRubVisibleObj(rubID).render(level, withLink);}



function goToArchives() {
	var path = rObj.gUrlFromDir("archives"); 
	if (path!=null) 
		self.document.location = path;
}

function goToReuters() {
	var path = rObj.gUrlFromDir("reuters"); 
	if (path!=null) 
		self.document.location = path;
}

function goToAFP() {
	var path = rObj.gUrlFromDir("afp"); 
	if (path!=null) 
		self.document.location = path;
}


function goToRub(id) {
	var path = rObj.getObj(id).getPath();
	if (path!=null) 
		self.document.location = path;
}



}
/*
     FILE ARCHIVED ON 20:40:30 Oct 31, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:02:59 Jul 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.742
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 19.695
  LoadShardBlock: 366.5 (3)
  PetaboxLoader3.datanode: 247.698 (4)
  PetaboxLoader3.resolve: 364.771 (2)
  load_resource: 341.061
*/