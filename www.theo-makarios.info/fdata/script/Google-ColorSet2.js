// Copyright 2004-2005 Google Inc. All Rights Reserved.

/* focus field flag for onclick event handling */
var ff_och = false;
var default_logo = "images/logo.gif";

/* set to ignore the onclick event */
function ff_oc_ignore() {
  ff_och = true;
}

/* focus field helper for onclick event cleanup */
function ff_ce() {
  ff_och = false;
}

/* focus field helper for onclick events */
function ff_oc(f) {
  if (ff_och == true) {
    return;
  }
  ff_och = true;
  ff(f);
}

/* focus field */
function ff(f) {
  var v = document.forms.fieldForm.elements;
  var e = v.field;
  for (var i = 0; i < e.length; i++) {
    if (e[i].value == f) {
      e[i].checked = true;
      v[f].focus();
      break;
    }
  }
}

/* set field helper for keydown events */
function sf_ok(f, v) {
  if (window.event) {
    if (event.keyCode == 13) {
      sf_oc(f, v); // simulate onchange
      event.cancelBubble = true;
    }
  }
}

/* set field helper for onchange events */
function sf_oc(f, v) {
  sf(f, v);
}

/* set field valid value */
var sf_vv = /#[0-9A-F][0-9A-F][0-9A-F][0-9A-F][0-9A-F][0-9A-F]/i;

/* set field value */
function sf(f, v) {
  if (!sf_vv.test(v)) {
    return;
  }

  if(f == "visitedUrl") {
    document.forms.fieldForm.elements[f].value = v;
    return;
  } else if(f == "ccode") {
    document.getElementById(f).value=v;
    return;
  } else if (f == "border") {
    cs(f, v, true);
  }

  var s = document.getElementById(f).style;
  if ((f == "bg") || (f == "border") || (f == 'logoBg')) {
    s.backgroundColor = v;
  } else {
    s.color = v;
  }
  document.forms.fieldForm.elements[f].value = v;
  if ((f == "border") && (document.getElementById("bordertext"))) {
    document.getElementById("bordertext").style.color =
      "#" + getTextHex(toColor(v.substring(1)));
  }
  p_colors[f]=v;
}

/* Change the style color/backgroundColor for element with id f and all other 
   elements that use the same class.  Currently invoked only for elements using 
   class border. If bgFlag==true, change backgroungColor, otherwise change
   color */
function cs(f, v, bgFlag) {
  var c = document.getElementById(f).className;
  var allPageTags=document.getElementsByTagName("*");
  for (var i = 0; i < allPageTags.length; i++) {
    if (allPageTags[i].className == c) {
      if (bgFlag == true) {
        allPageTags[i].style.backgroundColor = v;
      } else {
        allPageTags[i].style.color = v;
      }
    }
  }
}

/* get field value */
function gf() {
  var e = document.forms.fieldForm.elements.field;
  if(e != undefined) {
    for (var i = 0; i < e.length; i++) {
      if (e[i].checked) {
        return e[i].value;
      }
    }
  }
  
  /* we need this so this function becomes reusable
   * with ChooseColor.gxp
   */
  var r = document.forms.fieldForm.elements;
  for (var i = 0; i < r.length; i++) {
     return r[i].id;
  }
}

/* color comparator */
function equals(c1, c2) {
  return (toHex(c1.border) == toHex(c2.border)) &&
    (toHex(c1.bg) == toHex(c2.bg)) &&
    (toHex(c1.link) == toHex(c2.link)) &&
    (toHex(c1.text) == toHex(c2.text)) &&
    (toHex(c1.url) == toHex(c2.url));
}

/* search color comparator */
function s_equals(c1, c2) {
  return (toHex(c1.border) == toHex(c2.border)) &&
    (toHex(c1.bg) == toHex(c2.bg)) &&
    (toHex(c1.link) == toHex(c2.link)) &&
    (toHex(c1.text) == toHex(c2.text)) &&
    (toHex(c1.faintText) == toHex(c2.faintText)) &&
    (toHex(c1.logoBg) == toHex(c2.logoBg)) &&
    (toHex(c1.visitedUrl) == toHex(c2.visitedUrl)) &&
    (toHex(c1.url) == toHex(c2.url));
}

/* ad colors form onsubmit handler */
function f_s(e) {
  var c1 = gc();
  var c2 = google_colors[document.getElementById('menu').selectedIndex];
  if (gn() == "" && equals(c1, c2)) {
    document.forms.fieldForm.elements.action.value = "cancel";
  } else {
    document.forms.fieldForm.elements.action.value = e.name;
  }
  document.forms.fieldForm.submit();
}

/* search styles form onsubmit handler */
function sf_s(e) {
  var c1 = gc();
  var c2 = google_colors[document.getElementById('menu').selectedIndex];
  var logo = logos[document.getElementById('menu').selectedIndex];
  // handle delete
  if (e.name == "delete") {
    document.forms.fieldForm.elements.action.value = "delete";
  } else if (e.name == "cancel") {
    document.forms.fieldForm.elements.action.value = "cancel";
  } else {
    document.forms.fieldForm.elements.action.value = e.name;
  }
  document.forms.fieldForm.submit();
}

