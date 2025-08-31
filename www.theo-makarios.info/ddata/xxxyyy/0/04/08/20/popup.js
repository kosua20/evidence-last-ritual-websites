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

function PopupImage(img,larg,haut) { 

w=open("",'image','width="+larg+",height="+haut+",toolbar=no,scrollbars=no,resizable=no'); 
w.document.write("<HTML><HEAD><TITLE>Agrandissement</TITLE></HEAD>"); 
w.document.write("<SCRIPT language=javascript>function checksize() { if (document.images[0].complete) { window.resizeTo(document.images[0].width+10,document.images[0].height+30); window.focus();} else { setTimeout('checksize()',250) } }</"+"SCRIPT>"); 
w.document.write("<BODY onload='checksize()' onblur='window.close()' onclick='window.close()' leftMargin=0 topMargin=0 marginwidth=0 marginheight=0>");
w.document.write("<TABLE width='100%' border='0' cellspacing='0' cellpadding='0' height='100%'><TR>");
w.document.write("<TD valign='middle' align='center'><IMG src='"+img+"' border=0 alt=''>"); 
w.document.write("</TD></TR></TABLE>");
w.document.write("</BODY></HTML>"); 
w.document.close(); 
}

}
/*
     FILE ARCHIVED ON 16:39:09 Feb 20, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:04:22 Aug 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.534
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 35.526
  LoadShardBlock: 173.044 (3)
  PetaboxLoader3.datanode: 195.426 (4)
  load_resource: 91.834
  PetaboxLoader3.resolve: 44.701
*/