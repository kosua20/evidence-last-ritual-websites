function toColor(h) {
  return [ parseInt(h.substring(0, 2), 16),
           parseInt(h.substring(2, 4), 16),
           parseInt(h.substring(4, 6), 16) ];
}

function toHex(c) {
  var r, g, b;
  r = c[0].toString(16);
  if (c[0] < 0x10) {
    r = "0" + r;
  }
  g = c[1].toString(16);
  if (c[1] < 0x10) {
    g = "0" + g;
  }
  b = c[2].toString(16);
  if (c[2] < 0x10) {
    b = "0" + b;
  }
  return (r + g + b).toUpperCase();
}

function toSource(d, f) {
  var s = "[";
  var same = true;
  var prev = null;
  var curr;
  for (var i = 0; i < d.length; i++) {
    curr = toHex(d[i][f]);
    if (prev == null) {
      prev = curr;
    }
    if (same && (prev != curr)) {
      same = false;
    }
    s += "\"" + curr + "\",";
  }
  if (same) {
    return "\"" + curr + "\"";
  }
  return s.substring(0, s.length - 1) + "]";
}

function getTextHex(c) {
  return ((0.3*c[0] + 0.59*c[1] + 0.11*c[2]) <= 128) ? "FFFFFF" : "000000";
}

function getCode(p, f, a, alt_url_color, ch, ak, at, fr) {
  var s = "<"+"script type=\"text/javascript\"><!--\n";
  s += "google_ad_client = \"" + p + "\";\n";

  if (alt_url_color.length > 0 && alt_url_color.charAt(0) != '#') {
    s += "google_alternate_ad_url = \"" + alt_url_color + "\";\n";
  } else if (alt_url_color.length > 0) {
    s += "google_alternate_color = \"" + alt_url_color.substring(1) + "\";\n";
  }
  
  var w = f.substring(0, f.indexOf("x"));
  var h = f.substring(f.indexOf("x") + 1);
  s += "google_ad_width = " + w + ";\n";
  s += "google_ad_height = " + h + ";\n";

  if (ak == "ads") {
    s += "google_ad_format = \"" + f + "_as\";\n";
    if (at == 'text') {
      s += "google_ad_type = \"text\";\n";
    } else if (at == 'image') {
      s += "google_ad_type = \"image\";\n";
    } else /*if (at == 'all')*/ {
      s += "google_ad_type = \"text_image\";\n";
    }    
  } else {
    s += "google_ad_format = \"" 
         + f 
         + "_0ads_al" 
         + ((at == 5) ? "_s" : "") 
         + "\";\n";
  }

  if (ch == '-1') {
    ch = "";
  }
  s += "google_ad_channel =\"" + ch + "\";\n";

  if(fr == 'y') {
    s += "google_page_url = document.location;\n";
  }

  if (a && (a.length > 0)) {
    for (var i in a[0]) {
      if (typeof a[0][i] != "object") {
        continue;
      }
      s += "google_color_" + i + " = " + toSource(a, i) + ";\n";
    }
  }
  s += "//--></"+"script>\n<"+"script type=\"text/javascript\"\n";
  s += "  src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\">\n";
  s += "</"+"script>";
  return s;
}

/* write color menu */
function wm(c) {
  var b = false;
  var l = false;
  for(var i = 0; i < google_colors.length; i++) {
    if (google_colors[i].custom) {
      l = true;
      break;
    }
  }
  if (l && !c) {
    //document.write("<optgroup label='Custom'>");
  }
  for(var i = 0; i < google_colors.length; i++) {
    if (!google_colors[i].custom) {
      if (c) {
        continue;
      } else if (l && !b) {
        //document.write("</optgroup><optgroup label='Built-in'>");
        b = true;
      }
    }
    document.write("<option>"+google_colors[i].name+"</option>");
  }
  if (l && !c) {
    //document.write("</optgroup>");
  }
}