/* set name */
function sn(n) {
  //document.forms.fieldForm.elements.save.value = n;
}

/* get name */
function gn() {
  return document.forms.fieldForm.elements.save.value;
}

/* set color helper for onchange events */
function sc_oc(o) {
  if (o) {
    sc(gc());
  } else {
    var e = document.getElementById('menu');
    sc(google_colors[e.selectedIndex]);
    // logos is defined only for search styles
    if (logos != undefined) {
      slf(logos[e.selectedIndex]);
    }
  }
}

/* set the destination site url */
function gotoSite() {
  window.open(adjUrl(document.forms.fieldForm.logoDestUrl.value),
"destination");
}

/* prefex the url with http:// if it doesn't have the scheme already */
function adjUrl(u) {
  str = String(u);
  if (str.substr(0,4) != "http") {
    u = "http://" + u;
  }
  return u;
}

/* set logo image in Example */
function cl() {
  u = document.forms.fieldForm.logoUrl.value;
  if (u == "") {
    document.topLogoImage.src = default_logo;
    document.leftLogoImage.src = default_logo;
  } else {
    setLogoProperties(u, document.forms.fieldForm.logoWidth.value, 
		      document.forms.fieldForm.logoHeight.value);
  }
}

/* set logo fields */
function slf(d) {

  // if logo placement is not defined, use 0 which is the default
  // 1 means that the logo will be placed on the left
  var lp = (d != undefined) ? d["logoPlacement"] : 0 ;

  var leftPlacement = (lp == 1);		
  document.getElementById('logoPlacement.top').checked = !leftPlacement;  		
  document.getElementById('logoPlacement.left').checked = leftPlacement;
  toggleLogoPlacement(!leftPlacement);

  if (d != undefined) {
    document.forms.fieldForm.logoUrl.value = d["logoUrl"];
    document.forms.fieldForm.logoDestUrl.value = d["logoDestUrl"];

    document.forms.fieldForm.logoHeight.value = d["logoHeight"];
    document.forms.fieldForm.logoWidth.value = d["logoWidth"];

    if (d["logoUrl"] != "") {
      setLogoProperties(d["logoUrl"], d["logoWidth"], d["logoHeight"]);
    } else {
      document.topLogoImage.src = default_logo;
      document.leftLogoImage.src = default_logo;
    }
  }
}

/* set color */
function sc(d) {
  for (var f in d) {
    if (typeof d[f] != "object") {
      continue;
    }
    sf(f, "#" + toHex(d[f]));
  }
  sn(d.custom ? d.name : "");
}

/* get color */
function gc() {
  var c = {};
  var f = document.forms.fieldForm;
  var e = f.field;
  for (var i = 0; i < e.length; i++) {
    var n = e[i].value;
    var v = f[n].value;
    if (sf_vv.test(v)) {
      c[n] = toColor(v.substring(1));
    }
  }
  c.name = gn();
  return c;
}

/* write swatch */
function ws(c, s, z) {
  var v = "#" + toHex(c);
  document.write(
    "<td style='font-size:1px;' onclick=\"sf_oc(gf(),'" + v +
    "')\" title=\"" + v + "\" " + ((s == 1) ? "" : ("colspan=\"" + s +
    "\" ")) + "bgcolor=\"" + v + "\" onmouseover=\"status='" + v +
    "'\" " + "onmouseout=\"status=''\"><div class=\"" + z + "\"></div></td>");
}

/* write palette table */
function wt() {
  for(var r = 255; r >= 0; r -= 51) {
    document.write("<tr>");
    for(var g = 255; g >= 0; g -= 51) {
      for(var b = 255; b >= 0; b -= 51) {
        ws([r, g, b], 1, "swatch");
      }
    }
    document.write("</tr>");
  }
  document.write("<tr>");
  for(var l = 255; l >= 0; l -= 51) {
    ws([l, l, l], 6, "swatch2");
  }
  document.write("</tr>");
}

/* toggle the top and left logos visible and invisible depending on the selected logoPlacement */
function toggleLogoPlacement(visibleTop) {
  document.getElementById('topLogoDiv').style.display = visibleTop ? "block" : "none";	
  document.getElementById('leftLogoDiv').style.display = visibleTop ? "none" : "block";	
  document.getElementById("hrBorder").style.visibility = visibleTop ? "visible" : "hidden";
}

function setLogoProperties(logoSrc, logoWidth, logoHeight) {
  document.topLogoImage.src = adjUrl(logoSrc);
  document.topLogoImage.width = logoWidth;
  document.topLogoImage.height = logoHeight;

  document.leftLogoImage.src = adjUrl(logoSrc);
  document.leftLogoImage.width = logoWidth;
  document.leftLogoImage.height = logoHeight;
}

